import { ReactElement, useEffect, useState } from "react";
import { useMobile } from "./hooks/useMobile";

type Props = {
  mobileComponent: ReactElement;
  desktopComponent: ReactElement;
};

export default function Import(props: Props) {
  const { mobileComponent, desktopComponent } = props;

  const { isMobile } = useMobile();

  const [component, setComponent] = useState<ReactElement | null>(null);

  useEffect(() => {
    setComponent(isMobile ? mobileComponent : desktopComponent);
  }, [mobileComponent, desktopComponent, isMobile]);

  return component ?? null;
}
