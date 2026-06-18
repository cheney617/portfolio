import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/magicui/blur-fade";

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
    background: "线上服务作者有三种变现模式：卖内容、卖服务、收线索。平台想把交易闭环在站内（抽佣65%），但作者更愿意用自有工具完成交易（Stripe抽佣仅3-5%）。这不是功能缺失的问题，而是商业模式的结构性冲突——平台越想闭环，作者越往外跑，转化信号丢失，推荐和广告系统都无法归因。老板的要求很明确：不要跳到feature list，先把「为什么做开放生态」的完整推导链讲清楚。",
    backgroundTransition: "基于这个判断，我的方案是：先定义清楚变现全景，再用两条MVP线同步验证，最后用数据驱动路径选择。",
    flowDiagram: "商业模式分析 → 结构性矛盾定义 → MVP设计(双线验证) → 数据回收 → 路径选择决策",
    approach: [
      "定义变现全景和矛盾本质：梳理「卖内容/卖服务/收线索」三种模式，明确结构性矛盾（平台闭环65%抽佣 vs 作者自有工具3-5%），推导出开放生态方向——不是因为功能不够，而是商业模式要变",
      "MVP验证线一 — 三方链接挂载：20人试点（US 15 + MENA 5），运营手动配置Stan Store/Beacons AI/个人官网等外链。筛选条件：ACU>20且周留资<7（高流量低转化）。US S+ UV CTR 0.455% vs 对照组0.228%（+100%），MENA +128%，Pin卡CTR 3.91%（所有SKU类型排名第一，DM的4.6倍）",
      "MVP验证线二 — Calendly预约集成：全量上线（50%在线S+作者可用），1,080绑定 / 426预约 / 62破蛋作者 / 5.7%转化率。配置漏斗：187K开启SKU → 4,491配置页 → 1,396点击Add → 933 OAuth → 665有效配置，Add→有效配置转化率47.6%（产品本身健康，瓶颈在GTM认知）",
      "路径选择决策：输出六段式决策文档（背景→数据→路径→收益→节奏→XFN），定义两条路径——「开放外链」（约1人，Q3放量，线性增长）vs「完整开放平台」（3-5人+BD，网络效应但重投入）。核心判断点：三方平台联合推广杠杆到底有多大？建议先走外链放量 + 1个BD验证联合推广假设，再决定是否加注",
    ],
    approachTransition: "验证结果如下——两条线都跑通了，但揭示了不同的信号。",
    results: [
      "三方链接：Pin卡CTR 3.91%（所有SKU类型排名第一），ACU 50-100区间对照组差异最大（2.8倍），验证了用户对作者个人服务有明确访问意向",
      "Calendly：有预约作者 vs 无Calendly——开播频次+47%，时长+9%，ACU 4倍。深转工具不只提升转化，还正向激励作者经营行为",
      "路径选择文档获Leadership认可，Q3启动外链规模化放量（全量预期6,500池 x 20%+申请率 = 1,300+挂载作者），同步启动归因基建（IAB Recording）和治理方案（TNS+BRIC三阶段审核）",
      "预期收益量化：作者拉新36-81万，供给+20%-58%，广告年增$30.9M-$100.7M（假设链较长，待进一步验证）",
    ],
    resultsTransition: "这让我认识到一件事——",
    reflection: "老板要的不是feature list，而是完整的推导链。从「做什么功能」升级到「为什么做这个方向」，是我在这个项目中最大的成长。结构性矛盾不是靠堆功能解决的，而是要找到一个让平台和作者利益对齐的架构——开放外链是妥协，完整开放平台才是终局，但先验证再加注比一步到位更务实。另一个insight是：MVP不只是验证可行性，更是验证假设优先级的工具。两条线的数据揭示了不同信号：外链验证了用户意愿，Calendly验证了作者经营激励，这让路径选择从拍脑袋变成了有数据支撑的决策。",
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
    backgroundTransition: "基于对这三个断裂点的诊断，我的方案是分层补齐：先工具化解决基础能力缺失，再用AI模型做识别和提效。",
    flowDiagram: "定义断裂点 → 工具化补齐 → AI模型识别 → 文案优化 → 数据验证",
    approach: [
      "补齐基础工具层：接入自动欢迎语 + 快捷提示问题（Suggested Questions）+ 关键词自动回复（Keyword Reply），让私信在作者无法实时响应时也能自动承接",
      "建立可见性：上线直播实时及下播后的私信线索数据看板，让作者能看到「多少人问了→多少人留了联系方式→转化率多少」的完整漏斗",
      "AI识别高意向用户：上线直播间高留资意向评论识别模型，从实时评论流中捕捉高意向信号，引导目标用户在直播间当场点击私信入口。Phase 1预估日增对话+5,768",
      "文案优化闭环：通过识别作者个人网站内容，为作者自动优化私信工具文案配置，降低配置门槛。同步规划Phase 2 AI Chatbot自动多轮留资（预估CVR +60%），形成「识别→触达→转化→追踪」完整闭环",
    ],
    approachTransition: "验证结果验证了断裂点诊断的准确性——",
    results: [
      "用户私信提交转化提升35%——自动承接工具解决了「直播中无法响应」的断裂点",
      "作者人均私信线索率提升25%——标准话术和快捷提问降低了双方的沟通成本",
      "作者活跃私信留存率提升10%——数据看板的可见性让作者形成了经营习惯",
      "AI Chatbot ROI框架已完成：Phase 1（DM引导）+ Phase 2（AI Chatbot CVR+60%）→ 三条广告收益路径（已投广ROI提升/未投广破蛋/增量对话转化），说服门槛为Lead Ads收益的25%",
    ],
    resultsTransition: "这让我认识到——",
    reflection: "[TODO: 你的真实反思]",
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
    backgroundTransition: "基于这个洞察，我围绕用户真实焦虑点设计了三类场景的权益体系，再通过试用→等级→积分逐步构建完整闭环。",
    flowDiagram: "找到付费点(抢票焦虑) → 权益设计(三类场景) → 试用转化 → 等级分层 → 积分闭环",
    approach: [
      "找到核心付费点 — 抢票焦虑：火车票用户最大的焦虑是「抢不到票」。围绕这个焦虑设计核心权益：无限次最高速抢票 + 首单抢不到包赔 + 实时排队信息展示。把不确定性变成确定性，这是用户付费的根本动力",
      "扩展出行刚需权益：出行返现 + 订卧铺指定下铺 + 无限次免退改手续费。这些不是「好有」而是「痛点解决」——卧铺下铺对老人家庭是刚需，退改免费对商旅用户是省时间",
      "覆盖商旅场景：快速安检 + 报销凭证免费邮寄。针对高价值商旅用户，权益本身不贵但感知极强",
      "试用模式引导转化：针对低频低价值用户设计限时试用，降低决策门槛，让用户先体验权益再决定是否付费",
      "搭建等级体系和积分闭环：按出行频次分层 + 业务交叉（火车票×酒店×机票），积分体系激励日常行为（签到/评价/分享）+ 兑换闭环（里程/权益/实物）",
    ],
    approachTransition: "验证结果证明了「焦虑→确定性」这个产品逻辑是成立的——",
    results: [
      "付费会员累计近千万，2020年入围公司年度CEO大奖",
      "2021年6月收益同比2018年提升480%，5年晋升5次的核心原因就是这个项目",
      "等级体系上线一年大盘用户价值+8%，用户从「买完就走」变成了有粘性的分层经营",
      "积分体系上线一年大盘用户价值+6%，行为激励有效提升了非出行场景的活跃度",
    ],
    resultsTransition: "这个项目给了我一个最核心的认知——",
    reflection: "会员产品的核心不是堆权益，而是找到用户真正的焦虑点。火车票用户的焦虑是「抢不到票」——把这个焦虑变成确定性，用户就愿意付费。很多会员产品失败是因为在做「锦上添花」，而不是「雪中送炭」。另一个教训是：等级体系和积分体系的价值不在于体系本身，而在于它能否改变用户的行为模式——从「买完就走」变成「主动回来」。",
    links: [],
  },
  "subscription": {
    title: "TikTok 订阅支付基建",
    subtitle: "支付能力迭代 · 差异化定价 · 多档位套餐",
    company: "TikTok LIVE",
    period: "2023.06 - 2024.10",
    tags: ["Payment Infra", "Pricing Strategy", "Subscription", "从0到1"],
    metrics: [
      { label: "被订阅数", value: "+8%" },
      { label: "被订阅率", value: "+2%" },
      { label: "收入", value: "+2%" },
    ],
    background: "TikTok直播订阅是平台对标Twitch/YouTube Membership的核心变现产品，但支付基建严重落后竞品：只支持单一套餐、无法分层定价、作者不知道该定多少钱。Twitch已有Tier 1/2/3三档标准化定价，YouTube支持自定义多套餐+会员专属内容分级。我们的支付架构甚至不支持同一个作者创建第二个套餐。这不只是产品功能的缺失，而是支付基建层面的能力欠缺——前端改了没用，底层不支持多套餐并行计费、不支持套餐间升降级结算。",
    backgroundTransition: "基于竞品差距分析，我的方案分两步：第一步补齐支付基建（多档位套餐架构+升降级结算），第二步叠加智能定价策略。",
    flowDiagram: "竞品支付能力拆解 → 多档位套餐架构 → 升降级结算逻辑 → 差异化定价策略 → AB验证",
    approach: [
      "支付基建改造 — 多档位套餐架构：重构底层计费模型，支持同一作者创建多个价格档位的订阅套餐，每个套餐独立计费、独立权益。这是后续所有定价策略的前提",
      "升降级结算逻辑：设计套餐间升级跃迁的结算方案——用户从低价套餐升级到高价套餐时按比例折算已付金额，降低升级决策门槛。支持低价入口吸引用户先订阅，再通过权益差异引导升级，拉长LTV",
      "简化作者配置流程：重新设计订阅开通设置，首套餐设置完成后预填推荐权益，引导快速完成多套餐配置。减少步骤和决策点，让不懂定价的作者也能快速上手",
      "差异化定价策略推荐：结合作者历史订阅数据、所在地区用户消费能力、同类型作者的定价分布，算法推荐差异化定价方案。让定价从「作者拍脑袋」变成「平台推荐+作者确认」，降低定价失误导致的转化损失",
    ],
    approachTransition: "AB实验验证了支付基建迭代的效果——",
    results: [
      "作者人均被订阅数+8%（AB实验结论）——多档位套餐让不同付费能力的用户都找到了入口",
      "人均被订阅率+2%（AB实验结论）——低价套餐有效降低了首次订阅的决策门槛",
      "收入+2%（AB实验结论）——升级跃迁结算机制开始贡献增量收入",
    ],
    resultsTransition: "这个项目让我理解了——",
    reflection: "[TODO: 你的真实反思——比如支付基建和产品功能的关系、定价策略背后的经济学思考等]",
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
          <Link href="/#projects" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeftIcon className="size-3" /> 返回项目列表
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
              <div key={m.label} className="border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">{m.value}</div>
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
