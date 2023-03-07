import { useRouteError, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const { t } = useTranslation();

  return (
    <div id="error-page">
      <h1>{t("error-page.oops")}</h1>
      <p>{t("error-page.title")}</p>
      <Link to="/">{t("error-page.go-home")}</Link>

      <p>{t("error-page.details")}</p>
      <p>
        <i>{(error as any)?.statusText || (error as any)?.message}</i>
      </p>
    </div>
  );
}
