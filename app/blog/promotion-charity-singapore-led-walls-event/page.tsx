import { redirect } from "next/navigation";

/** Old blog URL → promotions (preserves existing links) */
export default function CharityBlogRedirect() {
  redirect("/promotions/promotion-charity-singapore-led-walls-event/");
}
