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
            { label: "预编辑区", slug: "guides/skins/preedit" },
            { label: "工具栏区", slug: "guides/skins/toolbar" },
            { label: "按键区", slug: "guides/skins/keysarea" },
            { label: "样式", slug: "guides/skins/styles" },
            { label: "集合视图", slug: "guides/skins/collection" },
            { label: "按键动作", slug: "guides/skins/action" },
            { label: "事件通知", slug: "guides/skins/notifications" },
            { label: "按键动画", slug: "guides/skins/animation" },
            { label: "配置参数", slug: "guides/skins/parameters" },
            { label: "仓皮肤迁移", slug: "guides/skins/upgrade" },
          ],
        },
        {
          label: "中文九键",
          slug: "guides/chinese-ninekey-configuration",
        },
        {
          label: "常见问题",
          items: [
            {
              label: "系统键盘列表中找不到元书输入法",
              slug: "guides/faqs/keyboard-not-in-system-list",
            },
            {
              label: "如何将键盘文件复制到应用目录",
              slug: "guides/faqs/how-to-copy-keyboard-files",
            },
            {
              label: "如何将 iCloud 云盘中的方案文件复制到应用目录",
              slug: "guides/faqs/how-to-copy-from-icloud",
            },
            {
              label: "如何快速将仓迁移到元书中使用",
              slug: "guides/faqs/how-to-migrate-from-hamster",
            },
            {
              label: "如何通过 iCloud 同步 RIME 自造词",
              slug: "guides/faqs/rime-user-words-sync",
            },
            {
              label: "元书与仓有什么区别",
              slug: "guides/faqs/what-is-the-difference-between-yuanshu-and-hamster",
            },
            {
              label: "如何导入输入方案",
              slug: "guides/faqs/how-to-import-input-schemes",
            },
            {
              label: "修改应用中的方案文件后不生效怎么办",
              slug: "guides/faqs/modification-to-scheme-files-not-take-effect",
            },
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
