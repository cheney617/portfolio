import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Xin Chen",
  initials: "XC",
  url: "https://xinchen.dev",
  location: "Shanghai / Sydney",
  locationLink: "https://www.google.com/maps/place/sydney",
  description:
    "8.5年C端产品经验 · 从0到1专家 · AI Native PM",
  summary:
    "在携程5年晋升5次，从0到1搭建千万级付费会员体系（收益+480%，入围CEO大奖）。在字节跳动负责TikTok直播中台业务，经历功能产品向行业产品的转型，主导开放生态从商业模式分析到MVP验证（CTR+100%）。海外工作2.5年，全英文环境办公。擅长用AI工具10倍提效：Claude Code数据监控、PRD生成、Vibe Coding全栈开发。",
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
        "负责TikTok直播留资业务的作者经营工具和用户留资体验，从0到1搭建Service+经营橱窗（留资作者+23%，开播时长+15%）。主导开放生态MVP验证（三方链接CTR+100%，Calendly集成1240绑定）。设计私信转化工具（转化+35%）和行业认证体系。此前负责直播订阅会员定价能力（被订阅数+8%）。",
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
        "从0到1搭建付费会员产品（累计近千万用户，收益同比+480%，2020年入围CEO大奖）。搭建等级会员+积分体系（用户价值+8%/+6%）。负责微信小程序和汽车票产品线。2年半团队管理经验。",
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
        "主导TikTok直播的开放生态方向探索。从商业模式分析出发，定义平台闭环与作者自有工具之间的结构性矛盾，设计并跑通双线MVP验证（三方链接CTR+100%，Calendly预约1240绑定），输出路径选择决策文档推动Leadership拍板。",
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
        "诊断私信转化链路的3个断裂点，分层设计工具化方案+AI识别模型。接入自动承接工具解决直播中无法响应的问题，上线高意向评论识别模型捕捉转化信号。私信转化+35%，人均线索率+25%。",
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
        "找到火车票用户的核心焦虑「抢不到票」，围绕焦虑→确定性的逻辑从0搭建付费会员体系。设计三类场景权益（抢票/出行/商旅），叠加等级分层和积分闭环。付费会员近千万，收益+480%，入围CEO大奖。",
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
      title: "TikTok 订阅会员定价",
      href: "/projects/subscription",
      dates: "Jun 2023 - Oct 2024",
      active: false,
      description:
        "对标Twitch/YouTube补齐订阅定价基建。设计多套餐架构+低价入口升级跃迁机制，结合历史数据和地区消费力推荐差异化定价方案，让定价从作者拍脑袋变成平台推荐。被订阅数+8%，收入+2%。",
      technologies: [
        "Pricing Strategy",
        "Recommendation",
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
