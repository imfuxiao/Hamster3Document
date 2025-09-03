// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://ihsiao.com",
  base: "/apps/hamster/v3/docs/",
  integrations: [
    starlight({
      title: "元书输入法",
      social: [
        // {
        //   icon: "github",
        //   label: "GitHub",
        //   href: "https://github.com/withastro/starlight",
        // },
      ],
      sidebar: [
        {
          label: "简介",
          slug: "guides/intro",
        },
        {
          label: "键盘皮肤",
          items: [
            { label: "键盘布局", slug: "guides/skins/layout" },
            { label: "按键样式", slug: "guides/skins/styles" },
            { label: "事件通知", slug: "guides/skins/notifications" },
            { label: "按键动画", slug: "guides/skins/animation" },
            { label: "配置参数", slug: "guides/skins/parameters" },
            { label: "仓皮肤迁移", slug: "guides/skins/upgrade" },
          ],
        },
        {
          label: "更新日志",
          slug: "logs",
        },
      ],
    }),
  ],
});
