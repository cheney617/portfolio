import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/magicui/blur-fade";
import NumberTicker from "@/components/magicui/number-ticker";

/** Parse a metric string like "+480%", "3.91%", "4x", "近千万" into ticker props. */
function parseMetric(raw: string) {
  const match = raw.match(/^([^\d-]*)(-?[\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const value = parseFloat(numStr.replace(/,/g, ""));
  if (Number.isNaN(value)) return null;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { prefix, value, suffix, decimals };
}

function MetricValue({ value }: { value: string }) {
  const parsed = parseMetric(value);
  const sizeClass = value.length > 6 ? "text-lg" : "text-2xl";
  if (!parsed) {
    return <div className={`font-bold ${sizeClass}`}>{value}</div>;
  }
  return (
    <div className={`text-gradient font-bold ${sizeClass}`}>
      <NumberTicker
        value={parsed.value}
        prefix={parsed.prefix}
        suffix={parsed.suffix}
        decimals={parsed.decimals}
      />
    </div>
  );
}

// Project detail data — case studies
const PROJECTS_DETAIL: Record<string, {
  title: string;
  subtitle: string;
  company: string;
  period: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  background: string;
  backgroundTransition: string;
  flowDiagram: string;
  approach: string[];
  approachTransition: string;
  results: string[];
  resultsTransition: string;
  reflection: string;
  links?: { label: string; href: string }[];
}> = {
  "open-ecosystem": {
    title: "Service+ 开放生态",
    subtitle: "从结构性矛盾到MVP验证到路径选择",
    company: "TikTok LIVE",
    period: "2024.11 - 2026.06",
    tags: ["Strategy", "Platform", "Data-driven", "从0到1"],
    metrics: [
      { label: "US S+ CTR提升", value: "+100%" },
      { label: "Pin卡CTR (SKU第一)", value: "3.91%" },
      { label: "Calendly绑定/预约", value: "1,080/426" },
      { label: "有预约作者ACU", value: "4x" },
    ],
    background: "这个项目的起点不是'做开放生态'，而是在给线上服务行业作者做工具的过程中，不断发现需求错配。线上服务作者有三种变现模式：卖内容、卖服务、收线索。平台最初的思路是自建工具来闭环——我先后主导了订阅会员定价（支付基建）和Course课程能力的探索。但随着深入行业，我发现一个结构性矛盾：平台想闭环（抽佣65%），作者更愿意用自有工具（Stripe抽佣3-5%、Calendly免费、Stan Store低成本）。这不是功能做得不够好的问题，而是商业模式层面的冲突——平台越想闭环，作者越往外跑，转化信号丢失，推荐和广告系统都无法归因。",
    backgroundTransition: "",
    flowDiagram: "做工具 → 发现需求错配 → 尝试自建(订阅/Course) → 定义结构性矛盾 → 开放生态MVP → 数据驱动路径选择",
    approach: [
      "定义变现全景和矛盾本质：梳理「卖内容/卖服务/收线索」三种模式，明确结构性矛盾（平台闭环65%抽佣 vs 作者自有工具3-5%），推导出开放生态方向——不是因为功能不够，而是商业模式要变",
      "整合跨团队资源：开放生态不是一个产品功能，是一个跨业务线的方向。我拉通了商业化团队（广告归因和开环线索广告可行性）、开放平台（三方链接技术方案和审核体系）、PGC短剧团队（内容生态侧的开放需求对齐）、外部Calendly团队（联合推广+配置漏斗数据共享）、PTE Policy（合规评估和三阶段治理方案）。没有这些团队的buy-in，MVP都跑不起来",
      "MVP验证线一 — 三方链接挂载：20人试点（US 15 + MENA 5），运营手动配置Stan Store/Beacons AI/个人官网等外链。筛选条件：ACU>20且周留资<7（高流量低转化）。US S+ UV CTR +100%，MENA +128%，Pin卡CTR 3.91%（所有SKU类型排名第一）",
      "MVP验证线二 — Calendly预约集成：与Calendly团队完成合规评审+OAuth对接+数据共享协议。全量上线后1,080绑定 / 426预约 / 62破蛋作者。配置流程转化率47.6%（产品健康），瓶颈在GTM认知——进而推动PRD v2（精准圈人+异形卡+站内信）",
      "路径选择决策：输出六段式决策文档，量化两条路径收益（开放外链：线性增长 vs 完整开放平台：网络效应但重投入），对齐所有XFN团队的资源需求和排期。建议先走外链放量 + 1个BD验证联合推广假设 → 再决定是否加注",
    ],
    approachTransition: "",
    results: [
      "三方链接：Pin卡CTR 3.91%（所有SKU类型排名第一），ACU 50-100区间对照组差异最大（2.8倍），验证了用户对作者个人服务有明确访问意向",
      "Calendly：有预约作者 vs 无Calendly——开播频次+47%，时长+9%，ACU 4倍。深转工具不只提升转化，还正向激励作者经营行为",
      "路径选择文档获Leadership认可，Q3启动外链规模化放量（全量预期6,500池 x 20%+申请率 = 1,300+挂载作者），同步启动归因基建（IAB Recording）和治理方案（TNS+BRIC三阶段审核）",
      "预期收益量化：作者拉新36-81万，供给+20%-58%，广告年增$30.9M-$100.7M（假设链较长，待进一步验证）",
    ],
    resultsTransition: "",
    reflection: "平台的意愿和作者的诉求确实不能完全对齐——作者希望既获得流量又拿到尽可能多的收入，平台希望从流量中赚到足够的价值。如果平台和作者争利，长期来看作者一定不愿意在平台上投入足够的时间。所以还是要不断寻找双方都能共赢的方式。这也验证了我们从「拍脑袋给方案」出发，能够设计多个MVP小步快跑去验证不同方向的假设，从而推导出唯一解，并基于这个唯一解去做后续的商业规划。",
    links: [],
  },
  "dm-tools": {
    title: "直播私信转化提效",
    subtitle: "从断裂点定义到AI驱动的线索转化体系",
    company: "TikTok LIVE",
    period: "2025.09 - 至今",
    tags: ["AI", "Conversion", "B2C Tools"],
    metrics: [
      { label: "私信转化提升", value: "+35%" },
      { label: "人均线索率", value: "+25%" },
      { label: "活跃留存", value: "+10%" },
      { label: "Phase1日增对话", value: "+5,768" },
    ],
    background: "留资作者的核心转化路径是私信，但存在3个结构性断裂点：第一，直播中无法实时响应私信（正在开播，没法逐条回）；第二，没有标准话术（作者不知道说什么，用户不知道怎么问）；第三，高意向用户在直播间流失，没有被识别和追踪的机制。这三个断裂点导致从「用户有意向」到「作者拿到线索」的链路效率极低。",
    backgroundTransition: "",
    flowDiagram: "定义断裂点 → 工具化补齐 → AI模型识别 → 文案优化 → 数据验证",
    approach: [
      "补齐基础工具层：协调B2C私信团队接入自动欢迎语+快捷提示问题+关键词自动回复，协调主框架团队确保BA下线期间留资作者私信权益不受影响（涉及频控/Auto DM/身份标识三项权益的豁免方案）",
      "建立可见性：上线直播实时及下播后的私信线索数据看板，让作者能看到完整转化漏斗",
      "AI识别高意向用户：协调AI模型团队上线直播间高留资意向评论识别模型，从实时评论流中捕捉高意向信号。同步推动商业化团队对齐VBA身份打通（KYC+行业认证→获得表单和私信自动化工具）。Phase 1预估日增对话+5,768",
      "规划AI Chatbot二期：量化三条广告收益路径（已投广ROI提升/未投广破蛋/增量对话转化），预估CVR+60%，用数据说服决策者提升优先级",
    ],
    approachTransition: "",
    results: [
      "用户私信提交转化提升35%——自动承接工具解决了「直播中无法响应」的断裂点",
      "作者人均私信线索率提升25%——标准话术和快捷提问降低了双方的沟通成本",
      "作者活跃私信留存率提升10%——数据看板的可见性让作者形成了经营习惯",
    ],
    resultsTransition: "",
    reflection: "AI模型识别和生成对应的文案配置建议，能够显著帮助作者获得来自用户的有效私信线索。尤其是在直播的实时互动场景下，它一定程度上帮助无暇分身的主播快速获取高意向用户，确保用户不会流失——主播可以在关播后继续跟用户触达。这是我们一次有效使用AI结合业务的尝试。",
    links: [],
  },
  "membership": {
    title: "智行付费会员体系",
    subtitle: "近千万用户的会员产品从0到1",
    company: "携程 · 智行火车票",
    period: "2018.07 - 2022.01",
    tags: ["Monetization", "User Growth", "团队管理", "从0到1"],
    metrics: [
      { label: "付费会员", value: "近千万" },
      { label: "收益增长", value: "+480%" },
      { label: "CEO大奖", value: "2020入围" },
      { label: "用户价值", value: "+8%" },
    ],
    background: "智行火车票作为携程旗下独立品牌，需要建立自己的用户粘性体系。核心挑战：火车票是低频刚需，用户买完就走、复购周期长、价格敏感。传统会员思路是堆权益，但火车票场景下大部分权益感知不强——用户不会因为「积分兑换优惠券」就多买一张火车票。真正要解决的问题是：找到用户在这个场景下的真实焦虑，把焦虑变成确定性，用户就愿意付费。",
    backgroundTransition: "",
    flowDiagram: "找到付费点(抢票焦虑) → 权益设计(三类场景) → 试用转化 → 等级分层 → 积分闭环",
    approach: [
      "找到核心付费点 — 抢票焦虑：火车票用户最大的焦虑是「抢不到票」。围绕这个焦虑设计核心权益：无限次最高速抢票 + 首单抢不到包赔 + 实时排队信息展示。把不确定性变成确定性，这是用户付费的根本动力",
      "扩展出行刚需权益：出行返现 + 订卧铺指定下铺 + 无限次免退改手续费。这些不是「好有」而是「痛点解决」——卧铺下铺对老人家庭是刚需，退改免费对商旅用户是省时间",
      "覆盖商旅场景：快速安检 + 报销凭证免费邮寄。针对高价值商旅用户，权益本身不贵但感知极强",
      "试用模式引导转化：针对低频低价值用户设计限时试用，降低决策门槛，让用户先体验权益再决定是否付费",
      "搭建等级体系和积分闭环：按出行频次分层 + 业务交叉（火车票×酒店×机票），积分体系激励日常行为（签到/评价/分享）+ 兑换闭环（里程/权益/实物）",
    ],
    approachTransition: "",
    results: [
      "付费会员累计近千万，2020年入围公司年度CEO大奖",
      "2021年6月收益同比2018年提升480%",
      "等级体系上线一年大盘用户价值+8%",
      "积分体系上线一年大盘用户价值+6%",
    ],
    resultsTransition: "",
    reflection: "会员产品的核心不是堆权益，而是解决用户真正的焦虑点——这是1，其他都是后面的0。当用户对平台产生信任后，等级和积分体系能引导他们把更多行为留在平台内，完成习惯迁移：从「买完就走」变成「把相关的也一起买了」，再进阶到「看看还有没有其他东西」。旅游平台本质上不是高复购场景，但确实是高客单价场景——把用户的出行行为轨迹尽可能多地留在平台内，对平台来说就更有价值。在这个过程中，真金白银的券和能产生平台信任的包赔机制，都是足够make sense的手段。",
    links: [],
  },
  "subscription": {
    title: "TikTok 订阅支付基建",
    subtitle: "支付能力迭代 · 差异化定价 · 多档位套餐",
    company: "TikTok LIVE",
    period: "2023.06 - 2024.10",
    tags: ["Payment Infra", "Pricing Strategy", "Subscription", "从0到1"],
    metrics: [
      { label: "订阅率", value: "+12%" },
      { label: "收入", value: "+10%" },
    ],
    background: "TikTok直播订阅是平台对标Twitch/YouTube Membership的核心变现产品，但支付基建严重落后竞品：定价完全由平台固定，作者无法自主调整；只支持单一套餐，无法分层满足不同用户付费能力。Twitch已有Tier 1/2/3三档标准化定价，YouTube支持自定义多套餐+会员专属内容分级。更深层的问题是底层支付架构的能力欠缺——不支持作者自定义价格、不支持多套餐并行计费、不支持套餐间升降级结算。",
    backgroundTransition: "",
    flowDiagram: "竞品能力拆解 → 单套餐自定义定价 → 多档位套餐架构 → 升降级结算 → 差异化定价策略 → AB验证",
    approach: [
      "第一步 — 单套餐自定义定价：打破平台固定定价的限制，支持作者在合理范围内自主设置订阅价格。这一步看似简单，但涉及支付渠道的价格校验逻辑、不同币种的最低定价规则、以及已有订阅用户的价格变更过渡方案",
      "第二步 — 多档位套餐架构：在单套餐自定义定价验证通过后，重构底层计费模型，支持同一作者创建多个价格档位的订阅套餐，每个套餐独立计费、独立权益。首套餐设置完成后预填推荐权益，引导快速完成多套餐配置",
      "升降级结算逻辑：设计套餐间升级跃迁的结算方案——用户从低价套餐升级到高价套餐时按比例折算已付金额，降低升级决策门槛。支持低价入口吸引用户先订阅，再通过权益差异引导升级，拉长LTV",
      "第三步 — 差异化定价策略推荐：结合作者历史订阅数据、所在地区用户消费能力、同类型作者的定价分布，算法推荐差异化定价方案。让定价从「作者拍脑袋」变成「平台推荐+作者确认」，降低定价失误导致的转化损失",
    ],
    approachTransition: "",
    results: [
      "订阅率+12%（AB实验）——多档位套餐让不同付费能力的用户都找到了入口",
      "收入+10%（AB实验）——升级跃迁结算+差异化定价开始贡献增量收入",
    ],
    resultsTransition: "",
    reflection: "作者在拥有一定粉丝规模和变现能力后，都会倾向于使用订阅这样的连续付费形式来获得持续收入——订阅是作者经营能力和粉丝规模达到一定量级后的必然趋势。在这种情况下，他们对变现产品的诉求也一定是逐渐多样化的。但我们也发现，即使把订阅能力做到极限，它也只满足了一小部分能力较强的作者和一小部分愿意付费的用户。还有更多信任尚未建立、或没有强付费意愿的用户，以及能力尚在成长中的作者，他们可能更倾向于先做免费咨询或定制化变现。这也推导出了我们后续将业务方向转变为线上服务行业变现和直播留资方向的决策。",
    links: [],
  },
  "service-governance": {
    title: "经营工具与生态治理",
    subtitle: "从0搭建工具入口，确保好的工具只放给有资质的作者",
    company: "TikTok LIVE",
    period: "2024.11 - 2026.06",
    tags: ["从0到1", "Creator Tools", "A/B Testing", "Governance"],
    metrics: [
      { label: "留资作者增长", value: "+23%" },
      { label: "开播时长增长", value: "+15%" },
      { label: "协调团队数", value: "6+" },
    ],
    background: "留资主播的经营行为高度分散——留资工具散落在不同入口，经营数据没有统一看板，平台无法沉淀作者的经营行为数据。作者不知道自己的留资工具效果如何，平台也无法基于数据做推荐和运营。同时，随着留资工具生态扩大，缺少统一的准入和清退标准，劣质工具影响用户体验。",
    backgroundTransition: "",
    flowDiagram: "经营行为分散 → 工具组合设计 → 经营橱窗搭建 → 数据看板 → 治理门槛设计 → 行业认证上线",
    approach: [
      "从0搭建直播间经营橱窗：设计统一的工具管理入口，作者开通后可选择经营行业并预选留资工具组合，支持橱窗自定义装饰。结合行业特点引入符合不同行业作者经营诉求的工具组合",
      "设计经营数据看板：基于作者直播表现和留资线索数据生成经营罗盘，与功能配置任务和作者教育素材结合，提升留资作者的开播积极性和开播留存",
      "生态治理 — 准入与清退门槛：作为生态治理POC，设计留资工具的准入标准（biz标签≥1）和清退规则（potential=0硬清退/biz≠1软清退），设计标签消费框架",
      "行业认证体系：协调商业化/KYB/KYC/PTE/USDS/法务6+团队，推动行业资质认证审核体系上线，打通VBA身份升级路径",
    ],
    approachTransition: "",
    results: [
      "大盘留资作者数占比+23%（AB实验）",
      "大盘留资作者开播时长+15%（AB实验）",
      "目标作者经营浓度>80%",
      "行业认证体系成功上线，6+团队协调落地",
    ],
    resultsTransition: "",
    reflection: "核心是确保把有价值的工具提供给认真经营、真正把TT当成有价值营销渠道的作者。一方面让这些优秀作者认可TT的商业化价值，从而在TT上投入广告成本；另一方面也让这些作者给TT直播提供多元化的优质内容供给。这是一个螺旋上升、相辅相成的趋势——提供更有价值的经营权益，扶持足够有资质的优质作者。",
    links: [],
  },
  "ai-game": {
    title: "AI直播互动游戏",
    subtitle: "评论驱动AI叙事 · TikTok LIVE Hackathon冠军",
    company: "TikTok LIVE",
    period: "June 2026",
    tags: ["AI", "Hackathon", "Vibe Coding", "实时互动"],
    metrics: [
      { label: "成绩", value: "冠军" },
      { label: "团队", value: "5人" },
      { label: "开发周期", value: "1天" },
    ],
    background: "TikTok LIVE Hackathon命题：用AI创造直播新体验。我提出将小说/剧集IP转化为TikTok LIVE上的实时互动游戏——观众通过评论直接影响游戏走向，评论被AI实时识别和分类后驱动叙事引擎生成新的剧情事件，主播与观众通过WebSocket实时同步游戏状态，形成「观众共创内容」的直播新形态。",
    backgroundTransition: "",
    flowDiagram: "评论输入 → 智能分类(5类) → 模型队列 → 场景剧情生成 → 优先级排序 → 主播决策 → 观众同步",
    approach: [
      "产品设计与游戏框架：提出「评论驱动AI叙事」的核心玩法概念，设计末日求生世界观和六角格Roguelike探索机制，定义6阶段每日循环（家中事件→资源整理→装备出门→选择目的地→地图探索→回家休息），设计4维资源系统和善恶Karma系统",
      "评论智能分类：设计基于规则的NLP评论分类器，5类识别（环境探索/行动指令/角色互动/资源管理/噪音过滤），关键词库+正则模式匹配，延迟<1ms，支持中英文混合识别",
      "AI叙事生成系统：设计4种场景Prompt（事件/角色/道具/场景），基于Claude API的结构化JSON输出。设计能力驱动剧情系统——道具和角色的能力标签影响后续可触发事件；叙事钩子队列控制剧情节奏（setup→延迟→概率触发→强制触发→完结）",
      "兜底事件矩阵：设计70+预设事件，覆盖12场景×10角色类型×8事件类型，确保AI生成失败时玩家体验不中断",
      "模型评测：设计评测框架验证生成质量，包括剧情连贯性、资源平衡性、用户评论响应准确率等维度",
    ],
    approachTransition: "",
    results: [
      "1天内完成从idea到完整可玩Demo",
      "获TikTok LIVE组内Hackathon第一名",
      "获TikTok Hackathon冠军",
      "获TikTok LIVE Net冠军",
    ],
    resultsTransition: "",
    reflection: "这个项目验证了AI在直播场景的核心价值：让一个PM也能在极短时间内从idea到完整可玩的互动游戏Demo。AI不只是工具，而是产品经理的新工作方式——从概念设计、Prompt工程到Vibe Coding全流程，AI让个人产能发生质变。核心的交互设计和内容模型管线是我最大的贡献，评论分类→模型队列→优先级→实时输出这条管线的设计，本质上是在定义「AI如何理解用户意图并转化为产品体验」。",
    links: [
      { label: "在线Demo", href: "https://ai-game-jam.vercel.app/wasteland/WASTELAND%20LIVE%20(Viewer).html" },
      { label: "GitHub", href: "https://github.com/CNLarrylai/ai-game-jam" },
    ],
  },
  "ai-workflow": {
    title: "AI深度融入PM工作流",
    subtitle: "从辅助工具到系统性重构PM生产力",
    company: "TikTok LIVE",
    period: "2025 - 至今",
    tags: ["AI", "Workflow", "Claude Code", "提效"],
    metrics: [],
    background: "产品经理的日常工作中存在大量重复性高、结构化强但耗时的任务：数据查询需要手写SQL、PRD撰写需要从零搭框架、Case Review需要人工逐条分析直播录像。这些任务不是不会做，而是占用了大量本可以用于思考和决策的时间。我开始系统性地将AI工具融入每个环节，不是偶尔用一下ChatGPT，而是搭建完整的自动化管线。",
    backgroundTransition: "",
    flowDiagram: "数据监控自动化 → PRD全链路提效 → Case Review自动化",
    approach: [
      "数据监控自动化：使用Claude Code连接飞书CLI获取文档及数据库权限，利用AI自动生成SQL进行数据查询。自动检索头部作者的功能使用数据，生成分析报告并定时推送至飞书群。支撑了留资工具、私信转化等多个项目的功能复盘与敏捷迭代",
      "PRD全链路提效：利用Claude Code基于功能简介、聊天记录和参考文档自动生成包含需求背景与目标的PRD框架；进一步生成交互细节Prompt，配合Claude Design生成原型图；基于评审会议纪要自动完成功能变动的文档更新。整个PRD从初稿到评审后更新，AI参与了每一个环节",
      "Case Review自动化：基于ASR（语音识别）对直播录像进行全切片分析，覆盖12场景×10角色类型。从0开发提效工具，将原本需要人工逐条观看的Case Review变成结构化的自动分析报告，大幅缩短复盘周期",
    ],
    approachTransition: "",
    results: [
      "数据监控：从手写SQL到自动生成+定时推送，单次查询时间从30分钟缩短到2分钟",
      "PRD提效：PRD初稿生成时间从半天缩短到1小时内，评审后更新实现自动化",
      "Case Review：从人工逐条观看变为自动切片分析，覆盖范围从抽样扩展到全量",
    ],
    resultsTransition: "",
    reflection: "AI工具的价值不在于替代PM思考，而在于释放PM被事务性工作占用的时间。当数据查询、文档撰写、Case分析这些环节被自动化后，PM可以把更多精力投入到真正需要判断力的工作上——定义方向、设计方案、推动决策。这也是我在行业认证、开放生态等项目中能够同时推进多条线的基础。",
    links: [],
  },
};

export async function generateStaticParams() {
  return Object.keys(PROJECTS_DETAIL).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS_DETAIL[slug];
  if (!project) notFound();

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <div className="container max-w-3xl mx-auto px-4 py-12">
        <BlurFade delay={0.04}>
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 py-3 px-4 -ml-4 rounded-lg hover:bg-muted transition-colors min-h-[44px]">
            <ArrowLeftIcon className="size-4" /> 返回项目列表
          </Link>
        </BlurFade>

        <BlurFade delay={0.08}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm text-muted-foreground">{project.company}</span>
            <span className="text-sm text-muted-foreground">·</span>
            <span className="text-sm text-muted-foreground">{project.period}</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{project.title}</h1>
          <p className="text-lg text-muted-foreground mb-4">{project.subtitle}</p>
          <div className="flex flex-wrap gap-1.5 mb-8">
            {project.tags.map((t) => (
              <Badge key={t} variant="secondary">{t}</Badge>
            ))}
          </div>
        </BlurFade>

        {/* Metrics */}
        <BlurFade delay={0.12}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-border bg-card/40 p-4 text-center backdrop-blur transition-colors hover:border-neon/50"
              >
                <MetricValue value={m.value} />
                <div className="text-xs text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </BlurFade>

        {/* Background */}
        <BlurFade delay={0.16}>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">背景</h2>
            <p className="text-muted-foreground leading-relaxed">{project.background}</p>
            {project.backgroundTransition && (
              <p className="text-foreground font-medium mt-4 text-sm">{project.backgroundTransition}</p>
            )}
          </section>
        </BlurFade>

        {/* Flow Diagram */}
        {project.flowDiagram && (
          <BlurFade delay={0.18}>
            <div className="flex items-center gap-2 flex-wrap my-6 p-4 rounded-lg bg-muted/50 text-sm">
              {project.flowDiagram.split(' → ').map((step, i, arr) => (
                <React.Fragment key={i}>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{step}</span>
                  {i < arr.length - 1 && <span className="text-muted-foreground">→</span>}
                </React.Fragment>
              ))}
            </div>
          </BlurFade>
        )}

        {/* Approach */}
        <BlurFade delay={0.2}>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">方案</h2>
            <ul className="space-y-2">
              {project.approach.map((a, i) => (
                <li key={i} className="text-muted-foreground leading-relaxed flex gap-2">
                  <span className="text-foreground font-medium shrink-0">{i + 1}.</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            {project.approachTransition && (
              <p className="text-foreground font-medium mt-4 text-sm">{project.approachTransition}</p>
            )}
          </section>
        </BlurFade>

        {/* Results */}
        <BlurFade delay={0.24}>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">结果</h2>
            <ul className="space-y-2">
              {project.results.map((r, i) => (
                <li key={i} className="text-muted-foreground leading-relaxed flex gap-2">
                  <span className="text-green-500 shrink-0">✓</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            {project.resultsTransition && (
              <p className="text-foreground font-medium mt-4 text-sm">{project.resultsTransition}</p>
            )}
          </section>
        </BlurFade>

        {/* Reflection */}
        {project.reflection && (
          <BlurFade delay={0.26}>
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">思考</h2>
              <p className="text-muted-foreground leading-relaxed italic">{project.reflection}</p>
            </section>
          </BlurFade>
        )}

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <BlurFade delay={0.28}>
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-3">链接</h2>
              <div className="flex gap-3">
                {project.links.map((l) => (
                  <Link key={l.href} href={l.href} target="_blank" className="text-sm text-blue-500 hover:underline">
                    {l.label} →
                  </Link>
                ))}
              </div>
            </section>
          </BlurFade>
        )}
      </div>
    </main>
  );
}
