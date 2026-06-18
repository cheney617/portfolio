import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Xin Chen",
  initials: "XC",
  url: "https://xinchen.dev",
  location: "Shanghai / Sydney",
  locationLink: "https://www.google.com/maps/place/sydney",
  description:
    "8.5年C端产品，擅长在新业务中独立发现产品机会、定义方向并用数据验证。在携程从0搭建千万级付费会员体系（收益+480%），在TikTok LIVE主导留资工具矩阵和开放生态方向探索（CTR+100%，私信转化+35%）。",
  summary:
    "在给线上服务行业作者做经营工具的过程中，不断发现需求错配——平台想闭环，作者想用自有工具。从最早的订阅会员定价，到Course课程尝试，再到三方链接挂载和Calendly集成，最终演变为开放生态方向的探索。这条线让我从「做功能」转变为「做方向判断」。在携程的5年，核心能力是找到用户焦虑点并产品化（抢票焦虑→付费会员近千万，收益+480%，入围CEO大奖）。跨6+团队推动行业认证体系落地，5年5次晋升源自持续交付可量化结果。海外工作2.5年，全英文环境办公。近两年深度实践AI×产品——从高意向评论识别模型（私信转化+35%）到AI叙事引擎（Hackathon），再到用Claude Code重构PM工作流。",
  avatarUrl: "/me.png",
  skills: [
    { name: "产品策略", icon: (_props: any) => null },
    { name: "从0到1", icon: (_props: any) => null },
    { name: "数据分析", icon: (_props: any) => null },
    { name: "AI应用", icon: (_props: any) => null },
    { name: "用户增长", icon: (_props: any) => null },
    { name: "商业化", icon: (_props: any) => null },
    { name: "跨团队协作", icon: (_props: any) => null },
    { name: "英语办公", icon: (_props: any) => null },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "chenxin.2517@gmail.com",
    tel: "+86 13585770265",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/cheney617",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "",
        icon: Icons.linkedin,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/resume.pdf",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "字节跳动 · TikTok LIVE",
      href: "https://www.tiktok.com",
      badges: [],
      location: "Sydney, Australia",
      title: "产品经理",
      logoUrl: "/tiktok.svg",
      start: "Jul 2022",
      end: "Present",
      description:
        "在给线上服务行业作者做工具的过程中，独立发现需求错配并推动方向转型：从经营橱窗搭建（留资作者+23%）→私信转化提效（+35%，AI模型识别高意向用户）→开放生态方向探索（三方链接CTR+100%，路径选择决策文档）。协调商业化/KYB/PTE/USDS等6+团队推动行业认证体系上线。此前负责订阅会员支付基建迭代（被订阅数+8%）。",
    },
    {
      company: "携程 · 智行火车票",
      href: "https://www.ctrip.com",
      badges: [],
      location: "Shanghai, China",
      title: "产品经理 · 会员+平台产品负责人（5人团队）",
      logoUrl: "/ctrip.png",
      start: "Jul 2017",
      end: "Jul 2022",
      description:
        "从0到1搭建付费会员体系——找到「抢票焦虑」这个核心付费点，设计三类场景权益+等级分层+积分闭环（累计近千万用户，收益+480%，2020入围CEO大奖）。5人团队负责人，2.5年团队管理，5年5次晋升。同时负责微信小程序新客增长和汽车票产品线。",
    },
  ],
  education: [
    {
      school: "大连理工大学",
      href: "https://www.dlut.edu.cn",
      degree: "硕士 · 环境科学与工程",
      logoUrl: "/dlut.png",
      start: "2014",
      end: "2017",
    },
    {
      school: "东南大学",
      href: "https://www.seu.edu.cn",
      degree: "本科 · 环境工程",
      logoUrl: "/seu.svg",
      start: "2010",
      end: "2014",
    },
  ],
  projects: [
    {
      title: "Service+ 开放生态",
      href: "/projects/open-ecosystem",
      dates: "Nov 2024 - Jun 2026",
      active: true,
      description:
        "在给线上服务作者做工具的过程中，发现平台闭环（抽佣65%）与作者自有工具（Stripe 3-5%）之间的结构性矛盾——先后尝试了订阅会员、Course课程等自建方案，最终判断开放生态才是正确方向。设计双线MVP（三方链接CTR+100%，Calendly 1240绑定），输出路径选择决策文档推动Leadership拍板。",
      technologies: [
        "Product Strategy",
        "Data Analysis",
        "A/B Testing",
        "Cross-team",
      ],
      links: [
        {
          type: "详情",
          href: "/projects/open-ecosystem",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project-ecosystem.svg",
      video: "",
    },
    {
      title: "直播私信转化提效",
      href: "/projects/dm-tools",
      dates: "Sep 2025 - Present",
      active: true,
      description:
        "诊断私信转化链路3个断裂点（直播中无法响应/无标准话术/高意向用户流失），分层设计工具化+AI识别方案。上线高意向评论识别模型和私信自动承接工具，私信转化+35%，人均线索率+25%。规划AI Chatbot二期（预估CVR+60%），量化三条广告收益路径说服决策者。",
      technologies: [
        "AI Model",
        "Conversion",
        "B2C Tools",
        "Data Dashboard",
      ],
      links: [
        {
          type: "详情",
          href: "/projects/dm-tools",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project-dm.svg",
      video: "",
    },
    {
      title: "智行付费会员体系",
      href: "/projects/membership",
      dates: "Jul 2018 - Jan 2022",
      active: false,
      description:
        "找到火车票用户核心焦虑「抢不到票」，围绕'焦虑→确定性'的逻辑从0搭建付费会员体系。设计三类场景权益（抢票/出行/商旅），叠加等级分层和积分闭环。付费会员近千万，收益同比+480%，入围CEO大奖。5人团队负责人，5年5次晋升的核心项目。",
      technologies: [
        "Membership",
        "Monetization",
        "User Growth",
        "Team Lead",
      ],
      links: [
        {
          type: "详情",
          href: "/projects/membership",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project-membership.svg",
      video: "",
    },
    {
      title: "TikTok 订阅支付基建",
      href: "/projects/subscription",
      dates: "Jun 2023 - Oct 2024",
      active: false,
      description:
        "判断订阅转化低的根因不在前端而在支付架构——底层不支持自定义定价和多套餐计费。分三步迭代：先开放单套餐自定义定价，再搭建多档位套餐架构和升降级结算，最后叠加基于数据的差异化定价策略推荐。被订阅数+8%，收入+2%。",
      technologies: [
        "Payment Infra",
        "Pricing Strategy",
        "Subscription",
        "从0到1",
      ],
      links: [
        {
          type: "详情",
          href: "/projects/subscription",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project-subscription.svg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "AI × 直播互动游戏",
      dates: "June 2026",
      location: "ByteDance Hackathon, Sydney",
      description:
        "Hackathon项目，探索「AI×直播×游戏」方向。核心创新：观众通过自然语言评论（而非指令/礼物）直接影响游戏剧情。我负责评论智能引擎（5类分类<1ms）、AI叙事生成（Claude API，4种场景）、主播-观众实时同步（WebSocket）。末日求生主题，从idea到完整可玩Demo仅2天。",
      image: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/CNLarrylai/ai-game-jam",
        },
      ],
    },
    {
      title: "AI 工作流提效",
      dates: "2025 - Present",
      location: "日常实践",
      description:
        "将AI工具深度融入PM日常工作流。用Claude Code搭建数据监控自动化（SQL生成+定时推送飞书群）、PRD全链路辅助（简介→框架→交互→原型→会议纪要自动更新）、Vibe Coding从0开发完整项目（生日聚会网站、直播互动游戏），以及直播Case Review自动化（ASR全切片分析，覆盖12场景×10角色类型）。",
      image: "",
      links: [],
    },
  ],
} as const;
