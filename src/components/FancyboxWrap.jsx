import { useEffect, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function FancyboxWrap(props) {
  const delegate = props.delegate || "[data-fancybox]";

  useEffect(() => {
    const opts = props.options || {};
    Fancybox.bind(delegate, opts);

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return <>{props.children}</>;
}

export default FancyboxWrap;