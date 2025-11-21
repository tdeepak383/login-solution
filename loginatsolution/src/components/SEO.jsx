import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { seoData } from "../seoConfig";

export default function AutoSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = seoData[pathname];

    if (seo?.title) document.title = seo.title;

    if (seo?.description) {
      let meta = document.querySelector("meta[name='description']");
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = seo.description;
    }
  }, [pathname]);

  return null;
}
