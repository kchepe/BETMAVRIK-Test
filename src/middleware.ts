import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ja"],

  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(ja|en)/:path*"],
};
