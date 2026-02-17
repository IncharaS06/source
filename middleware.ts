import createMiddleware from "next-intl/middleware";
import {NextRequest} from "next/server";

const locales = ["en", "kn", "hi"] as const;
const defaultLocale = "en";

export default function middleware(req: NextRequest) {
  // next-intl will:
  // - redirect "/" -> "/en" (defaultLocale)
  // - keep "/en/*", "/kn/*", "/hi/*" as-is
  // - optionally detect locale from headers (if localePrefix = "as-needed"/etc)
  return createMiddleware({
    locales: [...locales],
    defaultLocale,
    localePrefix: "always" // keeps your current behavior: always /en, /kn, /hi
  })(req);
}

export const config = {
  // Exclude: api, _next, static files like .png, .ico, etc
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
