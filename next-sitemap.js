const siteUrl = "https://drama-nex.vercel.app";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  additionalSitemaps: [
    `${siteUrl}/sitemap.xml`,
    `${siteUrl}/posts-sitemap.xml`,
    `${siteUrl}/actor-sitemap.xml`,
    `${siteUrl}/director-sitemap.xml`,
    `${siteUrl}/music-sitemap.xml`,
    `${siteUrl}/originalwork-sitemap.xml`,
    `${siteUrl}/scriptwriter-sitemap.xml`,
  ],
};
