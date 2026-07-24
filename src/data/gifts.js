const Op = {
  version: '1.0.0',
  generated_at: '2026-05-13T13:31:12.907379+00:00',
  gifts: [
    {
      id: 9701,
      name: '火热多汁琵琶腿',
      category: '烧伤',
      defaultRarity: 'III',
      descriptions: {
        base: '通过技能效果对敌方单位施加[Combustion]时，额外施加3层[Combustion](每回合最多3次)',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9702,
      name: '干巴柴涩鸡胸肉',
      category: '破裂',
      defaultRarity: 'III',
      descriptions: {
        base: '通过技能效果对敌方单位施加[Burst]时，额外施加3层[Burst](每回合最多3次)',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9703,
      name: '探戈鸡酱料',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: '若自身的速度值高于目标，则使拼点威力+(速度值/3) (最多+3)',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9704,
      name: '脏污的针与线',
      category: '流血',
      defaultRarity: 'II',
      descriptions: {
        base: `以下效果仅对每回合中首个对敌方单位造成伤害的技能生效。

  使目标增加(伤害量/3)级[Laceration]强度。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9705,
      name: '锐利的针与线',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: '每回合中首次使用技能对敌方单位造成伤害后，对其额外造成(伤害量/2)点固定伤害。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9706,
      name: '沾染油污的扳手',
      category: '震颤',
      defaultRarity: 'I',
      descriptions: {
        base: `[Blunt]技能造成的伤害+10%

  [Blunt]技能最后一枚硬币命中时，使目标增加2级[Vibration]强度。(每回合最多1次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9707,
      name: '闪光废料',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: '若友方单位带有护盾时受到敌方单位攻击，则反弹3点固定伤害。(护盾没有受到伤害时不反弹伤害)',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9708,
      name: '废料蟹脑髓泡酒',
      category: '破裂',
      defaultRarity: 'III',
      descriptions: {
        base: `友方单位增加[Burst]强度或施加[Burst]层数的技能攻击带有[Burst]的敌方单位时，造成的伤害+(目标的[Burst]层数×1.25)%(最多+50%)。

  友方单位解除混乱时，使其恢复其体力上限20%的体力(每场战斗最多2次)。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9709,
      name: '毛球帽',
      category: '呼吸法',
      defaultRarity: 'I',
      descriptions: {
        base: `回合结束时，友方单位每有1个攻击技能造成了伤害，下回合使其增加1级[Breath]强度。

  若是集中遭遇战，则改为增加3级[Breath]强度。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9710,
      name: '巨大的礼物袋',
      category: '呼吸法',
      defaultRarity: 'II',
      descriptions: {
        base: '回合开始时，使现存体力最低的友方单位增加2级[Breath]强度并使其获得2层[Breath]与2层[Protection]。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9711,
      name: '悲伤的毛绒玩偶',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `友方单位造成的伤害+(该单位理智值的绝对值/1.5)%(最少+0%)

  当拥有加算硬币技能的友方单位解除混乱时，使其恢复全部理智值(不对侵蚀的单位生效)。

  回合开始时，对拥有的技能全部为减算硬币技能的友方单位施加3层[Paralysis]。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9712,
      name: '黑色账簿',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: `关卡的首个回合开始时，根据敌方单位数，随机获得相应个数的E.G.O资源。

  若参与本场战斗的属于剑契组或黑云会的人格不低于4名(以参战人员为基准)，则改为获得持有量最少的E.G.O资源。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9713,
      name: '锈蚀的刀柄',
      category: '斩击',
      defaultRarity: 'III',
      descriptions: {
        base: `回合开始时，使全体友方单位获得1层[SlashResultUp] 。

  属于剑契组或黑云会的友方单位改为获得2层[SlashResultUp] 。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9714,
      name: '破碎的刀刃',
      category: '流血',
      defaultRarity: 'III',
      descriptions: {
        base: `本场战斗中，首次通过攻击技能效果使敌方单位增加[Laceration]强度或施加特殊[Laceration]时，额外对其施加2层[Laceration]。（每场战斗最多1次）

  若为属于黑云会的友方单位，则改为首次对敌方单位造成伤害时，额外使其增加4级[Laceration]强度并对其施加4层[Laceration]。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9715,
      name: '损坏的刀刃',
      category: '呼吸法',
      defaultRarity: 'III',
      descriptions: {
        base: `友方单位对敌方单位造成暴击时，对目标额外造成(自身的[Breath]强度/3)点傲慢伤害。

  若该友方单位属于剑契组，则改为暴击时对目标额外造成(自身的[Breath]强度/2)点傲慢伤害。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9716,
      name: '红色流苏',
      category: '斩击',
      defaultRarity: 'III',
      descriptions: {
        base: '若敌方单位的[Slash]抗性不高于1.5，则使其[Slash]抗性+0.3',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9717,
      name: '壮观',
      category: '斩击',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若属于黑云会的人格不低于3名，则触发该效果。(以参战人员为基准)

  回合开始时，使全体友方单位获得2层[SlashResultUp] 并使其造成的[Slash]伤害+35%。

  回合开始时，属于黑云会的人格首次造成伤害时，额外使目标增加4级[Laceration]强度并对其施加4层[Laceration]。(每回合最多1次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9718,
      name: '不动',
      category: '斩击',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若属于剑契组成员的人格不低于3名，则触发该效果。(以参战人员为基准)

  回合开始时，使全体友方单位获得2层[SlashResultUp] 并使其造成的[Slash]伤害+35%。

  属于剑契组成员的人格造成暴击时，对目标额外造成(自身的[Breath]强度)点傲慢伤害。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9719,
      name: '破损的斗笠',
      category: '斩击',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若属于剑契组成员的人格不低于3名，则触发该效果。(以参战人员为基准)

  全体友方单位造成的[Slash]伤害+50%。

  属于剑契组成员，且带有[Breath]的友方单位暴击率固定为100%。

  属于剑契组成员的友方单位暴击倍率增加至1.5倍`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9720,
      name: '陈旧的长袍',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若属于剑契组的人格的友方单位不低于3名，则触发该效果。(以参战人员为基准)
全体友方单位造成的斩击伤害+50%。
属于剑契组的友方单位1技能的硬币威力+1，若该技能为单硬币技能，则改为硬币威力+3。
[剑契组头领默尔索专属] 技能“肉斩”的拼点最终威力-36，技能“骨断”造成的伤害+50%。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9721,
      name: '银色的表壳',
      category: '震颤',
      defaultRarity: 'II',
      descriptions: {
        base: `增加[Vibration]强度，施加[Vibration]层数或施加特殊[Vibration]的攻击技能(不包括E.G.O技能)对敌方单位造成的伤害+10%

  若该技能本回合首次使敌方单位[VibrationExplosion]，则下回合对其施加2层[Vibration](每回合最多1次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9722,
      name: '褪色的表壳',
      category: '震颤',
      defaultRarity: 'II',
      descriptions: {
        base: `与速度值高于自身的敌方单位拼点时，使自身的拼点威力+1。

  对速度值高于自身的敌方单位造成伤害时，下回合使该敌方单位增加3级[Vibration]强度并对其施加2层[Vibration](每回合最多1次)。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9723,
      name: '警告函',
      category: '震颤',
      defaultRarity: 'II',
      descriptions: {
        base: `回合结束时，对速度值最高的1名敌方单位在下回合施加1层[Binding](若是异想体，则改为1个部位)。

  若目标带有[Vibration]或特殊[Vibration]，则改为施加2层[Binding]。

  友方单位攻击带有[Binding]的目标时，造成的伤害+(5+(目标的[Binding]层数×2.5))%(最多+15%)。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9724,
      name: '蚀刻的指针',
      category: '震颤',
      defaultRarity: 'II',
      descriptions: {
        base: `波次的首个回合开始时，使速度值最低的3名敌方单位增加(9-当前速度值)级[Vibration]强度(最少3级)。

  对回合开始时带有的[Vibration]或特殊[Vibration]强度不低于12级的敌方单位造成的伤害+10%。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9725,
      name: '锈蚀的指针',
      category: '震颤',
      defaultRarity: 'II',
      descriptions: {
        base: `波次的首个回合开始时，使速度值最高的1名敌方单位增加(9-当前速度值)级[Vibration]强度(最少3级)并对其施加层数相当于该数值一半的[Vibration](向上取整，若是异想体，则改为1个部位)。

  受到回合开始时带有的[Vibration]或特殊[Vibration]强度不低于12级的敌方单位的伤害-10%。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9726,
      name: '涓滴之杯',
      category: '震颤',
      defaultRarity: 'III',
      descriptions: {
        base: `拥有增加[Vibration]强度，施加[Vibration]层数或施加特殊[Vibration]的攻击技能(不包括E.G.O技能)的友方单位与敌方单位拼点胜利时，使目标增加2级[Vibration]强度并对其施加2层[Vibration](每回合最多2次)。

  属于圣愚的人格改为增加3级[Vibration]强度并施加3层[Vibration](每回合最多3次)

  该人格与攻击等级高于自身的敌方单位拼点时，使该友方单位的拼点威力+2，拼点胜利后造成的伤害+20%。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9727,
      name: '预支时间收据',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `对速度值高于自身至少2点的敌方单位造成的伤害+(5+速度值之差×2.5)%(最多+15%)。

  回合结束时，若本回合通过攻击技能(不包括E.G.O技能)对速度值高于自身至少2点的敌方单位造成了伤害，则下回合对该敌方单位施加2层[Binding]与1层[ResultReduction](每回合最多1次)。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9728,
      name: '怀表：Type L',
      category: '震颤',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有增加[Vibration]强度，施加[Vibration]层数或施加特殊[Vibration]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果(不包括E.G.O技能，不包括待命人员)。

  友方单位增加[Vibration]强度，施加[Vibration]层数或施加特殊[Vibration]的3技能加算硬币威力+2，造成的伤害+25%。
  - 减算硬币技能改为基础威力+(8/硬币数)，而非加算硬币威力(最少+1，向下取整)

  增加[Vibration]强度，施加[Vibration]层数或施加特殊[Vibration]的友方单位通过攻击技能(包括E.G.O技能)使敌方单位[Switch_Vibration]或[FusionVibration]时，使该敌方单位转换后的[Vibration]强度与层数变为1.5倍(仅在转换为其他类型的[Vibration]时生效)并在下回合对该敌方单位施加5层[DefenseDown](每回合最多1次)。

  回合开始时，使速度值最少的3名敌方单位增加(12-当前速度值)级[Vibration]强度(最少6级，每个波次最多1次)。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9729,
      name: '怀表：Type E',
      category: '震颤',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有增加[Vibration]强度，施加[Vibration]层数或施加特殊[Vibration]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果(不包括E.G.O技能，不包括待命人员)。

  友方单位增加[Vibration]强度，施加[Vibration]层数或施加特殊[Vibration]的3技能加算硬币威力+2，造成的伤害+25%。
  - 减算硬币技能改为基础威力+(8/硬币数)，而非加算硬币威力(最少+1，向下取整)

  增加[Vibration]强度，施加[Vibration]层数或施加特殊[Vibration]的友方单位与速度值低于自身至少2点的敌方单位拼点时，使该友方单位造成的伤害+(目标的[Vibration]强度)%(最多+25%)，造成伤害时对目标施加2层[DefenseDown](最多6层)。

  回合开始时，使速度值最高的1名敌方单位增加(12-当前速度值)级[Vibration]强度(最少6级)并对其施加层数相当于该数值一半的[Vibration](向上取整，若是异想体，则改为1个部位，每个波次最多1次)。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9730,
      name: '怀表：Type Y',
      category: '震颤',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有增加[Vibration]强度，施加[Vibration]层数或施加特殊[Vibration]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果(不包括E.G.O技能，不包括待命人员)。

  友方单位增加[Vibration]强度，施加[Vibration]层数或施加特殊[Vibration]的3技能加算硬币威力+2，造成的伤害+25%。
  - 减算硬币技能改为基础威力+(8/硬币数)，而非加算硬币威力(最少+1，向下取整)

  属于圣愚的人格改为3技能的硬币威力+2，造成的伤害+(25+(目标的[Vibration]强度与[Vibration]层数之和))%(最多+100%)。

  回合开始时，对属于圣愚的人格施加3层[Vibration]。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9731,
      name: '怀表：Type P',
      category: '震颤',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有增加[Vibration]强度，施加[Vibration]层数或施加特殊[Vibration]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果(不包括E.G.O技能，不包括待命人员)。

  友方单位增加[Vibration]强度，施加[Vibration]层数或施加特殊[Vibration]的3技能加算硬币威力+2，造成的伤害+25%。
  - 减算硬币技能改为基础威力+(8/硬币数)，而非加算硬币威力(最少+1，向下取整)

  增加[Vibration]强度，施加[Vibration]层数或施加特殊[Vibration]的友方单位与速度值高于自身至少2点的敌方单位拼点时，使该友方单位的拼点威力+2，造成的伤害+(目标的[Vibration]强度)%(最多+50%)。

  回合开始时，使速度值最少的3名友方单位按速度值由低到高分别获得5层[AttackUp]，3层[AttackUp]与2层[AttackUp]。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9751,
      name: '蛇蜕',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: `回合开始时，使全体友方单位获得2层[DefenseUp]。
  友方单位的攻击等级+(自身的[DefenseUp]层数/4) 。(最多+10)`,
        plus: `回合开始时，使全体友方单位获得4层[DefenseUp]。
  友方单位的攻击等级+(自身的[DefenseUp]层数/3) 。(最多+10)`,
        double_plus: `回合开始时，使全体友方单位获得4层[DefenseUp]。
  友方单位的攻击等级+(自身的[DefenseUp]层数/2) 。(最多+10)`,
      },
    },
    {
      id: 9752,
      name: '虚假的光相',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: `攻击命中时，使自身获得1层[Zazen]。(每个技能最多2次)
  若本回合自身受到敌方单位的技能攻击，则令获得的[Zazen]额外+1层。`,
        plus: `攻击命中时，使自身获得1层[Zazen]。(每个技能最多3次)
  若本回合自身受到敌方单位的技能攻击，则令获得的[Zazen]额外+1层。`,
        double_plus: `攻击命中时，使自身获得2层[Zazen]。(每个技能最多3次)
  若本回合自身受到敌方单位的技能攻击，则令获得的[Zazen]额外+1层。`,
      },
    },
    {
      id: 9753,
      name: '节拍器',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: '回合数为奇数时，使全体友方单位获得1层[AttackDmgUp]。回合数为偶数时，使全体友方单位获得1层[Protection]。',
        plus: '回合数为奇数时，使全体友方单位获得1层[AttackDmgUp]。回合数为偶数时，使全体友方单位获得1层[Protection]与1层[DefenseUp]。',
        double_plus:
          '回合数为奇数时，使全体友方单位获得1层[AttackDmgUp]与1层[AttackUp]。回合数为偶数时，使全体友方单位获得1层[Protection]与1层[DefenseUp]。',
      },
    },
    {
      id: 9754,
      name: '枷锁',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: '关卡开始时，使全体友方单位的体力上限增加(当前阶层×2)%(最多20%)',
        plus: '关卡开始时，使全体友方单位的体力上限增加(当前阶层×3)%(最多30%)',
        double_plus: '关卡开始时，使全体友方单位的体力上限增加(当前阶层×5)%(最多50%)',
      },
    },
    {
      id: 9755,
      name: '轻蔑的视线的轻蔑',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: `[第6顺位人格专属]

  战斗开始时，每有1个指定自身为目标的敌方单位的攻击技能，使自身造成的伤害+10%(最多+20%)

  战斗开始时，若自身被不低于2个技能指定为目标，则对指定自身的全体敌方单位造成(指定自身的技能数)点固定体力与理智伤害。(最多3点，不会对友方单位造成伤害)`,
        plus: `[第6顺位人格专属]

  战斗开始时，每有1个指定自身为目标的敌方单位的攻击技能，使自身造成的伤害+10%(最多+20%)

  战斗开始时，若自身被不低于2个技能指定为目标，则对指定自身的全体敌方单位造成(2×指定自身的技能数)点固定体力与理智伤害。(最多5点，不会对友方单位造成伤害)`,
        double_plus: `[第1、第6顺位人格专属]

  战斗开始时，每有1个指定自身为目标的敌方单位的攻击技能，使自身造成的伤害+10%(最多+30%)

  战斗开始时，若自身被不低于2个技能指定为目标，则对指定自身的全体敌方单位造成(2×指定自身的技能数)点固定体力与理智伤害。(最多10点，不会对友方单位造成伤害)`,
      },
    },
    {
      id: 9756,
      name: '未孵化的火种',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: '受到致死伤害时，攻击期间内体力固定为1点。该攻击结束后使自身恢复体力上限20%的体力(每场战斗最多1次)。',
        plus: `受到致死伤害时，攻击期间内体力固定为1点。该攻击结束后使自身恢复体力上限20%的体力(每场战斗最多1次)。

  若自身带有[Combustion]，则改为攻击期间内体力固定为1点。该攻击结束后使自身恢复体力上限30%的体力(以上效果合计每场战斗最多1次)。`,
        double_plus: `受到致死伤害时，攻击期间内体力固定为1点。该攻击结束后使自身恢复体力上限20%的体力(每场战斗最多1次)。

  若自身带有[Combustion]，则改为攻击期间内体力固定为1点。该攻击结束后使自身恢复体力上限40%的体力(以上效果合计每场战斗最多1次)。`,
      },
    },
    {
      id: 9757,
      name: '对羊接地插头',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: '战斗中受到攻击时，下回合对攻击者施加1层[Paralysis]。(每回合每名单位最多1次)',
        plus: `战斗中受到攻击时，下回合对攻击者施加1层[Paralysis]。(每回合每名单位最多1次)

  战斗开始时，若嫉妒完全共鸣数不低于5，则对全体敌方单位施加1层[Paralysis]。`,
        double_plus: '',
      },
    },
    {
      id: 9758,
      name: '王的残渣',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时若有解除待命的人格，则使其恢复10点理智值，获得2层[AttackUp]与2层[ParryingResultUp]，并获得其1、2、3技能对应的E.G.O资源各1个。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9759,
      name: '熄灭的提灯',
      category: '震颤',
      defaultRarity: 'I',
      descriptions: {
        base: `[第7顺位人格专属]

  技能或硬币效果对自身施加的[Vibration]层数额外+1层

  - 若攻击目标陷入混乱、士气低落或陷入恐慌，则改为额外+2层`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9760,
      name: '熄灭的烛台',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: `[第1顺位人格专属]

  回合开始时，若有敌方单位陷入混乱、士气低落或陷入恐慌，则对全体敌方单位施加1层[AttackDown]或1层[DefenseDown](每回合最多3次)

  攻击陷入混乱、士气低落或陷入恐慌的敌方单位时，对其施加1层[AttackDown]或1层[DefenseDown](每回合最多3次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9761,
      name: '影子怪物',
      category: '震颤',
      defaultRarity: 'III',
      descriptions: {
        base: `[第1、第2、第7、第8顺位人格专属]

  技能或硬币效果对自身施加的[Vibration]层数额外+1层
  - 若攻击目标陷入混乱、士气低落或陷入恐慌，则改为额外+2层

  回合开始时，若有敌方单位陷入混乱、士气低落或陷入恐慌，则对全体敌方单位施加2层[AttackDown]或2层[DefenseDown](每回合最多3次)

  攻击陷入混乱、士气低落或陷入恐慌的敌方单位时，对其施加1层[AttackDown]或1层[DefenseDown](每回合全体人格共计最多3次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9762,
      name: '包装盒',
      category: '泛用',
      defaultRarity: 'I',
      descriptions: {
        base: `友方单位技能命中时，使目标增加1级某1种随机效果的强度，该效果可能为[Combustion]、[Laceration]、[Vibration]、[Burst]或[Sinking](每回合最多3次)

  友方单位击杀敌方单位时，随机使1名友方单位获得1层某1种随机效果，该效果可能为[Breath]、[Charge]、[Agility]、[AttackUp]或[DefenseUp](每回合最多3次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9763,
      name: '包装缎带',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `回合开始时，使全体友方单位获得1层某1种随机效果，该效果可能为“暴怒~嫉妒[AttackDmgUp]”

  回合开始时，对全体敌方单位施加1层某1种随机效果，该效果可能为“暴怒~嫉妒[Vulnerable]”`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9764,
      name: '礼物',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: `友方单位技能命中时，使目标增加1级某2种随机效果的强度，该效果可能为[Combustion]、[Laceration]、[Vibration]、[Burst]或[Sinking](每回合最多3次)

  友方单位技能命中时，随机使2名友方单位获得1层某1种随机效果，该效果可能为[Breath]、[Charge]、[Agility]、[AttackUp]或[DefenseUp](每回合最多3次)

  回合开始时，使全体友方单位获得1层某2种随机效果，该效果可能为“暴怒~嫉妒[AttackDmgUp]”

  回合开始时，对全体敌方单位施加1层某2种随机效果，该效果可能为“暴怒~嫉妒[Vulnerable]”`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9765,
      name: '快乐的毛绒玩偶',
      category: '呼吸法',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合结束时，友方单位每有1个攻击技能造成了伤害，下回合使其增加2级[Breath]强度。
  - 若是集中遭遇战，则改为增加4级[Breath]强度。

  回合开始时，使现存体力最低的1名友方单位增加2级[Breath]强度并使其获得2层[Breath]与2层[Protection]。

  友方单位造成的伤害+(该单位理智值的绝对值)%(最少+0%)

  当拥有加算硬币技能的友方单位解除混乱时，使其恢复全部理智值(不对侵蚀的单位生效)。

  回合开始时，对拥有的技能全部为减算硬币技能的友方单位施加5层[Paralysis]。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9766,
      name: '默示契约更新',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: '若没有存活的[RequestedTarget]，则对友方单位攻击的首个敌方单位施加[RequestedTarget]。(每回合最多1次)',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9767,
      name: '黑焰烟斗',
      category: '突刺',
      defaultRarity: 'III',
      descriptions: {
        base: `[第1顺位友方单位专属]

  每回合使自身获得2层[Enhancement]并对自身施加1层[Vulnerable]

  若主要目标减少了防御等级，则攻击前使自身增加5级[Breath]强度

  傲慢[Pierce]技能造成的伤害+(50/硬币数)%。(包括E.G.O)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9768,
      name: '平等',
      category: '突刺',
      defaultRarity: 'III',
      descriptions: {
        base: '若敌方单位的[Pierce]抗性不高于1.5，则使其[Pierce]抗性+0.3',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9769,
      name: '迅捷指挥',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: `回合结束时，若本回合有[RetreatForCommon]的友方单位，则下回合开始时使速度值最高的1名友方单位获得2层[Enhancement]与1层[AttackDmgUp]

  战斗开始时，若本回合有解除待命的友方单位，则使解除待命的友方单位获得2层[Enhancement]与2层[Endurance]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9770,
      name: '齿轮碎片',
      category: '呼吸法',
      defaultRarity: 'II',
      descriptions: {
        base: `回合开始时，若自身带有[Breath]，则使自身获得2层[DefenseUp]与1层[Endurance]

  若自身带有[Breath]，则首个命中的硬币造成的伤害+10%

  若该硬币命中时暴击，则使其暴击时造成的伤害+20%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9771,
      name: '近身格斗术教材',
      category: '呼吸法',
      defaultRarity: 'III',
      descriptions: {
        base: `若可消耗[Bullet]的技能未消耗[Bullet]，则本回合与下回合使自身获得1层[Enhancement](每回合最多1次)

  获得[Bullet]时，本回合与下回合使3技能造成的伤害+50%

  使用消耗[Bullet]的技能时，使自身增加3级[Breath]强度并使自身获得1层[Breath]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9772,
      name: '点火手套',
      category: '烧伤',
      defaultRarity: 'III',
      descriptions: {
        base: `增加[Combustion]强度或施加特殊[Combustion]的基础攻击技能与敌方单位拼点胜利时，使其增加2级[Combustion]强度(每回合每名人格最多2次)

  施加[Combustion]层数的基础攻击技能与敌方单位拼点胜利时，对其施加2层[Combustion](每回合每名敌方单位最多3次)

  增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的基础攻击技能增加相当于其拥有量的攻击等级(最多3级)
  - 若该技能拥有量不低于3个，则额外增加2级攻击等级`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9773,
      name: '荆棘战斗靴',
      category: '破裂',
      defaultRarity: 'III',
      descriptions: {
        base: `施加[Burst]层数的基础攻击技能与敌方单位拼点胜利时，对其施加3层[Burst](每回合每名敌方单位最多2次)

  命中时，若目标敌方单位未带有[Burst]，则增加[Burst]强度的硬币效果改为施加[Burst]层数(最多4层，每回合每名敌方单位最多2次，若是异想体则改为每个部位)

  增加[Burst]强度或施加[Burst]层数的基础攻击技能增加相当于其拥有量的攻击等级(最多3级)
  - 若该技能拥有量不低于3个，则额外增加2级攻击等级`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9774,
      name: '重燃火花塞',
      category: '烧伤',
      defaultRarity: 'III',
      descriptions: {
        base: `施加[Combustion]层数的基础攻击技能造成的伤害+20%，施加的[Combustion]层数额外+1层。该技能命中带有[Combustion]或特殊[Combustion]的敌方单位时，对其施加1层[DefenseDown]（每回合每名人格最多2次）

  回合开始时，使所有基础攻击技能均为增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的技能的人格获得层数相当于其存活回合数的[AttackUp]（不包括登场回合，最多5层）`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9775,
      name: '强化剂Mk.4',
      category: '破裂',
      defaultRarity: 'III',
      descriptions: {
        base: `增加[Burst]强度或施加[Burst]层数的基础攻击技能的最后一枚硬币命中[Burst]强度不高于15级的敌方单位时，对其施加3层[Burst](每回合每名人格最多1次)

  施加[Burst]层数的基础攻击技能的拼点威力+1，造成的伤害+20%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9776,
      name: '余火',
      category: '烧伤',
      defaultRarity: 'III',
      descriptions: {
        base: `回合开始时，对全体敌方单位(若是异想体，则改为以部位判定)施加1~2层[Combustion]

  带有[Combustion]的敌方单位受到友方单位增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的攻击技能(包括E.G.O技能)的攻击5次时，触发该敌方单位的[Combustion]1次，并使其[Combustion]层数减少1层(每回合每名敌方单位最多2次，若是异想体则改为每个部位)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9777,
      name: '细枝',
      category: '破裂',
      defaultRarity: 'III',
      descriptions: {
        base: `带有[Burst]的敌方单位因受到友方单位增加[Burst]强度或施加[Burst]层数的攻击技能(包括E.G.O技能)的攻击而触发[Burst]3次时，下回合对该敌方单位施加2层[AttackDown](每回合每名敌方单位最多3次，若是异想体则改为每个部位)

  通过施加[Burst]层数的基础攻击技能击杀敌方单位时，下回合将阵亡单位的[Burst]层数随机施加给1名敌方单位(每回合最多2次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9778,
      name: '常规作战用装备',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `属于边狱公司的人格的2技能攻击等级+1，造成的伤害+15%；3技能的攻击等级+2，造成的伤害+30%

  若待命人员中属于边狱公司的人格不低于4名，则回合开始时随机使2名友方单位获得2层[AttackUp]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9779,
      name: '作战批准卡',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `战斗中友方单位阵亡或[RetreatForCommon]时，下回合开始时随机使全体人格获得共计3层[AttackUp](每回合最多2次)
  - 若阵亡或[RetreatForCommon]的友方单位数不低于3名，则改为下回合开始时随机使全体友方单位获得共计6层[AttackUp](每回合最多2次)

  回合开始时，使理智值最低的3名友方单位分别恢复15点，10点与5点理智值(不会重复生效，按理智值由低到高顺序，不对侵蚀或陷入恐慌的单位生效)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9780,
      name: '高危作战用装备',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: `属于边狱公司的人格的2技能的攻击等级+2，造成的伤害+20%；3技能的攻击等级+3，造成的伤害+40%

  回合开始时，每有1名属于边狱公司的人格阵亡或待命，随机使1名友方单位获得2层[AttackUp]

  战斗中友方单位阵亡或[RetreatForCommon]时，下回合开始时随机使全体人格获得共计3层[AttackUp](平均分配，每回合最多2次)
  - 若阵亡或[RetreatForCommon]的友方单位不低于3名，则改为下回合开始时随机使全体友方单位获得共计6层[AttackUp]
  - 若阵亡或[RetreatForCommon]的属于边狱公司的人格不低于3名，则改为下回合开始时随机使全体人格获得共计8层[AttackUp]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9781,
      name: '木质酒杯',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `拼点失败时，使自身获得1层[Protection]并恢复3~6点理智值(每回合每名人格最多1次)。

  通过拼点失败的技能的[SuperCoin]效果(不包括E.G.O技能)攻击敌方单位时，加算硬币技能的加算硬币威力+(3/硬币数)，造成的伤害+20%(加算硬币威力最少+1)；减算硬币造成的伤害+40%。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9782,
      name: '陈旧的刀柄',
      category: '斩击',
      defaultRarity: 'III',
      descriptions: {
        base: `回合开始时，使所有友方单位获得1层[ScarletResultUp]。

  属于剑契组或黑云会的友方单位改为获得2层[ScarletResultUp]与1层[SlashResultUp]。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9783,
      name: '绝景',
      category: '流血',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若属于黑云会的人格不低于3名，则触发该效果(以参战人员为基准)。

  回合开始时，使全体友方单位获得2层[ScarletResultUp]与1层[SlashResultUp]。

  属于黑云会的人格的基础攻击技能硬币威力+(4/硬币数)(最少+1)，增加的[Laceration]强度额外+1级，施加的[Laceration]层数额外+1层，造成的伤害+(80/硬币数)%。

  属于黑云会的人格第一混乱阈值无效，回合开始时若现存体力低于50%，则使自身获得2层[Protection]。本回合受到敌方单位伤害且属于黑云会的人格在下回合获得2层[Agility]。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9784,
      name: '琢磨',
      category: '斩击',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若属于剑契组的人格不低于3名，则触发该效果(以参战人员为基准)。

  回合开始时，使全体友方单位获得2层[SlashResultUp]并使其造成的伤害+35%。

  属于剑契组的人格对敌方单位造成暴击时，对目标额外造成(自身的[Breath]强度/2)点傲慢伤害。

  回合结束时，若属于剑契组的人格的[Breath]强度不低于30级，则消耗其10级[Breath]强度并在下回合使其获得2层[SlashDamageUp]。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9785,
      name: '丛云',
      category: '斩击',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若属于黑云会的人格不低于3名，则触发该效果(以参战人员为基准)。

  使用基础攻击技能的[SuperCoin]命中时造成的伤害+(40/硬币数)%(不包括E.G.O技能)，若该人格属于黑云会，则改为造成的伤害+(80/硬币数)%。

  使拥有[Slash]基础攻击技能且属于黑云会的人格获得2层[SlashDamageUp]，回合结束时属于黑云会的人格每失去10%的体力，下回合使其获得1层[AttackUp]与1层[DefenseUp](分别最多5层)。

  若属于黑云会的人格阵亡，下回合使属于黑云会的全体人格获得2层[AttackDmgUp](每回合最多1次)。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9786,
      name: '强化纹身-中指',
      category: '打击',
      defaultRarity: 'II',
      descriptions: {
        base: `[Blunt]技能的拼点威力+1
  - 属于中指的人格改为拼点威力+1，硬币威力+1
  - 属于中指的人格的主要目标带有[RetaliationBook]时，改为拼点威力+1，硬币威力+1，造成的伤害+10%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9787,
      name: '异文符咒',
      category: '破裂',
      defaultRarity: 'II',
      descriptions: {
        base: `自身的攻击技能击杀带有[Burst]的目标(若是集中遭遇战，则改为破坏部位)时，将目标的[Burst]强度施加给全体敌方单位(若是集中遭遇战，则改为所有部位)(每名敌方单位最多2级，向下取整)

  自身的攻击技能击杀带有[BurstAgility]的目标(若是集中遭遇战，则改为破坏部位)时，将目标的[Burst]强度与层数施加给全体敌方单位(若是集中遭遇战，则改为所有部位)(每名敌方单位最多2点，向下取整)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9788,
      name: '卯足',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: '若自身的速度值高于目标，则令自身通过技能增加[Burst] 强度或施加[Burst] 层数时额外增加(速度值之差/3)级[Burst] 强度或额外施加(速度值之差/3)层[Burst] ',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9789,
      name: '忠义锁链',
      category: '打击',
      defaultRarity: 'III',
      descriptions: {
        base: `友方单位受到攻击时，使与该友方单位属于同一阵营的全体人格造成的[Blunt]伤害+5%(每回合最多+15%)

  属于中指的人格改为获得1层[AttackUp]并使造成的[Blunt]伤害+10%(每回合最多3次，每回合最多+30%)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9790,
      name: '镌刻的异文',
      category: '破裂',
      defaultRarity: 'III',
      descriptions: {
        base: `与带有[Burst]的目标拼点时，使自身的拼点威力+(目标的[Burst]强度/20)(最多+2)
  - 与带有[BurstAgility]的目标拼点时，改为使自身的拼点威力+(目标的[Burst]强度/15)(最多+3)

  通过[BurstAgility]效果造成伤害时，对目标造成([BurstAgility]伤害量/3)点固定伤害`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9791,
      name: '影织斗笠',
      category: '斩击',
      defaultRarity: 'III',
      descriptions: {
        base: `回合结束时，使属于黑兽 - 卯的友方单位在下回合获得2层[Agility]

  若自身的速度值高于目标或进行单方面攻击，则(速度值之差/3)每有1点，使自身造成的[Slash]伤害+10%(最多+30%)

  若自身的速度值高于目标，则(速度值之差/3)每有1点，使自身受到的伤害-10%(最多-30%)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9792,
      name: '永恒的缘分锁链',
      category: '打击',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若属于中指的人格不低于2名，则触发该效果(以参战人员为基准)

  友方单位受到攻击时，使与该友方单位属于同一阵营的全体人格造成的[Blunt]伤害+5%(每回合最多+15%)
  属于中指的人格改为获得1层[AttackUp] 并使造成的[Blunt]伤害+10%(每回合最多3次，每回合最多+30%)

  [Blunt]技能的基础威力+1
  - 属于中指的人格改为基础威力+1，硬币威力+1
  - 属于中指的人格的主要目标带有[RetaliationBook]时，改为基础威力+1，硬币威力+1，造成的伤害+10%

  属于中指的人格在本场战斗中的最小速度值+1，最大速度值+1`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9793,
      name: '漆字琉璃钿',
      category: '破裂',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有增加[Burst]强度或施加[Burst]层数的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  自身的攻击技能击杀带有[Burst]的目标(若是集中遭遇战，则改为破坏部位)时，将目标的[Burst]强度施加给全体敌方单位(若是集中遭遇战，则改为所有部位)(每名敌方单位最多3级)

  自身的攻击技能击杀带有[BurstAgility]的目标(若是集中遭遇战，则改为破坏部位)时，将目标的[Burst]强度与层数施加给全体敌方单位(若是集中遭遇战，则改为所有部位)(每名敌方单位最多6点)

  与带有[Burst]的目标拼点时，使自身的拼点威力+(目标的[Burst]强度/20)(最多+2)
  - 与带有[BurstAgility]的目标拼点时，改为使自身的硬币威力+(目标的[Burst]强度/10)(最多+2)

  通过[BurstAgility]效果造成伤害时，对目标造成([BurstAgility]伤害量/2)点固定伤害`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9794,
      name: '满满当当的燃料罐',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `[第2、第4顺位人格专属]

  受到使体力降至0点的伤害时，以60%的概率不会受到伤害并使自身恢复30点体力(每场战斗最多1次)
  以下情况不会触发避免阵亡与体力恢复效果
  - 受到攻击时技能造成的伤害高于自身体力上限
  - 自身带有[TakeHpHealReduce] 效果`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9403,
      name: '黑檀胸针',
      category: '破裂',
      defaultRarity: 'II',
      descriptions: {
        base: `关卡的首个回合开始时，使全体敌方单位增加2级[Burst]强度并对其施加2层[Burst]

  3回合内，回合结束时对全体敌方单位施加2层[Binding]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9404,
      name: '封装蛆虫',
      category: '流血',
      defaultRarity: 'III',
      descriptions: {
        base: `色欲或暴食攻击技能命中敌方单位(不包括E.G.O技能)时，对其施加2层[Muckworm]

  若该技能为增加[Laceration]强度，施加[Laceration]层数或施加特殊[Laceration]的技能，则改为对目标施加3层[Muckworm]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9407,
      name: '定制',
      category: '震颤',
      defaultRarity: 'II',
      descriptions: {
        base: `[第3顺位人格专属]

  关卡开始时，对自身施加3层[Vibration]

  回合开始时，使自身获得1层[Protection]，1层[AttackDmgUp]与1层[ResultEnhancement]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9408,
      name: '鬼附鞋',
      category: '沉沦',
      defaultRarity: 'II',
      descriptions: {
        base: `[第2顺位人格专属]

  关卡开始时，对自身施加3层[Sinking]

  回合开始时，使自身获得1层[Protection]，1层[AttackDmgUp]与1层[ResultEnhancement]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9409,
      name: '冰封的哀嚎',
      category: '沉沦',
      defaultRarity: 'II',
      descriptions: {
        base: `回合开始时，适用于速度值最低的1名人格

  该友方单位拼点胜利或受到敌方单位攻击时，使敌方单位增加3级[Sinking]强度`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9410,
      name: '霜冻足迹',
      category: '沉沦',
      defaultRarity: 'IV',
      descriptions: {
        base: `波次的首个回合开始时，对全体友方单位施加3层[Sinking]。使全体敌方单位(若是异想体，则改为所有部位)增加4级[Sinking]强度并对其施加8层[Sinking]。

  带有[Sinking]的敌方单位拼点威力-2，受到该效果的敌方单位与友方人格拼点失败时，使该敌方单位增加2级[Sinking]强度；攻击友方人格时，使该敌方单位增加3级[Sinking]强度。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9413,
      name: '钉与锤之书',
      category: '流血',
      defaultRarity: 'II',
      descriptions: {
        base: `友方单位增加[Laceration]强度，施加[Laceration]层数或施加特殊[Laceration]的技能拼点胜利时，对目标施加1~2层[NailPersonality]

  若该友方单位属于N公司狂信徒，则回合开始时使其获得1层狂信 `,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9414,
      name: '血红鬃毛',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: `适用于全体拥有暴怒或色欲攻击技能的人格

  回合结束时，若本回合自身未受到敌方攻击技能的伤害，则下回合使自身获得2层[Agility]与2层[Endurance]

  回合结束时，若本回合自身受到过敌方攻击技能的伤害，则下回合对自身施加2层[Binding]并使自身的拼点威力+2`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9415,
      name: '污秽',
      category: '流血',
      defaultRarity: 'II',
      descriptions: {
        base: `友方单位增加[Laceration]强度，施加[Laceration]层数或施加特殊[Laceration]的技能攻击带有[Laceration]的敌方单位时，使该友方单位对目标造成的伤害+15%

  若目标现存体力不高于体力上限的33%，则改为造成的伤害+25%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9416,
      name: '完全性',
      category: '流血',
      defaultRarity: 'IV',
      descriptions: {
        base: `友方单位增加[Laceration]强度，施加[Laceration]层数或施加特殊[Laceration]的技能拼点胜利时，对目标施加2~3层[NailPersonality]

  属于N公司狂信徒的人格对敌方单位造成的伤害+25%并在回合开始时获得1层狂信 。若该人格的理智值为最大值或上回合色欲共鸣数不低于3，则额外使该人格获得3层[AttackDmgUp]。

  属于N公司狂信徒的人格的最终威力+2，加算硬币威力+1，减算硬币威力-1，攻击技能施加的[NailPersonality]层数额外+1层。

  属于N公司狂信徒的人格基础技能对属于<机械融合生命体>的敌方单位造成的伤害+50%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9419,
      name: '山茶花枝',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `本场战斗中，1技能，2技能与3技能均使用1次后，下回合触发效果

  回合开始时，获得1层[Agility]与1层[SkillPowerUp](最多叠加3次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9420,
      name: '万花筒',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `回合开始时，若有与自身属于同一阵营的人格，则获得层数相当于除自身以外属于同一阵营的人格数的[AttackUp](最多4层)

  属于技术[UnlockBuff_Base]联盟的人格拼点威力+1`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9423,
      name: '破碎的眼镜',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: `友方单位与速度值高于自身的敌方单位拼点时，使该友方单位拼点威力+1

  友方单位与速度值高于自身的敌方单位拼点胜利时，下回合使该友方单位获得2层[AttackUp](最多4层)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9424,
      name: '未寄出的信',
      category: '破裂',
      defaultRarity: 'IV',
      descriptions: {
        base: `[第1、第2顺位人格专属]

  增加[Burst]强度或施加[Burst]层数的攻击技能拼点胜利时，使目标增加5级[Burst]强度并对其施加3层[Burst](每回合每名人格最多1次)。

  与速度值低于自身的敌方单位拼点时，使自身的最终威力+1，造成的伤害+25%。

  与带有[AttackUp]的敌方单位拼点胜利时，下回合使自身获得3层[AttackUp]并对拼点失败的敌方单位施加3层[AttackDown](每回合每名人格最多3次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9429,
      name: '捕鲸枪义腿',
      category: '呼吸法',
      defaultRarity: 'II',
      descriptions: {
        base: `回合结束时，使[Breath]强度与[Breath]层数之和最高的1名友方单位在下回合获得2层[Agility]，2层[AttackUp]与2层[AttackDmgUp]。

  属于裴廓德号的人格最大速度值+1。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9430,
      name: '照亮前方的汽灯',
      category: '呼吸法',
      defaultRarity: 'IV',
      descriptions: {
        base: `波次的首个回合开始时，使全体友方单位增加5级[Breath]强度并获得5层[Breath]

  回合结束时，[Breath]强度与[Breath]层数之和最高的1名友方单位在下回合获得2层[Agility]，3层[AttackUp]与3层[AttackDmgUp]

  属于裴廓德号的人格技能威力+2，最大速度值+2`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9433,
      name: '首席管家的秘籍',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `波次的首个回合开始时，选择速度值最低的1名敌方单位(若是异想体，则随机1个部位)，从下回合起，5回合内对其施加5层[Binding]。

  拼点胜利时，若自身的速度值高于目标，则使自身恢复相当于速度值之差的理智值，并使拼点胜利的技能增加相当于速度值之差一半的攻击等级(仅适用于拼点胜利的技能。最多增加3级)。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9434,
      name: '手镜',
      category: '震颤',
      defaultRarity: 'III',
      descriptions: {
        base: `波次的首个回合开始时，选择速度值最低的2名敌方单位(若是异想体，则改为随机2个部位。单个敌方单位不会叠加)，下回合开始时对其施加5层[Binding]与3层[DefenseDown]。

  敌方单位解除混乱时，若其未拥有混乱阈值，则在其现存体力66%处生成1条混乱阈值(每场战斗最多3次)。友方单位增加[Vibration]强度或施加[Vibration]层数的攻击技能(包括对自身或友方单位施加)使敌方单位陷入混乱时(不包括E.G.O技能)，下回合使其他敌方单位(若是异想体，则改为以部位判定)增加共计相当于目标[Vibration]强度一半的[Vibration]强度，使陷入混乱的目标的[Vibration]强度变为2倍。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9427,
      name: '守镇鱼叉',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: `[第6顺位人格专属]
  回合结束时，若现存体力低于体力上限的30%，则下回合使自身获得1层[Enhancement]`,
        plus: `[第6顺位人格专属]
  回合结束时，若现存体力低于体力上限的40%，则下回合使自身获得1层[Enhancement]

  回合结束时，若有友方单位陷入混乱，则下回合使自身的[Aggro]+6，并使自身获得4层[DefenseUp]`,
        double_plus: `[第6顺位人格专属]
  回合结束时，若现存体力低于体力上限的50%，则下回合使自身获得1层[Enhancement]

  回合结束时，若有友方单位陷入混乱，则下回合使自身的[Aggro]+6，并使自身获得4层[DefenseUp]`,
      },
    },
    {
      id: 9428,
      name: '鲸心',
      category: '呼吸法',
      defaultRarity: 'IV',
      descriptions: {
        base: `使用攻击技能命中带有[Laceration]或特殊[Laceration]的敌方单位时，使自身增加1级[Breath]强度。(每回合每名人格最多3次)

  暴击命中时，以50%的概率在下回合使自身获得1层[PenetrateResultUp](每回合每名人格最多2次，包括E.G.O技能与反击技能)

  基础技能正面命中并暴击时，令该硬币对目标施加的负面状态额外+1。(每回合每名人格最多1次，不包括E.G.O技能，包括反击技能)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9431,
      name: '损坏的小提琴',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `[第5、第6顺位人格专属]

  若现存体力不高于45%，则拼点胜利时使自身获得1层[AttackUp]与1层[TakeHpHealIncrease](每回合每名单位最多2次)

  若现存体力不高于20%，则改为使用技能时使自身获得1层[AttackUp]与1层[TakeHpHealIncrease](每回合每名单位最多2次)`,
        plus: `[第5、第6顺位人格专属]

  若现存体力不高于65%，则拼点胜利时使自身获得1层[AttackUp]与1层[TakeHpHealIncrease](每回合每名单位最多2次)

  若现存体力不高于40%，则改为使用技能时使自身获得1层[AttackUp]与1层[TakeHpHealIncrease](每回合每名单位最多2次)

  拼点胜利且拼点次数不低于5次时，使拼点胜利的技能造成的伤害+(拼点次数×2)%(最多+20%)`,
        double_plus: `[第5、第6顺位人格专属]

  若现存体力不高于65%，则拼点胜利时使自身获得1层[AttackUp]与1层[TakeHpHealIncrease](每回合每名单位最多2次)

  若现存体力不高于40%，则改为使用技能时使自身获得1层[AttackUp]与1层[TakeHpHealIncrease](每回合每名单位最多2次)

  拼点胜利且拼点次数不低于5次时，使拼点胜利的技能造成的伤害+(拼点次数×3)%(最多+30%)`,
      },
    },
    {
      id: 9432,
      name: '宅邸模型八音盒',
      category: '沉沦',
      defaultRarity: 'III',
      descriptions: {
        base: `回合结束时，若自身陷入混乱，则解除自身的混乱，下回合开始时使全体敌方单位增加4级[Sinking]强度并对其施加4层[Sinking](每场战斗最多1次；不包括强制混乱；若是集中遭遇战，则改为所有部位)

  击杀敌方单位时，对[Sinking]层数最低的1名敌方单位施加2层[Sinking](每回合最多3次；若是集中遭遇战，则改为1个部位)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9435,
      name: '管家式束缚法',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: `回合开始时，对上回合解除混乱的敌方单位施加1层[Binding]

  现存体力比例最高的友方单位攻击命中时，若目标陷入混乱，则每层混乱阶段使造成的伤害+7.5%`,
        plus: `回合开始时，对上回合解除混乱的敌方单位施加2层[Binding]

  现存体力比例最高的友方单位攻击命中时，若目标陷入混乱，则每层混乱阶段使造成的伤害+10%`,
        double_plus: `回合开始时，对上回合解除混乱的敌方单位施加3层[Binding]

  现存体力比例最高的友方单位攻击命中时，若目标陷入混乱，则每层混乱阶段使造成的伤害+12.5%`,
      },
    },
    {
      id: 9436,
      name: '折射玻璃管',
      category: '沉沦',
      defaultRarity: 'IV',
      descriptions: {
        base: `常规遭遇战中，命中[Sinking]强度与[Sinking]层数之和不低于10点的敌方单位时，若目标的理智值为-45点，
  则对其造成(其[Sinking]强度/2)点忧郁伤害(每个技能最多1次)

  集中遭遇战中，命中[Sinking]强度与[Sinking]层数之和不低于10点的敌方单位时，
  对目标造成(其[Sinking]强度/2)点忧郁伤害(每个技能最多1次)

  若命中敌方单位的技能为施加[Sinking](包括施加[Sinking]层数与特殊<noparse>[Sinking]</noparse>)的技能，则改为其造成(其[Sinking]强度)点忧郁伤害，而非([Sinking]强度/2)点
  (适用于每回合首个攻击命中的施加[Sinking]的技能)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9437,
      name: '拉·曼却领自由通行券',
      category: '流血',
      defaultRarity: 'III',
      descriptions: {
        base: '攻击命中[Laceration]强度、特殊[Laceration]与[Burst]强度之和不低于10点的敌方单位时，使自身增加1级[Breath]强度并使自身获得1层[Breath](每个技能最多2次)',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9438,
      name: '胜利之证',
      category: '流血',
      defaultRarity: 'III',
      descriptions: {
        base: `击杀敌方单位时，使理智值最低的1名友方单位恢复3点理智值。

  攻击结束后，若有[Laceration]强度、特殊[Laceration]与[Burst]强度之和不低于10点的敌方单位阵亡，则下回合使1名友方单位获得2层[AttackUp](优先指定击杀该敌方单位的友方单位)。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9439,
      name: '吞噬一切的魔方',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: `友方单位阵亡时，获得其1、2技能对应的E.G.O资源各1个。

  攻击结束后，若敌方单位阵亡，则随机获得1个E.G.O资源(每个技能最多1次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9440,
      name: '游行的面具',
      category: '流血',
      defaultRarity: 'IV',
      descriptions: {
        base: `遭遇战中新的敌方单位增援时，战斗开始时使其增加3级[Laceration]强度并对其施加2层[Laceration]。

  若友方单位中存在<血魔>，则新的敌方单位增援时触发全体敌方单位的[Laceration]1次，并使全体敌方单位的[Laceration]层数减少1层`,
        plus: `遭遇战中新的敌方单位增援时，战斗开始时使其增加5级[Laceration]强度并对其施加3层[Laceration]。

  若友方单位中存在<血魔>，则新的敌方单位增援时触发全体敌方单位的[Laceration]1次，并使全体敌方单位的[Laceration]层数减少1层`,
        double_plus: '',
      },
    },
    {
      id: 9205,
      name: '全血烧瓶',
      category: '流血',
      defaultRarity: 'II',
      descriptions: {
        base: `击杀敌方单位时，获得(其体力上限/10)层[BloodDinner](最多50层)
  回合结束时，若本回合有友方单位阵亡，则下回合使全体友方单位获得2层[Enhancement]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9206,
      name: '血香降临',
      category: '流血',
      defaultRarity: 'III',
      descriptions: {
        base: `战斗开始前体力最低的1名友方单位的施加[Laceration]或特殊[Laceration]的攻击技能命中时，使其恢复体力上限3%的体力(每回合最多2次)

  使用施加[Laceration]或特殊[Laceration]的技能与带有[Laceration]或特殊[Laceration]的敌方单位进行拼点时，使该技能的拼点威力+1
  - 若拥有施加[Laceration]或特殊[Laceration]的攻击技能的人格不低于5名，则改为拼点威力+1，造成的伤害+10%(包括编队中全体单位)
  - 若不低于10名，则改为拼点威力+2，造成的伤害+15%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9817,
      name: '蓝星碎片',
      category: '沉沦',
      defaultRarity: 'III',
      descriptions: {
        base: `士气低落或陷入恐慌的敌方单位技能的最终威力-1(未带有理智值的敌方单位改为带有的[Sinking]强度不低于25级时触发)
  - 增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的技能对该敌方单位造成伤害时，对其施加2层[DefenseDown](每回合最多2次)`,
        plus: `士气低落或陷入恐慌的敌方单位技能的最终威力-2(未带有理智值的敌方单位改为带有的[Sinking]强度不低于15级时触发)
  - 增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的技能对该敌方单位造成伤害时，对其施加3层[DefenseDown](每回合最多2次)`,
        double_plus: `士气低落或陷入恐慌的敌方单位技能的最终威力-3(未带有理智值的敌方单位改为带有的[Sinking]强度不低于10级时触发)
  - 增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的技能对该敌方单位造成伤害时，对其施加3层[DefenseDown](每回合最多3次)`,
      },
    },
    {
      id: 9818,
      name: '被遗落的次元护手',
      category: '充能',
      defaultRarity: 'III',
      descriptions: {
        base: '消耗[Charge]层数或特殊[Charge]的技能对敌方单位造成伤害时，本回合使其物理抗性中最低的抗性+0.1(每回合最多1次)',
        plus: `消耗[Charge]层数或特殊[Charge]的技能对敌方单位造成伤害时，本回合使其物理抗性中最低的抗性+0.1(每回合最多1次)
  - 并对其施加1层[VioletResistDown]`,
        double_plus: `消耗[Charge]层数或特殊[Charge]的技能对敌方单位造成伤害时，本回合使其物理抗性中最低的抗性+0.1(每回合最多2次)
  - 并对其施加1层[VioletResistDown]与1层[AzureResistDown]`,
      },
    },
    {
      id: 9840,
      name: 'W公司制式帽子',
      category: '充能',
      defaultRarity: 'II',
      descriptions: {
        base: '使用获得[Charge]层数或特殊[Charge]的技能后，使自身获得相应层数的[EmergencyChargeForceField](每个人格最多7层)',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9841,
      name: 'C型清扫人员装备套组',
      category: '充能',
      defaultRarity: 'IV',
      descriptions: {
        base: `使用获得[Charge]层数或特殊[Charge]的技能后，使自身获得相应层数的[EmergencyChargeForceField](每名人格最多7层)

  消耗[Charge]层数或特殊[Charge]的技能造成的伤害+(编队中拥有获得或消耗[Charge]层数或特殊[Charge]的人格数)%(包括编队中全体单位)

  消耗[Charge]层数或特殊[Charge]的1技能的拼点威力+3，造成的伤害+15%
  - 使用该技能时，使自身获得4层[Charge]与1层[ChargeForceField](每回合每名人格最多1次)

  使基础技能施加次元裂痕且不属于W公司的人格中最先编入的1名人格视作属于W公司的人格
  属于W公司的人格获得以下效果
  - 通过技能(包括E.G.O技能)对敌方单位造成伤害时，对其施加2层[TakeHpHealReduce](不可叠加)
  - 战斗中，自身受到除技能直接伤害以外的体力伤害时，使自身获得5层[ChargeForceField](每回合每名人格最多1次)
  - 2技能的拼点威力+3，造成的伤害+15%
  - 回合开始时，本回合使自身3技能造成的伤害+(属于W公司的人格数×6.25)%
  - 回合开始时，使属于W公司 2级 员工的单位获得1层[PlusCoinValueUp]
  - 回合开始时，使自身获得(参战且属于W公司的人格数/3)层[ChargeLoad](最多2层，向下取整)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9842,
      name: '由血而成之肉，由肉而成之血',
      category: '流血',
      defaultRarity: 'III',
      descriptions: {
        base: `根据编入的拥有消耗[BloodDinner]的攻击技能的人格数，相应强化本饰品效果(不包括E.G.O技能，包括编队中全体单位)

  波次的首个回合开始时，获得(编入单位数×20)层[BloodDinner]，使全体目标增加3级[Laceration]强度并对其施加3层[Laceration](每波次最多获得100层[BloodDinner])

  友方单位受到的[Laceration]伤害-(编入单位数×10)%(受到的[Laceration]伤害最少为1点，最多-40%)
  - 减少的伤害不会影响生成的[BloodDinner]

  敌方单位受到的[Laceration]伤害+(编入单位数×5)%(最多+20%)。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9843,
      name: '硬血长柄刀',
      category: '流血',
      defaultRarity: 'III',
      descriptions: {
        base: `根据编入的拥有消耗[BloodDinner]的攻击技能的人格数，相应强化本饰品效果(不包括E.G.O技能，包括编队中全体单位)

  关卡开始时，使全体友方单位获得(编入单位数-2)层[BloodArmorCasting](最多3层)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9732,
      name: '经济舱折扣券',
      category: '泛用',
      defaultRarity: 'I',
      descriptions: {
        base: '回合结束时，使速度值最低且不高于5的1名人格在下回合获得1层[Agility]。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9733,
      name: '罐装冰淇淋',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: `友方单位通过自身的攻击技能效果失去体力时，下回合开始时使其恢复相当于该攻击技能效果失去体力一半的体力。(向下取整)

  友方单位通过E.G.O技能效果恢复体力时，使其恢复的体力+12.5%。(向下取整)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9734,
      name: 'E型次元短剑',
      category: '充能',
      defaultRarity: 'III',
      descriptions: {
        base: `获得[Charge]层数或特殊[Charge]的1技能拼点威力+1，造成的伤害+5%。

  若该技能为单硬币技能，则改为拼点威力+1，造成的伤害+12.5%

  属于W公司的人格通过嫉妒技能(包括E.G.O技能)对敌方单位造成伤害时，对该敌方单位施加2层[TakeHpHealReduce] 。(不可叠加)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9735,
      name: '便携式力场电池',
      category: '充能',
      defaultRarity: 'III',
      descriptions: {
        base: `获得[Charge]层数或特殊[Charge]的1技能拼点威力+2。

  友方单位使用获得[Charge]层数的1技能时，使其获得2层[Charge]与1层[ChargeForceField]。(每回合最多1次)

  战斗中，属于W公司的人格受到除技能直接伤害以外的体力伤害时，使其获得5层[ChargeForceField]。(每回合最多1次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9736,
      name: '生物发电电池',
      category: '充能',
      defaultRarity: 'II',
      descriptions: {
        base: `带有[Charge]层数或特殊[Charge]的友方单位每次拼点时，使其增加1级攻击等级。(最多6级，攻击后重置)

  回合结束时，使[Charge]层数与特殊[Charge](固定强度)之和不低于10层的人格在下回合获得1层[Agility]。若[Charge]层数与特殊[Charge](固定强度)之和不低于18层，则额外获得3层[AttackUp]。

  ※ 拥有强度与层数的特殊[Charge]以其层数计算`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9737,
      name: '心脏反应模块',
      category: '充能',
      defaultRarity: 'II',
      descriptions: {
        base: `带有[Charge]层数或特殊[Charge]的友方单位拼点失败时，使其获得相当于其[Charge]层数与特殊[Charge]之和的护盾。(每回合最多1次)

  若其现存体力不高于50%，则改为获得(其[Charge]层数与特殊[Charge]之和×2)点护盾。(每回合最多1次)

  本场战斗中，属于多裂纹事务所的人格受到体力伤害时，下回合使其恢复上回合失去体力33%的体力(向下取整)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9738,
      name: '义体关节伺服电机',
      category: '充能',
      defaultRarity: 'II',
      descriptions: {
        base: `根据友方单位本回合使用的获得[Charge]层数或特殊[Charge]的基础攻击技能数，下回合使其获得相应层数的[Agility]与[Charge]。(最多2次)

  属于多裂纹事务所的人格通过基础攻击技能获得或消耗[Charge]层数时，使其额外获得1层[Charge]。(最多2层)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9739,
      name: '血液结晶',
      category: '流血',
      defaultRarity: 'II',
      descriptions: {
        base: '回合结束时，若自身带有[Laceration]，则使自身的[Laceration]强度减半并使自身恢复(减少的[Laceration]强度×自身的[Laceration]层数)点体力。(向下取整，每次最多恢复体力上限10%的体力)',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9740,
      name: '自动式关节',
      category: '充能',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有获得[Charge]层数或特殊[Charge]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  消耗[Charge]层数或特殊[Charge]的加算硬币基础攻击技能硬币威力+1，造成的伤害+(该技能消耗的[Charge]层数与特殊[Charge]之和×4)%。(最多+40%)
  - 减算硬币技能改为基础威力+(4/硬币数)，而非硬币威力(最少+1，向下取整)

  回合结束时，带有[Charge]层数或特殊[Charge]的友方单位根据本场战斗中使用的消耗[Charge]层数或特殊[Charge]的基础攻击技能数，下回合使其获得相应层数的[Agility](最多2层)与[AttackDmgUp](最多3层)。

  属于多裂纹事务所且[Charge]强度不低于5级的人格基础攻击技能的硬币威力+1。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9741,
      name: '过度充能电池',
      category: '充能',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有获得[Charge]层数或特殊[Charge]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  消耗[Charge]层数或特殊[Charge]的加算硬币基础攻击技能硬币威力+1，造成的伤害+(该技能消耗的[Charge]层数与特殊[Charge]之和×4)%。(最多+40%)
  - 减算硬币技能改为基础威力+(4/硬币数)，而非硬币威力(最少+1，向下取整)

  带有[Charge]层数或特殊[Charge]的友方单位基础攻击技能拼点时，使其拼点威力+2。拼点胜利时使其获得3层[Charge]，拼点失败时使其失去6层[Charge]。

  嫉妒基础攻击技能拼点胜利时，对目标施加1层[VioletTakeDamageUp]。(最多叠加3层)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9742,
      name: '永动伺服电机',
      category: '充能',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有获得[Charge]层数或特殊[Charge]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  消耗[Charge]层数或特殊[Charge](固定强度)的加算硬币基础攻击技能硬币威力+1，造成的伤害+(该技能消耗的[Charge]层数与特殊[Charge](固定强度)之和×4)%。(最多+40%)
  - 减算硬币技能改为基础威力+(4/硬币数)，而非硬币威力(最少+1，向下取整)

  带有[Charge]层数或特殊[Charge]的友方单位基础攻击技能拼点时，使其拼点威力+1。回合开始时，本场战斗中每拼点胜利1次，使其获得2层[AttackUp]。(最多6层)

  本场战斗中，友方单位受到致死伤害时，消耗其所有[Charge]层数与特殊[Charge](固定强度)并使其立即恢复体力上限(10+消耗的[Charge]层数与特殊[Charge](固定强度)之和)%的体力(每场战斗最多1次)。使该友方单位获得3层[Protection]直到其阵亡。

  ※ 拥有强度与层数的特殊[Charge]以其层数计算`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9743,
      name: '心动力宝石',
      category: '充能',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有获得[Charge]层数或特殊[Charge]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  消耗[Charge]层数或特殊[Charge]的加算硬币基础攻击技能硬币威力+1，造成的伤害+(该技能消耗的[Charge]层数与特殊[Charge]之和×4)%。(最多+40%)
  - 减算硬币技能改为基础威力+(4/硬币数)，而非硬币威力(最少+1，向下取整)

  [Charge]层数与特殊[Charge]之和不低于15层的人格使用消耗[Charge]层数或特殊[Charge]的3技能时，若攻击后有剩余的[Charge]层数或特殊[Charge]，则消耗所有剩余的[Charge]层数与特殊[Charge]并对目标额外造成(消耗的[Charge]层数与特殊[Charge]之和×7.5)%的固定伤害。(最多75%)

  最大[Charge]层数+5。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9001,
      name: '炼狱炎蝶之梦',
      category: '烧伤',
      defaultRarity: 'II',
      descriptions: {
        base: `通过技能效果使已带有[Combustion]或特殊[Combustion]的敌方单位增加[Combustion]强度或施加特殊[Combustion]时，随机使敌方单位增加共计3级[Combustion]强度。

  激活暴怒完全共鸣时，战斗开始时，随机使敌方单位增加共计5级[Combustion]强度。`,
        plus: `通过技能效果使已带有[Combustion]或特殊[Combustion]的敌方单位增加[Combustion]强度或施加特殊[Combustion]时，随机使敌方单位增加共计4级[Combustion]强度。

  激活暴怒完全共鸣时，战斗开始时，随机使敌方单位增加共计6级[Combustion]强度。`,
        double_plus: `通过技能效果使已带有[Combustion]或特殊[Combustion]的敌方单位增加[Combustion]强度或施加特殊[Combustion]时，随机使敌方单位增加共计5级[Combustion]强度。

  激活暴怒共鸣时，战斗开始时，随机使敌方单位增加共计8级[Combustion]强度。`,
      },
    },
    {
      id: 9002,
      name: '倒错症',
      category: '泛用',
      defaultRarity: 'I',
      descriptions: {
        base: `通过攻击技能击杀不低于1名敌方单位时，下回合开始时获得1个击杀技能所对应的E.G.O资源。

  若该技能为暴怒技能，则改为下回合获得击杀者所有攻击技能对应的E.G.O资源各1个。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9003,
      name: '尘归尘',
      category: '烧伤',
      defaultRarity: 'I',
      descriptions: {
        base: '战斗开始时，若全体敌方单位(或所有异想体部位)都带有[Combustion]或特殊[Combustion]，则使全体敌方单位(或所有异想体部位)增加2级[Combustion]强度。',
        plus: '战斗开始时，使带有[Combustion]或特殊[Combustion]的全体敌方单位(或所有异想体部位)增加2级[Combustion]强度。',
        double_plus: '战斗开始时，使全体敌方单位(或所有异想体部位)增加3级[Combustion]强度。',
      },
    },
    {
      id: 9004,
      name: '采血包',
      category: '泛用',
      defaultRarity: 'I',
      descriptions: {
        base: `友方单位通过技能对敌方单位造成伤害时，使该友方单位恢复已失去体力12.5%的体力(每回合每名人格最多1次)。

  若该技能为暴怒技能，则改为恢复已失去体力25%的体力。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9005,
      name: '嗜伤甲虫',
      category: '流血',
      defaultRarity: 'II',
      descriptions: {
        base: '使用增加[Laceration]强度或施加特殊[Laceration]的技能对敌方单位造成伤害时，使目标增加4级[Laceration]强度。',
        plus: '使用增加[Laceration]强度或施加特殊[Laceration]的技能或暴怒技能对敌方单位造成伤害时，使目标增加5级[Laceration]强度。',
        double_plus:
          '使用增加[Laceration]强度或施加特殊[Laceration]的技能或暴怒技能对敌方单位造成伤害时，使目标增加5级[Laceration]强度并对其施加1层[Laceration]。',
      },
    },
    {
      id: 9006,
      name: '咖啡与纸鹤',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: `回合开始时，随机获得1个上回合使用的攻击技能属性以外的1种E.G.O资源。

  若上回合使用了色欲攻击技能，则改为获得上回合使用的攻击技能属性以外的所有E.G.O资源各1个。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9007,
      name: '朱红蛾群',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: `回合开始时，随机对1名敌方单位造成首次对敌方单位造成伤害的攻击技能伤害量50%的固定伤害。

  若该技能为色欲技能，则改为随机对2名敌方单位造成固定伤害。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9008,
      name: '染血铁钉',
      category: '流血',
      defaultRarity: 'I',
      descriptions: {
        base: `使用单硬币技能造成伤害时，使目标增加1级[Laceration]强度并直到下回合对其施加2层[DefenseDown]。

  若目标带有[Laceration]或特殊[Laceration]，则增加的[Laceration]强度改为3级。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9009,
      name: '炽热的羽毛',
      category: '烧伤',
      defaultRarity: 'II',
      descriptions: {
        base: `使用增加[Combustion]强度或施加特殊[Combustion]的技能或色欲技能对敌方单位造成伤害时，使目标增加3级[Combustion]强度。

  回合开始时，使[Combustion]强度不低于20级的全体敌方单位的[Combustion]强度变为2倍。`,
        plus: `使用增加[Combustion]强度或施加特殊[Combustion]的技能或色欲技能对敌方单位造成伤害时，使目标增加4级[Combustion]强度。

  回合开始时，使[Combustion]强度不低于20级的全体敌方单位的[Combustion]强度变为2倍。`,
        double_plus: `使用增加[Combustion]强度或施加特殊[Combustion]的技能或色欲技能对敌方单位造成伤害时，使目标增加4级[Combustion]强度。

  回合开始时，使[Combustion]强度不低于20级的全体敌方单位的[Combustion]强度变为2.5倍。`,
      },
    },
    {
      id: 9010,
      name: '鲜血装饰',
      category: '泛用',
      defaultRarity: 'I',
      descriptions: {
        base: `回合开始时，随机使1名友方单位获得2层[AttackDmgUp]。

  优先选取拥有色欲攻击技能的友方单位，且该情况下使其额外获得1层[AttackDmgUp]。`,
        plus: `回合开始时，随机使1名友方单位获得2层[AttackDmgUp]。

  优先选取拥有色欲攻击技能的友方单位，且该情况下使其额外获得2层[AttackDmgUp]。`,
        double_plus: `回合开始时，随机使2名友方单位获得2层[AttackDmgUp]。

  优先选取拥有色欲攻击技能的友方单位，且该情况下使其额外获得2层[AttackDmgUp]。`,
      },
    },
    {
      id: 9011,
      name: '狐雨',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `激活怠惰完全共鸣或使用攻击容量不低于2的技能时：

  战斗开始时，使全体友方单位技能威力+2。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9012,
      name: '此刻的神色',
      category: '打击',
      defaultRarity: 'II',
      descriptions: {
        base: '怠惰技能或[Blunt]技能攻击后，若敌方单位阵亡，则在除本回合以外的下2回合内使该友方单位的[Blunt]技能威力+2',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9013,
      name: '成捆的符咒',
      category: '破裂',
      defaultRarity: 'I',
      descriptions: {
        base: `使用单个技能对敌方单位造成不低于12点体力伤害时，使其增加2级[Burst]强度。

  若该技能为[Slash]技能，则改为增加4级[Burst]强度。`,
        plus: `使用单个技能对敌方单位造成不低于12点体力伤害时，使其增加3级[Burst]强度。

  若该技能为[Slash]技能，则改为增加5级[Burst]强度。`,
        double_plus: `使用单个技能对敌方单位造成不低于1点体力伤害时，使其增加3级[Burst]强度。

  若该技能为[Slash]技能，则改为增加5级[Burst]强度并施加1层[Burst]。`,
      },
    },
    {
      id: 9014,
      name: '锈蚀的纪念币',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `战斗开始时，若友方单位使用的首个单硬币攻击技能未能击杀敌方单位，则重复使用该技能。

  使用怠惰技能或单硬币攻击技能击杀敌方单位时，使击杀者下回合技能威力+1。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9015,
      name: '膏血',
      category: '震颤',
      defaultRarity: 'II',
      descriptions: {
        base: `技能对陷入混乱的敌方单位造成的伤害+10%。

  若该技能为增加[Vibration] 强度，施加[Vibration] 层数，造成[Switch_Vibration] ，造成[VibrationExplosion] 或造成[FusionVibration] 的技能，或该技能为怠惰技能，则改为造成的伤害+20%`,
        plus: `技能对陷入混乱的敌方单位造成的伤害+12.5%。

  若该技能为增加[Vibration] 强度，施加[Vibration] 层数，造成[Switch_Vibration] ，造成[VibrationExplosion] 或造成[FusionVibration] 的技能，或该技能为怠惰技能，则改为造成的伤害+25%`,
        double_plus: `技能对陷入混乱的敌方单位造成的伤害+15%。

  若该技能为增加[Vibration] 强度，施加[Vibration] 层数，造成[Switch_Vibration] ，造成[VibrationExplosion] 或造成[FusionVibration] 的技能，或该技能为怠惰技能，则改为造成的伤害+30%`,
      },
    },
    {
      id: 9016,
      name: '绿光果实',
      category: '震颤',
      defaultRarity: 'I',
      descriptions: {
        base: '使用暴食技能对未陷入混乱的敌方单位造成伤害，或通过技能效果增加[Vibration]强度时，随机使全体敌方单位(或所有异想体部位)增加共计4级[Vibration]强度。',
        plus: '使用暴食技能对未陷入混乱的敌方单位造成伤害，或通过技能效果增加[Vibration]强度时，随机使全体敌方单位(或所有异想体部位)增加共计6级[Vibration]强度。',
        double_plus:
          '使用暴食技能对未陷入混乱的敌方单位造成伤害，或通过技能效果增加[Vibration]强度时，随机使全体敌方单位(或所有异想体部位)增加共计8级[Vibration]强度。',
      },
    },
    {
      id: 9017,
      name: '石版字符',
      category: '泛用',
      defaultRarity: 'I',
      descriptions: {
        base: `敌方单位陷入混乱时，使现存体力最低的人格恢复该人格体力上限5%的体力。

  若该人格拥有暴食攻击技能，则改为恢复体力上限10%的体力。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9018,
      name: '玫瑰王冠',
      category: '破裂',
      defaultRarity: 'I',
      descriptions: {
        base: `回合开始时，随机使1名敌方单位(或所有异想体部位)增加4级[Burst]强度。

  激活暴食完全共鸣时，在战斗开始时使全体敌方单位增加2级[Burst]强度。`,
        plus: `回合开始时，随机使2名敌方单位(或所有异想体部位)增加4级[Burst]强度。

  激活暴食完全共鸣时，在战斗开始时使全体敌方单位增加3级[Burst]强度。`,
        double_plus: `回合开始时，随机使3名敌方单位(或所有异想体部位)增加4级[Burst]强度。

  激活暴食完全共鸣时，在战斗开始时使全体敌方单位增加4级[Burst]强度。`,
      },
    },
    {
      id: 9019,
      name: '黏性淤浆',
      category: '突刺',
      defaultRarity: 'I',
      descriptions: {
        base: '使用暴食技能或[Pierce]技能造成伤害时，对目标施加2层[DefenseDown]。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9020,
      name: '白棉花',
      category: '流血',
      defaultRarity: 'II',
      descriptions: {
        base: '回合开始时，解除敌方单位的混乱，使其增加(8+混乱阶段×4)级[Laceration]强度并在本回合与下回合对其施加 (8+混乱阶段×4)/2层[AttackDown]。(每场战斗每名敌方单位最多1次，不对不能解除混乱的特定敌方单位生效)',
        plus: '回合开始时，解除敌方单位的混乱，使其增加(10+混乱阶段×5)级[Laceration]强度并在本回合与下回合对其施加 (10+混乱阶段×5)层[AttackDown]。(每场战斗每名敌方单位最多1次，不对不能解除混乱的特定敌方单位生效)',
        double_plus:
          '回合开始时，解除敌方单位的混乱，使其增加(12+混乱阶段×6)级[Laceration]强度并在本回合与下回合对其施加 (12+混乱阶段×6)层[AttackDown]与[DefenseDown]。(每场战斗每名敌方单位最多1次，不对不能解除混乱的特定敌方单位生效)',
      },
    },
    {
      id: 9021,
      name: '蓝色芝宝牌打火机',
      category: '泛用',
      defaultRarity: 'I',
      descriptions: {
        base: '回合开始时，获得忧郁E.G.O资源和随机2种其他E.G.O资源各1个。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9022,
      name: '幻痛',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `攻击容量为1的技能造成的伤害+15%。

  激活忧郁完全共鸣时，战斗开始时，使全体友方单位获得2层[AttackUp]。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9023,
      name: '雷击木',
      category: '破裂',
      defaultRarity: 'III',
      descriptions: {
        base: '通过技能效果增加[Burst]强度时，使目标增加1级[Burst]强度并对其施加1层[Burst]。',
        plus: '通过技能效果增加[Burst]强度时，使目标增加2级[Burst]强度并对其施加1层[Burst]。',
        double_plus: `通过技能效果增加[Burst]强度时，使目标增加3级[Burst]强度并对其施加1层[Burst]。

  若该技能为忧郁技能，则改为使目标增加3级[Burst]强度并对其施加2层[Burst]。`,
      },
    },
    {
      id: 9024,
      name: '融化的眼球',
      category: '震颤',
      defaultRarity: 'III',
      descriptions: {
        base: '敌方单位被[VibrationExplosion]时，下回合对其施加5层[AttackDown]与5层[DefenseDown]。(每回合最多3次)',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9025,
      name: '灰色大衣',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: `使用攻击容量不低于2的技能时，使其造成的伤害+20%。

  使用忧郁技能或攻击容量不低于2的技能造成伤害时，恢复该友方单位伤害量20%的体力。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9026,
      name: '刺青：大器晚成',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: '使用傲慢技能或单硬币技能造成伤害时，下回合使该友方单位获得2层[AttackUp]与2层[DefenseUp]。(最多5层)',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9027,
      name: '谷底之星',
      category: '打击',
      defaultRarity: 'II',
      descriptions: {
        base: `使用[Blunt]技能或傲慢技能命中敌方单位时，对目标造成2点固定理智伤害。

  使理智值低于0点的友方单位造成的伤害+10%`,
        plus: `使用[Blunt]技能或傲慢技能命中敌方单位时，对目标造成3点固定理智伤害。

  使理智值低于0点的友方单位造成的伤害+15%`,
        double_plus: `使用[Blunt]技能或傲慢技能命中敌方单位时，对目标造成5点固定理智伤害。

  使理智值低于0点的友方单位造成的伤害+25%`,
      },
    },
    {
      id: 9028,
      name: '偏见',
      category: '泛用',
      defaultRarity: 'I',
      descriptions: {
        base: `关卡的首个回合开始时，现存体力最低的友方单位恢复其体力上限15%的体力。

  激活傲慢完全共鸣时，战斗开始时，使现存体力最低的友方单位恢复已失去体力12.5%的体力。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9029,
      name: '又小又可能很坏的玩偶',
      category: '流血',
      defaultRarity: 'II',
      descriptions: {
        base: `对战斗开始时带有[Laceration]或特殊[Laceration]的敌方单位造成的伤害+10%

  受到来自战斗开始时带有[Laceration]或特殊[Laceration]的敌方单位的伤害-20%

  拥有傲慢攻击技能的友方单位改为对带有[Laceration]或特殊[Laceration]的敌方单位造成的伤害+20%

  拥有傲慢攻击技能的友方单位改为受到来自带有[Laceration]或特殊[Laceration]的敌方单位的伤害-30%。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9030,
      name: '头骨收藏',
      category: '突刺',
      defaultRarity: 'II',
      descriptions: {
        base: '傲慢技能或[Pierce]技能攻击后，若敌方单位阵亡，则在除本回合以外的下2回合内使该友方单位的[Pierce]技能威力+2',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9031,
      name: '辉光变动仪',
      category: '震颤',
      defaultRarity: 'I',
      descriptions: {
        base: `关卡的首个回合开始时，使全体敌方单位(或所有异想体部位)增加4级[Vibration]强度，并对其施加4层[Vibration]。

  使用嫉妒技能造成伤害时，使目标增加2级[Vibration]强度。`,
        plus: `波次的首个回合开始时，使全体敌方单位(或所有异想体部位)增加4级[Vibration]强度，并对其施加4层[Vibration]。

  使用嫉妒技能造成伤害时，使目标增加2级[Vibration]强度。`,
        double_plus: `波次的首个回合开始时，使全体敌方单位(或所有异想体部位)增加5级[Vibration]强度，并对其施加5层[Vibration]。

  使用嫉妒技能造成伤害时，使目标增加3级[Vibration]强度。`,
      },
    },
    {
      id: 9032,
      name: '梦中的电子羊',
      category: '斩击',
      defaultRarity: 'II',
      descriptions: {
        base: `嫉妒技能或[Slash]技能攻击后，若敌方单位阵亡，则在除本回合以外的下2回合内使该友方单位的[Slash]技能威力+2

  激活嫉妒完全共鸣时，战斗开始时，使全体友方单位获得2层[AttackUp]与2层[DefenseUp]。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9033,
      name: '标准负载电池',
      category: '破裂',
      defaultRarity: 'III',
      descriptions: {
        base: `使用技能命中敌方单位时，使其增加3级[Burst]强度。

  若该技能为嫉妒技能，则改为使其增加5级[Burst]强度。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9034,
      name: '单点打击逻辑电路',
      category: '烧伤',
      defaultRarity: 'II',
      descriptions: {
        base: `使用增加[Combustion]强度或施加特殊[Combustion]的技能或嫉妒技能命中敌方单位时，额外使目标增加(技能硬币数/2)级[Combustion]强度(向上取整)
  - [不可重复触发] 迁居申请 希斯克利夫 E.G.O被动“电路连接”触发时，该效果不会触发

  命中时，若目标的[Combustion]强度为99级，则使其施加1层[IDMicroChip](每个敌方单位最多1次，每回合最多3次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9035,
      name: '巫毒娃娃',
      category: '泛用',
      defaultRarity: 'I',
      descriptions: {
        base: `回合开始时，对全体敌方单位造成3点固定嫉妒伤害。

  对现存体力低于33%的敌方单位施加1层[ResultReduction]。`,
        plus: `回合开始时，对全体敌方单位造成4点固定嫉妒伤害。

  对现存体力低于50%的敌方单位施加1层[ResultReduction]。`,
        double_plus: `回合开始时，对全体敌方单位造成5点固定嫉妒伤害。

  对现存体力低于50%的敌方单位施加2层[ResultReduction]。`,
      },
    },
    {
      id: 9036,
      name: '卡蜜拉',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: '非集中遭遇战开始时，对全体敌方单位造成其体力上限20%的固定伤害。',
        plus: '非集中遭遇战开始时，对全体敌方单位造成其体力上限25%的固定伤害。',
        double_plus: '非集中遭遇战开始时，对全体敌方单位造成其体力上限30%的固定伤害。',
      },
    },
    {
      id: 9037,
      name: '瓶中婴孩',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: `关卡开始时，所有E.G.O资源+1。
        战斗胜利时，获得持有量最少的2种E.G.O资源各2个`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9038,
      name: '异想狩猎',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: '集中遭遇战开始时，使全体友方单位获得2层[AttackDmgUp]。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9039,
      name: '归途',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: '关卡开始时，使全体友方单位恢复其体力上限12%的体力。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9040,
      name: '明日的运势',
      category: '泛用',
      defaultRarity: 'I',
      descriptions: {
        base: '遭遇战奖励卡中的第一张变为其可能出现的最高等级。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9041,
      name: '赤色指令',
      category: '沉沦',
      defaultRarity: 'II',
      descriptions: {
        base: `友方单位通过技能效果使敌方单位增加[Sinking]强度，对敌方单位施加[Sinking]层数或对敌方单位施加特殊[Sinking]时，下回合使该人格增加1级攻击等级（最多增加3级）。

  若该友方单位拥有忧郁或暴怒攻击技能，则改为每次增加[Sinking]强度或施加[Sinking]层数时，下回合使该人格增加2级攻击等级（最多增加4级）。`,
        plus: `友方单位通过技能效果使敌方单位增加[Sinking]强度，对敌方单位施加[Sinking]层数或对敌方单位施加特殊[Sinking]时，下回合使该人格增加1级攻击等级（最多增加4级）。

  若该友方单位拥有忧郁或暴怒攻击技能，则改为每次增加[Sinking]强度或施加[Sinking]层数时，下回合使该人格增加2级攻击等级（最多增加5级）。`,
        double_plus: `友方单位通过技能效果使敌方单位增加[Sinking]强度，对敌方单位施加[Sinking]层数或对敌方单位施加特殊[Sinking]时，下回合使该人格增加2级攻击等级（最多增加4级）。

  若该友方单位拥有忧郁或暴怒攻击技能，则改为每次增加[Sinking]强度或施加[Sinking]层数时，下回合使该人格增加3级攻击等级（最多增加6级）。`,
      },
    },
    {
      id: 9042,
      name: '烟霾与铁丝网',
      category: '流血',
      defaultRarity: 'III',
      descriptions: {
        base: `友方单位通过技能效果使敌方单位增加的[Laceration]强度变为2倍。

  回合结束时，使带有[Laceration]或特殊[Laceration]的敌方单位在下回合速度值-2。`,
        plus: `友方单位通过技能效果使敌方单位增加的[Laceration]强度变为2倍。

  回合结束时带有[Laceration]或特殊[Laceration]的敌方单位在下回合速度值-3。`,
        double_plus: `友方单位通过技能效果使敌方单位增加的[Laceration]强度变为2.5倍。

  回合结束时带有[Laceration]或特殊[Laceration]的敌方单位在下回合速度值-3。`,
      },
    },
    {
      id: 9043,
      name: '员工证',
      category: '充能',
      defaultRarity: 'II',
      descriptions: {
        base: '激活暴怒完全共鸣或使用获得[Charge]层数或特殊[Charge]的技能时，下回合开始时使全体友方单位获得3层[Charge]。(每回合最多1次)',
        plus: '激活暴怒共鸣或使用获得[Charge]层数或特殊[Charge]的技能时，下回合开始时使全体友方单位获得3层[Charge]。(每回合最多1次)',
        double_plus:
          '激活暴怒共鸣或使用获得[Charge]层数或特殊[Charge]的技能时，下回合开始时使全体友方单位获得4层[Charge]。(每回合最多1次)',
      },
    },
    {
      id: 9044,
      name: '震荡手环',
      category: '震颤',
      defaultRarity: 'II',
      descriptions: {
        base: `使用技能命中敌方单位时，下回合使其增加1级[Vibration]强度。

  若该技能为暴怒技能，则改为使其增加2级[Vibration]强度。`,
        plus: `使用技能命中敌方单位时，下回合使其增加1级[Vibration]强度。

  若该技能为暴怒技能，则改为使其增加3级[Vibration]强度。`,
        double_plus: `使用技能命中敌方单位时，下回合使其增加2级[Vibration]强度。

  若该技能为暴怒技能，则改为使其增加4级[Vibration]强度。`,
      },
    },
    {
      id: 9045,
      name: '炎鳞',
      category: '烧伤',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合结束时，使带有[Combustion]的敌方单位消耗一半[Combustion]层数并对其额外造成(其[Combustion]强度×消耗的[Combustion]层数)点暴怒伤害。(最多消耗5层[Combustion])

  下回合使其防御等级减少(炎鳞消耗的[Combustion]层数)级(最多减少3级)`,
        plus: `回合结束时，使带有[Combustion]的敌方单位消耗一半[Combustion]层数并对其额外造成(其[Combustion]强度×消耗的[Combustion]层数)点暴怒伤害。(最多消耗7层[Combustion])

  下回合使其防御等级减少(炎鳞消耗的[Combustion]层数)级(最多减少5级)`,
        double_plus: `回合结束时，使带有[Combustion]的敌方单位消耗一半[Combustion]层数并对其额外造成(其[Combustion]强度×消耗的[Combustion]层数)点暴怒伤害。(最多消耗10层[Combustion])

  下回合使其防御等级减少(炎鳞消耗的[Combustion]层数)级(最多减少8级)`,
      },
    },
    {
      id: 9046,
      name: '烟斗',
      category: '突刺',
      defaultRarity: 'II',
      descriptions: {
        base: `回合开始时，使带有[Breath]的友方单位获得1层[ResultEnhancement]。

  带有不低于5层[Breath]的友方单位改为获得2层[ResultEnhancement]。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9047,
      name: '荆棘套索',
      category: '破裂',
      defaultRarity: 'II',
      descriptions: {
        base: `回合结束时，使全体敌方单位增加与其速度值相等的[Burst]强度。

  激活色欲完全共鸣时，在战斗开始时随机使1名敌方单位增加3级[Burst]强度并对其施加3层[Burst]。`,
        plus: `回合结束时，使全体敌方单位增加与其(速度值+1)相等的[Burst]强度。

  激活色欲完全共鸣时，在战斗开始时随机使1名敌方单位增加4级[Burst]强度并对其施加3层[Burst]。`,
        double_plus: `回合结束时，使全体敌方单位增加与其(速度值+2)相等的[Burst]强度。

  激活色欲完全共鸣时，在战斗开始时随机使1名敌方单位增加5级[Burst]强度并对其施加4层[Burst]。`,
      },
    },
    {
      id: 9048,
      name: '锈蚀的美工刀',
      category: '流血',
      defaultRarity: 'III',
      descriptions: {
        base: `通过技能效果使未陷入混乱的敌方单位增加[Laceration]强度或施加特殊[Laceration]时，使目标增加1级[Laceration]强度并对其施加1层[Laceration]。

  若该技能为色欲技能，则改为使目标增加3级[Laceration]强度并对其施加1层[Laceration]。`,
        plus: `通过技能效果增加[Laceration]强度或施加特殊[Laceration]时，使目标增加2级[Laceration]强度并对其施加1层[Laceration]。

  若该技能为色欲技能，则改为使目标增加3级[Laceration]强度并对其施加1层[Laceration]。`,
        double_plus: `通过技能效果增加[Laceration]强度或施加特殊[Laceration]时，使目标增加3级[Laceration]强度并对其施加1层[Laceration]。

  若该技能为色欲技能，则改为使目标增加3级[Laceration]强度并对其施加2层[Laceration]。`,
      },
    },
    {
      id: 9049,
      name: '荆棘之路',
      category: '沉沦',
      defaultRarity: 'I',
      descriptions: {
        base: `使用增加[Sinking]强度或施加特殊[Sinking]的技能对敌方单位造成体力伤害时，回合结束时额外使其增加3级[Sinking]强度并对其施加2层[Sinking]。(每个回合，每名敌方单位最多1次)

  若激活忧郁或色欲完全共鸣，则在战斗开始时，使全体敌方单位(若是异想体，则随机对一个部位)增加2级[Sinking]强度并对其施加3层[Sinking]。`,
        plus: `使用增加[Sinking]强度或施加特殊[Sinking]的技能对敌方单位造成体力伤害时，回合结束时额外使其增加3级[Sinking]强度并对其施加2层[Sinking]。(每个回合，每名敌方单位最多1次)

  若激活忧郁或色欲共鸣，则在战斗开始时，使全体敌方单位(若是异想体，则随机对一个部位)增加2级[Sinking]强度并对其施加3层[Sinking]。`,
        double_plus: `使用增加[Sinking]强度或施加特殊[Sinking]的技能对敌方单位造成体力伤害时，回合结束时额外使其增加4级[Sinking]强度并施加3层[Sinking]。(每个回合，每名敌方单位最多1次)

  若激活忧郁或色欲共鸣，则在战斗开始时，使全体敌方单位(若是异想体，则随机对一个部位)增加3级[Sinking]强度并施加3层[Sinking]。`,
      },
    },
    {
      id: 9050,
      name: '红染棉花',
      category: '流血',
      defaultRarity: 'IV',
      descriptions: {
        base: `关卡的首个回合开始时，使全体敌方单位(或所有异想体部位)增加1级[Laceration]强度并对其施加15层[Laceration]。

  回合开始时，带有[Laceration]的敌方单位在本回合减少(其[Laceration]强度/3)级攻击等级与防御等级。([Laceration]强度积累至30级时效果最高)`,
        plus: `波次的首个回合开始时，使全体敌方单位增加2级[Laceration]强度并对其施加15层[Laceration]。(若是异想体，则对所有部位造成此效果。)

  回合开始时，带有[Laceration]的敌方单位在本回合减少(其[Laceration]强度/3)级攻击等级与防御等级。([Laceration]强度积累至30级时效果最高)`,
        double_plus: `波次的首个回合开始时，使全体敌方单位增加4级[Laceration]强度并对其施加20层[Laceration]。(若是异想体，则对所有部位造成此效果。)

  回合开始时，带有[Laceration]的敌方单位在本回合减少(其[Laceration]强度/2)级攻击等级与防御等级。([Laceration]强度积累至30级时效果最高)`,
      },
    },
    {
      id: 9051,
      name: '石冢',
      category: '呼吸法',
      defaultRarity: 'II',
      descriptions: {
        base: `友方单位通过技能效果获得的[Breath]强度变为1.5倍。

  若友方单位使用了怠惰技能击杀了敌方单位，则下回合开始时使其增加2级[Breath]强度并获得2层[Breath]。(每回合最多1次)`,
        plus: `友方单位通过技能效果获得的[Breath]强度变为1.5倍。

  若友方单位击杀了敌方单位，则下回合开始时使其增加3级[Breath]强度并获得2层[Breath](每回合最多1次)。`,
        double_plus: `友方单位通过技能效果获得的[Breath]强度变为2倍。

  若友方单位击杀了敌方单位，则下回合开始时使其增加4级[Breath]强度并获得2层[Breath](每回合最多1次)。`,
      },
    },
    {
      id: 9052,
      name: '便携式电源插座',
      category: '充能',
      defaultRarity: 'II',
      descriptions: {
        base: `回合开始时，随机使2名友方单位获得2层[Charge](优先选取拥有获得[Charge]层数或特殊[Charge]的技能的人格)。

  激活怠惰完全共鸣时，战斗开始时随机使1名友方单位获得3层[Charge]。`,
        plus: `回合开始时，随机使2名友方单位获得3层[Charge](优先选取拥有获得[Charge]层数或特殊[Charge]的技能的人格)。

  激活怠惰共鸣时，战斗开始时随机使1名友方单位获得3层[Charge]。`,
        double_plus: `回合开始时，随机使3名友方单位获得3层[Charge](优先选取拥有获得[Charge]层数或特殊[Charge]的技能的人格)。

  激活怠惰共鸣时，战斗开始时随机使1名友方单位获得5层[Charge]。`,
      },
    },
    {
      id: 9053,
      name: '土归土',
      category: '烧伤',
      defaultRarity: 'III',
      descriptions: {
        base: `波次的首个回合开始时，使全体敌方单位(若是异想体，则随机对一个部位)增加5级[Combustion]强度并对其施加3层[Combustion]。

  激活怠惰完全共鸣时，战斗开始时使全体敌方单位(若是异想体，则随机对一个部位)增加3级[Combustion]强度并对其施加2层[Combustion]。`,
        plus: `波次的首个回合开始时，使全体敌方单位(若是异想体，则随机对一个部位)增加6级[Combustion]强度并对其施加3层[Combustion]。

  激活怠惰完全共鸣时，战斗开始时使全体敌方单位(若是异想体，则随机对一个部位)增加4级[Combustion]强度并对其施加2层[Combustion]。`,
        double_plus: `波次的首个回合开始时，使全体敌方单位(若是异想体，则随机对一个部位)增加8级[Combustion]强度并对其施加3层[Combustion]。

  激活怠惰共鸣时，战斗开始时使全体敌方单位(若是异想体，则随机对一个部位)增加4级[Combustion]强度并对其施加3层[Combustion]。`,
      },
    },
    {
      id: 9054,
      name: '融化的时钟发条',
      category: '沉沦',
      defaultRarity: 'II',
      descriptions: {
        base: '回合开始时，带有[Sinking]的敌方单位攻击等级和防御等级在本回合内减少3级。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9055,
      name: '暴雨',
      category: '震颤',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，使全体敌方单位(或所有异想体部位)增加(当前回合数×2)级[Vibration]强度并对其施加2层[Vibration]。

  回合结束时，使全体敌方单位(或所有异想体部位)[VibrationExplosion]。`,
        plus: `回合开始时，使全体敌方单位(或所有异想体部位)增加(3+当前回合数×2)级[Vibration]强度并对其施加3层[Vibration]。

  回合结束时，使全体敌方单位(或所有异想体部位)[VibrationExplosion]。`,
        double_plus: `回合开始时，使全体敌方单位(或所有异想体部位)增加(5+当前回合数×2)级[Vibration]强度并对其施加3层[Vibration]。

  回合结束时，使全体敌方单位(或所有异想体部位)[VibrationExplosion]2次。`,
      },
    },
    {
      id: 9056,
      name: '四叶草',
      category: '呼吸法',
      defaultRarity: 'III',
      descriptions: {
        base: `当战斗开始时带有[Breath]的友方单位使用技能对敌方单位造成暴击时，下回合开始时使该友方单位增加5级[Breath]强度并获得2层[Breath]。(每回合最多1次)

  若技能为暴食技能，则改为下回合开始时增加7级[Breath]强度并获得3层[Breath]。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9057,
      name: '夜视镜',
      category: '充能',
      defaultRarity: 'II',
      descriptions: {
        base: `回合开始时，若有人格的[Charge]层数不低于15层，则发动效果。(包括特殊[Charge])

  战斗开始时，该人格消耗3层[Charge]并在本回合内增加5级攻击等级。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9058,
      name: '星象盘碎片',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `回合开始时，上回合每使用一个暴食以外属性的E.G.O技能，随机获得1个E.G.O资源。

  若上回合使用了暴食属性E.G.O技能，则改为上一回合每使用一个暴食属性的E.G.O技能，随机获得3个E.G.O资源。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9059,
      name: '仲冬夜之噩梦',
      category: '沉沦',
      defaultRarity: 'III',
      descriptions: {
        base: `使用技能对敌方单位造成体力伤害时，使目标增加3级[Sinking]强度。

  若该技能为暴食技能，则改为使目标增加5级[Sinking]强度。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9060,
      name: '快感',
      category: '破裂',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，使全体敌方单位(若是异想体，则改为所有部位)增加3级[Burst]强度并对其施加3层[Burst]。

  回合结束时，对全体敌方单位(若是异想体，则改为所有部位)造成(其[Burst]强度×[Burst]层数)点暴食伤害。(最多计入5层[Burst])`,
        plus: `回合开始时，使全体敌方单位(若是异想体，则改为所有部位)增加4级[Burst]强度并对其施加3层[Burst]。

  回合结束时，对全体敌方单位(若是异想体，则改为所有部位)造成(其[Burst]强度×[Burst]层数)点暴食伤害。(最多计入7层[Burst])`,
        double_plus: `回合开始时，使全体敌方单位(若是异想体，则改为所有部位)增加6级[Burst]强度并对其施加3层[Burst]。

  回合结束时，对全体敌方单位(若是异想体，则改为所有部位)造成(其[Burst]强度×[Burst]层数)点暴食伤害。(最多计入10层[Burst])`,
      },
    },
    {
      id: 9061,
      name: '遗骸碎片',
      category: '沉沦',
      defaultRarity: 'II',
      descriptions: {
        base: `对战斗开始时带有[Sinking]的敌方单位造成的伤害+12.5%，受到来自以上单位的伤害-12.5%。

  对于拥有忧郁攻击技能的友方单位，则改为对带有[Sinking]的敌方单位造成的伤害+20%，受到来自以上单位的伤害-20%。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9062,
      name: '简历',
      category: '充能',
      defaultRarity: 'I',
      descriptions: {
        base: `回合结束时，使[Charge]与特殊[Charge]层数之和不低于7层的友方单位在下回合获得1层[Agility]。

  若该友方单位拥有忧郁攻击技能，则改为获得2层[Agility]与1层[ResultEnhancement]。`,
        plus: `回合结束时，[Charge]与特殊[Charge]层数之和不低于7层的友方单位在下回合获得2层[Agility]。

  若该友方单位拥有忧郁攻击技能，则改为获得3层[Agility]与1层[ResultEnhancement]。`,
        double_plus: `回合结束时，[Charge]与特殊[Charge]层数之和不低于7层的友方单位在下回合获得3层[Agility]。

  若该友方单位拥有忧郁攻击技能，则改为获得4层[Agility]与1层[ResultEnhancement]。`,
      },
    },
    {
      id: 9063,
      name: '追忆吊坠',
      category: '呼吸法',
      defaultRarity: 'I',
      descriptions: {
        base: `战斗开始时，随机使1名友方单位增加3级[Breath]强度(优先选取拥有获得[Breath]层数的攻击技能的人格)。

  优先选取拥有忧郁攻击技能的友方单位，且该情况下改为使其增加3级[Breath]强度并获得2层[Breath]。`,
        plus: `战斗开始时，随机使1名友方单位增加4级[Breath]强度。(优先选取拥有获得[Breath]层数的攻击技能的人格)

  优先选取拥有忧郁攻击技能的友方单位，且该情况下改为使其增加4级[Breath]强度并获得3层[Breath]。`,
        double_plus: `战斗开始时，随机使2名友方单位增加4级[Breath]强度。(优先选取拥有获得[Breath]层数的攻击技能的人格)

  优先选取拥有忧郁攻击技能的友方单位，且该情况下改为使其增加4级[Breath]强度并获得3层[Breath]。`,
      },
    },
    {
      id: 9064,
      name: '损坏的左轮手枪',
      category: '破裂',
      defaultRarity: 'I',
      descriptions: {
        base: '回合开始时，带有[Burst]的敌方单位(若是异想体，则改为以部位判定)攻击等级与防御等级在本回合内减少2级。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9065,
      name: '美感',
      category: '沉沦',
      defaultRarity: 'IV',
      descriptions: {
        base: `对因理智值降低而获得负面状态(士气低落，恐慌)的敌方单位造成的伤害+35%。

  增加[Sinking]强度或施加[Sinking]层数的技能造成的伤害额外+10%(包括特殊<noparse>[Sinking]</noparse>)

  对未带有理智值的敌方单位触发[Sinking]效果时，改为对其造成包括忧郁属性在内的所有罪孽属性中最有效的属性伤害。`,
        plus: `对理智值低于0点的敌方单位造成的伤害+40%。

  增加[Sinking]强度或施加[Sinking]层数的技能造成的伤害额外+10%(包括特殊<noparse>[Sinking]</noparse>)

  对未带有理智值的敌方单位触发[Sinking]效果时，改为对其造成包括忧郁属性在内的所有罪孽属性中最有效的属性伤害。`,
        double_plus: `对未带有理智值或理智值低于0点的敌方单位造成的伤害+50%。

  增加[Sinking]强度或施加[Sinking]层数的技能造成的伤害额外+10%(包括特殊<noparse>[Sinking]</noparse>)

  对未带有理智值的敌方单位触发[Sinking]效果时，改为对其造成包括忧郁属性在内的所有罪孽属性中最有效的属性伤害。`,
      },
    },
    {
      id: 9066,
      name: '雾化吸入器',
      category: '呼吸法',
      defaultRarity: 'II',
      descriptions: {
        base: `关卡的首个回合开始时，使全体友方单位增加4级[Breath]强度并获得4层[Breath]。

  激活傲慢完全共鸣时，战斗开始时，使全体友方单位增加2级[Breath]强度并获得2层[Breath]。
  - [不可重复触发] 胸痛 良秀 E.G.O被动“息”触发时，该效果不会触发`,
        plus: `波次的首个回合开始时，使全体友方单位增加5级[Breath]强度并获得4层[Breath]。

  激活傲慢完全共鸣时，战斗开始时，使全体友方单位增加3级[Breath]强度并获得2层[Breath]。
  - [不可重复触发] 胸痛 良秀 E.G.O被动“息”触发时，该效果不会触发`,
        double_plus: `波次的首个回合开始时，使全体友方单位增加5级[Breath]强度并获得5层[Breath]。

  激活傲慢共鸣时，战斗开始时，使全体友方单位增加3级[Breath]强度并获得3层[Breath]。
  - [不可重复触发] 胸痛 良秀 E.G.O被动“息”触发时，该效果不会触发`,
      },
    },
    {
      id: 9067,
      name: '特别合约',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: '战斗中通过技能伤害使敌方单位陷入混乱时，对目标造成其体力上限33%(若是异想体，则为相应的部位)的固定伤害，并在下回合对其施加2层[Vulnerable](每场战斗最多1次)。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9068,
      name: '盛情款待',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `关卡开始时，获得5个傲慢属性E.G.O资源。

  敌方单位阵亡时，获得2个傲慢属性E.G.O资源，并随机获得2种其余属性的E.G.O资源各1个。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9069,
      name: '护腕',
      category: '充能',
      defaultRarity: 'I',
      descriptions: {
        base: `回合开始时，[Charge]与特殊[Charge]层数之和不低于5层的友方单位获得1层[AttackDmgUp]。

  若该友方单位拥有傲慢攻击技能，则改为获得2层[AttackDmgUp]。`,
        plus: `回合开始时，[Charge]与特殊[Charge]层数之和不低于3层的友方单位获得1层[AttackDmgUp]。

  若该友方单位拥有傲慢攻击技能，则改为获得2层[AttackDmgUp]。`,
        double_plus: `回合开始时，带有[Charge]或特殊[Charge]的友方单位获得2层[AttackDmgUp]。

  若该友方单位拥有傲慢攻击技能，则改为获得3层[AttackDmgUp]。`,
      },
    },
    {
      id: 9070,
      name: '明镜止水',
      category: '呼吸法',
      defaultRarity: 'IV',
      descriptions: {
        base: `友方单位的暴击倍率从1.2倍增加至1.7倍。

  若因暴击消耗了[Breath]层数，则下回合使该人格获得10层[AttackUp]。(每回合每名人格最多生效1次)`,
        plus: `友方单位的暴击倍率从1.2倍增加至2倍

  若因暴击消耗了[Breath]层数，则下回合使该人格获得12层[AttackUp]。(每回合每名人格最多生效1次)`,
        double_plus: `友方单位的暴击倍率从1.2倍增加至2.5倍

  若因暴击消耗了[Breath]层数，则下回合使该人格获得15层[AttackUp]。(每回合每名人格最多生效1次)`,
      },
    },
    {
      id: 9071,
      name: '烧焦的圆盘',
      category: '烧伤',
      defaultRarity: 'III',
      descriptions: {
        base: `带有[Combustion]的敌方单位阵亡时(若是异想体，则在本体阵亡时)，下回合开始时将阵亡单位一半的[Combustion]强度施加给[Combustion]强度最低的1名敌方单位。

  回合开始时，本回合对带有[Combustion]的敌方单位施加4层[AttackDown] 。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9072,
      name: '避雷针',
      category: '充能',
      defaultRarity: 'III',
      descriptions: {
        base: `关卡开始时，使全体友方单位获得3层[Charge]。

  若参战的拥有嫉妒攻击技能的友方单位不低于2名，则改为获得5层[Charge]。`,
        plus: `关卡开始时，使全体友方单位获得4层[Charge]。

  若参战的拥有嫉妒攻击技能的友方单位不低于2名，则改为获得6层[Charge]。`,
        double_plus: `关卡开始时，使全体友方单位获得5层[Charge]。

  若参战的拥有嫉妒攻击技能的友方单位不低于2名，则改为获得7层[Charge]。`,
      },
    },
    {
      id: 9073,
      name: '内啡肽试剂组',
      category: '呼吸法',
      defaultRarity: 'III',
      descriptions: {
        base: `通过技能效果增加[Breath]强度时，额外增加1级[Breath]强度并获得1层[Breath]。

  若该技能为嫉妒技能，则改为额外增加2级[Breath]强度并获得2层[Breath]。`,
        plus: `通过技能效果增加[Breath]强度时，额外增加2级[Breath]强度并获得2层[Breath]。

  若该技能为嫉妒技能，则改为额外增加3级[Breath]强度并获得3层[Breath]。`,
        double_plus: `通过技能效果增加[Breath]强度时，额外增加3级[Breath]强度并获得3层[Breath]。

  若该技能为嫉妒技能，则改为额外增加4级[Breath]强度并获得4层[Breath]。`,
      },
    },
    {
      id: 9074,
      name: '无头肖像',
      category: '沉沦',
      defaultRarity: 'I',
      descriptions: {
        base: `战斗开始时，使理智值低于0点的全体敌方单位(若是异想体，则随机对1个部位)增加2级[Sinking]强度。

  使用嫉妒技能时，下回合随机使全体敌方单位(若是异想体，则随机对1个部位)增加共计1级[Sinking]强度。`,
        plus: `战斗开始时，使理智值低于0点的全体敌方单位(若是异想体，则随机对1个部位)增加3级[Sinking]强度。

  使用嫉妒技能时，下回合随机使全体敌方单位(若是异想体，则随机对1个部位)增加共计2级[Sinking]强度。`,
        double_plus: `战斗开始时，使理智值低于0点的全体敌方单位(若是异想体，则随机对1个部位)增加4级[Sinking]强度并对其施加1层[Sinking]。

  使用嫉妒技能时，下回合随机使全体敌方单位(若是异想体，则随机对1个部位)增加共计3级[Sinking]强度。`,
      },
    },
    {
      id: 9075,
      name: '充能式手套',
      category: '充能',
      defaultRarity: 'IV',
      descriptions: {
        base: `最大[Charge]层数+10

  关卡开始时，使全体友方单位获得5层[Charge]。

  回合开始时，使全体友方单位获得2层[Charge]。

  [第1顺位友方单位专属] 关卡开始时，获得1层[ChoSuperCharge]`,
        plus: `最大[Charge]层数+10

  关卡开始时，使全体友方单位获得6层[Charge]。

  回合开始时，使全体友方单位获得3层[Charge]。

  [第1顺位友方单位专属] 关卡开始时，获得10层[ChoSuperCharge] `,
        double_plus: `最大[Charge]层数+10

  关卡开始时，使全体友方单位获得8层[Charge]。

  回合开始时，使全体友方单位获得4层[Charge]。

  [第1顺位友方单位专属] 关卡开始时，获得20层[ChoSuperCharge] `,
      },
    },
    {
      id: 9076,
      name: '便携式急救包',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: '回合开始时，使现存体力不高于50%的1名友方单位恢复其体力上限25%的体力(单位阵亡时不触发，每场战斗最多1次)',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9077,
      name: '止痛药',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: '回合开始时，若有陷入混乱的友方单位，则使其恢复体力上限12.5%的体力并在本回合获得3层[Protection]。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9078,
      name: '贪婪之锤',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: '战斗胜利后，获得(阵亡敌方单位数量×3)点经费。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9079,
      name: '金瓮',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: '战斗胜利后获得的经费增加20%(不受开局增益与其他E.G.O饰品的影响)。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9080,
      name: '生存的里程标',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: '通过阶层头目时，额外获得(80+该战斗参战人格数×5)点经费(不受通过战斗时获得经费增加的效果影响)。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9081,
      name: '信念',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: '使用硬币类型为加算的技能后，在下回合开始时使该单位的理智值变为最大值(不包括侵蚀的单位)。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9082,
      name: '缘分残片',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: '获得该饰品时，编队中的所有人格提升5级。',
        plus: '获得该饰品时，编队中的所有人格提升7级。',
        double_plus: '获得该饰品时，编队中的所有人格提升10级。',
      },
    },
    {
      id: 9083,
      name: '月之记忆',
      category: '泛用',
      defaultRarity: 'V',
      descriptions: {
        base: '全体敌方单位(异想体则为所有部位)的物理抗性及罪孽抗性全部变为“致命”。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9084,
      name: '古代雕像',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，使速度值最高的1名友方单位在下回合获得5层[Agility]。
  下回合开始时，使未受古代雕像影响的速度值最高的1名友方单位获得该效果。
  (若没有可选择的单位，则解除该效果)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9085,
      name: '保密协议',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，随机使1名友方单位造成的伤害+10%。(直到保密协议的效果被移除)

  每当该友方单位使用技能对敌方单位造成体力伤害，使其造成的伤害额外+10%(最多+40%)。当该友方单位受到体力伤害时，移除该效果。下回合开始时，随机使另一名友方单位获得该效果。(若没有可选择的单位，则移除该效果)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9086,
      name: '残响',
      category: '震颤',
      defaultRarity: 'II',
      descriptions: {
        base: '回合结束时，对[Vibration]强度不低于10级的全体敌方单位(或异想体的对应部位)在下回合施加2层[Binding]。若该单位的[Vibration]强度不低于20级，则改为施加2层[Binding]与1层[Paralysis]。',
        plus: '回合结束时，对[Vibration]强度不低于8级的全体敌方单位(或异想体的对应部位)在下回合施加2层[Binding]与2层[DefenseDown]。若该单位的[Vibration]强度不低于15级，则改为施加2层[Binding]，1层[Paralysis]，以及2层[DefenseDown]。',
        double_plus:
          '回合结束时，对[Vibration]强度不低于5级的全体敌方单位(或异想体的对应部位)在下回合施加2层[Binding]与3层[DefenseDown]。若该单位的[Vibration]强度不低于10级，则改为施加2层[Binding]，1层[Paralysis]，以及4层[DefenseDown]。',
      },
    },
    {
      id: 9087,
      name: '炽热的智慧',
      category: '烧伤',
      defaultRarity: 'I',
      descriptions: {
        base: '通过[Combustion]效果击杀敌方单位后，下回合开始时使拥有增加[Combustion]强度的技能的2名友方人格获得1层[AttackDmgUp]。',
        plus: '通过[Combustion]效果击杀敌方单位后，下回合开始时使拥有增加[Combustion]强度的技能的2名友方人格获得2层[AttackDmgUp]。',
        double_plus:
          '通过[Combustion]效果击杀敌方单位后，下回合开始时使拥有增加[Combustion]强度的技能的3名友方人格获得2层[AttackDmgUp]。',
      },
    },
    {
      id: 9088,
      name: '镇魂',
      category: '烧伤',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  回合开始时，对全体敌方单位(或异想体的所有部位)施加6层[Combustion]并随机使全体敌方单位增加共计15级[Combustion]强度。(每个波次最多1次)

  使增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的加算硬币技能的最终威力+1，硬币威力+1，使目标增加的[Combustion]强度额外+1级，对目标施加的[Combustion]层数额外+1层。
  - 减算硬币技能改为基础威力+(4/硬币数)，而非硬币威力(最少+1，向下取整)

  增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的技能拼点胜利时，使目标敌方单位增加(剩余硬币数+1)级[Combustion]强度`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9089,
      name: '锈蚀的笼头',
      category: '流血',
      defaultRarity: 'I',
      descriptions: {
        base: `使用单个技能对敌方单位造成不低于12点体力伤害时，使其增加2级[Laceration]强度。

  若该技能为[Slash]技能，则改为增加4级[Laceration]强度。`,
        plus: `使用单个技能对敌方单位造成不低于12点体力伤害时，使其增加3级[Laceration]强度。

  若该技能为[Slash]技能，则改为增加5级[Laceration]强度。`,
        double_plus: `使用单个技能对敌方单位造成不低于1点体力伤害时，使其增加3级[Laceration]强度。

  若该技能为[Slash]技能，则改为增加5级[Laceration]强度并施加1层[Laceration]。`,
      },
    },
    {
      id: 9090,
      name: '血雾',
      category: '流血',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有增加[Laceration]强度，施加[Laceration]层数或施加特殊[Laceration]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  全体友方单位通过技能效果使敌方单位增加的[Laceration]强度与对敌方单位施加的[Laceration]层数变为2倍。

  最先编入的人格增加[Laceration]强度，施加[Laceration]层数或施加特殊[Laceration]的加算硬币技能的硬币威力+2，造成的伤害+100%。
  - 减算硬币技能改为基础威力+(8/硬币数)，而非硬币威力(最少+1，向下取整)
  受到该人格攻击或与其拼点的敌方单位阵亡时，将阵亡的敌方单位的[Laceration]强度随机施加给全体敌方单位。(若是集中遭遇战，则改为以部位判定)

  所有增加[Laceration]强度，施加[Laceration]层数或施加特殊[Laceration]的加算硬币技能的硬币威力+1，造成的伤害+30%
  - 减算硬币技能改为基础威力+(4/硬币数)，而非硬币威力(最少+1，向下取整)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9091,
      name: '真理之钟',
      category: '震颤',
      defaultRarity: 'III',
      descriptions: {
        base: '使敌方单位[VibrationExplosion]时，本回合对其施加1层[Vulnerable](每个[VibrationExplosion]的攻击技能最多1次)。',
        plus: '使敌方单位[VibrationExplosion]时，本回合与下回合对其施加1层[Vulnerable](每个[VibrationExplosion]的攻击技能最多1次)',
        double_plus:
          '使敌方单位[VibrationExplosion]时，本回合与下回合对其施加2层[Vulnerable](每个[VibrationExplosion]的攻击技能最多1次)',
      },
    },
    {
      id: 9092,
      name: '震颤耦合',
      category: '震颤',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有增加[Vibration]强度或施加[Vibration]层数的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  回合开始时，使全体敌方单位(若是异想体，则改为所有部位)增加5级[Vibration]强度并对其施加5层[Vibration]。(每个波次最多1次)

  使敌方单位[VibrationExplosion]时，本回合与下回合使其增加5级[Vibration]强度并对其施加2层[Vulnerable]。(每个[VibrationExplosion]的攻击技能最多触发1次)

  若本回合使1名敌方单位[VibrationExplosion]3次，则下回合开始时使其陷入混乱并在现存体力66%与33%处生成1条混乱阈值。(每场战斗最多1次)

  造成[Switch_Vibration]或[FusionVibration]时，施加1层[Vulnerable](每回合最多3次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9093,
      name: '荧光灯',
      category: '破裂',
      defaultRarity: 'II',
      descriptions: {
        base: '回合结束时，若有敌方单位或异想体部位带有[Burst]，则下回合随机使1名友方单位获得1层[AttackDmgUp]或1层[Agility]。触发(带有[Burst]的敌方单位或异想体部位数量+1)次。',
        plus: '回合结束时，若有敌方单位或异想体部位带有[Burst]，则下回合随机使1名友方单位获得1层[AttackDmgUp]或1层[Agility]。触发(带有[Burst]的敌方单位或异想体部位数量+3)次。',
        double_plus:
          '回合结束时，若有敌方单位或异想体部位带有[Burst]，则下回合随机使1名友方单位获得1层[AttackDmgUp]与1层[Agility]。触发(带有[Burst]的敌方单位或异想体部位数量+3)次。',
      },
    },
    {
      id: 9094,
      name: '恍惚镜',
      category: '破裂',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有增加[Burst]强度或施加[Burst]层数的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  技能命中敌方单位时，使其增加5级[Burst]强度。

  战斗中敌方单位的[Burst]层数降至1层以下时，改为消耗10级[Burst]强度，而非[Burst]层数。([Burst]强度低于10级时不会触发)

  若目标的[Burst]层数低于3层，则对其施加的[Burst]层数额外+1层(每场战斗最多3次)。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9095,
      name: '破碎罗盘',
      category: '沉沦',
      defaultRarity: 'III',
      descriptions: {
        base: '波次的首个回合开始时，随机对全体敌方单位(或所有异想体部位)施加共计(5+敌方单位数量×3)层[Sinking]。（若是异想体，仅其本体算作1名敌方单位）',
        plus: '波次的首个回合开始时，随机对全体敌方单位(或所有异想体部位)施加共计(10+敌方单位数量×3)层[Sinking]。(若是异想体，仅其本体算作1名敌方单位)',
        double_plus:
          '波次的首个回合开始时，随机对全体敌方单位(或所有异想体部位)施加共计(10+敌方单位数量×4)层[Sinking]。(若是异想体，仅其本体算作1名敌方单位)',
      },
    },
    {
      id: 9096,
      name: '黑色乐谱',
      category: '沉沦',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  使用技能命中敌方单位时，使其增加5级[Sinking]强度。

  回合开始时，对全体敌方单位或所有部位重新施加(其上回合因受到攻击而消耗的[Sinking]层数/2)层[Sinking]。

  基础攻击技能命中时，对目标造成(其[Sinking]强度/10)点忧郁伤害(最少1点伤害)。

  攻击技能命中时，若目标的理智值低于0点，则每低1点，使该技能造成的伤害+1%
  - 若目标陷入恐慌，则改为造成的伤害+50%
  - 若目标未带有理智值，则其每带有2级[Sinking]强度，使该技能造成的伤害+1%。若目标的[Sinking]强度不低于90级，则改为造成的伤害+50%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9097,
      name: '马蹄铁饰物',
      category: '呼吸法',
      defaultRarity: 'I',
      descriptions: {
        base: `回合开始时，随机使未带有[Breath]强度的1名友方单位增加2级[Breath]强度。

  若全体友方单位都带有[Breath]强度，则改为使全体友方单位获得1层[Breath]。`,
        plus: `回合开始时，随机使未带有[Breath]强度的1名友方单位增加3级[Breath]强度。

  若全体友方单位都带有[Breath]强度，则改为使全体友方单位获得2层[Breath]。`,
        double_plus: `回合开始时，随机使未带有[Breath]强度的2名友方单位增加3级[Breath]强度。

  若全体友方单位都带有[Breath]强度，则改为使全体友方单位获得3层[Breath]。`,
      },
    },
    {
      id: 9098,
      name: '福袋',
      category: '呼吸法',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有增加[Breath]强度或获得[Breath]层数的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  随机1名战斗开始时带有[Breath]的友方单位通过技能对敌方单位造成暴击时，下回合开始时使全体友方单位增加7级[Breath]强度并获得7层[Breath]。(每回合最多1次)

  使拥有增加[Breath]强度或获得[Breath]层数的技能(不包括E.G.O技能)的人格3技能的最终威力+3，加算硬币威力+(12/硬币数)，造成的伤害+(50/硬币数)%。
  - 减算硬币技能改为最终威力+(12/硬币数)，而非加算硬币威力(最少+1，向下取整)

  战斗开始时，随机使1名友方单位增加3级[Breath]强度(优先选取拥有增加[Breath]强度或获得[Breath]层数的攻击技能的人格)。优先选取拥有忧郁攻击技能的友方单位，且该情况下改为使其增加3级[Breath]强度并获得2层[Breath]。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9099,
      name: '物理屏蔽力场',
      category: '充能',
      defaultRarity: 'III',
      descriptions: {
        base: '波次的首个回合开始时，使全体友方单位获得3层[ChargeForceField]。',
        plus: '波次的首个回合开始时，使全体友方单位获得5层[ChargeForceField]。',
        double_plus: '波次的首个回合开始时，使全体友方单位获得7层[ChargeForceField]。',
      },
    },
    {
      id: 9100,
      name: '第一类永动机',
      category: '充能',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有获得[Charge]层数或特殊[Charge]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  回合开始时，使全体友方单位获得7层[ChargeForceField]。(每个波次最多1次)

  回合开始时，使全体友方单位获得(其[Charge]层数/5 +1)层[AttackDmgUp]。(最多9层，向上取整；包括特殊[Charge])

  回合开始时，使全体人格获得(本场战斗中其通过攻击技能消耗的[Charge]层数与特殊[Charge]之和/4)层[AttackUp] 。(累计消耗40层[Charge]时效果最高)

  每当1名人格累计消耗10层[Charge]时，使其增加1级[Charge]强度。(每场战斗每名人格最多5次，不包括固定强度的特殊[Charge])

  回合开始时，全体友方单位每各带有2级[Charge]强度，使其获得1层[Enhancement](最多3层)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9101,
      name: '熔化的石蜡',
      category: '烧伤',
      defaultRarity: 'I',
      descriptions: {
        base: '增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的技能拼点胜利时，使目标增加(剩余硬币数/2)级[Combustion]强度',
        plus: '增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的技能拼点胜利时，使目标增加(剩余硬币数/2 +1)级[Combustion]强度',
        double_plus:
          '增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的技能拼点胜利时，使目标增加(剩余硬币数+1)级[Combustion]强度',
      },
    },
    {
      id: 9102,
      name: '偏振光',
      category: '烧伤',
      defaultRarity: 'I',
      descriptions: {
        base: '若友方单位的理智值高于目标至少30点，则使该友方单位增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的技能造成的伤害+7.5%(未带有理智值的敌方单位以理智值为0点计算)',
        plus: '若友方单位的理智值高于目标至少25点，则使该友方单位增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的技能造成的伤害+12.5%(未带有理智值的敌方单位以理智值为0点计算)',
        double_plus:
          '若友方单位的理智值高于目标至少15点，则使该友方单位增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的技能造成的伤害+20%(未带有理智值的敌方单位以理智值为0点计算)',
      },
    },
    {
      id: 9103,
      name: '郁火',
      category: '烧伤',
      defaultRarity: 'II',
      descriptions: {
        base: `通过技能效果使带有[Combustion]或特殊[Combustion]的敌方单位增加[Combustion]强度，对其施加[Combustion]层数或施加特殊[Combustion]时，下回合使自身获得1层[Agility]。(每个技能最多1次，每回合最多2次)

  若该友方单位带有[Agility]，则改为获得1层[Agility]与2层[AttackUp]。`,
        plus: `通过技能效果使带有[Combustion]或特殊[Combustion]的敌方单位增加[Combustion]强度，对其施加[Combustion]层数或施加特殊[Combustion]时，下回合使自身获得1层[Agility]。(每个技能最多1次，每回合最多3次)

  若该友方单位带有[Agility]，则改为获得2层[Agility]与2层[AttackUp]。`,
        double_plus: `通过技能效果使带有[Combustion]或特殊[Combustion]的敌方单位增加[Combustion]强度，对其施加[Combustion]层数或施加特殊[Combustion]时，下回合使自身获得1层[Agility]。(每个技能最多1次，每回合最多3次)

  若该友方单位带有[Agility]，则改为获得2层[Agility]，2层[AttackUp]与2层[AttackDmgUp]。`,
      },
    },
    {
      id: 9104,
      name: '火光花',
      category: '烧伤',
      defaultRarity: 'III',
      descriptions: {
        base: `若暴怒共鸣数不低于3，则使增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的技能的拼点威力+1
  - 若暴怒完全共鸣数不低于3或暴怒共鸣数不低于6，则改为拼点威力+2

  [第1、第2顺位人格专属]

  友方单位攻击敌方单位时，若目标现存体力不高于(目标的[Combustion]强度)%(若是异想体，则改为本体体力)，则使该友方单位增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的攻击技能造成的伤害+50%。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9105,
      name: '业火残片',
      category: '烧伤',
      defaultRarity: 'IV',
      descriptions: {
        base: `使用增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的E.G.O技能时触发

  最终威力增加相当于消耗的(暴怒E.G.O资源+其他E.G.O资源总和/3)的数值，造成的伤害+50%。

  若是暴怒E.G.O技能，则攻击前根据其E.G.O等级，相应额外对目标施加[Combustion]层数(ZAYIN施加2层，等级每提升1级，额外施加1层)并使该技能造成的伤害+(攻击容量/攻击目标数×20)%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9106,
      name: '被扣留的颂歌',
      category: '流血',
      defaultRarity: 'I',
      descriptions: {
        base: '战斗开始时，若全体敌方单位(若是异想体，则改为所有部位)均带有[Laceration]，则下回合使全体友方单位获得1层[Agility]。',
        plus: '战斗开始时，若全体敌方单位(若是异想体，则改为所有部位)均带有[Laceration]，则下回合使全体友方单位获得1层[Agility]与1层[AttackDmgUp]。',
        double_plus:
          '战斗开始时，若全体敌方单位(若是异想体，则改为所有部位)均带有[Laceration]，则下回合使全体友方单位获得2层[Agility]，1层[AttackDmgUp]与2层[AttackUp]。',
      },
    },
    {
      id: 9107,
      name: '纠缠捆束',
      category: '流血',
      defaultRarity: 'I',
      descriptions: {
        base: '速度值最高的友方单位增加[Laceration]强度，施加[Laceration]层数或施加特殊[Laceration]的技能对敌方单位造成的伤害+12.5%。',
        plus: '速度值最高的2名友方单位增加[Laceration]强度，施加[Laceration]层数或施加特殊[Laceration]的技能对敌方单位造成的伤害+15%。',
        double_plus:
          '速度值最高的3名友方单位增加[Laceration]强度，施加[Laceration]层数或施加特殊[Laceration]的技能对敌方单位造成的伤害+20%。',
      },
    },
    {
      id: 9108,
      name: '敬畏',
      category: '流血',
      defaultRarity: 'II',
      descriptions: {
        base: `[第1、第2顺位人格专属]

  若主要目标的[Laceration]层数不低于7层，则使增加[Laceration]强度，施加[Laceration]层数或施加特殊[Laceration]的技能造成的伤害+10%`,
        plus: `[第1、第2、第3顺位人格专属]

  若主要目标的[Laceration]层数不低于5层，则使增加[Laceration]强度，施加[Laceration]层数或施加特殊[Laceration]的技能造成的伤害+15%`,
        double_plus: `[第1、第2、第3顺位人格专属]

  若主要目标的[Laceration]层数不低于3层，则使增加[Laceration]强度，施加[Laceration]层数或施加特殊[Laceration]的技能造成的伤害+20%`,
      },
    },
    {
      id: 9109,
      name: '安息之地',
      category: '流血',
      defaultRarity: 'III',
      descriptions: {
        base: `增加[Laceration]强度，施加[Laceration]层数或施加特殊[Laceration]的技能拼点胜利时生效

  对目标施加(剩余硬币数/2)层[Laceration]并在下回合使自身获得相应层数的[AttackUp]

  硬币数不高于2枚的技能改为以(剩余硬币数+3)计算`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9110,
      name: '魅惑残片',
      category: '流血',
      defaultRarity: 'IV',
      descriptions: {
        base: `使用增加[Laceration]强度，施加[Laceration]层数或施加特殊[Laceration]的E.G.O技能时触发

  最终威力增加相当于消耗的(色欲E.G.O资源+其他E.G.O资源总和/3)的数值，造成的伤害+50%。

  若是色欲E.G.O技能，则攻击前根据其E.G.O等级，相应额外对目标施加[Laceration]层数(ZAYIN施加2层，等级每提升1级，额外施加1层)并对目标造成相当于其[Laceration]强度点色欲伤害`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9111,
      name: '生物剧毒药瓶',
      category: '震颤',
      defaultRarity: 'III',
      descriptions: {
        base: '带有[Vibration]强度的敌方单位阵亡时，下回合随机对1名敌方单位(若是异想体，则改为随机部位)造成(阵亡单位的[Vibration]强度与层数之和×0.5)点怠惰伤害',
        plus: '带有[Vibration]强度的敌方单位阵亡时，下回合随机对1名敌方单位(若是异想体，则改为随机部位)造成(阵亡单位的[Vibration]强度与层数之和×0.75)点怠惰伤害',
        double_plus:
          '带有[Vibration]强度的敌方单位阵亡时，下回合随机对1名敌方单位(若是异想体，则改为随机部位)造成(阵亡单位的[Vibration]强度与层数之和×1.25)点怠惰伤害',
      },
    },
    {
      id: 9112,
      name: '剧毒外皮',
      category: '震颤',
      defaultRarity: 'I',
      descriptions: {
        base: '增加[Vibration]强度或施加[Vibration]层数的技能(包括对自身施加的技能)拼点胜利时，使目标增加(剩余硬币数/2)级[Vibration]强度',
        plus: '增加[Vibration]强度或施加[Vibration]层数的技能(包括对自身施加的技能)拼点胜利时，使目标增加(剩余硬币数)级[Vibration]强度',
        double_plus:
          '增加[Vibration]强度或施加[Vibration]层数的技能(包括对自身施加的技能)拼点胜利时，使目标增加(剩余硬币数)级[Vibration]强度并对其施加(剩余硬币数/2)层[Vibration]',
      },
    },
    {
      id: 9113,
      name: '酸味的酒香',
      category: '震颤',
      defaultRarity: 'II',
      descriptions: {
        base: `[第1、第2顺位人格专属]

  增加[Vibration]强度或施加[Vibration]层数技能(包括对自身施加的技能)的攻击等级+2

  若主要目标带有[Vibration]且陷入混乱，则使技能造成的伤害+(混乱阶段×7.5)%

  增加[Vibration]强度或施加[Vibration]层数的技能则改为造成的伤害+(混乱阶段×15)%`,
        plus: `[第1、第2、第3顺位人格专属]

  增加[Vibration]强度或施加[Vibration]层数技能(包括对自身施加的技能)的攻击等级+2

  若主要目标带有[Vibration]且陷入混乱，则使技能造成的伤害+(混乱阶段×10)%

  增加[Vibration]强度或施加[Vibration]层数的技能则改为造成的伤害+(混乱阶段×20)%`,
        double_plus: `[第1、第2、第3顺位人格专属]

  增加[Vibration]强度或施加[Vibration]层数技能(包括对自身施加的技能)的攻击等级+3

  若主要目标带有[Vibration]且陷入混乱，则使技能造成的伤害+(混乱阶段×12.5)%

  增加[Vibration]强度或施加[Vibration]层数的技能则改为造成的伤害+(混乱阶段×25)%`,
      },
    },
    {
      id: 9114,
      name: '镜触觉通感',
      category: '震颤',
      defaultRarity: 'II',
      descriptions: {
        base: `友方单位通过增加[Vibration]强度或施加[Vibration]层数的攻击技能(包括对自身施加的技能，不包括E.G.O技能)使敌方单位陷入混乱时，随机使除该单位以外的全体敌方单位(若是异想体，则改为随机部位)增加共计该单位[Vibration]强度1/3的[Vibration]强度

  若没有敌方单位可增加[Vibration]强度，则改为下回合使目标的[Vibration]强度变为1.5倍`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9115,
      name: '齿轮发条',
      category: '震颤',
      defaultRarity: 'III',
      descriptions: {
        base: `[第1、第2顺位人格专属]

  增加[Vibration]强度或施加[Vibration]层数的技能(包括对自身施加的技能)拼点威力+1。

  增加[Vibration]强度或施加[Vibration]层数的攻击技能(不包括E.G.O技能)对带有[Vibration]的敌方单位造成伤害时，使该技能造成的伤害+(目标的[Vibration]强度+5)%

  傲慢技能改为造成的伤害+(目标的[Vibration]强度与层数之和+5)%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9116,
      name: '惰性残片',
      category: '震颤',
      defaultRarity: 'IV',
      descriptions: {
        base: `使用增加[Vibration]强度，施加[Vibration]层数或施加特殊[Vibration]的E.G.O技能时触发

  最终威力增加相当于消耗的(怠惰E.G.O资源+其他E.G.O资源总和/3)的数值，造成的伤害+50%。

  若是怠惰E.G.O技能，则攻击前根据其E.G.O等级，相应额外对目标施加[Vibration]层数(ZAYIN施加2层，等级每提升1级，额外施加1层)并使该技能造成的伤害+(目标的[Vibration]强度×1.5)%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9117,
      name: '有烟火药',
      category: '破裂',
      defaultRarity: 'II',
      descriptions: {
        base: `[第1、第2顺位人格专属]

  回合结束时，若本回合使用过增加[Burst]强度或施加[Burst]层数的攻击技能，则下回合使自身获得1层[Agility]

  若自身的速度值不低于6，则使增加[Burst]强度或施加[Burst]层数的攻击技能造成的伤害+12.5%`,
        plus: `[第1、第2、第3顺位人格专属]

  回合结束时，若本回合使用过增加[Burst]强度或施加[Burst]层数的攻击技能，则下回合使自身获得1层[Agility]

  若自身的速度值不低于5，则使增加[Burst]强度或施加[Burst]层数的攻击技能造成的伤害+15%`,
        double_plus: `[第1、第2、第3顺位人格专属]

  回合结束时，若本回合使用过增加[Burst]强度或施加[Burst]层数的攻击技能，则下回合使自身获得1~2层[Agility]。

  若自身的速度值不低于4，则使增加[Burst]强度或施加[Burst]层数的攻击技能造成的伤害+20%`,
      },
    },
    {
      id: 9118,
      name: '骨桩',
      category: '破裂',
      defaultRarity: 'I',
      descriptions: {
        base: '[Burst]效果对敌方单位带有的护盾造成的伤害+100%',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9119,
      name: '破损的雨伞',
      category: '破裂',
      defaultRarity: 'II',
      descriptions: {
        base: `[第1、第2顺位人格专属]

  增加[Burst]强度或施加[Burst]层数的攻击技能拼点胜利时，对目标施加2层[Burst](每回合每名人格最多1次)

  若目标未带有[Burst]，则改为使其增加3级[Burst]强度并对其施加2层[Burst]。`,
        plus: `[第1、第2、第3顺位人格专属]

  增加[Burst]强度或施加[Burst]层数的攻击技能拼点胜利时，使目标增加2级[Burst]强度并对其施加2层[Burst](每回合每名人格最多1次)

  若目标未带有[Burst]，则改为使其增加4级[Burst]强度并对其施加2层[Burst]。`,
        double_plus: `[第1、第2、第3顺位人格专属]

  增加[Burst]强度或施加[Burst]层数的攻击技能拼点胜利时，使目标增加4级[Burst]强度并对其施加2层[Burst](每回合每名人格最多1次)

  若目标未带有[Burst]，则改为使其增加6级[Burst]强度并对其施加3层[Burst]。`,
      },
    },
    {
      id: 9120,
      name: '寻死者',
      category: '破裂',
      defaultRarity: 'III',
      descriptions: {
        base: `[第1、第2顺位人格专属]

  增加[Burst]强度或施加[Burst]层数的攻击技能(不包括E.G.O技能)拼点威力+1，攻击等级+2，造成的伤害+15%。

  单硬币技能改为拼点威力+2，攻击等级+2，造成的伤害+40%。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9121,
      name: '欲望残片',
      category: '破裂',
      defaultRarity: 'IV',
      descriptions: {
        base: `使用增加[Burst]强度或施加[Burst]层数的E.G.O技能时触发

  最终威力增加相当于消耗的(暴食E.G.O资源+其他E.G.O资源总和/3)的数值，造成的伤害+50%。

  若是暴食E.G.O技能，则根据其E.G.O等级，相应额外对目标施加[Burst]层数(ZAYIN施加2层，等级每提升1级，额外施加1层)并使该技能造成的伤害+(消耗的E.G.O资源种类数×15)%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9122,
      name: '古木陷阱',
      category: '沉沦',
      defaultRarity: 'I',
      descriptions: {
        base: `增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的攻击技能(不包括E.G.O技能)造成的伤害+5%。

  硬币数不高于2枚的技能改为拼点威力+1，造成的伤害+10%。`,
        plus: `增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的攻击技能(不包括E.G.O技能)造成的伤害+7.5%。

  硬币数不高于2枚的技能改为拼点威力+1，造成的伤害+12.5%。`,
        double_plus: `增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的攻击技能(不包括E.G.O技能)造成的伤害+10%。

  硬币数不高于2枚的技能改为拼点威力+1，造成的伤害+15%。`,
      },
    },
    {
      id: 9123,
      name: '破布',
      category: '沉沦',
      defaultRarity: 'I',
      descriptions: {
        base: `拥有增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的攻击技能的人格拼点胜利时，使其额外恢复5点理智值(每回合最多1次)，若该单位理智值为最大值，则使其造成的伤害+7.5%。

  该单位使用减算硬币技能(不包括E.G.O技能)时效果改变，若该单位理智值不低于-15点，则使其理智值减少至-15点并使其造成的伤害+(理智值减少量)%，若该单位理智值低于-15点，则使其造成的伤害+15%。`,
        plus: `拥有增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的攻击技能的人格拼点胜利时，使其额外恢复6点理智值(每回合最多1次)，若该单位理智值为最大值，则使其造成的伤害+10%。

  该单位使用减算硬币技能(不包括E.G.O技能)时效果改变，若该单位理智值不低于-15点，则使其理智值减少至-15点并使其造成的伤害+(理智值减少量+5)%，若该单位理智值低于-15点，则使其造成的伤害+20%。`,
        double_plus: `拥有增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的攻击技能的人格拼点胜利时，使其额外恢复7点理智值(每回合最多1次)，若该单位理智值为最大值，则使其造成的伤害+12.5%。

  该单位使用减算硬币技能(不包括E.G.O技能)时效果改变，若该单位理智值不低于-15点，则使其理智值减少至-15点并使其造成的伤害+(理智值减少量+10)%，若该单位理智值低于-15点，则使其造成的伤害+25%。`,
      },
    },
    {
      id: 9124,
      name: '庄严',
      category: '沉沦',
      defaultRarity: 'II',
      descriptions: {
        base: `[第1、第2顺位人格专属]

  若目标的[Sinking]强度与[Sinking]层数之和不低于10点，则对其使用增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的攻击技能造成伤害时，自身攻击结束后使目标增加2级[Sinking]强度并对其施加2层[Sinking](每回合每名人格最多2次)。
  若是集中遭遇战，则改为增加4级[Sinking]强度并施加2层[Sinking](每回合每名人格最多1次)。`,
        plus: `[第1、第2、第3顺位人格专属]

  若目标的[Sinking]强度与[Sinking]层数之和不低于8点，则对其使用增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的攻击技能造成伤害时，自身攻击结束后使目标增加3级[Sinking]强度并对其施加2层[Sinking](每回合每名人格最多2次)。
  若是集中遭遇战，则改为增加5级[Sinking]强度并施加2层[Sinking](每回合每名人格最多1次)。`,
        double_plus: `[第1、第2、第3顺位人格专属]

  若目标的[Sinking]强度与[Sinking]层数之和不低于5点，则对其使用增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的攻击技能造成伤害时，自身攻击结束后使目标增加3级[Sinking]强度并对其施加3层[Sinking](每回合每名人格最多2次)。
  若是集中遭遇战，则改为增加5级[Sinking]强度并施加3层[Sinking](每回合每名人格最多1次)。`,
      },
    },
    {
      id: 9125,
      name: '彼方之星',
      category: '沉沦',
      defaultRarity: 'III',
      descriptions: {
        base: `使用增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking](包括使自身增加或对自身施加)的基础攻击技能命中敌方单位时，每触发1次目标的[Sinking]效果(包括特殊[Sinking])，在回合结束时，使自身恢复3点理智值(每回合每名人格最多2次)。

  若该人格在回合开始时理智值为45点，则改为使用基础攻击技能命中敌方单位并触发目标的[Sinking]效果(包括特殊[Sinking])时，对目标施加2层[Sinking](每回合每名人格最多2次)。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9126,
      name: '蚕食残片',
      category: '沉沦',
      defaultRarity: 'IV',
      descriptions: {
        base: `使用增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的E.G.O技能时触发

  最终威力增加相当于消耗的(忧郁E.G.O资源+其他E.G.O资源总和/3)的数值，造成的伤害+50%。

  若是忧郁E.G.O技能，则攻击前根据其E.G.O等级，相应额外对目标施加[Sinking]层数(ZAYIN施加2层，等级每提升1级，额外施加1层)并使该技能造成的伤害+(使用该E.G.O技能时消耗的理智值×2.5)%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9127,
      name: '魔鬼所享',
      category: '呼吸法',
      defaultRarity: 'I',
      descriptions: {
        base: `回合结束时，下回合使[Breath]强度最高的1名友方单位与[Breath]层数最高的1名友方单位获得1层[Agility]。(该效果可能对同一人格重复生效)

  若该友方单位拥有色欲攻击技能，则改为使其获得2层[Agility]。(不包括E.G.O技能)`,
        plus: `回合结束时，下回合使[Breath]强度最高的1名友方单位与[Breath]层数最高的1名友方单位获得1层[Agility]与1层[AttackUp]。(该效果可能对同一人格重复生效)

  若该友方单位拥有色欲攻击技能，则改为使其获得2层[Agility]与2层[AttackUp]。(不包括E.G.O技能)`,
        double_plus: `回合结束时，下回合使[Breath]强度最高的1名友方单位与[Breath]层数最高的1名友方单位获得1层[Agility]，1层[AttackUp]与1层[AttackDmgUp]。(该效果可能对同一人格重复生效)

  若该友方单位拥有色欲攻击技能，则改为使其获得2层[Agility]2层[AttackUp]与2层[AttackDmgUp]。(不包括E.G.O技能)`,
      },
    },
    {
      id: 9128,
      name: '绿色鞘翅',
      category: '呼吸法',
      defaultRarity: 'I',
      descriptions: {
        base: `波次的首个回合开始时，使速度值最高的1名友方单位增加3级[Breath]强度并使其获得2层[Breath]。

  若该友方单位拥有嫉妒攻击技能，则改为增加4级[Breath]强度并获得3层[Breath]。`,
        plus: `波次的首个回合开始时，使速度值最高的1名友方单位增加4级[Breath]强度并使其获得4层[Breath]。

  若该友方单位拥有嫉妒攻击技能，则改为增加5级[Breath]强度并获得5层[Breath]。`,
        double_plus: `回合开始时，使速度值最高的1名友方单位增加4级[Breath]强度并使其获得4层[Breath]。

  若该友方单位拥有嫉妒攻击技能，则改为增加5级[Breath]强度并获得5层[Breath]。`,
      },
    },
    {
      id: 9129,
      name: '陈旧的木雕人偶',
      category: '呼吸法',
      defaultRarity: 'II',
      descriptions: {
        base: `[第1、第2顺位人格专属]

  暴击时，下回合对目标施加1层[DefenseDown](每回合每名人格最多3次)。
  [不可重复触发] 朱符 堂吉诃德 E.G.O被动触发时，该效果不会触发`,
        plus: `[第1、第2、第3顺位人格专属]

  暴击时，下回合对目标施加1层[DefenseDown](每回合每名人格最多4次)。
  [不可重复触发] 朱符 堂吉诃德 E.G.O被动触发时，该效果不会触发`,
        double_plus: `[第1、第2、第3顺位人格专属]

  暴击时，下回合对目标施加1层[DefenseDown](每回合每名人格最多6次)。
  [不可重复触发] 朱符 堂吉诃德 E.G.O被动触发时，该效果不会触发`,
      },
    },
    {
      id: 9130,
      name: '留恋',
      category: '呼吸法',
      defaultRarity: 'III',
      descriptions: {
        base: `[第1、第2顺位人格专属]

  回合开始时，使[Breath]强度与[Breath]层数之和不低于10点的友方单位拼点威力+1并获得1层[AttackDmgUp]。

  若总和不低于20点，则改为拼点威力+1并获得3层[AttackDmgUp]。

  若总和不低于40点，则改为拼点威力+2并获得3层[AttackDmgUp]。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9131,
      name: '骄慢残片',
      category: '呼吸法',
      defaultRarity: 'IV',
      descriptions: {
        base: `使用增加[Breath]强度或获得[Breath]层数的E.G.O技能时触发

  最终威力增加相当于消耗的(傲慢E.G.O资源+其他E.G.O资源总和/3)的数值，造成的伤害+50%。

  若是傲慢E.G.O技能，则攻击前根据其E.G.O等级，相应额外获得[Breath]层数(ZAYIN获得2层，等级每提升1级，额外获得1层)并使本技能造成的伤害+(消耗的E.G.O资源总和×8)%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9132,
      name: '不间断电源装置',
      category: '充能',
      defaultRarity: 'I',
      descriptions: {
        base: `回合结束时，若自身的[Charge]层数低于3层，则下回合开始时使自身获得3层[Charge]。(包括特殊[Charge])

  回合结束时，若自身的[Charge]层数不低于3层，则下回合开始时使自身获得1层[AttackDmgUp]。(包括特殊[Charge])`,
        plus: `回合结束时，若自身的[Charge]层数低于4层，则下回合开始时使自身获得3层[Charge]。(包括特殊[Charge])

  回合结束时，若自身的[Charge]层数不低于4层，则下回合开始时使自身获得1层[AttackDmgUp]。(包括特殊[Charge])`,
        double_plus: `回合结束时，若自身的[Charge]层数低于5层，则下回合开始时使自身获得4层[Charge]。(包括特殊[Charge])

  回合结束时，若自身的[Charge]层数不低于5层，则下回合开始时使自身获得2层[AttackDmgUp]。(包括特殊[Charge])`,
      },
    },
    {
      id: 9133,
      name: '解除限制的除颤仪',
      category: '充能',
      defaultRarity: 'I',
      descriptions: {
        base: `回合结束时，使自身恢复(本回合攻击技能消耗的[Charge]层数与特殊[Charge]之和)点体力与理智值。

  若现存体力不高于50%，则使恢复量变为1.5倍。`,
        plus: `回合结束时，使自身恢复(本回合攻击技能消耗的[Charge]层数与特殊[Charge]之和+1)点体力与理智值。

  若现存体力不高于50%，则使恢复量变为2倍。`,
        double_plus: `回合结束时，使自身恢复(本回合攻击技能消耗的[Charge]层数与特殊[Charge]之和+2)点体力与理智值。

  若现存体力不高于75%，则使恢复量变为2倍。`,
      },
    },
    {
      id: 9134,
      name: '巡逻用手电筒',
      category: '充能',
      defaultRarity: 'II',
      descriptions: {
        base: `[第1、第2顺位人格专属]

  回合开始时，使适用的人格获得2层[ChargeForceField]

  若适用的人格拥有获得或消耗[Charge]层数或特殊[Charge]的技能且带有[ChargeForceField]，则使其1技能的拼点威力+1，造成的伤害+10%。`,
        plus: `[第1、第2、第3顺位人格专属]

  回合开始时，使适用的人格获得3层[ChargeForceField]

  若适用的人格拥有获得或消耗[Charge]层数或特殊[Charge]的技能且带有[ChargeForceField]，则使其1技能的拼点威力+1，造成的伤害+15%。`,
        double_plus: `[第1、第2、第3顺位人格专属]

  回合开始时，使适用的人格获得4层[ChargeForceField]

  若适用的人格拥有获得或消耗[Charge]层数或特殊[Charge]的技能且带有[ChargeForceField]，则使其1技能的拼点威力+1，造成的伤害+25%。`,
      },
    },
    {
      id: 9135,
      name: '仿造发电机',
      category: '充能',
      defaultRarity: 'III',
      descriptions: {
        base: `[第1、第2顺位人格专属]

  回合开始时，若单位的[Charge]层数与特殊[Charge](固定强度)之和不低于10层，则发动效果。

  使获得或消耗[Charge]层数或特殊[Charge](固定强度)的3技能的加算硬币威力+1。
  - 减算硬币技能改为基础威力+(4/硬币数)，而非加算硬币威力(最少+1，向下取整)

  若该技能的基础威力低于5，则使该技能造成的伤害+25%。若该技能的基础威力不低于5，则使该技能的加算硬币威力额外+1。
  - 减算硬币技能改为基础威力+(4/硬币数)，而非加算硬币威力(最少+1，向下取整)

  ※ 拥有强度与层数的特殊[Charge]以其层数计算`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9136,
      name: '摩擦残片',
      category: '充能',
      defaultRarity: 'IV',
      descriptions: {
        base: `使用获得或消耗[Charge]层数或特殊[Charge](固定强度)的E.G.O技能时触发

  最终威力增加相当于消耗的(嫉妒E.G.O资源+其他E.G.O资源总和/3)的数值，造成的伤害+50%。

  若是嫉妒E.G.O技能，则攻击前根据其E.G.O等级，相应额外获得[Charge]层数(ZAYIN获得2层，等级每提升1级，额外获得1层)并使该技能造成的伤害+(自身的[Charge]层数与特殊[Charge](固定强度)之和×5)%(最多+200%)※ 拥有强度与层数的特殊[Charge]以其层数计算`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9137,
      name: '手术用刀',
      category: '斩击',
      defaultRarity: 'I',
      descriptions: {
        base: `[第4顺位人格专属]

  回合结束时，拥有[Slash]攻击技能的人格下回合获得(其拥有的[Slash]攻击技能数)层[Agility](相同的技能仅计入1次，不包括E.G.O技能与反击)。`,
        plus: `[第4顺位人格专属]

  回合结束时，拥有[Slash]攻击技能的人格下回合获得(其拥有的[Slash]攻击技能数+1)层[Agility](相同的技能仅计入1次，不包括E.G.O技能与反击)。`,
        double_plus: `[第4、第5顺位人格专属]

  回合结束时，拥有[Slash]攻击技能的人格下回合获得(其拥有的[Slash]攻击技能数+1)层[Agility](相同的技能仅计入1次，不包括E.G.O技能与反击)。`,
      },
    },
    {
      id: 9138,
      name: '虚饰的和平',
      category: '斩击',
      defaultRarity: 'I',
      descriptions: {
        base: `[第5顺位人格专属]

  若自身的速度值与目标相差至少3点，则使自身[Slash]技能造成的伤害+15%。`,
        plus: `[第5顺位人格专属]

  若自身的速度值与目标相差至少3点，则使自身[Slash]技能造成的伤害+20%。`,
        double_plus: `[第5、第6顺位人格专属]

  若自身的速度值与目标相差至少2点，则使自身[Slash]技能造成的伤害+20%。`,
      },
    },
    {
      id: 9139,
      name: '裁缝用剪刀',
      category: '斩击',
      defaultRarity: 'II',
      descriptions: {
        base: `[第6顺位人格专属]

  硬币数不高于2枚的[Slash]技能(不包括E.G.O技能)拼点威力+1，造成的伤害+10%。

  单硬币技能改为拼点威力+1，造成的伤害+20%。`,
        plus: `[第4、第6顺位人格专属]

  硬币数不高于2枚的[Slash]技能(不包括E.G.O技能)拼点威力+1，造成的伤害+15%。

  单硬币技能改为拼点威力+1，造成的伤害+25%。`,
        double_plus: `[第4、第6顺位人格专属]

  硬币数不高于2枚的[Slash]技能(不包括E.G.O技能)拼点威力+1，造成的伤害+20%。

  单硬币技能改为拼点威力+1，造成的伤害+30%。`,
      },
    },
    {
      id: 9140,
      name: '决意',
      category: '斩击',
      defaultRarity: 'II',
      descriptions: {
        base: `本场战斗中，拥有不低于2个[Slash]技能的友方单位首个回合的拼点威力+1，从第2回合起使其获得1层[Agility]并使其拼点威力+1。

  属于し协会的人格恢复体力至多恢复至体力上限的75%，但受到的伤害与使自身恢复的体力-50%(关卡开始时立即触发，不包括E.G.O饰品恢复的体力)。

  每回合开始时，使属于し协会的人格获得1层[SlashResultUp] 与1层[SlashDamageUp] `,
        plus: `本场战斗中，拥有不低于2个[Slash]技能的友方单位首个回合的拼点威力+1，从第2回合起使其获得2层[Agility]并使其拼点威力+1。

  属于し协会的人格恢复体力至多恢复至体力上限的50%，但受到的伤害与使自身恢复的体力-75%（关卡开始时立即触发，不包括E.G.O饰品恢复的体力）。

  每回合开始时，使属于し协会的人格获得1层[SlashResultUp] 与2层[SlashDamageUp] `,
        double_plus: `本场战斗中，拥有不低于2个[Slash]技能的友方单位首个回合的拼点威力+1，从第2回合起使其获得2层[Agility]并使其最终威力+1。

  属于し协会的人格恢复体力至多恢复至体力上限的49%，但受到的伤害与使自身恢复的体力-75%（关卡开始时立即触发，不包括E.G.O饰品恢复的体力）。

  每回合开始时，使属于し协会的人格获得1层[SlashResultUp] 与3层[SlashDamageUp] `,
      },
    },
    {
      id: 9141,
      name: '宣判之刻',
      category: '斩击',
      defaultRarity: 'III',
      descriptions: {
        base: `[第3、第4顺位人格专属]

  单方面攻击时，[Slash]技能造成的伤害+10%

  拼点胜利时，[Slash]技能造成的伤害+(40/剩余硬币数)%`,
        plus: `[第3、第4、第5顺位人格专属]

  单方面攻击时，[Slash]技能造成的伤害+10%

  拼点胜利时，[Slash]技能造成的伤害+(40/剩余硬币数)%`,
        double_plus: `[第3、第4、第5、第6顺位人格专属]

  单方面攻击时，[Slash]技能造成的伤害+12.5%

  拼点胜利时，[Slash]技能造成的伤害+(50/剩余硬币数)%`,
      },
    },
    {
      id: 9142,
      name: '切开的记忆',
      category: '斩击',
      defaultRarity: 'IV',
      descriptions: {
        base: `[第1、2顺位人格专属]

  [Slash]攻击技能的基础威力+2，加算硬币威力+1，减算硬币威力-1(包括E.G.O技能)。

  [Slash]攻击技能拼点胜利时，使其造成的伤害+30%。该技能命中时，自身每失去5%体力，使该技能造成的伤害+5%(最多+20%)(不包括E.G.O技能)。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9143,
      name: '木工用长钉',
      category: '突刺',
      defaultRarity: 'I',
      descriptions: {
        base: `[第4顺位人格专属]

  若自身拥有不低于2个[Pierce]攻击技能，则回合开始时使自身获得1层[PenetrateDamageUp]。`,
        plus: `[第4顺位人格专属]

  若自身拥有不低于2个[Pierce]攻击技能，则回合开始时使自身获得2层[PenetrateDamageUp]。`,
        double_plus: `[第4、第5顺位人格专属]

  若自身拥有不低于2个[Pierce]攻击技能，则回合开始时使自身获得2层[PenetrateDamageUp]。`,
      },
    },
    {
      id: 9144,
      name: '曾经的祝福',
      category: '突刺',
      defaultRarity: 'II',
      descriptions: {
        base: `[第6顺位人格专属]

  使用[Pierce]技能命中敌方单位时，下回合使自身获得1层[Agility]与1层[PenetrateDamageUp](每回合最多1次)。

  该技能击杀敌方单位时，下回合使自身额外获得1层[Agility](每回合最多1次)。`,
        plus: `[第5、第6顺位人格专属]

  使用[Pierce]技能命中敌方单位时，下回合使自身获得1层[Agility]与1层[PenetrateDamageUp](每回合每名人格最多1次)。

  该技能击杀敌方单位时，下回合使自身额外获得1层[Agility]与1层[PenetrateDamageUp](每回合每名人格最多1次)。`,
        double_plus: `[第5、第6顺位人格专属]

  使用[Pierce]技能命中敌方单位时，下回合使自身获得1层[Agility]与1层[PenetrateDamageUp](每回合每名人格最多2次)。

  该技能击杀敌方单位时，下回合使自身额外获得1层[Agility]与2层[PenetrateDamageUp](每回合每名人格最多1次)。`,
      },
    },
    {
      id: 9145,
      name: '撕裂的弹带',
      category: '突刺',
      defaultRarity: 'II',
      descriptions: {
        base: `[Pierce]攻击技能的拼点威力+1

  消耗[Bullet]的技能造成的伤害+(40/硬币数)%

  若自身消耗了所有的[Bullet]，则下回合开始时使自身获得2发[Bullet](每场战斗每名人格最多1次)`,
        plus: `[Pierce]攻击技能的拼点威力+1，造成的伤害+5%

  消耗[Bullet]的技能造成的伤害+(50/硬币数)%

  若自身消耗了所有的[Bullet]，则下回合开始时使自身获得2发[Bullet](每场战斗每名人格最多1次)`,
        double_plus: `[Pierce]攻击技能的拼点威力+1，造成的伤害+10%

  消耗[Bullet]的技能造成的伤害+(60/硬币数)%

  若自身消耗了所有的[Bullet]，则下回合开始时使自身获得2发[Bullet](每场战斗每名人格最多1次)`,
      },
    },
    {
      id: 9146,
      name: '磨尖的树枝',
      category: '突刺',
      defaultRarity: 'III',
      descriptions: {
        base: `[第3、第4顺位人格专属]

  进行拼点时，使自身的拼点威力+1，[Pierce]技能造成的伤害+20%。

  单方面攻击时，[Pierce]技能造成的伤害+10%。`,
        plus: `[第3、第4、第5顺位人格专属]

  进行拼点时，使自身的拼点威力+1，[Pierce]技能造成的伤害+20%。

  单方面攻击时，[Pierce]技能造成的伤害+10%。`,
        double_plus: `[第3、第4、第5、第6顺位人格专属]

  进行拼点时，使自身的拼点威力+1，[Pierce]技能造成的伤害+25%。

  单方面攻击时，[Pierce]技能造成的伤害+12.5%。`,
      },
    },
    {
      id: 9147,
      name: '洞穿的记忆',
      category: '突刺',
      defaultRarity: 'IV',
      descriptions: {
        base: `[第1、2顺位人格专属]

  [Pierce]攻击技能的基础威力+2，加算硬币威力+1，减算硬币威力-1(包括E.G.O技能)。

  [Pierce]攻击技能拼点胜利时，使其造成的伤害+15%。该技能命中时，若自身的速度值高于主要目标，则使该技能造成的伤害+(速度值之差×2.5)%(最多+35%)(不包括E.G.O技能)。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9148,
      name: '作祟',
      category: '打击',
      defaultRarity: 'I',
      descriptions: {
        base: `[第6顺位人格专属]

  [Blunt]技能拼点胜利时，下回合使自身获得1层[Agility](每回合最多2次)。

  回合结束时，若本回合自身没有对敌方单位造成伤害，则改为下回合使自身获得3层[Agility]。`,
        plus: `[第6顺位人格专属]

  使用[Blunt]技能时，下回合使自身获得1层[Agility](每回合最多2次)。

  回合结束时，若本回合自身没有对敌方单位造成伤害，则改为下回合使自身获得3层[Agility]。`,
        double_plus: `[第4、第6顺位人格专属]

  使用[Blunt]技能时，下回合使自身获得1层[Agility]与1层[HitDamageUp](每回合最多2次)。

  回合结束时，若本回合自身没有对敌方单位造成伤害，则改为下回合使自身获得3层[Agility]与2层[HitDamageUp]。`,
      },
    },
    {
      id: 9149,
      name: '加压绷带',
      category: '打击',
      defaultRarity: 'II',
      descriptions: {
        base: `[第5顺位人格专属]

  [Blunt]技能命中敌方单位时，对目标额外造成3点[Blunt]伤害。

  若是忧郁攻击技能，则额外使自身恢复3点体力。`,
        plus: `[第5、第6顺位人格专属]

  [Blunt]技能命中敌方单位时，对目标额外造成3~5点[Blunt]伤害。

  若是忧郁攻击技能，则额外使自身恢复4点体力。`,
        double_plus: `[第5、第6顺位人格专属]

  [Blunt]技能命中敌方单位时，对目标额外造成3~7点[Blunt]伤害。

  若是忧郁攻击技能，则额外使自身恢复6点体力。`,
      },
    },
    {
      id: 9150,
      name: '时间的枷锁',
      category: '打击',
      defaultRarity: 'II',
      descriptions: {
        base: `回合开始时，使拥有[Blunt]攻击技能(不包括E.G.O技能)的友方单位获得1层[AttackUp]。

  若该单位拥有不低于2个[Blunt]攻击技能，则改为获得1层[AttackUp]与1层[HitDamageUp]。

  若该单位拥有不低于2个使用减算硬币的[Blunt]攻击技能，则改为获得2层[AttackUp]与2层[HitDamageUp]。`,
        plus: `回合开始时，使拥有[Blunt]攻击技能(不包括E.G.O技能)的友方单位获得2层[AttackUp]。

  若该单位拥有不低于2个[Blunt]攻击技能，则改为获得2层[AttackUp]与1层[HitDamageUp]。

  若该单位拥有不低于2个使用减算硬币的[Blunt]攻击技能，则改为获得3层[AttackUp]与2层[HitDamageUp]。`,
        double_plus: `回合开始时，使拥有[Blunt]攻击技能(不包括E.G.O技能)的友方单位获得2层[AttackUp]与1层[HitDamageUp]。

  若该单位拥有不低于2个[Blunt]攻击技能，则改为获得2层[AttackUp]与2层[HitDamageUp]。

  若该单位拥有不低于2个使用减算硬币的[Blunt]攻击技能，则改为获得3层[AttackUp]与3层[HitDamageUp]。`,
      },
    },
    {
      id: 9151,
      name: '紧握的雕像',
      category: '打击',
      defaultRarity: 'III',
      descriptions: {
        base: `[第3、第4顺位人格专属]

  [Blunt]技能拼点结束后，若剩余硬币数不低于2枚，则使其造成的伤害+10%，若剩余硬币数不低于3枚，则使其造成的伤害+20%，若剩余硬币数不低于4枚，则使其造成的伤害+40%。`,
        plus: `[第3、第4、第5顺位人格专属]

  [Blunt]技能拼点结束后，若剩余硬币数不低于2枚，则使其造成的伤害+10%，若剩余硬币数不低于3枚，则使其造成的伤害+20%，若剩余硬币数不低于4枚，则使其造成的伤害+40%。`,
        double_plus: `[第3、第4、第5、第6顺位人格专属]

  [Blunt]技能拼点结束后，若剩余硬币数不低于2枚，则使其造成的伤害+12.5%，若剩余硬币数不低于3枚，则使其造成的伤害+25%，若剩余硬币数不低于4枚，则使其造成的伤害+50%。`,
      },
    },
    {
      id: 9152,
      name: '粉碎的记忆',
      category: '打击',
      defaultRarity: 'IV',
      descriptions: {
        base: `[第1、2顺位人格专属]

  [Blunt]攻击技能的基础威力+2，加算硬币威力+1，减算硬币威力-1(包括E.G.O技能)。

  [Blunt]攻击技能拼点胜利时，使其造成的伤害+20%。该技能命中时，造成的伤害+(30/硬币数)%(最少+10%)(不包括E.G.O技能)。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9153,
      name: '神谕',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: '回合结束时，将持有量最多的1个E.G.O资源转化为持有量最少的1个E.G.O资源。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9154,
      name: '强压的重担',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `回合结束时，若没有除自身以外的友方单位存活，则下回合消耗剩余体力5%的体力并使自身获得2层[Enhancement](现存体力不高于25%时不生效)。

  若自身剩余体力不高于50%，则改为获得3层[Enhancement]。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9155,
      name: '万年炖锅',
      category: '烧伤',
      defaultRarity: 'II',
      descriptions: {
        base: '增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的技能拼点威力+1。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9157,
      name: '烹饪秘诀书',
      category: '烧伤',
      defaultRarity: 'III',
      descriptions: {
        base: `回合开始时，若拥有增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  使增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的技能的最终威力+1

  增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的技能拼点胜利时，使目标敌方单位增加(剩余硬币数/2 +1)级[Combustion]强度`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9159,
      name: '蜜拉卡',
      category: '流血',
      defaultRarity: 'II',
      descriptions: {
        base: '增加[Laceration]强度，施加[Laceration]层数或施加特殊[Laceration]的技能拼点威力+1。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9161,
      name: '虔诚',
      category: '流血',
      defaultRarity: 'III',
      descriptions: {
        base: `回合开始时，若拥有增加[Laceration]强度，施加[Laceration]层数或施加特殊[Laceration]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  速度值最高的1名友方单位增加[Laceration]强度，施加[Laceration]层数或施加特殊[Laceration]的加算硬币技能的硬币威力+1，造成的伤害+50%
  - 减算硬币技能改为基础威力+(4/硬币数)，而非硬币威力(最少+1，向下取整)

  增加[Laceration]强度，施加[Laceration]层数或施加特殊[Laceration]的技能的最终威力+1。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9165,
      name: '啮合的齿轮',
      category: '震颤',
      defaultRarity: 'II',
      descriptions: {
        base: `回合开始时，若拥有增加[Vibration]强度或施加[Vibration]层数的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  若本回合使目标[VibrationExplosion]6次，则在其现存体力0%处生成1条混乱阈值。(每场战斗最多1次)

  造成[Switch_Vibration]或[FusionVibration]时，施加1层[Vulnerable](每回合最多1次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9169,
      name: '荆棘捕绳',
      category: '破裂',
      defaultRarity: 'II',
      descriptions: {
        base: `回合开始时，若拥有增加[Burst]强度或施加[Burst]层数的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  战斗中敌方单位的[Burst]层数降至1层以下时，改为消耗20级[Burst]强度，而非[Burst]层数。([Burst]强度低于20级时不会触发)

  战斗中命中敌方单位时，若其[Burst]层数为1层，则对其施加的[Burst]层数额外+1层(每场战斗最多2次)。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9174,
      name: '碎裂的骨片',
      category: '沉沦',
      defaultRarity: 'II',
      descriptions: {
        base: `回合开始时，若拥有增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  回合开始时，对带有[Sinking]的全体敌方单位(若是异想体，则改为所有部位)重新施加(上回合受击而消耗的[Sinking]层数/3)层[Sinking]。

  基础技能命中时，若目标的理智值低于0点(未带有理智值的目标改为若其忧郁抗性不低于1.5)，则对其造成(其[Sinking]强度/10)点忧郁伤害(最少1点伤害，该效果每回合最多触发10次)。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9177,
      name: '某日的记忆',
      category: '呼吸法',
      defaultRarity: 'II',
      descriptions: {
        base: '拥有增加[Breath]强度或获得[Breath]层数的技能(不包括E.G.O技能)的人格的3技能最终威力+2',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9179,
      name: '追忆',
      category: '呼吸法',
      defaultRarity: 'III',
      descriptions: {
        base: `回合开始时，若拥有增加[Breath]强度或获得[Breath]层数的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  使拥有增加[Breath]强度或获得[Breath]层数的技能(不包括E.G.O技能)的人格3技能的加算硬币威力+1。
  - 减算硬币技能改为基础威力+(4/硬币数)，而非加算硬币威力(最少+1，向下取整)

  战斗开始时，随机使1名友方单位增加3级[Breath]强度(优先选取拥有增加[Breath]强度或获得[Breath]层数的攻击技能的人格)。优先选取拥有忧郁攻击技能的友方单位，且该情况下改为使其增加3级[Breath]强度并获得2层[Breath]。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9182,
      name: '1B型八角螺栓',
      category: '充能',
      defaultRarity: 'II',
      descriptions: {
        base: `回合开始时，若拥有获得[Charge]层数或特殊[Charge]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  回合开始时，使全体友方单位获得(其[Charge]层数之和/10)层[AttackDmgUp](最多2层，向上取整；包括特殊[Charge])

  回合结束时，使未带有[ChargeForceField]的友方单位获得1层[ChargeForceField]。

  每当1名人格累计消耗20层[Charge]时，使其增加1级[Charge]强度。(每场战斗每名人格最多2次，不包括固定强度的特殊[Charge])`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9185,
      name: '返利礼券',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: '在商店进行强化时，以20%的概率返还消耗的经费。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9186,
      name: '新品小册',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: '在商店进行刷新时，以20%的概率返还消耗的经费。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9187,
      name: '特别目录',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: '遭遇战奖励卡出现数+1',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9188,
      name: '预约优惠券',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: '商店一般刷新所需经费减少30%',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9189,
      name: '翻新的商品',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: '商店强化E.G.O饰品所需经费减少30%',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9190,
      name: '试用计划指南',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: '商店技能替换所需经费减少30%(不包括技能观测的消耗)',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9191,
      name: '贵宾卡',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: '商店购买E.G.O饰品所需经费减少30%',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9193,
      name: '磨损的砥石',
      category: '斩击',
      defaultRarity: 'I',
      descriptions: {
        base: `[第3顺位人格专属]

  [Slash]技能的攻击等级+(该人格拥有的[Slash]基础攻击技能数)(同技能不重复计数，最多+3)。

  攻击[Slash]抗性为脆弱(抗性高于1.0，陷入混乱的单位不计入)的敌方单位时，造成的[Slash]伤害+(5+目标的[Slash]抗性×10)%(最多+25%)。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9194,
      name: '拐杖短剑',
      category: '斩击',
      defaultRarity: 'II',
      descriptions: {
        base: `[Slash]基础攻击技能拼点胜利时，下回合对目标施加2层[DefenseDown] 。(每回合每名人格最多1次，不会对同一名敌方单位叠加)
  - 对于属于Seven协会的人格，该效果同样适用于[Pierce]与[Blunt]基础攻击技能

  关卡开始时，使属于Seven协会的人格获得(除自身外属于Seven协会的人格数/2)层[ParryingResultUp] 。(向下取整，最多2层)`,
        plus: `[Slash]基础攻击技能拼点胜利时，下回合对目标施加2层[DefenseDown] 。(每回合每名人格最多1次，不会对同一名敌方单位叠加)
  - 对于属于Seven协会的人格，该效果同样适用于[Pierce]与[Blunt]基础攻击技能，并额外施加弱点分析

  奇数回合开始时，使属于Seven协会的人格获得(除自身外属于Seven协会的人格数/2)层[ParryingResultUp] 。(向下取整，最多2层)`,
        double_plus: `[Slash]基础攻击技能拼点胜利时，下回合对目标施加2层[DefenseDown] 。(每回合每名人格最多1次，不会对同一名敌方单位叠加)
  - 对于属于Seven协会的人格，该效果同样适用于[Pierce]与[Blunt]基础攻击技能，并额外施加弱点分析 与1层[ResultReduction]

  回合开始时，使属于Seven协会的人格获得(除自身外属于Seven协会的人格数/2)层[ParryingResultUp] (向下取整，最多2层)。拼点胜利时，使该技能造成的伤害+20%。`,
      },
    },
    {
      id: 9195,
      name: '云纹鹤颈瓶',
      category: '斩击',
      defaultRarity: 'III',
      descriptions: {
        base: `[Slash]1技能的拼点威力+1，命中时对目标施加2层[AttackDown] 。
  - 对于属于黑云会的人格，该效果同样适用于所有[Slash]基础攻击技能

  回合开始时，使属于黑云会的人格获得1层[ResultEnhancement] ，基础攻击技能命中并增加[Laceration] 强度或施加[Laceration] 层数时，使自身增加1级[Breath] 强度(每回合每名人格最多4次)。`,
        plus: `[Slash]1技能的拼点威力+1，命中时对目标施加2层[AttackDown] 。
  - 对于属于黑云会的人格，该效果同样适用于所有[Slash]或色欲基础攻击技能

  回合开始时，使属于黑云会的人格获得1层[ResultEnhancement] ，基础攻击技能命中并增加[Laceration] 强度或施加[Laceration] 层数时，使自身增加1级[Breath] 强度(每回合每名人格最多6次)。`,
        double_plus: `[Slash]1技能的拼点威力+1，命中时对目标施加2层[AttackDown] 。
  - 对于属于黑云会的人格，该效果同样适用于所有基础攻击技能

  回合开始时，使属于黑云会的人格获得1层[ResultEnhancement] ，基础攻击技能命中并增加[Laceration] 强度或施加[Laceration] 层数时，使自身增加1~2级[Breath] 强度(每回合每名人格最多8次)。`,
      },
    },
    {
      id: 9196,
      name: '破碎的巨剑',
      category: '斩击',
      defaultRarity: 'IV',
      descriptions: {
        base: `[Slash]基础攻击技能的拼点威力+2。战斗开始时，本回合除自身以外每有1名人格使用了[Slash]基础攻击技能，使自身获得1层[AttackUp]。(最多3层)

  回合开始时，使拥有的基础攻击技能全部为[Slash]技能的友方单位获得2层[SlashDamageUp]。(不包括强化技能或需要特殊条件的技能)

  使用防御技能(不包括强化防御)时，使自身获得1层[Protection]与3层[DefenseUp](每回合每名人格最多1次)。单个回合内，友方人格每因敌方单位的单目标攻击技能攻击并受到2次体力或护盾体力伤害，下回合使该人格获得1层[DefenseUp](最多3层)

  回合开始时，使属于Zwei协会的人格获得2层[Enhancement]与1层[SlashResultUp]，除自身以外每有1名属于Zwei协会的人格，使自身获得2层[DefenseUp](最多8层)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9197,
      name: '高弹性钢鞋',
      category: '突刺',
      defaultRarity: 'I',
      descriptions: {
        base: `[第3顺位人格专属]

  [Pierce]技能的攻击等级+(该人格拥有的[Pierce]基础攻击技能数)(同技能不重复计数，最多+3)。

  带有的[Agility]层数不低于3层时，攻击敌方单位时造成的[Pierce]伤害+(10+自身的[Agility]层数×3)%(最多25%)。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9198,
      name: '见证的羽饰',
      category: '突刺',
      defaultRarity: 'II',
      descriptions: {
        base: `[Pierce]基础攻击技能拼点胜利后命中时，下回合对目标施加1层[Binding] 。(每回合每名人格最多1次，不会对同一名敌方单位叠加)
  - 对于属于Cinq协会的人格，下回合额外使自身获得1层[Agility] (每回合每名人格最多1次)

  属于Cinq协会的人格使用基础攻击技能与带有该单位施加的决斗宣告，点穴或集中攻击的敌方单位(若是异想体，则改为以部位判定)拼点胜利后命中时，使该人格增加2级[Breath] 强度(每回合每名人格最多1次)。`,
        plus: `[Pierce]基础攻击技能拼点胜利后命中时，下回合对目标施加1层[Binding] 。(每回合每名人格最多1次，每名敌方单位最多2次)
  - 对于属于Cinq协会的人格，下回合额外使自身获得1层[Agility] (每回合每名人格最多1次)

  属于Cinq协会的人格使用基础攻击技能与带有该单位施加的决斗宣告，点穴或集中攻击的敌方单位(若是异想体，则改为以部位判定)拼点胜利后命中时，使该人格增加4级[Breath] 强度(每回合每名人格最多1次)。`,
        double_plus: `[Pierce]基础攻击技能拼点胜利后命中时，下回合对目标施加1层[Binding] 。(每回合每名人格最多1次，每名敌方单位最多2次)
  - 对于属于Cinq协会的人格，下回合额外使自身获得1层[Agility] (每回合每名人格最多2次)

  属于Cinq协会的人格使用基础攻击技能与带有该单位施加的决斗宣告，点穴或集中攻击的敌方单位(若是异想体，则改为以部位判定)拼点胜利后命中时，使该人格增加4级[Breath] 强度(每回合每名人格最多2次)。`,
      },
    },
    {
      id: 9199,
      name: '磨破的衣袖',
      category: '突刺',
      defaultRarity: 'III',
      descriptions: {
        base: `[Pierce]2技能的攻击等级+2；硬币数不高于2枚的技能改为攻击等级+2，拼点威力+(2/硬币数)。
  - 对于属于技术[UnlockBuff_Base]联盟的人格，该效果同样适用于所有[Pierce]基础攻击技能

  回合开始时，使属于技术[UnlockBuff_Base]联盟的人格获得(其带有的负面状态数)层[AttackUp](最多3层)。`,
        plus: `[Pierce]2技能的攻击等级+2；硬币数不高于2枚的技能改为攻击等级+2，拼点威力+(2/硬币数)。
  - 对于属于技术[UnlockBuff_Base]联盟的人格，该效果同样适用于所有[Pierce]或暴食基础攻击技能

  回合开始时，使属于技术[UnlockBuff_Base]联盟的人格获得(其带有的负面状态数+1)层[AttackUp](最多4层)。`,
        double_plus: `[Pierce]2技能的攻击等级+2；硬币数不高于2枚的技能改为攻击等级+2，拼点威力+(2/硬币数)。
  - 对于属于技术[UnlockBuff_Base]联盟的人格，该效果同样适用于所有基础攻击技能

  回合开始时，使属于技术[UnlockBuff_Base]联盟的人格获得1层[ParryingResultUp]与(其带有的负面状态的最高点数+1)层[AttackUp](最多5层)。`,
      },
    },
    {
      id: 9200,
      name: '决斗教材第三卷',
      category: '突刺',
      defaultRarity: 'IV',
      descriptions: {
        base: `[Pierce]基础攻击技能的拼点威力+2。战斗开始时，本回合除自身以外每有1名人格使用了[Pierce]基础攻击技能，使自身获得1层[AttackUp]。(最多3层)

  回合开始时，使拥有的基础攻击技能全部为[Pierce]技能的友方单位获得2层[PenetrateDamageUp]。(不包括强化技能或需要特殊条件的技能)

  闪避技能的威力+2。单个回合内，友方人格每闪避成功2次，下回合使该友方单位获得1层[AttackDmgUp](最多3层)

  回合开始时，使属于Cinq协会的人格获得1层[PenetrateResultUp]与2层[PenetrateDamageUp]，属于Cinq协会的人格攻击命中带有其施加的决斗宣告，点穴或集中攻击的敌方单位时，在下回合使该人格获得2层[PenetrateDamageUp]与1层[Agility](每回合每名人格最多1次)。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9201,
      name: '次元分类回收箱',
      category: '打击',
      defaultRarity: 'I',
      descriptions: {
        base: `[第3顺位人格专属]

  [Blunt]技能的攻击等级+(该人格拥有的[Blunt]基础攻击技能数)(同技能不重复计数，最多+3)。

  使用技能攻击敌方单位时，若[Discard]了其他技能，则使造成的[Blunt]伤害+(10+被丢弃技能的级别×5)%(以最高级别计算，最多+25%)。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9202,
      name: '口袋助记卡',
      category: '打击',
      defaultRarity: 'II',
      descriptions: {
        base: `[Blunt]基础攻击技能拼点胜利时，下回合对目标施加2层[DefenseDown] 。(每回合每名人格最多1次，不会对同一名敌方单位叠加)
  - 对于属于Dieci协会的人格，该效果同样适用于[Slash]与[Pierce]基础攻击技能，并额外施加1层[DefenseDown]

  若属于Dieci协会的人格通过丢弃 技能丢弃 了自身的技能，则下回合开始时使其获得(被丢弃技能的级别)层[AttackUp] 。(以最高级别计算，最多3层)`,
        plus: `[Blunt]基础攻击技能拼点胜利时，下回合对目标施加2层[DefenseDown] 。(每回合每名人格最多1次，不会对同一名敌方单位叠加)
  - 对于属于Dieci协会的人格，该效果同样适用于[Slash]与[Pierce]基础攻击技能，并额外施加1层[DefenseDown]

  若属于Dieci协会的人格通过丢弃 技能丢弃 了自身的技能，则下回合开始时使其获得(被丢弃技能的级别+1)层[AttackUp] 。(以最高级别计算，最多4层)`,
        double_plus: `[Blunt]基础攻击技能拼点胜利时，下回合对目标施加2层[DefenseDown] 。(每回合每名人格最多1次，不会对同一名敌方单位叠加)
  - 对于属于Dieci协会的人格，该效果同样适用于[Slash]与[Pierce]基础攻击技能，并额外施加1层[DefenseDown]

  若属于Dieci协会的人格通过丢弃 技能丢弃 了自身的技能，则下回合开始时使其获得(被丢弃技能的级别+2)层[AttackUp] 。(以最高级别计算，最多5层)`,
      },
    },
    {
      id: 9203,
      name: '次元知觉变体',
      category: '打击',
      defaultRarity: 'III',
      descriptions: {
        base: `[Blunt]1技能与2技能的攻击等级+(硬币数-1)(最多+2)
  - 拥有丢弃 效果的技能改为攻击等级+(硬币数)(最多+4)

  人格通过丢弃 技能丢弃 了自身的技能时，下回合使其获得1层[AttackDmgUp] 与(被丢弃技能的级别)层[AttackUp] (每回合每名人格最多1次，以最高级别计算，最多3层)。
  - 若丢弃 了[Blunt]技能，则额外获得1层[HitDamageUp] `,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9204,
      name: '复仇账簿',
      category: '打击',
      defaultRarity: 'IV',
      descriptions: {
        base: `[Blunt]基础攻击技能的拼点威力+2。战斗开始时，本回合除自身以外每有1名人格使用了[Blunt]基础攻击技能，使自身获得1层[AttackUp]。(最多3层)

  回合开始时，使拥有的基础攻击技能全部为[Blunt]技能的友方单位获得2层[HitDamageUp]。(不包括强化技能或需要特殊条件的技能)

  使用反击技能(不包括强化反击)时，使自身获得体力上限7.5%的护盾并使该技能造成的伤害+20%。使用反击技能时，自身不会因受到伤害而陷入混乱(每场战斗每名人格最多1次)。

  回合开始时，使属于中指的人格获得1层[HitResultUp]与2层[Endurance]。属于中指的人格使用反击技能时，以上反击技能的强化效果改为每场战斗最多2次，造成的伤害改为+40%。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9991,
      name: '黯淡的残影',
      category: '泛用',
      defaultRarity: 'I',
      descriptions: {
        base: '视作1级E.G.O饰品，可在商店中进行售卖或作为合成材料使用。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9992,
      name: '微茫的残影',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: '视作2级E.G.O饰品，可在商店中进行售卖或作为合成材料使用。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9993,
      name: '闪耀的残影',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: '视作3级E.G.O饰品，可在商店中进行售卖或作为合成材料使用。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9994,
      name: '辉煌的残影',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: '视作4级E.G.O饰品，可在商店中进行售卖或作为合成材料使用。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9995,
      name: '月之残影',
      category: '泛用',
      defaultRarity: 'V',
      descriptions: {
        base: '视作5级E.G.O饰品，可在商店中进行售卖或作为合成材料使用。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9156,
      name: '万年炉火',
      category: '烧伤',
      defaultRarity: 'II',
      descriptions: {
        base: '回合结束时，[Combustion]层数不低于3层的敌方单位额外触发1次[Combustion](使其[Combustion]层数减少1层)',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9158,
      name: '盗来的火焰',
      category: '烧伤',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  技能命中时(包括E.G.O技能)，若目标的[Combustion]层数不低于3层，则触发目标的[Combustion]1次。(使其[Combustion]层数减少1层，每个技能最多1次)

  回合结束时，[Combustion]层数不低于3层的敌方单位额外触发1次[Combustion](使其[Combustion]层数减少1层)

  带有[Combustion]的敌方单位阵亡时(若是异想体，则在本体阵亡时)，下回合开始时将阵亡单位的[Combustion]强度施加给[Combustion]强度最低的1名敌方单位。

  回合开始时，本回合对带有[Combustion]的敌方单位施加4层[AttackDown]

  带有[Combustion]的敌方单位阵亡时，在下回合开始时使拥有施加[Combustion]的技能的(阵亡单位的[Combustion]强度/15)名友方单位获得2层[AttackDmgUp]。(每回合最多1次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9160,
      name: '撕裂的血囊',
      category: '流血',
      defaultRarity: 'III',
      descriptions: {
        base: '友方单位拼点胜利时，触发敌方单位的[Laceration]1次并使其减少1层[Laceration](每回合最多3次)',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9162,
      name: '失血性休克',
      category: '流血',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有增加[Laceration]强度，施加[Laceration]层数或施加特殊[Laceration]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  友方单位拼点胜利时，触发敌方单位的[Laceration]1次，减少1层[Laceration]。(每回合每名友方单位最多1次)

  [Laceration]伤害可使敌方单位陷入混乱。若敌方单位进行拼点中因[Laceration]伤害而陷入混乱，则触发其[Laceration](其剩余硬币数)次，减少(触发次数)层[Laceration]。

  若全体敌方单位均带有[Laceration]，则使其减少2级防御等级。回合结束时，下回合对其施加(触发的[Laceration]次数×2)层[DefenseDown](最多20层)

  通过技能效果增加[Laceration]强度或施加特殊[Laceration]时，使目标增加3级[Laceration]强度并对其施加1层[Laceration]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9163,
      name: '宝石振子',
      category: '震颤',
      defaultRarity: 'I',
      descriptions: {
        base: `消耗[Vibration]层数的技能拼点胜利时，若目标未带有[Vibration]，则对其施加2层[Vibration]

  若包括该技能在内怠惰共鸣数不低于3，则改为施加3层[Vibration]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9164,
      name: '摇晃的酒桶',
      category: '震颤',
      defaultRarity: 'II',
      descriptions: {
        base: `回合开始时，若自身的[Vibration]层数不低于8层，则使自身的拼点威力+1

  若消耗自身的[Vibration]层数的技能击杀目标或使目标陷入混乱，则对自身施加(消耗的[Vibration]层数/4)层[Vibration](每个技能最多1次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9166,
      name: '震源',
      category: '震颤',
      defaultRarity: 'III',
      descriptions: {
        base: `回合开始时，若拥有增加[Vibration]强度或施加[Vibration]层数的攻击技能的人格不低于5名，则在本场战斗期间触发该效果(不包括E.G.O技能，不包括待命人员，仅拥有对自身施加[Vibration]层数的攻击技能的人格不适用)

  消耗自身的[Vibration]层数的技能拼点胜利时，若目标未带有[Vibration]，则对其施加3层[Vibration]

  回合开始时，使自身的拼点威力+(自身的[Vibration]层数/5)(最多3点)

  若消耗自身的[Vibration]层数的技能击杀目标或使目标陷入混乱，则对自身施加(消耗的[Vibration]层数/2)层[Vibration](每个技能最多1次) `,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9167,
      name: '无振八方钟',
      category: '震颤',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有增加[Vibration]强度，施加[Vibration]层数或施加特殊[Vibration]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果(不包括E.G.O技能，不包括待命人员，仅拥有对自身施加[Vibration]层数的攻击技能的人格不适用)

  增加[Vibration]强度，施加[Vibration]层数或消耗自身的[Vibration]层数的技能拼点胜利时，使目标增加(剩余硬币数)级[Vibration]强度并对自身施加(剩余硬币数)层[Vibration](每个技能最多3层)，若目标未带有[Vibration]，则对其施加3层[Vibration]。

  回合开始时，使自身获得(1+(自身的[Vibration]层数/5))层[ParryingResultUp]。(最多3层)

  若消耗自身的[Vibration]层数的技能击杀目标或使目标陷入混乱，则对自身施加(消耗的[Vibration]层数/2)层[Vibration](每个技能最多1次)

  技能造成的伤害+(自身消耗的[Vibration]层数+目标的[Vibration]强度+5)%(不包括E.G.O技能，最多+50%)。
  若目标带有[VibrationNesting]，则使其[Switch_Vibration]为未叠加的[Vibration]或以未叠加的[Vibration][FusionVibration]时，回合结束时使其[VibrationNesting]延长至下回合`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9168,
      name: '终末的碎片',
      category: '破裂',
      defaultRarity: 'II',
      descriptions: {
        base: '若目标的[Burst]强度低于15级，则增加[Burst]强度时额外增加1级[Burst]强度',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9170,
      name: '奇怪的石像',
      category: '破裂',
      defaultRarity: 'III',
      descriptions: {
        base: `回合开始时，若拥有增加[Burst]强度或施加[Burst]层数的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  [Burst]效果对敌方单位带有的护盾造成的伤害+100%
  若目标的[Burst]强度低于15级，则增加[Burst]强度时额外增加2级[Burst]强度

  若技能因其效果不会施加[Burst]，则使该技能的加算硬币威力+1
  - 减算硬币技能改为基础威力+(4/硬币数)，而非加算硬币威力(最少+1，向下取整)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9171,
      name: '破灭',
      category: '破裂',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有增加[Burst]强度或施加[Burst]层数的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  [Burst]效果对敌方单位带有的护盾造成的伤害+150%

  回合开始时，带有[Burst]的敌方单位或部位减少(3+(其[Burst]强度/2))级攻击等级与防御等级。(最多6级)

  通过技能效果增加[Burst]强度或施加[Burst]层数时，使目标增加2级[Burst]强度并对其施加1层[Burst]。若目标的[Burst]强度低于15级，则增加[Burst]强度时额外增加2级[Burst]强度。

  增加[Burst]强度，施加[Burst]层数或施加特殊[Burst]的加算硬币技能的硬币威力+1
  增加[Burst]强度，施加[Burst]层数或施加特殊[Burst]的减算硬币技能的基础威力+(4/硬币数)(最少+1，向下取整)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9172,
      name: '如歌',
      category: '沉沦',
      defaultRarity: 'I',
      descriptions: {
        base: '使用基础攻击技能时，若目标的[Sinking]强度不低于5级，则使自身恢复(目标的[Sinking]强度/10)点理智值(最多3点)',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9173,
      name: '褪色的外套',
      category: '沉沦',
      defaultRarity: 'II',
      descriptions: {
        base: '回合结束时, 若理智值为-45点的敌方单位不低于3名, 则下回合使全体友方单位获得2层[AttackUp]',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9175,
      name: '浪景球',
      category: '沉沦',
      defaultRarity: 'III',
      descriptions: {
        base: `回合开始时，若拥有增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  使用基础攻击技能时，若目标的[Sinking]强度不低于5级，则使自身恢复(目标的[Sinking]强度/10)点理智值(最多5点)

  回合结束时，每有1名敌方单位理智值为-45点，下回合使全体友方单位获得1层[AttackUp](最多3层)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9176,
      name: '袭来的浪潮',
      category: '沉沦',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  回合开始时，随机对1名敌方单位施加1层[WaveSinking]

  击杀带有[WaveSinking]的敌方单位时，在下回合开始时将其[WaveSinking]层数施加给[WaveSinking]层数最高但未达到最大值的1名敌方单位

  增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的技能命中敌方单位并对其造成体力伤害时，在回合结束时使其增加4级[Sinking]强度并对其施加3层[Sinking](每回合每名敌方单位最多1次)
  若激活忧郁或色欲完全共鸣，则在战斗开始时，使全体敌方单位(若是异想体，则随机对一个部位)增加3级[Sinking]强度并对其施加3层[Sinking]

  基础攻击技能攻击后，若目标的[Sinking]强度不低于10级，则使自身恢复(目标的[Sinking]强度/10)点理智值(最多5点)并对目标施加相应层数的[DefenseDown](最多5层，每回合每名敌方单位最多1次)

  回合结束时，每有1名敌方单位理智值为-45点或未带有理智值，下回合使全体友方单位获得1层[AttackUp](最多6层)

  增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的加算硬币技能的硬币威力+1
  增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的减算硬币技能的基础威力+(4/硬币数)(最少+1，向下取整)

  使用增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking](包括使自身增加或对自身施加)的基础攻击技能命中敌方单位时，每触发1次目标的[Sinking]效果(包括特殊[Sinking])，在回合结束时，使自身恢复5点理智值(每回合每名人格最多2次)
  若该友方单位在回合开始时理智值为45点，则改为使用基础攻击技能命中敌方单位并触发目标的[Sinking]效果(包括特殊[Sinking])时，对目标施加3层[Sinking](每回合每名人格最多2次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9178,
      name: '天使所私',
      category: '呼吸法',
      defaultRarity: 'II',
      descriptions: {
        base: '回合结束时，[Breath] 强度高于20级的友方单位消耗1级[Breath] 强度并获得1层[Breath] ',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9180,
      name: '桶装烈酒',
      category: '呼吸法',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有增加[Breath]强度或获得[Breath]层数的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  回合结束时，[Breath]强度高于20级的友方单位消耗1级[Breath]强度并获得1层[Breath]

  回合结束时，使[Breath]强度最高的1名友方单位与[Breath]层数最高的1名友方单位获得2层[Agility]与1层[AttackUp](可能重复使1名人格获得)

  通过技能效果增加[Breath]强度时，额外增加2级[Breath]强度并获得2层[Breath]。若自身的[Breath]强度与层数之和低于20点，则改为增加3级[Breath]强度并获得3层[Breath]。

  战斗结束时，若自身的[Breath]强度不低于40级，则消耗15级[Breath]强度并[Discard]自身所有行动槽中级别最低的1个技能(每回合每名单位最多1次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9181,
      name: '微型电线杆',
      category: '充能',
      defaultRarity: 'II',
      descriptions: {
        base: '消耗自身不低于7层[Charge]的技能攻击后，若击杀目标，则使自身获得(该技能消耗的[Charge]层数/4)层[Charge](包括特殊[Charge])',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9183,
      name: '绝缘子',
      category: '充能',
      defaultRarity: 'III',
      descriptions: {
        base: `回合开始时，若拥有获得[Charge]层数或特殊[Charge]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  消耗自身的[Charge]层数的技能攻击后，若击杀目标，则使自身获得(该技能消耗的[Charge]层数/3)层[Charge]

  回合开始时，若自身的[Charge]层数低于3层，则使自身获得3层[Charge]。回合开始时，若自身的[Charge]层数不低于3层，则使自身获得1层[AttackDmgUp]。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9184,
      name: '第五类永动机',
      category: '充能',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有获得[Charge]层数或特殊[Charge]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  回合开始时，若自身的[Charge]层数低于3层，则使自身获得5层[Charge]。回合开始时，若自身的[Charge]层数不低于5层，则使自身的最小与最大速度值+2并获得1层[Enhancement]与2层[AttackDmgUp]。(包括特殊[Charge])

  参战的全体友方单位在回合开始时获得[ShareCharge]

  消耗自身的[Charge]层数或使自身获得[Charge]层数的3技能攻击后，若击杀目标或自身的[Charge]强度不低于3级，则添加1个3技能到下回合将要使用的技能池中。(每回合每名友方单位最多1次；包括特殊[Charge])`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9795,
      name: '落坠的一滴',
      category: '流血',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有消耗[BloodDinner]的技能的人格不低于3名，则在本场战斗期间触发该效果。(不包括E.G.O技能，不包括待命人员)

  战斗开始时，若消耗[BloodDinner]的人格攻击目标的[Laceration]强度不低于30级，则使其[Laceration]强度减少至15级，并获得层数相当于减少的[Laceration]强度的[BloodDinner]。(每回合全体敌方单位共计最多1次，群体技能仅对主要目标生效)

  该效果每获得10层[BloodDinner]，下回合使拥有消耗[BloodDinner]的技能的人格获得1层[ResultEnhancement] 与1层[AttackDmgUp] 。(最多4层)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9796,
      name: '悲闷的吐息',
      category: '呼吸法',
      defaultRarity: 'IV',
      descriptions: {
        base: `若第5顺位友方单位的[Breath]强度与[Breath]层数之和不低于50级，则其技能拼点胜利或单方面攻击时，该技能的所有硬币必定朝向正面(若是减算硬币，则改为反面)，并使该技能暴击时造成的伤害+80%(每场战斗最多1次，不包括E.G.O技能)

  若编入的拥有增加[Breath]强度或获得[Breath]层数的攻击技能的人格不低于5名，则使第5顺位友方单位暴击时造成的伤害+60%(每额外编入1名符合以上条件的友方单位，使暴击时造成的伤害额外+20%，包括编队中全体单位)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9797,
      name: '注定破碎的火炮',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，每回合使自身获得2层[GiftCannon]并对自身施加2层[GiftGlass]
  从第2回合起，每回合额外获得1层[GiftCannon]并额外施加1层[GiftGlass](最多额外8层)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9798,
      name: '贪欲之棘',
      category: '流血',
      defaultRarity: 'IV',
      descriptions: {
        base: `关卡开始时，获得100层[BloodDinner]
  回合开始时，对全体带有[Laceration]的敌方单位(或部位)施加2层[RoseThorn]。
  若全体敌方单位(或所有部位)均带有[Laceration]，则对其施加4层[RoseThorn]。`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9799,
      name: '某种哲学',
      category: '泛用',
      defaultRarity: 'EX',
      descriptions: {
        base: '饰品合成概率固定为100%',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9800,
      name: '富',
      category: '泛用',
      defaultRarity: 'EX',
      descriptions: {
        base: `所有饰品的购买与强化费用固定为1。

  每拥有500点经费，使全体友方单位获得1层[AttackUp](最多20层)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9801,
      name: '强韧丸',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: '回合开始时，使体力上限最高的1名友方单位获得(本场战斗其受到来自敌方单位技能攻击的伤害次数)层[DefenseUp](最多6层)。',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9802,
      name: '电击斧',
      category: '充能',
      defaultRarity: 'II',
      descriptions: {
        base: `消耗[Charge]层数的技能攻击命中时，使目标增加1级[Burst]强度(每个技能最多3次；包括特殊[Charge])

  根据编入的拥有施加[Burst]或获得[Charge]的攻击技能的人格数，相应强化本饰品效果(不包括E.G.O技能，包括编队中全体单位)。

  - 不低于6名
  对敌方单位造成[Burst]伤害时，使自身获得1层[Charge](每个技能最多3次)

  - 不低于8名
  消耗[Charge]层数的技能攻击命中时，对目标施加1层[Burst](每个技能最多3次；包括特殊[Charge])`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9803,
      name: '镜中花',
      category: '破裂',
      defaultRarity: 'III',
      descriptions: {
        base: `每回合开始时，使全体敌方单位增加3级[Burst]强度并对其施加1层[Burst](若是集中遭遇战，则改为所有部位)

  根据编入的拥有施加[Burst]或获得[Breath]的攻击技能的人格数，相应强化本饰品效果(不包括E.G.O技能，包括编队中全体单位)。

  - 不低于6名
  技能命中并触发[Burst]伤害时，使自身获得1层[Breath](每个技能最多3次)

  - 不低于10名
  技能命中并暴击时，对目标施加1层[Burst](每个技能最多3次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9804,
      name: '水中月',
      category: '呼吸法',
      defaultRarity: 'III',
      descriptions: {
        base: `攻击命中带有的[Burst]强度不低于5级的敌方单位时，使自身增加1级[Breath]强度并使自身获得1层[Breath](每个技能最多3次)。

  根据编入的拥有施加[Burst]或获得[Breath]的攻击技能的人格数，相应强化本饰品效果(不包括E.G.O技能，包括编队中全体单位)。

  技能攻击命中时，若目标的[Burst]强度不低于20级，则使该技能暴击时造成的伤害+10%(每有1名编入且符合以上条件的人格，使该技能暴击时造成的伤害额外+3%)

  - 不低于12名
  技能命中并暴击时，随机解除自身1种可解除的负面状态(每回合每名人格最多1次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9207,
      name: '概率与选择',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: '随机使最左侧行动槽装备的E.G.O技能造成的伤害-50%或+150%(每回合最多1次)',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9208,
      name: '纠缠的缘分',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: '战斗开始时，若完全共鸣数不低于7，则本回合使全体友方单位的最终威力+5(每场战斗最多1次)',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9209,
      name: '献给热爱都市的你',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: `若友方单位受到攻击时现存体力低于30%，则下回合使其恢复80%的体力并使其他友方单位恢复40%的体力(每场战斗最多1次)
  - 超过体力上限的溢出恢复量改为获得相应的护盾
  - 若通过该效果恢复了不低于50点体力，则使该友方单位获得3层[AttackUp]并对其施加3层[DefenseDown]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9210,
      name: '松肉锤',
      category: '打击',
      defaultRarity: 'I',
      descriptions: {
        base: `[第4顺位人格专属]

  若自身拥有不低于2个[Blunt]攻击技能，则回合开始时使自身获得1层[ParryingResultUp]`,
        plus: `[第4顺位人格专属]

  若自身拥有不低于2个[Blunt]攻击技能，则回合开始时使自身获得2层[ParryingResultUp]`,
        double_plus: `[第4、第5顺位人格专属]

  若自身拥有不低于2个[Blunt]攻击技能，则回合开始时使自身获得2层[ParryingResultUp]`,
      },
    },
    {
      id: 9211,
      name: '乌云',
      category: '沉沦',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若全体敌方单位的[Sinking]强度与[Sinking]层数之和不低于30点，则触发以下效果

  - 增加[Sinking]强度或施加[Sinking]层数的技能的最终威力+1(包括特殊[Sinking]，不包括E.G.O技能)

  - 若拥有增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的攻击技能的人格不低于6名，则额外使增加[Sinking]强度或施加[Sinking]层数的技能造成的伤害+20%(包括特殊[Sinking]与待命人员，不包括E.G.O技能)
  · 若目标的理智值为-45点，则使造成的伤害额外+10%

  - 若拥有增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的攻击技能的人格不低于10名，则额外使增加[Sinking]强度或施加[Sinking]层数的加算硬币技能的硬币威力+1(包括特殊[Sinking]与待命人员，不包括E.G.O技能)
  · 减算硬币技能改为基础威力+(4/硬币数)，而非硬币威力(最少+1，向下取整)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9212,
      name: '万恶之终结',
      category: '呼吸法',
      defaultRarity: 'IV',
      descriptions: {
        base: `若属于裴廓德号的人格不低于3名，则触发该效果(包括待命人员)

  攻击技能命中带有[Laceration]或特殊[Laceration]的敌方单位时，使自身增加3级[Breath]强度或获得2层[Breath](每回合每名人格最多3次)

  技能命中并触发暴击时，以80%的概率在下回合使自身获得1层[PenetrateResultUp](每回合每名人格最多2次，包括E.G.O技能与反击技能)
  - 若该人格属于裴廓德号，则下回合使其额外获得1层[PlusCoinValueUp](每回合每名人格最多1次)

  基础技能暴击正面命中时，令该硬币施加的负面状态额外+1(每回合每名人格最多1次，包括反击技能，不包括E.G.O技能)

  敌方单位或友方单位阵亡时，本场战斗中使属于裴廓德号的人格获得1层[PenetrateResultUp]、1层[Protection]与1层[CriticalDamageUp](每场战斗最多3次)

  若属于裴廓德号的友方单位攻击命中了敌方单位，则使最先编入的属于裴廓德号的人格恢复7点理智值(每个技能最多1次)

  友方单位击杀敌方单位时，若最先编入的属于裴廓德号的人格失去了理智值，则使该属于裴廓德号的人格恢复15点理智值`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9213,
      name: '微型摩天轮',
      category: '流血',
      defaultRarity: 'IV',
      descriptions: {
        base: `使全体属于血魔的友方单位基础技能的硬币威力+1，自身技能造成的伤害+(自身的[BloodDinner_Accumulation]/10)%

  回合结束时，使带有[Laceration]的友方单位中现存体力最低的2名人格恢复其体力上限5%的体力并在下回合使其获得10层[SwirlingBloodPersonality]

  击杀敌方单位时，获得(其本体体力上限/10)层[BloodDinner](最多50层)

  回合结束时，若本回合有友方单位阵亡，则下回合使全体友方单位获得2层[Enhancement]

  遭遇战中新的敌方单位增援时，战斗开始时使其增加5级[Laceration]强度并对其施加3层[Laceration]。
  若友方单位中存在<血魔>，则新的敌方单位增援时触发全体敌方单位的[Laceration]2次，并使全体敌方单位的[Laceration]层数减少2层`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9214,
      name: '灼热之锤',
      category: '震颤',
      defaultRarity: 'III',
      descriptions: {
        base: `若敌方单位带有[VibrationIgnition]，则触发以下效果
  - 基础技能命中时，使其增加1级[Combustion]强度(每个技能最多3次)
  - 基础技能命中时，若其[VibrationIgnition]强度不低于15级，则对其施加1层[Combustion](每个技能最多2次)
  - 其每带有3级[Combustion]，使其受到[VibrationExplosion]时造成的混乱阈值前移量+1%(最多+15%)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9215,
      name: '红领带',
      category: '烧伤',
      defaultRarity: 'III',
      descriptions: {
        base: '使增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的3技能拼点威力+2，造成的伤害+30%',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9216,
      name: '制式服装-六协会',
      category: '烧伤',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若拥有增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的攻击技能的人格不低于5名，则在本场战斗期间触发该效果(不包括E.G.O技能，不包括待命人员)

  属于六协会的人格基础攻击技能的加算硬币威力+2(减算硬币技能改为基础威力+(8/硬币数)(最少+1，向下取整))

  增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的3技能以外的技能造成的伤害+20%(包括E.G.O技能)

  增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的3技能的加算硬币威力+1(减算硬币技能改为基础威力+(4/硬币数)(最少+1，向下取整))，造成的伤害+30%
  - 编队中每有1名人格与自身属于同一阵营，使造成的伤害+5%(最多+20%，包括待命人员)

  回合结束时，使理智值最低的2名友方单位恢复8点理智值
  - 若其理智值不高于0点，则使其额外恢复5点理智值`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9217,
      name: '某人的终端',
      category: '沉沦',
      defaultRarity: 'III',
      descriptions: {
        base: `攻击结束时，若[IndexPrescriptTargetToEnemy]阵亡，则使击杀[IndexPrescriptTargetToEnemy]的友方单位在下回合获得1层[AzureResultUp]；随机对1名存活的敌方单位施加3层[Sinking](每回合最多1次)
  - 若击杀[IndexPrescriptTargetToEnemy]的人格属于食指，则改为下回合获得1层[Enhancement]，而非[AzureResultUp](每回合最多1次)

  回合结束时，对属于食指的友方单位造成其体力上限(其[KarmaOfIndexAlly]层数)%的伤害
  (不会因该效果而陷入混乱，且不会使友方单位的体力降至体力上限的20%以下)
  下回合使受到以上伤害的人格获得(其[KarmaOfIndexAlly]层数/5)层[ResultEnhancement](最多2层)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9218,
      name: '指令的庇护',
      category: '呼吸法',
      defaultRarity: 'III',
      descriptions: {
        base: `上回合若通过技能效果增加了[Sinking]强度，施加了[Sinking]层数或施加了特殊[Sinking]，则回合开始时使自身增加3级[Breath]强度或获得2层[Breath](每回合每名人格最多1次)

  本场战斗中，若有罪人通过该效果获得了3次[Breath]，则从下回合起，使其暴击时造成的伤害+30%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9219,
      name: '万能工具',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: '相同攻击类型的技能命中敌方单位12次时，使其对应类型的物理抗性+0.1(若是异想体，则改为所有部位，每场战斗每个敌方单位最多3次，该效果不会使敌方单位的抗性高于2.0)',
        plus: '相同攻击类型的技能命中敌方单位9次时，使其对应类型的物理抗性+0.1(若是异想体，则改为所有部位，每场战斗每个敌方单位最多3次，该效果不会使敌方单位的抗性高于2.0)',
        double_plus:
          '相同攻击类型的技能命中敌方单位6次敌方单位时，使其对应类型的物理抗性+0.1(若是异想体，则改为所有部位，每场战斗每个敌方单位最多3次，该效果不会使敌方单位的抗性高于2.0)',
      },
    },
    {
      id: 9220,
      name: '被盗的收尾人杂志',
      category: '打击',
      defaultRarity: 'III',
      descriptions: {
        base: `回合开始时，使自身获得1层[HitResultUp]

  若激活嫉妒完全共鸣，则战斗开始时使自身获得1层[HitDamageUp]

  若属于中指的人格不低于4名，则关卡开始时随机对1名敌方单位施加[RetaliationBook]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9221,
      name: '热丝武器',
      category: '流血',
      defaultRarity: 'III',
      descriptions: {
        base: `嫉妒技能或反击技能命中时，对目标施加1层[Laceration]或1层[Combustion](每回合最多3次)

  战斗中，敌方单位的[Laceration]层数降至1层以下时，若其[Combustion]层数不低于2层，则改为减少[Combustion]层数而非[Laceration]层数(每回合最多3次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9222,
      name: '空白画布',
      category: '流血',
      defaultRarity: 'II',
      descriptions: {
        base: `加算硬币攻击技能命中[Laceration]强度不低于15级的敌方单位时，使自身恢复3点理智值(每回合每名人格最多1次)
  - 若自身或该敌方单位带有的负面状态不少于3种，则改为恢复6点理智值`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9223,
      name: '凡作',
      category: '流血',
      defaultRarity: 'II',
      descriptions: {
        base: `使属于环指的人格获得[Inspire]

  带有[Inspire]且属于环指的人格的色欲或[Slash]技能命中敌方单位时，下回合对该敌方单位施加[ObjectOfExploration]
  - 若敌方单位带有[ObjectOfExploration]，则使其[ObjectOfExploration]转化为[PaintingMaterial]

  带有[Inspire]且属于环指的人格击杀带有[PaintingMaterial]的敌方单位时，下回合使该友方单位获得1层[PlusCoinValueUp](每回合最多1次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9224,
      name: '杰作',
      category: '流血',
      defaultRarity: 'IV',
      descriptions: {
        base: `使属于环指的人格获得[Inspire]

  带有[Inspire]且属于环指的人格的攻击技能命中敌方单位时，对该敌方单位施加[ObjectOfExploration]
  - 若敌方单位带有[ObjectOfExploration]，则使其[ObjectOfExploration]转化为[PaintingMaterial]

  带有[Inspire]且属于环指的人格击杀带有[PaintingMaterial]的敌方单位时，
  使该人格失去[Inspire]并获得[GreatAesthetics]

  加算硬币攻击技能命中[Laceration]强度不低于15级的敌方单位时，使自身恢复3点理智值(每回合每名人格最多1次)
  - 若自身或该敌方单位带有的负面状态不少于3种，则改为恢复6点理智值`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9225,
      name: '蜘蛛网',
      category: '泛用',
      defaultRarity: 'I',
      descriptions: {
        base: '使用守备技能时，下回合使自身3技能造成的伤害+10%(每回合最多1次)',
        plus: '使用守备技能时，下回合使自身3技能造成的伤害+15%(每回合最多1次)',
        double_plus: '使用守备技能时，下回合使自身3技能造成的伤害+20%(每回合最多1次)',
      },
    },
    {
      id: 9226,
      name: '某人的青刀',
      category: '呼吸法',
      defaultRarity: 'II',
      descriptions: {
        base: `战斗开始时，使带有护盾的友方单位获得1层[CriticalDamageUp]
  友方单位的技能暴击命中时，下回合使该友方单位获得(自身的[Breath]强度/5)点护盾(最多15点)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9227,
      name: '寄宿鬼气的环刀',
      category: '泛用',
      defaultRarity: 'I',
      descriptions: {
        base: `本E.G.O饰品在6场战斗胜利后转化
  {0}

  全体友方单位受到的伤害+20%，拼点威力-1`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9228,
      name: '人剑合一',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: '全体友方单位造成的伤害+25%',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9229,
      name: '褪色的护手',
      category: '泛用',
      defaultRarity: 'I',
      descriptions: {
        base: `本E.G.O饰品在6场战斗胜利后转化
  {0}

  全体友方单位的最小与最大速度值-5(该效果不会使速度值低于1)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9230,
      name: '黄金时间',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `全体友方单位的最小与最大速度值+3
  若目标的速度值低于自身至少4点，则使自身技能的最终威力+2
  攻击命中敌方单位时，下回合对其施加1层[Binding] (每回合最多4次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9231,
      name: '那一日的记录',
      category: '泛用',
      defaultRarity: 'I',
      descriptions: {
        base: `本E.G.O饰品在6场战斗胜利后转化
  {0}

  回合开始时，随机使1名未陷入混乱的友方单位陷入强制混乱`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9232,
      name: '可能性',
      category: '呼吸法',
      defaultRarity: 'III',
      descriptions: {
        base: `因受到伤害而陷入混乱时，解除自身的混乱。使自身获得自身体力上限50%的护盾，随机解除自身带有的1种可解除的负面状态
  (不包括强制混乱，每场战斗最多2次)
  触发以上效果后，下回合开始时使自身增加20级[Breath] 强度(每回合最多1次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9242,
      name: '小凤玩偶',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: `通过阶层时使拥有的经费变为1.5倍

  - 每拥有1个饰品，使自身造成的伤害+0.5%(当前+{0}%，最多+100%)
  - 每拥有20个饰品，回合开始时使自身获得1层[Enhancement](当前获得{1}层，最多10层)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9256,
      name: '不完善的预知眼',
      category: '震颤',
      defaultRarity: 'IV',
      descriptions: {
        base: `全体友方单位的加算硬币技能的硬币威力+(8/硬币数)，减算硬币技能的最终威力+(8/硬币数)(最少+1，包括E.G.O技能，向下取整)

  [第1顺位人格专属]
  - 进行拼点时，每次拼点使自身获得1层[LookingFutureMirror]，使目标增加2级[Vibration]强度与[Combustion]强度(每个技能最多10次)
  - 拼点胜利时，使主要目标[Switch_Vibration]为[VibrationIgnition]，使其[VibrationExplosion]并使其[Vibration]层数减少1层
  - 技能命中时，若目标陷入混乱，则使自身造成的伤害+30%
  - 暴击命中时，使目标[VibrationExplosion]并使其[Vibration]层数减少1层(每个技能最多2次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9257,
      name: '遗落的神谕',
      category: '沉沦',
      defaultRarity: 'IV',
      descriptions: {
        base: `全体友方单位的加算硬币技能的硬币威力+(8/硬币数)，减算硬币技能的最终威力+(8/硬币数)(最少+1，包括E.G.O技能，向下取整)

  进行拼点时，目标的[Sinking]强度与自身的[Breath]强度之和每有30级，使自身的拼点威力+1(最多+5)

  [SuperCoin]造成的伤害+25%
  受到[SuperCoin]的伤害-25%

  [属于食指的人格专属]
  - 战斗中首次登场时，使自身获得6层[BlessingOfIndexPrescriptAlly]
  · 若该人格可获得[UnlockBuff_Base]，则使其额外获得[UnlockBuffAlly_2]
  - 对带有[IndexPrescriptTargetToEnemy]的敌方单位造成的伤害+50%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9258,
      name: '复仇账簿：附录',
      category: '打击',
      defaultRarity: 'IV',
      descriptions: {
        base: `全体友方单位的加算硬币技能的硬币威力+(8/硬币数)，减算硬币技能的最终威力+(8/硬币数)(最少+1，包括E.G.O技能，向下取整)

  关卡开始时，每有1名属于中指的友方单位，使全体友方单位获得50点护盾(不包括待命人员，通过该效果获得的护盾不会在回合结束时解除)

  属于中指的友方单位的嫉妒或[Blunt]基础技能攻击结束时，使其恢复造成体力伤害量10%的体力
  - 若该技能为反击技能，则改为恢复造成体力伤害量20%的体力
  - 超过体力上限的溢出恢复量改为获得相应的护盾(通过该效果获得的护盾不会在回合结束时解除)

  战斗开始时，根据装备的守备技能数，使属于中指的友方单位增加相应的攻击等级(最多增加12级)
  - 若装备的守备技能数不低于6，则使嫉妒基础技能造成的伤害+30%，每额外装备1个守备技能，使其造成的伤害额外+10%(最多额外+60%)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9259,
      name: '化为作品的大师指环',
      category: '流血',
      defaultRarity: 'IV',
      descriptions: {
        base: `全体友方单位的加算硬币技能的硬币威力+(8/硬币数)，减算硬币技能的最终威力+(8/硬币数)(最少+1，包括E.G.O技能，向下取整)

  属于环指的人格使用基础攻击技能时，根据目标带有的负面状态数获得以下效果
  - 不少于2种：拼点威力+2
  - 不少于4种：造成的伤害+15%
  - 不少于6种：硬币效果增加的负面状态强度与施加的负面状态层数额外+1
  - 不少于7种：基础威力+2
  - 不少于8种：造成的伤害+35%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9260,
      name: '作品：跃动',
      category: '充能',
      defaultRarity: 'III',
      descriptions: {
        base: `若自身在一回合内通过基础技能消耗了不低于10层[Charge]，则下回合使自身基础技能造成的伤害+20%(不包括固定强度的特殊<noparse>[Charge]</noparse>)
  - 若消耗的[Charge]为特殊[Charge]，则下回合令自身增加的[Laceration]强度与施加的[Laceration]层数额外+1`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9261,
      name: '作品：野性',
      category: '沉沦',
      defaultRarity: 'III',
      descriptions: {
        base: `[Blunt]技能对理智值不高于15点或[Sinking]强度不低于35级的敌方单位造成的伤害+20%([Sinking] 强度以部位判定)
  - 若该[Blunt]技能为增加[Laceration]强度，施加[Laceration]层数或施加特殊[Laceration]的技能或忧郁技能，且该[Blunt]技能命中，则下回合使自身获得1层[Enhancement](每回合每名单位最多1次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9262,
      name: '万物的骨架',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: `属于环指的人格攻击后，对目标施加1层随机物理属性的抗性弱化(每回合最多2次)

  属于环指的人格造成的伤害+10%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9263,
      name: '杰作：进化的跃动',
      category: '流血',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若属于环指的人格不低于2名，则触发该效果(以参战人员为基准)

  属于环指 人体派的人格基础技能命中时，对目标施加1层[SlashResistDown](每个技能最多1次，每回合最多2次)

  属于环指的人格造成的伤害+20%

  回合开始时，若全体敌方单位的[Laceration]强度总计不低于99级，则使属于环指 人体派的人格获得1层[RingFingerPhysical]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9264,
      name: '杰作：剥制的野性',
      category: '流血',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若属于环指的人格不低于2名，则触发该效果(以参战人员为基准)

  属于环指 野兽派的人格基础技能命中时，对目标施加1层[HitResistDown](每个技能最多1次，每回合最多2次)

  属于环指的人格造成的伤害+20%

  回合开始时，若全体敌方单位的[Laceration]强度总计不低于99级，则使属于环指 野兽派的人格获得1层[RingFingerFauvism]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9265,
      name: '中指式指虎',
      category: '打击',
      defaultRarity: 'III',
      descriptions: {
        base: '若敌方单位的[Blunt]抗性不高于1.5，则使其[Blunt]抗性+0.3',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9266,
      name: '空荡的鸟笼',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: `攻击容量不低于2的攻击技能攻击后，获得该技能对应属性的(该技能命中敌方单位次数/2)个E.G.O资源(向下取整，每个技能最多5个)

  攻击容量不低于2的技能触发暴击后，在攻击后获得(触发暴击的硬币数)个持有量最少的E.G.O资源(最多3个)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9267,
      name: '煅红的铜管',
      category: '烧伤',
      defaultRarity: 'IV',
      descriptions: {
        base: `最大[Combustion]强度+11
  战斗中首次增加的[Combustion]强度变为3倍(每场战斗最多1次)
  敌方单位受到[Combustion]伤害时，对其造成相当于其[Combustion]强度的暴怒伤害
  增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的技能造成的伤害+20%`,
        plus: `最大[Combustion]强度+21
  战斗中首次增加的[Combustion]强度变为3倍(每场战斗最多1次)
  敌方单位受到[Combustion]伤害时，对其造成相当于其[Combustion]强度的暴怒伤害
  增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的技能造成的伤害+25%`,
        double_plus: `最大[Combustion]强度+21
  战斗中首次增加的[Combustion]强度变为3倍(每场战斗最多1次)
  敌方单位受到[Combustion]伤害时，对其造成相当于其[Combustion]强度x1.5的暴怒伤害
  增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的技能造成的伤害+30%`,
      },
    },
    {
      id: 9268,
      name: '万物的本能',
      category: '流血',
      defaultRarity: 'II',
      descriptions: {
        base: `回合结束时，使属于环指的(带有[Laceration]的敌方单位数)名人格在下回合获得1层随机罪孽属性的<noparse>[AttackDmgUp]</noparse>(每回合每名人格最多1次；若是集中遭遇战，则以部位判定)

  属于环指的人格造成的伤害+10%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9819,
      name: '血炎刀',
      category: '烧伤',
      defaultRarity: 'II',
      descriptions: {
        base: `战斗的首个回合开始时，使拥有使自身增加[Combustion]强度的基础攻击技能的人格增加5级[Combustion]强度并使其恢复8点理智值

  属于黑兽 - 酉的人格恢复体力至多恢复至体力上限的49%，但受到的伤害与使自身恢复的体力-50%(不包括E.G.O饰品恢复的体力)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9820,
      name: '黑铁马胄',
      category: '震颤',
      defaultRarity: 'II',
      descriptions: {
        base: `回合开始时，使防御等级最高的1名友方单位获得(其防御等级/3)点护盾(优先使属于黑兽 - 午的人格获得，最多15点护盾)

  带有护盾的友方单位拼点胜利时，使敌方单位增加(自身的速度值/2)级[Vibration]强度，并在下回合使自身获得2层[Agility]与2层[DefenseUp](每回合每名人格最多1次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9821,
      name: '蒙蔽心扉的红布',
      category: '斩击',
      defaultRarity: 'III',
      descriptions: {
        base: `[第1顺位人格专属]

  其他友方单位单方面攻击命中敌方单位时，下回合使自身获得1层[AttackUp](每回合每名人格最多1次，每回合最多6次)

  其他友方单位进行[RetreatForCommon]时，下回合使自身获得1层[SlashResultUp]与1层[SlashDamageUp](每回合最多1次)

  符合所有条件时，下回合使自身获得1层[ResultEnhancement](每回合最多1次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9822,
      name: '品德 - 智',
      category: '破裂',
      defaultRarity: 'II',
      descriptions: {
        base: `[第6顺位人格专属]

  使用增加[Burst]强度或施加[Burst]层数的攻击技能(包括E.G.O技能)拼点胜利时，下回合使自身获得2层[DefenseUp](每回合最多1次)
  - 属于家主候选人的单位下回合额外获得1层[Agility]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9823,
      name: '品德 - 勇',
      category: '破裂',
      defaultRarity: 'II',
      descriptions: {
        base: `[第6顺位人格专属]

  使用增加[Burst]强度或施加[Burst]层数的攻击技能(包括E.G.O技能)拼点胜利时，下回合使自身获得2层[AttackUp](每回合最多1次)
  - 属于家主候选人的单位下回合额外获得3层[AttackUp]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9824,
      name: '品德 - 仁',
      category: '破裂',
      defaultRarity: 'II',
      descriptions: {
        base: `[第6顺位人格专属]

  使用增加[Burst]强度或施加[Burst]层数的攻击技能(包括E.G.O技能)拼点胜利时，使自身恢复15点体力(每回合最多1次)
  - 属于家主候选人的单位下回合额外获得1层[Protection]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9825,
      name: '切磋琢磨',
      category: '破裂',
      defaultRarity: 'IV',
      descriptions: {
        base: `[第6顺位人格专属]

  使用增加[Burst]强度或施加[Burst]层数的攻击技能(包括E.G.O技能)拼点胜利时，使自身恢复20点体力并在下回合获得3层[AttackUp]与3层[DefenseUp](每回合最多1次)
  - 若自身属于家主候选人，则下回合额外使包括自身在内的全体友方单位获得1层[Agility]，1层[Protection]与3层[AttackUp]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9826,
      name: '绍兴酒',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: `[第2顺位人格专属]

  自身每失去1%的体力，使自身基础技能造成的伤害+1%(最多+10%)`,
        plus: `[第2、第4顺位人格专属]

  自身每失去1%的体力，使自身基础技能造成的伤害+1%(最多+10%)`,
        double_plus: `[第2、第4、第6顺位人格专属]

  自身每失去1%的体力，使自身基础技能造成的伤害+1%(最多+10%)`,
      },
    },
    {
      id: 9827,
      name: '家人的怨恨',
      category: '流血',
      defaultRarity: 'IV',
      descriptions: {
        base: `关卡内生成的[BloodDinner] 变为2倍
  增加[Laceration]强度，施加[Laceration]层数与施加特殊[Laceration]的技能攻击后，使自身恢复造成伤害量30%的体力(最多20点)
  - 通过以上效果恢复体力时，下回合使自身获得1层[Enhancement](最多2层)

  [BloodDinner_Common_Accumulation]层数每有50层，下回合开始时使全体友方单位获得1层[AttackUp](最多5层)
  属于拉·曼却领的友方单位每带有30层[BloodDinner_Accumulation]，下回合开始时使其获得1层[AttackUp](最多3层)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9828,
      name: '为了指挥官',
      category: '震颤',
      defaultRarity: 'IV',
      descriptions: {
        base: `[第1顺位人格专属]
  使用消耗[Bullet]的技能时，触发以下效果
  - 下回合使自身获得3层[Agility](每回合最多1次)
  - 命中时使目标[VibrationExplosion]，消耗其1层[Vibration](每回合最多2次)
  - 拼点胜利后命中时，若目标带有[Combustion]与[Vibration](包括特殊震颤与特殊烧伤)，则对其造成相当于其[Combustion]强度与[Vibration]强度之和的暴怒伤害(每回合最多2次)

  暴怒共鸣数不低于4时，触发以下效果
  - 使用暴怒技能时，使其硬币威力+2
  - 命中时，若消耗了[Bullet]，则使造成的伤害+30%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9829,
      name: '中指规矩',
      category: '打击',
      defaultRarity: 'IV',
      descriptions: {
        base: `[Blunt]基础技能的硬币威力+1，属于中指的人格改为硬币威力+2
  友方单位受到攻击时，下回合使全体友方单位获得2层[AttackUp](每回合最多3次)

  战斗中属于中指的人格不低于3名时，触发以下效果
  战斗开始时，每有3点嫉妒共鸣数，获得1层[Enhancement]与1层[Protection](最多3层)
  属于中指的人格使用嫉妒基础技能时，使该技能的所有硬币转化为[SuperCoin]，该人格受到的伤害-50%，并在本回合与下回合获得2层[HitDamageUp]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9830,
      name: '可米的小小礼物',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: `使关卡的首个回合开始时与解除待命的全体友方单位获得3层[VerEmergencyCandy]
  若友方单位上回合未消耗[VerEmergencyCandy]，则回合开始时使其获得1层[VerHunger]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9243,
      name: '试验提取：红艳煞',
      category: '烧伤',
      defaultRarity: 'III',
      descriptions: {
        base: `增加[Combustion]强度，施加[Combustion]层数或施加特殊[Combustion]的攻击技能造成的伤害+10%
  - 若该技能对自身施加[Combustion]层数，则额外使该技能的拼点威力+1
  - 自身每失去2%的体力，使造成的伤害额外+1%(最多+15%)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9244,
      name: '试验提取：提灯',
      category: '破裂',
      defaultRarity: 'III',
      descriptions: {
        base: `增加[Burst]强度或施加[Burst]层数的攻击技能造成的伤害+10%
  - 若自身已失去体力不低于体力上限的20%，则额外使该技能的拼点威力+1
  - 自身所有行动槽的[Aggro]之和每有1点，使攻击技能造成的伤害+1%(最多+15%)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9245,
      name: '变形提取：AEDD',
      category: '充能',
      defaultRarity: 'III',
      descriptions: {
        base: `若自身本回合获得[Charge]层数或特殊[Charge]超出上限，则每溢出2层，下回合使自身获得1层[AttackUp](每回合每名人格最多2层)
  - 拥有获得或消耗[Charge]层数或特殊[Charge]的基础技能的人格改为每回合每名人格最多6层
  - 若自身带有[HighVoltageExoshell]，则额外使自身增加1级[Charge]强度(每场战斗最多1次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9246,
      name: '某人遗落的员工证',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: `属于边狱公司的人格获得以下效果
  - 回合开始时获得(参战且属于边狱公司的人格数/3)层[ParryingResultUp](最多2层；向下取整)

  属于LCE的人格获得以下效果
  - 使自身造成的伤害+(参战且身着E.G.O装备的人格数×10)%(最多+30%)
  - 与自身属于同一阵营的友方单位阵亡时，获得所有属性的E.G.O资源各1个；本场战斗中，回合开始时使自身获得1层[PlusCoinValueUp]并对自身施加1层[MinusCoinValueUp](每场战斗每名人格最多2次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9248,
      name: '山茶花、眼镜和送达的信',
      category: '破裂',
      defaultRarity: 'IV',
      descriptions: {
        base: `[第1、第2、第3顺位人格专属]

  增加[Burst]强度或施加[Burst]层数的攻击技能拼点胜利时，使目标增加5级[Burst]强度并对其施加3层[Burst](每回合每名人格最多1次)

  与速度值低于自身的敌方单位拼点时，使自身的最终威力+1，造成的伤害+25%。

  与带有[AttackUp]的敌方单位拼点胜利时，下回合使自身获得3层[AttackUp]并对拼点失败的敌方单位施加3层[AttackDown](每回合每名人格最多3次)

  使用1技能，2技能或3技能时，触发以下效果(每种技能最多1次)
  - 使用以上技能的人格本场战斗中，回合开始时获得1层[Agility]与1层[SkillPowerUp](最多叠加3次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9249,
      name: '小巧而精致的小提琴',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: `[第5、第6顺位人格专属]

  使自身恢复技能造成体力伤害量10%的体力(每个技能最多20点)

  拼点胜利时，使自身获得1层[AttackUp]与1层[TakeHpHealIncrease](每回合每名人格最多2次)

  使用技能时，使自身获得1层[AttackUp]与1层[TakeHpHealIncrease](每回合每名人格最多2次)

  [Blunt]技能造成的伤害+10%

  拼点胜利的技能造成的伤害+(拼点次数×6)%(最多+30%)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9831,
      name: '恐鱼研究记录',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `对敌方单位造成的伤害+10%
  - 本场战斗期间每有1名敌方单位阵亡或每有1个部位被破坏，额外使造成的伤害+1%(最多额外+20%)
  - 重复破坏相同部位时也会生效
  - 若登场的敌方单位包括恐鱼，则以上效果无条件生效`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9832,
      name: '黄金罗盘',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `使用加算硬币技能时，使自身恢复5点理智值；使用减算硬币技能时，使自身失去5点理智值(不会因本效果而使理智值低于-40点，每回合每名人格最多1次)

  回合开始时，若自身理智值为最大值或不高于-30点，则使自身获得1层[ResultEnhancement]与2层[Protection]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9833,
      name: '银色的钥匙串',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: `头目遭遇战中，回合开始时获得持有量最少的3种E.G.O资源各1个

  回合结束时，若本回合使用了E.G.O技能，则获得3个持有量最少的E.G.O资源(每回合最多1次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9834,
      name: '恐鱼干',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: `回合开始时，对全体敌方单位(若是异想体，则改为所有部位)施加3层[DefenseDown]
  - 若登场的敌方单位包括恐鱼，则改为施加7层[DefenseDown]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9835,
      name: '闪耀的提灯',
      category: '烧伤',
      defaultRarity: 'IV',
      descriptions: {
        base: `[最先编入的人格专属]

  每回合首个使用的攻击技能的最终威力+3
  若该攻击技能为E.G.O技能，则改为最终威力+4，造成的伤害+25%

  战斗开始时，若自身带有[NervousImpairment]，则消耗至多4层[NervousImpairment]并使自身增加(消耗的[NervousImpairment]层数×2)级[Combustion]强度`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9836,
      name: '古旧乐谱残章',
      category: '沉沦',
      defaultRarity: 'IV',
      descriptions: {
        base: `包括E.G.O技能在内的攻击技能仅攻击命中1个敌方单位时(若是异想体，则改为以部位判定)，使该技能造成的伤害+10%
  若该技能为增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的技能，则改为造成的伤害+25%

  [涌潮悲歌 以实玛利 E.G.O专属效果]
  若该E.G.O技能仅命中1个敌方单位，则使该技能最后一枚硬币的威力+4，造成的伤害+20%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9837,
      name: '金属构造体',
      category: '破裂',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，使全体友方单位获得2层[TakeHpHealIncrease]
  拥有增加[Burst]强度或施加[Burst]层数的攻击技能的人格改为获得4层[TakeHpHealIncrease]

  [指令：熔毁 浮士德 E.G.O专属效果]
  该E.G.O技能效果与被动恢复的溢出体力会转化为护盾`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9838,
      name: '宿月酒盏',
      category: '呼吸法',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，使全体友方单位恢复5点理智值。若理智值为最大值，则改为增加相当于溢出恢复量的[Breath]强度(最多5级)
  使用使自身或其他单位增加[Breath]强度或获得[Breath]层数的攻击技能时，使自身获得2层[Breath](每回合每名人格最多1次)

  [宁作吾 鸿璐 E.G.O专属效果]
  - 觉醒：使用该E.G.O技能时改为恢复理智值，而非消耗理智值
  - 侵蚀：使用该E.G.O技能时消耗的理智值-50%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9839,
      name: '造型古典的拆信刀',
      category: '震颤',
      defaultRarity: 'IV',
      descriptions: {
        base: `攻击容量不低于2的技能造成的伤害+15%
  增加[Vibration]强度，施加[Vibration]层数或施加特殊[Vibration]的技能改为造成的伤害+(15+攻击容量×5)%(最多+50%)

  [未照耀的荣光 格里高尔 E.G.O专属效果]
  - 觉醒：每重复使用1次该E.G.O技能的硬币，使其造成的伤害+20%(最多+60%)
  - 侵蚀：攻击前每消耗10层[MlynarWaiting]，使自身获得1层[AttackDmgUp](最多4层)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9812,
      name: '交织的时间',
      category: '震颤',
      defaultRarity: 'II',
      descriptions: {
        base: '使敌方单位[Switch_Vibration]或[FusionVibration]时，使其[VibrationExplosion](每回合每名人格最多1次)',
        plus: '使敌方单位[Switch_Vibration]或[FusionVibration]时，使其[VibrationExplosion](每回合每名人格最多2次)',
        double_plus:
          '使敌方单位[Switch_Vibration]或[FusionVibration]时，使其[VibrationExplosion](每回合每名人格最多3次)',
      },
    },
    {
      id: 9813,
      name: '紧急授予型搜查官徽章',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: `[第3顺位人格专属]

  受到体力减少至0点的伤害时，体力不会低于1点，立即恢复体力上限80%的体力并解除自身的混乱(每场战斗每名人格最多1次，向上取整)
  本E.G.O饰品触发时，下回合起，本场战斗期间每回合开始时使自身获得2层[Enhancement]并对自身施加1层[Vulnerable]
  若自身属于T公司员工，则自身获得[TimeRentalTwoPersonality]时，使自身额外获得1层
  若自身属于T公司员工，则目标带有[TimeSuspend]时，使自身攻击技能造成的伤害+10%`,
        plus: `[第2、第3顺位人格专属]

  受到体力减少至0点的伤害时，体力不会低于1点，立即恢复体力上限80%的体力并解除自身的混乱(每场战斗每名人格最多1次，向上取整)
  本E.G.O饰品触发时，下回合起，本场战斗期间每回合开始时使自身获得2层[Enhancement]并对自身施加1层[Vulnerable]
  若自身属于T公司员工，则自身获得[TimeRentalTwoPersonality]时，使自身额外获得1层
  若自身属于T公司员工，则目标带有[TimeSuspend]时，使自身攻击技能造成的伤害+12.5%`,
        double_plus: `[第1、第2、第3顺位人格专属]

  受到体力减少至0点的伤害时，体力不会低于1点，立即恢复体力上限80%的体力并解除自身的混乱(每场战斗每名人格最多1次，向上取整)
  本E.G.O饰品触发时，下回合起，本场战斗期间每回合开始时使自身获得2层[Enhancement]
  若自身属于T公司员工，则自身获得[TimeRentalTwoPersonality]时，使自身额外获得2层
  若自身属于T公司员工，则目标带有[TimeSuspend]时，使自身攻击技能造成的伤害+15%`,
      },
    },
    {
      id: 9814,
      name: '强制纠缠定序器',
      category: '震颤',
      defaultRarity: 'III',
      descriptions: {
        base: '回合开始时，使[Vibration]层数最高的1名人格的[Vibration]以[VibrationDistribution][FusionVibration]',
        plus: '回合开始时，使[Vibration]层数最高的2名人格的[Vibration]以[VibrationDistribution][FusionVibration]',
        double_plus:
          '回合开始时，使[Vibration]层数最高的3名人格的[Vibration]以[VibrationDistribution][FusionVibration]',
      },
    },
    {
      id: 9816,
      name: '超精密时间加速装置',
      category: '震颤',
      defaultRarity: 'IV',
      descriptions: {
        base: `[第1顺位人格专属]

  适用于拥有增加[Vibration]强度，施加[Vibration]层数或造成[VibrationExplosion]的基础攻击技能的人格
  关卡开始时，使自身获得5层[UltraPrecisionTimeAcceleration]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9744,
      name: '孝心',
      category: '流血',
      defaultRarity: 'II',
      descriptions: {
        base: `通过基础攻击技能效果使敌方单位增加[Laceration]强度或对敌方单位施加特殊[Laceration]时，对其施加2层[Laceration](每回合全体人格总计最多3次)

  目标每带有1层[Laceration]，使自身造成的伤害+1%(最多+20%)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9745,
      name: '错位的晶体管',
      category: '充能',
      defaultRarity: 'II',
      descriptions: {
        base: `基础攻击技能消耗的[Charge]层数或特殊[Charge]变为1.5倍
  基础攻击技能每消耗1层[Charge]或特殊[Charge]，使其造成的伤害+2%(最多+20%)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9746,
      name: '精神污染加速气体',
      category: '沉沦',
      defaultRarity: 'II',
      descriptions: {
        base: '增加[Sinking]强度，施加[Sinking]层数或施加特殊[Sinking]的攻击技能拼点后造成伤害时，命中时使目标增加相当于拼点次数的[Sinking]强度(最多3级，每回合最多3次)',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9747,
      name: '泄露的脑啡肽',
      category: '沉沦',
      defaultRarity: 'II',
      descriptions: {
        base: `减少或消耗敌方单位的[Sinking]层数时，以(目标的[Sinking]强度)%的概率在其减少或消耗前立即对其施加1层[Sinking](每回合最多3次，最多100%概率)
  - 基础概率增加(最大共鸣数×2)%(最多+12%)
  - 若该最大共鸣为忧郁或嫉妒共鸣，则令施加的[Sinking]层数额外+1层`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9748,
      name: '苦难',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `拼点胜利时，恢复相当于拼点次数的理智值(最多3点)
  若该单位的理智值不低于45点，则下回合使其获得(拼点次数/2)层[AttackUp](最多3层)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9749,
      name: '荆棘头冠',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `回合开始时，使理智值最低的1名友方单位恢复8点理智值(不包括陷入恐慌或E.G.O侵蚀的友方单位)
  若该友方单位理智值为最大值，则本回合内使其拼点威力+1
  本回合该友方单位的[MentalSystemResultIncrease_Typo]+1，[MentalSystemResultDecrease_Typo]-1`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9750,
      name: '安息',
      category: '沉沦',
      defaultRarity: 'III',
      descriptions: {
        base: `友方单位通过自身的基础攻击技能效果使自身消耗理智值时，使理智值消耗量减少1点
  若目标带有[Sinking]，则该攻击技能每有1枚硬币朝向正面，使其造成的伤害+2%(最多+16%)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9805,
      name: '灰色星座的加护',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `[第1顺位人格专属]

  关卡开始时，使自身获得[KnightBless]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9806,
      name: '未被选中之人',
      category: '沉沦',
      defaultRarity: 'II',
      descriptions: {
        base: `友方单位受到攻击时，使攻击者增加3级[Sinking]强度

  友方单位阵亡时，下回合使全体友方单位获得2层[Enhancement](每回合最多1次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9807,
      name: '泪锋之剑',
      category: '沉沦',
      defaultRarity: 'III',
      descriptions: {
        base: `友方单位的技能命中时，若目标的理智值不高于-20点，则对目标造成(目标的[Sinking]强度)点忧郁伤害(每个技能最多1次)

  - 若该技能为[Pierce]技能，则对目标额外造成(目标的[Sinking]层数/2)点固定伤害(每个技能最多1次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9808,
      name: '魔法少女的爱之礼物',
      category: '充能',
      defaultRarity: 'II',
      descriptions: {
        base: `友方单位获得或消耗[Charge]层数或特殊[Charge]的技能命中时，随机使1名友方单位恢复3点体力或理智值(不包括体力或理智值为最大值的友方单位)

  友方单位解除恐慌或E.G.O侵蚀时，使其恢复20点理智值`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9809,
      name: '可用之处已尽，郁积的憎恶',
      category: '充能',
      defaultRarity: 'III',
      descriptions: {
        base: `通过攻击技能消耗[Charge]层数时，下回合使自身获得(消耗的[Charge]层数/2)层[AttackUp](每回合最多10层，包括特殊[Charge])

  回合结束时，若本回合有友方单位失去了理智值，则下回合使其获得1层[Enhancement]并对其施加1层[Vulnerable]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9810,
      name: '精神屏蔽力场',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: '关卡开始时，使全体友方单位获得2层[TraumaShield]',
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9811,
      name: '价值处置',
      category: '泛用',
      defaultRarity: 'II',
      descriptions: {
        base: `战斗中友方单位阵亡时，获得所有属性的E.G.O资源各2个

  战斗开始时，若本回合有解除待命的友方单位，则使理智值最低的2名友方单位恢复10点理智值(每回合最多1次，不包括陷入恐慌或E.G.O侵蚀的友方单位)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9233,
      name: '夹杂着噪音的对讲机',
      category: '沉沦',
      defaultRarity: 'III',
      descriptions: {
        base: `使用获得或消耗[Bullet]的技能时，下回合使自身获得1层[Agility]与2层[AttackUp](每回合每名人格最多1次)
  - 增加[Sinking]强度，施加[Sinking]层数与施加特殊[Sinking]的技能造成的伤害+(20/硬币数)%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9234,
      name: '喙形项链',
      category: '流血',
      defaultRarity: 'III',
      descriptions: {
        base: `使用获得或消耗[Bullet]的技能时，下回合使自身获得1层[Agility]与1层[Enhancement](每回合每名人格最多1次)
  - 增加[Laceration]强度，施加[Laceration]层数与施加特殊[Laceration]的技能造成的伤害+(20/硬币数)%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9235,
      name: '亡命之徒',
      category: '突刺',
      defaultRarity: 'IV',
      descriptions: {
        base: `根据编入的拥有获得或消耗[Bullet]的攻击技能的人格数，相应强化本饰品效果(不包括E.G.O技能，包括编队中全体单位)

  - 不低于2名
  使用获得或消耗[Bullet]的技能时，下回合使自身获得2层[Agility]与4层[AttackUp](每回合每名人格最多1次)

  - 不低于5名
  获得或消耗[Bullet]的人格使用的技能拼点威力+1，造成的伤害+10%
  获得或消耗[Bullet]的技能造成的伤害+(100/硬币数)%
  若消耗了所有[Bullet]，则下回合开始时使自身获得4发[Bullet](每场战斗每名人格最多1次)

  - 不低于8名
  回合开始时，使获得或消耗[Bullet]的人格获得1层[DesperadoBuff]
  · 若该单位上回合未消耗[Bullet]，则使其额外获得1层[DesperadoBuff]
  战斗结束时，随机对1名敌方单位造成(全体友方单位的[DesperadoBuff]层数之和×3)点[Pierce]伤害(最多30点)
  · 并重复该效果(编入的获得或消耗[Bullet]的友方单位数-1)次`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9236,
      name: '泛音',
      category: '流血',
      defaultRarity: 'III',
      descriptions: {
        base: `本回合友方单位或敌方单位阵亡时，下回合对全体单位施加1层[Vulnerable](每个波次最多1次)
  - 触发该效果的下回合友方单位拼点胜利时，使全体友方单位的[Vulnerable]层数减少1层，并使全体敌方单位增加4级[Laceration]强度并对全体敌方单位施加2层[Laceration](每回合最多1次)`,
        plus: `本回合友方单位或敌方单位阵亡时，下回合对全体单位施加1层[Vulnerable](每个波次最多2次)
  - 触发该效果的下回合友方单位拼点胜利时，使全体友方单位的[Vulnerable]层数减少1层，并使全体敌方单位增加4级[Laceration]强度并对全体敌方单位施加2层[Laceration](每回合最多2次)`,
        double_plus: `本回合友方单位或敌方单位阵亡时，下回合对全体单位施加1层[Vulnerable](每个波次最多3次)
  - 触发该效果的下回合友方单位拼点胜利时，使全体友方单位的[Vulnerable]层数减少1层，并使全体敌方单位增加4级[Laceration]强度并对全体敌方单位施加2层[Laceration](每回合最多3次)`,
      },
    },
    {
      id: 9237,
      name: '行进贝斯',
      category: '流血',
      defaultRarity: 'II',
      descriptions: {
        base: `[第3顺位人格专属]

  回合开始时，使自身获得1层[TensionUp]

  攻击命中时，以25%的概率使自身与随机1名友方单位获得1层[TensionUp]
  - 若该技能为增加[Laceration]或[Combustion]强度，或施加[Laceration]或[Combustion]层数的技能(包括特殊关键词)，则改为以50%的概率获得`,
        plus: `[第3、第4顺位人格专属]

  回合开始时，使自身获得1层[TensionUp]

  攻击命中时，以25%的概率使自身与随机1名友方单位获得1层[TensionUp]
  - 若该技能为增加[Laceration]或[Combustion]强度，或施加[Laceration]或[Combustion]层数的技能(包括特殊关键词)，则改为以75%的概率获得`,
        double_plus: `[第3、第4顺位人格专属]

  回合开始时，使自身获得1层[TensionUp]

  攻击命中时，以25%的概率使自身与随机2名友方单位获得1层[TensionUp]
  - 若该技能为增加[Laceration]或[Combustion]强度，或施加[Laceration]或[Combustion]层数的技能(包括特殊关键词)，则改为以100%的概率获得`,
      },
    },
    {
      id: 9238,
      name: '粉红花瓣',
      category: '沉沦',
      defaultRarity: 'III',
      descriptions: {
        base: `友方单位增加[Sinking]强度，施加[Sinking]层数与施加特殊[Sinking]的技能命中敌方单位时，对该敌方单位施加1层[PinkPetals]
  - 该敌方单位每带有5级[Sinking]，对该敌方单位额外施加1层[PinkPetals](最多4层)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9239,
      name: '粉红花束',
      category: '沉沦',
      defaultRarity: 'IV',
      descriptions: {
        base: `[Pierce]技能命中敌方单位时，下回合使自身获得1层[Agility]与1层[PenetrateDamageUp](每回合每名人格最多2次)
  - 该技能击杀敌方单位时，下回合使自身额外获得1层[Agility]与2层[PenetrateDamageUp](每回合每名人格最多1次)

  增加[Sinking]强度，施加[Sinking]层数与施加特殊[Sinking]的技能命中敌方单位时，对其施加2层[PinkPetals]
  - 其每带有5级[Sinking]强度，对其额外施加1层[PinkPetals](最多4层)
  - 若其[PinkPetals]层数不低于10层，则攻击命中时使其增加2级[Vibration]强度(每回合最多3次)

  回合结束时，下回合对[Sinking]强度与[Vibration]强度之和不低于5级的敌方单位(若是异想体，则改为以部位判定)施加2层[Binding]与3层[DefenseDown]
  - 若目标的[Sinking]强度与[Vibration]强度之和不低于10级，则改为施加2层[Binding]、1层[Paralysis]与4层[DefenseDown]

  回合结束时，若全体敌方单位均带有[PinkPetals]，则下回合使全体友方单位获得1层[Enhancement]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9240,
      name: '蜂王浆香水',
      category: '烧伤',
      defaultRarity: 'III',
      descriptions: {
        base: `[第6顺位人格专属]

  关卡开始时，使自身获得[QueenBeepheromone]

  受到带有[Combustion]的敌方单位的伤害-15%

  回合结束时，下回合对对自身造成的伤害最多的敌方单位(若是集中遭遇战，则改为以部位判定)施加[QueenBeeMark]
  - 若未受到来自敌方单位的伤害，则下回合随机对1名敌方单位(若是集中遭遇战，则改为以部位判定)施加[QueenBeeMark]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9241,
      name: '尚且温热的咖啡',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `[第1顺位人格专属]

  使用攻击技能的回合结束时，使自身恢复5点理智值
  - 若自身理智值为最大值且属于脑叶公司，则下回合使自身获得1层[PlusCoinValueUp]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9815,
      name: '暗中行动',
      category: '破裂',
      defaultRarity: 'IV',
      descriptions: {
        base: `属于黑兽 - 卯的人格首次登场时，3回合内使其最小速度值固定为10(若最小速度值不低于10，则不会触发该效果)

  自身每带有1层[Agility]【卯】，使自身基础技能的拼点威力+1，造成的伤害+10%

  施加[Agility]【[Agility]】时，额外对未带有[Agility]【[Agility]】的2名敌方单位施加(每回合最多1次，若是集中遭遇战，则改为以部位判定)

  若自身的速度值高于目标，则令自身通过技能增加[Burst]强度或施加[Burst]层数时额外增加(速度值之差/3)级[Burst]强度或额外施加(速度值之差/3)层[Burst](最多3点)

  回合结束时，使属于黑兽 - 卯的友方单位在下回合获得2层[Agility]

  若自身的速度值高于目标或进行单方面攻击，则(速度值之差/3)每有1点，使自身造成的[Slash]伤害+10%(最多+30%)

  若自身的速度值高于目标，则(速度值之差/3)每有1点，使自身受到的伤害-10%(最多-30%)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9844,
      name: '黑兽丸-卯',
      category: '破裂',
      defaultRarity: 'II',
      descriptions: {
        base: `属于黑兽 - 卯的人格首次登场时，1回合内使其最小速度值固定为10(若最小速度值不低于10，则不会触发该效果)

  自身带有脚力【卯】时，使自身基础技能的拼点威力+1，造成的伤害+10%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9845,
      name: '登场专用音响',
      category: '打击',
      defaultRarity: 'II',
      descriptions: {
        base: `[Blunt]技能命中时，使该友方单位恢复造成伤害量5%的体力

  反击技能命中时，使自身恢复5点理智值(每回合每名人格最多2次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9846,
      name: '幼兄·登场',
      category: '打击',
      defaultRarity: 'IV',
      descriptions: {
        base: `友方单位受到攻击时，使该友方单位获得3层[AttackUp]并对攻击者施加4层[Laceration](每个技能最多1次)

  属于中指的人格使用的基础技能基础威力+1，造成的伤害+(30/硬币数)%
  - 回合开始时，若属于中指的人格不低于3名，则改为基础威力+1，造成的伤害+(60/硬币数)%
  - 若不低于5名，则改为基础威力+2，造成的伤害+(90/硬币数)%

  [Blunt]技能命中时，使该友方单位恢复造成伤害量10%的体力

  反击技能命中时，使自身恢复5点理智值(每回合每名人格最多2次)

  回合结束时，若战斗开始时装备了反击技能的友方单位在本回合未使用反击技能，则下回合使该友方单位获得1层[PlusCoinValueUp]与1层减算硬币弱化`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9847,
      name: '重叠的创口贴',
      category: '流血',
      defaultRarity: 'I',
      descriptions: {
        base: '回合结束时，使带有[Laceration]且现存体力最低的1名友方单位恢复其体力上限5%的体力。',
        plus: '回合结束时，使带有[Laceration]且现存体力最低的2名友方单位恢复其体力上限5%的体力。',
        double_plus: '',
      },
    },
    {
      id: 9848,
      name: '钉与锤',
      category: '流血',
      defaultRarity: 'IV',
      descriptions: {
        base: `属于N公司狂信徒的友方单位基础威力+3

  属于N公司狂信徒的人格获得狂信时，使全体属于N公司狂信徒的人格获得相应层数的狂信(每回合最多1次；包括自身)
  - 激活色欲完全共鸣时，令获得的狂信层数变为3倍

  关卡开始时，对全体敌方单位施加2层[NailPersonality]

  属于N公司狂信徒的人格的基础技能与带有[NailPersonality]的目标进行拼点时，使该目标增加3级[Laceration]强度(每个技能最多1次)

  属于N公司狂信徒的人格的基础技能对带有[NailPersonality]的目标造成的伤害+100%`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9849,
      name: '燃烧的命运',
      category: '烧伤',
      defaultRarity: 'IV',
      descriptions: {
        base: `最大[Combustion]强度+30
  与带有[Combustion]的目标拼点胜利时，触发其[Combustion]1次，并使其[Combustion]层数减少1层(每名人格最多1次)
  对带有[Combustion]的敌方单位使用技能时，使该技能增加(主要目标的[Combustion]强度/10)级攻击等级(最多8级)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9850,
      name: '翼形蜡烛',
      category: '烧伤',
      defaultRarity: 'III',
      descriptions: {
        base: `回合开始时，若属于黎明事务所的人格不低于3名，则触发该效果(以编队人员为基准)
首个回合开始时，使全体友方单位获得2层[Dawnherald]
战斗开始时，使黎明事务所 收尾人 辛克莱恢复10点理智值，该人格通过被动“不稳定的自我外壳”进入不稳定E.G.O::蜡翼状态的理智值条件改为不低于25点

[属于黎明事务所的人格专属]
基础技能攻击命中时，使目标增加2级[Combustion]强度与2级[Vibration]强度(每个技能最多1次)
属于黎明事务所的人格视作施加[Combustion]与[Vibration]的人格
- 属于黎明事务所的人格的基础技能视作施加[Combustion]与[Vibration]的技能
关卡开始时，若黎明事务所 收尾人 浮士德在场，则使其获得1层[BattleInstinct]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9851,
      name: '旋转木马模型',
      category: '流血',
      defaultRarity: 'IV',
      descriptions: {
        base: `首个回合开始时，获得300层[BloodDinner]
令[Laceration]效果生成的[BloodDinner]变为2倍
使用消耗[BloodDinner]的技能时，在该技能攻击后额外消耗相应层数的[BloodDinner]
[属于拉·曼却领的人格专属]
属于拉·曼却领的人格参战时，根据人格触发以下效果
- 拉·曼却领 总督 堂吉诃德：获得15层[BloodArmor]
- 拉·曼却领 公主 罗佳：获得15层[BloomingThornsRodionFirst]
- 拉·曼却领 神父 格里高尔：获得15层[BloodyHand]
- 拉·曼却领 理发师 奥提斯：获得15层[BloodScissor]
- 拉·曼却领 王子 默尔索：获得3层[BloodArmorMeursault]
[拉·曼却领 总督 堂吉诃德专属]
- 除自身以外每有1名属于拉·曼却领的人格，使拉·曼却领 总督 堂吉诃德的基础技能的最终威力+1，造成的伤害+30%(最多+4；最多+120%；包括待命人员，包括阵亡的单位，不包括未编入的单位)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9852,
      name: '奉纳的雪茄',
      category: '震颤',
      defaultRarity: 'IV',
      descriptions: {
        base: `回合开始时，若属于拇指的人格不低于3名，则触发该效果(以参战人员为基准)
回合开始时，使属于拇指的人格获得1层[PlusCoinValueUp]与2层[AttackDmgUp]
每有1名属于拇指的人格，使全体属于拇指的人格获得1层[AttackUp](最多4层)
目标每带有1级[VibrationIgnition]强度，使自身造成的伤害+1%(最多+20%)
- 消耗[Bullet]的技能造成的伤害额外+1%(最多+20%)
- 属于拇指的人格造成的伤害额外+1%(最多+20%)

自身的技能触发[VibrationExplosion]时，下回合使自身获得2层[AttackUp](每回合最多3次)

蜘蛛巢 拇指 父辈 罗佳3技能攻击后，使蜘蛛巢 拇指 子辈 希斯克利夫获得1层[GraduallyPerfectedTextbook]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9853,
      name: '拍手啪啪！',
      category: '震颤',
      defaultRarity: 'IV',
      descriptions: {
        base: `使敌方单位增加[Vibration]强度，对敌方单位施加[Vibration]层数或对敌方单位施加特殊震颤的基础技能拼点胜利时，随机使目标以以下的特殊震颤[FusionVibration](每回合最多1次)
- [VibrationIgnition]
- [VibrationBleeding]
- [VibrationEcho]
- [VibrationCollapse]
- [VibrationChain]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9854,
      name: '再来一杯！',
      category: '震颤',
      defaultRarity: 'IV',
      descriptions: {
        base: `消耗[Vibration]层数或[Charge]层数的基础技能造成的伤害+20%(包括特殊充能，不包括固定强度的特殊充能)
通过基础技能消耗[Vibration]层数或[Charge]层数时，该技能结束时对自身重新施加相当于消耗层数一半的[Vibration]层数或[Charge]层数(最少1层，向下取整；包括特殊充能，不包括固定强度的特殊充能)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9855,
      name: '赤红纠缠的蜘蛛巢',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `每有1名友方人格阵亡，使全体友方单位增加1级攻击等级与1级防御等级(最多10级)
编入蜘蛛巢之刃 良秀时，除蜘蛛巢之刃 良秀以外的人格阵亡时不会在通过关卡后复活(头目与隐藏节点)
[第1顺位人格专属]
回合开始时，若除自身以外的全体友方单位均阵亡，则使自身获得[TornoutButterfly]
[蜘蛛巢之刃 良秀专属]
自身在战斗中首次登场时，每有1名属于蜘蛛巢的友方人格阵亡，使自身获得5层[PhantomIncisionTotal]
每有2名属于蜘蛛巢的友方人格阵亡，使自身的最终威力+1，硬币威力+1，造成的伤害+10%(分别最多+3与+30%)
除蜘蛛巢之刃 良秀以外的全体友方单位均阵亡时，所有选项变动值+12`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9856,
      name: '捕绳',
      category: '呼吸法',
      defaultRarity: 'III',
      descriptions: {
        base: `暴击命中敌方单位时，下回合对其施加1层[Binding](每回合最多2次)
技能命中带有[Binding]的敌方单位时，使自身增加1级[Breath]强度(每回合每名人格最多2次)
回合开始时，对带有[Laceration]的全体敌方单位施加层数相当于其[Binding]层数的[AttackDown](最多5层)
回合开始时，若全体敌方单位(若是集中遭遇战，则改为以部位判定)均带有[Binding]，则使全体友方单位增加3级[Breath]强度`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9857,
      name: 'N公司定格小队的包',
      category: '流血',
      defaultRarity: 'II',
      descriptions: {
        base: `增加[Laceration]强度，施加[Laceration]层数或施加特殊流血的技能命中敌方单位时，对其施加1层[NailPersonality](每个技能最多1次)
对带有[NailPersonality]的敌方单位触发[VibrationExplosion]时，下回合对其施加2层[Binding](每回合最多3次)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9858,
      name: '白瓷砚滴',
      category: '泛用',
      defaultRarity: 'III',
      descriptions: {
        base: `友方人格获得[AssistDefense]时，使其获得2层[AttackDmgUp]与2层[Protection]
[第1顺位友方单位专属]
回合结束时，下回合使自身获得2层[Agility]
若人格的速度值高于敌方单位，则速度值每相差1点，使该人格造成的伤害+3%(最多+30%)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9859,
      name: '菖蒲剑',
      category: '斩击',
      defaultRarity: 'II',
      descriptions: {
        base: `若友方单位在本回合未受到敌方单位攻击，则下回合使该友方单位获得1层[SlashDamageUp]
友方单位受到敌方单位攻击时，使该友方单位增加4级[Breath]强度并在本回合与下回合中使该友方单位获得1层[CriticalDamageUp](每回合每名人格最多1次)
- 对于属于剑契组的人格，本饰品的效果变为2倍`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9860,
      name: '粉碎的木制刑具',
      category: '斩击',
      defaultRarity: 'II',
      descriptions: {
        base: `使用斩击技能命中敌方单位时，下回合对其施加1层[DefenseDown](每个技能最多2次)
友方单位攻击速度值低于自身的敌方单位时，速度值每相差1点，使该友方单位基础攻击技能造成的伤害+3%(最多+12%)
- 若敌方单位带有[Binding]，则使增加的伤害与其最大值变为2倍`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9861,
      name: '无纹的刀镡',
      category: '斩击',
      defaultRarity: 'I',
      descriptions: {
        base: `自身每带有1级[Breath]强度，使自身斩击技能造成的伤害+1%(最多+15%)`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9862,
      name: '本国剑谱',
      category: '斩击',
      defaultRarity: 'IV',
      descriptions: {
        base: `若敌方单位的斩击抗性不高于1.5，则使其斩击抗性+0.3
斩击技能的攻击等级+2
攻击斩击抗性为脆弱(抗性超过1.0；不包括陷入混乱)的敌方单位时，使自身造成的斩击伤害+(5+目标的斩击抗性×10)%(最多+25%)
自身每带有1级[Breath]强度，使自身斩击技能造成的伤害+1.5%(最多+30%)
回合开始时，若属于剑契组的人格不低于3名，则触发该效果(以参战人员为基准)
战斗开始时使装备了暴怒或傲慢技能且属于剑契组的人格获得1层[SwordoftheHomelandStriking]
使不属于剑契组且属于S公司的人格中最先编入的1名人格视作属于剑契组的人格并使其在每回合获得[SwordoftheHomelandStriking]`,
        plus: '',
        double_plus: '',
      },
    },
    {
      id: 9863,
      name: '量产型K公司安瓿',
      category: '泛用',
      defaultRarity: 'IV',
      descriptions: {
        base: `[第1顺位人格专属]
关卡开始时，使自身获得1层紧急用[KAmpouleA1C94TH]`,
        plus: '',
        double_plus: '',
      },
    },
  ],
}

export default Op.gifts
