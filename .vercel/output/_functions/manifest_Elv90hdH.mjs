import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_s_qG7lfK.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Clx142dI.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/cal/Documents/dev/dylan_portfolio/","cacheDir":"file:///Users/cal/Documents/dev/dylan_portfolio/node_modules/.astro/","outDir":"file:///Users/cal/Documents/dev/dylan_portfolio/dist/","srcDir":"file:///Users/cal/Documents/dev/dylan_portfolio/src/","publicDir":"file:///Users/cal/Documents/dev/dylan_portfolio/public/","buildClientDir":"file:///Users/cal/Documents/dev/dylan_portfolio/dist/client/","buildServerDir":"file:///Users/cal/Documents/dev/dylan_portfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"shorts/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/shorts","isIndex":false,"type":"page","pattern":"^\\/shorts\\/?$","segments":[[{"content":"shorts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/shorts.astro","pathname":"/shorts","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"work/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/work","isIndex":false,"type":"page","pattern":"^\\/work\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work.astro","pathname":"/work","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"site":"https://dylanquinn.example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/cal/Documents/dev/dylan_portfolio/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/Users/cal/Documents/dev/dylan_portfolio/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/cal/Documents/dev/dylan_portfolio/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/cal/Documents/dev/dylan_portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/cal/Documents/dev/dylan_portfolio/src/pages/shorts.astro",{"propagation":"none","containsHead":true}],["/Users/cal/Documents/dev/dylan_portfolio/src/pages/work.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/shorts@_@astro":"pages/shorts.astro.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astro-page:src/pages/work@_@astro":"pages/work.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Elv90hdH.mjs","/Users/cal/Documents/dev/dylan_portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D8GBjHEO.mjs","@astrojs/react/client.js":"_astro/client.Br6D0eoL.js","/Users/cal/Documents/dev/dylan_portfolio/src/pages/shorts.astro?astro&type=script&index=0&lang.ts":"_astro/shorts.astro_astro_type_script_index_0_lang.Dm2k0qEf.js","/Users/cal/Documents/dev/dylan_portfolio/src/components/HeroShowcase.astro?astro&type=script&index=0&lang.ts":"_astro/HeroShowcase.astro_astro_type_script_index_0_lang.DqFgVQ4d.js","/Users/cal/Documents/dev/dylan_portfolio/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.DbN95BOs.js","/Users/cal/Documents/dev/dylan_portfolio/node_modules/sanity/lib/_chunks-es/VideoPlayer.mjs":"_astro/VideoPlayer.BCoQv3s5.js","/Users/cal/Documents/dev/dylan_portfolio/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.C4XCvare.js","/Users/cal/Documents/dev/dylan_portfolio/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.BGAeJYNo.js","/Users/cal/Documents/dev/dylan_portfolio/node_modules/sanity/lib/_chunks-es/resources5.mjs":"_astro/resources5.BvLlEWTw.js","/Users/cal/Documents/dev/dylan_portfolio/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.-dE1O7ex.js","/Users/cal/Documents/dev/dylan_portfolio/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.C-QuNmpy.js","/Users/cal/Documents/dev/dylan_portfolio/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.WlGIK2OG.js","/Users/cal/Documents/dev/dylan_portfolio/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.CyH0ftcQ.js","/Users/cal/Documents/dev/dylan_portfolio/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.BCkzLheL.js","/Users/cal/Documents/dev/dylan_portfolio/node_modules/@sanity/vision/lib/_chunks-es/resources.mjs":"_astro/resources.TvLzloAD.js","/Users/cal/Documents/dev/dylan_portfolio/node_modules/@sanity/vision/lib/_chunks-es/SanityVision.mjs":"_astro/SanityVision.DIJ04qkK.js","/Users/cal/Documents/dev/dylan_portfolio/node_modules/sanity/lib/_chunks-es/resources6.mjs":"_astro/resources6.DOdPxcRx.js","/Users/cal/Documents/dev/dylan_portfolio/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.DlZuqzjC.js","/Users/cal/Documents/dev/dylan_portfolio/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.CynbtvSU.js","/Users/cal/Documents/dev/dylan_portfolio/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.CezJK_dn.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/cal/Documents/dev/dylan_portfolio/src/pages/shorts.astro?astro&type=script&index=0&lang.ts","let l=!1,d=!1;function c(n,r){if(document.getElementById(r))return;const t=document.createElement(\"script\");t.src=n,t.async=!0,t.id=r,document.body.appendChild(t)}function u(){if(l){window.instgrm?.Embeds?.process?.();return}l=!0,c(\"https://www.instagram.com/embed.js\",\"ig-embed-script\")}function m(){d||(d=!0,c(\"https://www.tiktok.com/embed.js\",\"tt-embed-script\"))}function p(n){try{const t=new URL(n).pathname.split(\"/\").filter(Boolean),a=t.indexOf(\"video\");if(a>=0&&t[a+1])return t[a+1]}catch{return null}return null}function b(n){const r=n.dataset.platform,t=n.dataset.url??\"\",a=n.dataset.youtube??\"\",s=n.querySelector(\"[data-media]\");if(!s)return;n.classList.add(\"is-playing\");const i=document.createElement(\"div\");if(i.className=\"short-card__embed\",r===\"youtube\"){if(!a){window.open(t,\"_blank\",\"noopener,noreferrer\"),n.classList.remove(\"is-playing\");return}const e=document.createElement(\"iframe\");e.src=`https://www.youtube-nocookie.com/embed/${a}?autoplay=1&rel=0`,e.allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\",e.setAttribute(\"allowfullscreen\",\"\"),e.referrerPolicy=\"strict-origin-when-cross-origin\",e.title=\"YouTube Short\",i.appendChild(e),s.appendChild(i);return}if(r===\"instagram\"){const e=document.createElement(\"blockquote\");e.className=\"instagram-media\",e.setAttribute(\"data-instgrm-captioned\",\"\"),e.setAttribute(\"data-instgrm-permalink\",t),e.setAttribute(\"data-instgrm-version\",\"14\"),e.style.background=\"#000\",e.style.margin=\"0\",e.style.padding=\"0\",e.style.minWidth=\"100%\",i.appendChild(e),s.appendChild(i),u();return}if(r===\"tiktok\"){const e=p(t);if(!e){window.open(t,\"_blank\",\"noopener,noreferrer\"),n.classList.remove(\"is-playing\");return}const o=document.createElement(\"blockquote\");o.className=\"tiktok-embed\",o.setAttribute(\"cite\",t),o.setAttribute(\"data-video-id\",e),o.style.maxWidth=\"100%\",o.style.minWidth=\"100%\",o.style.margin=\"0\",i.appendChild(o),s.appendChild(i),m();return}}document.querySelectorAll(\"[data-short]\").forEach(n=>{n.querySelector(\"[data-play]\")?.addEventListener(\"click\",t=>{t.preventDefault(),b(n)})});"],["/Users/cal/Documents/dev/dylan_portfolio/src/components/HeroShowcase.astro?astro&type=script&index=0&lang.ts","const c=document.querySelector(\"[data-hero]\");if(c){const i=c.querySelectorAll(\".hero-slide\"),u=c.querySelectorAll(\".hero-card\"),n=c.querySelectorAll(\".hero-dot\"),d=c.querySelector(\"[data-current]\"),o=i.length;if(o>1){let e=0;const s=l=>{e=(l+o)%o,i.forEach((t,r)=>t.classList.toggle(\"is-active\",r===e)),u.forEach((t,r)=>t.classList.toggle(\"is-active\",r===e)),n.forEach((t,r)=>t.classList.toggle(\"is-active\",r===e)),d&&(d.textContent=String(e+1).padStart(2,\"0\"))};let a=window.setInterval(()=>s(e+1),6e3);const h=()=>{window.clearInterval(a),a=window.setInterval(()=>s(e+1),6e3)};n.forEach((l,t)=>l.addEventListener(\"click\",()=>{s(t),h()})),window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches&&window.clearInterval(a)}}"]],"assets":["/_astro/shorts.BWfP7-pC.css","/_astro/index.DxQLkiP8.css","/favicon.svg","/_astro/SanityVision.DIJ04qkK.js","/_astro/VideoPlayer.BCoQv3s5.js","/_astro/ViteDevServerStopped.C-QuNmpy.js","/_astro/browser.jW1LD7gS.js","/_astro/client.Br6D0eoL.js","/_astro/client.NcbZbjRX.js","/_astro/index.DlZuqzjC.js","/_astro/index2.CynbtvSU.js","/_astro/index3.BCkzLheL.js","/_astro/refractor.CyH0ftcQ.js","/_astro/resources.BGAeJYNo.js","/_astro/resources.TvLzloAD.js","/_astro/resources2.DbN95BOs.js","/_astro/resources3.-dE1O7ex.js","/_astro/resources4.C4XCvare.js","/_astro/resources5.BvLlEWTw.js","/_astro/resources6.DOdPxcRx.js","/_astro/stegaEncodeSourceMap.WlGIK2OG.js","/_astro/studio-component.CGlklgOb.js","/_astro/studio-component.CezJK_dn.js","/about/index.html","/contact/index.html","/shorts/index.html","/work/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"baNu9B2lp72eIBZK/axGe74Xw37P4OMi4zzEx2UU7AQ="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
