import { get } from "svelte/store";
import { IncomingPart } from "../config/partStore";
import { appConfig, bodySelector, footerSelector, headerSelector } from "../config/settings";
import hash from "quick-hash";

function fetchAndReplace(href: string, cb?: ()=> void) {
    fetch(href).then(res=> {
        res.text().then(text=> {
            //Parse response text
            const resultTxt = text.match(/<body>([\s\S]*)<\/body>/i)?.[0]?.replace(/<\/?body>/ig, "");
            const wrapper = document.createElement("div");
            wrapper.innerHTML = resultTxt || "";

            //Get header content
            let headerContent = "";
            let headerQuery = wrapper.querySelector(get(appConfig).header.selector);
            headerContent = headerQuery?.innerHTML || "";

            //Get body content
            let bodyContent = resultTxt || "";    //Initialize -- may change
            let bodyQuery = wrapper.querySelector(get(appConfig).body.selector);
            bodyContent = bodyQuery?.innerHTML || "";

            //Update store
            IncomingPart.update(ip=> {
                //Header
                ip[headerSelector] = {
                    content: headerContent,
                    hash: hash(headerContent)
                };

                //Body
                ip[bodySelector] = {
                    content: bodyContent,
                    hash: hash(bodyContent)
                };

                //Footer
                ip[footerSelector] = {
                    content: "",
                    hash: hash(bodyContent)
                };

                return ip;
            });

            //Run callback
            if(cb) cb();
        });
    });
}

function onNavigate(e: Event, href: string) {
    e.preventDefault();
    fetchAndReplace(href, ()=> {
        //Update URL
        history.pushState({ href }, "", href);
    });
}

export function handlePopState() {
    window.addEventListener("popstate", (e)=> {
        fetchAndReplace(e.state.href);
    });
}

export function initializeRoute() {
    const href = location.href;
    fetchAndReplace(href, ()=> {
        //Get initial url and fetch / render
        history.replaceState({ href }, "", href);
    });
}

export function interceptLinks() {
    //Get any navigation elements
    const navLinks = document.querySelectorAll("a[href]") as NodeListOf<HTMLElement>;

    //Get each href and add listener
    for(let link of navLinks) {
        const href = link.getAttribute("href");
        if(!href) continue;

        //Route if external, otherwise fetch and use SPA
        if(!/https?:\/\//.test(href)) {
            const newLink = link.cloneNode(true);
            link.parentNode?.replaceChild(newLink, link);
            newLink.addEventListener("click", (e) => onNavigate(e, href || "/"));
        }
    }
}