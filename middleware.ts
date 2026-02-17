import createMiddleware from "next-intl/middleware";
import type {NextRequest} from "next/server";

const locales = ["en", "kn", "hi"] as const;
const defaultLocale = "en";

export default function middleware(req: NextRequest) {
  return createMiddleware({
    locales: [...locales],
    defaultLocale,
    localePrefix: "always",
  })(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
