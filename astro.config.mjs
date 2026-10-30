// @ts-check
import starlight from "@astrojs/starlight";
import mermaid from "astro-mermaid";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://ihsiao.com",
  base: "/apps/hamster/v3/docs/",
  integrations: [
    mermaid({
      autoTheme: true,
      enableLog: false,
    }),
    starlight({
      title: "元书输入法",
      favicon: "/favicon.svg",
      lastUpdated: true,
      editLink: {
        baseUrl: "https://github.com/imfuxiao/Hamster3Document/edit/main/",
      },
      customCss: ["./src/styles/custom.css"],
      head: [
        {
          tag: "meta",
          attrs: { property: "og:title", content: "元书输入法" },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:description",
            content: "基于 RIME 输入法引擎的 iOS 键盘输入法",
          },
        },
        {
          tag: "meta",
          attrs: { property: "og:type", content: "website" },
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/imfuxiao/Hamster",
        },
      ],
      sidebar: [
        {
          label: "简介",
          slug: "guides/intro",
        },
        {
          label: "元书劝退指南",
          slug: "guides/do-not-use-hamster",
        },
        {
          label: "开启元书键盘",
          slug: "guides/enable-keyboard",
        },
        // 应用设置指南：需要在侧栏展示时，取消下面整段的注释。
        /*
        {
          label: "应用设置指南",
          items: [
            { label: "从问题找设置", slug: "guides/settings/overview" },
            { label: "键盘、候选栏与预编辑", slug: "guides/settings/keyboard" },
            { label: "输入行为与符号", slug: "guides/settings/input-behavior" },
            { label: "按键音与震动", slug: "guides/settings/sound-haptics" },
            { label: "皮肤与字体", slug: "guides/settings/skins-fonts" },
            { label: "工具栏、菜单与符号栏", slug: "guides/settings/toolbar-menu" },
            { label: "剪贴板与验证码", slug: "guides/settings/clipboard" },
            { label: "输入方案与 RIME", slug: "guides/settings/rime" },
            { label: "文件传输与同步", slug: "guides/settings/files-sync" },
            { label: "备份、恢复与重置", slug: "guides/settings/backup-reset" },
            { label: "常用语、脚本与 AI", slug: "guides/settings/extensions" },
            { label: "常见设置问题", slug: "guides/settings/faq" },
          ],
          collapsed: false,
        },
        */
        {
          label: "输入方案",
          slug: "guides/schema",
        },
        {
          label: "文件管理",
          slug: "guides/file-manager",
        },
        {
          label: "网络存储",
          slug: "guides/remote-storage",
        },
        {
          label: "中文九键",
          slug: "guides/chinese-ninekey-configuration",
        },
        {
          label: "键盘皮肤",
          items: [
            { label: "简介", slug: "guides/skins/intro" },
            { label: "Jsonnet与皮肤的关系", slug: "guides/skins/jsonnet" },
            { label: "皮肤结构", slug: "guides/skins/structure" },
            { label: "键盘布局", slug: "guides/skins/layout" },
            { label: "预编辑区", slug: "guides/skins/preedit" },
            { label: "工具栏区", slug: "guides/skins/toolbar" },
            { label: "按键区", slug: "guides/skins/keysarea" },
            { label: "样式", slug: "guides/skins/styles" },
            { label: "集合视图", slug: "guides/skins/collection" },
            { label: "按键动作", slug: "guides/skins/action" },
            { label: "长按符号网格", slug: "guides/skins/hintsymbolsgrid" },
            { label: "事件通知", slug: "guides/skins/notifications" },
            { label: "按键动画", slug: "guides/skins/animation" },
            { label: "按键音", slug: "guides/skins/sound" },
            { label: "配置参数", slug: "guides/skins/parameters" },
            { label: "配置项索引（全部 Key）", slug: "guides/skins/keys-reference" },
            { label: "仓皮肤迁移", slug: "guides/skins/upgrade" },
          ],
          collapsed: true
        },
        {
          label: "常用语",
          slug: "guides/phrase",
        },
        {
          label: "脚本",
          slug: "guides/scripts",
        },
        {
          label: "命令模式",
          slug: "guides/command-mode",
        },
        {
          label: "符号栏",
          slug: "guides/symbol-bar",
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
              link: "/guides/schema/#如何导入-rime-的输入方案",
            },
            {
              label: "修改应用中的方案文件后不生效怎么办",
              slug: "guides/faqs/modification-to-scheme-files-not-take-effect",
            },
            {
              label: "为什么键盘启动时，$rimeSchemaName 文本内容不显示",
              slug: "guides/faqs/why-rime-schema-name-not-display"
            },
          ],
          collapsed: true
        },
        {
          label: "更新日志",
          items: [
            { label: "元书 for iOS", slug: "logs" },
            { label: "元书 for iOS (TestFlight)", slug: "logs/ios-testflight" },
            { label: "元书 for Android", slug: "logs/android" },
            { label: "元书 for macOS", slug: "logs/macos" },
          ],
        },
      ],
    }),
  ],
});
