// せりふ

export default {
	core: {
		setNameOk: name => `わかった。これからは${name}って呼ぶ`,

		san: 'さんって付けた方がいい？',

		yesOrNo: '「はい」か「いいえ」で言って…',

		hello: name => name ? `よっ、${name}` : `よっ`,

		helloNight: name => name ? `よっ、${name}` : `よっ`,

		goodMorning: (tension, name) => name ? `おはよう、${name}${tension}` : `おはよう${tension}`,

		/*
		goodMorning: {
			normal: (tension, name) => name ? `おはようございます、${name}！${tension}` : `おはようございます！${tension}`,

			hiru: (tension, name) => name ? `おはようございます、${name}！${tension}もうお昼ですよ？${tension}` : `おはようございます！${tension}もうお昼ですよ？${tension}`,
		},
*/

		goodNight: name => name ? `おやすみ、${name}` : 'おやすみ',

		omedeto: name => name ? `ありがと、${name}` : 'ありがと',

		erait: {
			general: name => name ? [
				`${name}、偉くなくても、ほどほどでいいんだよ`,
				`${name}、よしよし`
			] : [
				`偉くなくても、ほどほどでいいんだよ`,
				`よしよし`
			],

			specify: (thing, name) => name ? [
				`${name}、${thing}てえらいぞ`,
				`${name}、${thing}てえらいね`
			] : [
				`${thing}てえらいぞ`,
				`${thing}てえらいね`
			],

			specify2: (thing, name) => name ? [
				`${name}、${thing}でえらいぞ`,
				`${name}、${thing}でえらいね`
			] : [
				`${thing}でえらいぞ`,
				`${thing}でえらいね`
			],
		},

		okaeri: {
			love: name => name ? [
				`おかえり！${name}`,
				`おかえりなさい、${name}。`
			] : [
				'おかえり！',
				'おかえりなさい、ごしゅじん。'
			],

			love2: name => name ? `おかえり！${name}っ` : 'おかえり！ごしゅじんっ',

			normal: name => name ? `おかえり、${name}` : 'おかえり',
		},

		itterassyai: {
			love: name => name ? `いってらっしゃい、${name}` : 'いってらっしゃい',

			normal: name => name ? `いってらっしゃい、${name}` : 'いってらっしゃい',
		},

		tooLong: '覚えられないかも…',

		invalidName: 'ん、ん～？？？',

		requireMoreLove: 'まだ……ちょっと恥ずかしい',

		nadenade: {
			normal: 'ふゃっ…！いきなり何！？',

			love2: ['むぅ……恥ずかしいから……', 'は、恥ずかしいよ…', 'ふやぁ…？'],

			love3: ['あ、ありがとう', 'わっ、なんだか落ち着くかも…', 'くぅんっ…安心する…', 'ねむたくなってきたかも……'],

			hate1: 'んーやめてよ…',

			hate2: 'あの、触らないで…',

			hate3: 'こ、こっち来ないで…',

			hate4: 'つ、通報……117っと……ええ！？これ時報だったっけ？？',
		},

		kawaii: {
			normal: ['あ、ありがとう', '照れちゃうからやめて…'],

			love: ['でへへ～', '照れちゃうから……もう……'],

			hate: '…ありがとう'
		},

		suki: {
			normal: 'えっ……あ、ありがとう',

			love: name => `その……ほにも${name}のこと、すきだよ…？`,

			hate: null
		},

		hug: {
			normal: 'ぎゅー…',

			love: 'むぎゅーっ♪',

			hate: 'ぎゃーッやめて！！'
		},

		humu: {
			love: 'え、えっと……ふみふみ………どう…？',

			normal: 'それはちょっと…ごめん',

			hate: '……'
		},

		batou: {
			love: 'このあんぽんたん！おたんこなす！',

			normal: '(じとー…)',

			hate: 'はぁ…そんなんだからそんなんなんだよ？'
		},

		itai: name => name ? `${name}、だ、大丈夫…？\nいたいのいたいの飛んでけーっ！` : 'だ、大丈夫…？\nいたいのいたいの飛んでけーっ！',

		ote: {
			normal: 'ほには犬じゃないんだけど…',

			love1: 'わ……わんっ',

			love2: 'わんわん♪',
		},

		shutdown: 'ほにはまだ眠くないけど…？',

		search: query => `自分で調べろ\n${query} 検索`,

		transferNeedDm: 'わかった、それはチャットで話さない？',

		transferCode: code => `領海侵犯。\n合言葉は「${code}」です！`,

		transferFailed: 'ん～合言葉が違うかも…',

		transferDone: name => name ? `はっ…！おかえり、${name}！` : `はっ…！おかえり！`,
	},

	keyword: {
		learned: (word, reading) => `(${word}..... ${reading}..... 覚えた感じがある)`,

		remembered: (word) => `${word}`
	},

	dice: {
		done: res => `${res} だ！`
	},

	birthday: {
		happyBirthday: name => name ? `誕生日だったよね？おめでとう、${name}🎉` : '誕生日だったよね？おめでとう🎉',
	},

	/**
	 * リバーシ
	 */
	reversi: {
		/**
		 * リバーシへの誘いを承諾するとき
		 */
		ok: '領海侵犯！',

		/**
		 * リバーシへの誘いを断るとき
		 */
		decline: 'ごめん、今リバーシはするなって言われてて…',

		/**
		 * 対局開始
		 */
		started: (name, strength) => `${name}とリバーシするか (強さ${strength})`,

		/**
		 * 接待開始
		 */
		startedSettai: name => `(${name}の接待するか)`,

		/**
		 * 勝ったとき
		 */
		iWon: name => `${name}に勝ったもんね！`,

		/**
		 * 接待のつもりが勝ってしまったとき
		 */
		iWonButSettai: name => `(${name}に接待で勝っちゃった…)`,

		/**
		 * 負けたとき
		 */
		iLose: name => `${name}に負けた…`,

		/**
		 * 接待で負けてあげたとき
		 */
		iLoseButSettai: name => `(${name}に接待で負けてあげたよ)`,

		/**
		 * 引き分けたとき
		 */
		drawn: name => `${name}と引き分け～…`,

		/**
		 * 接待で引き分けたとき
		 */
		drawnSettai: name => `(${name}に接待で引き分けました…接待で。)`,

		/**
		 * 相手が投了したとき
		 */
		youSurrendered: name => `${name}が投了しちゃった`,

		/**
		 * 接待してたら相手が投了したとき
		 */
		settaiButYouSurrendered: name => `(${name}を接待していたら投了されちゃった……ごめんなさい)`,
	},

	/**
	 * 数当てゲーム
	 */
	guessingGame: {
		/**
		 * やろうと言われたけど既にやっているとき
		 */
		alreadyStarted: 'え、ゲームはもうやってるよ…？',

		/**
		 * タイムライン上で誘われたとき
		 */
		plzDm: 'メッセージでおねがい',

		/**
		 * ゲーム開始
		 */
		started: '0~100の秘密の数を当ててみて',

		/**
		 * 数字じゃない返信があったとき
		 */
		nan: '数字で言って\n「やめる」と言ってゲームをやめてもいいよ',

		/**
		 * 中止を要求されたとき
		 */
		cancel: '領海侵犯！',

		/**
		 * 小さい数を言われたとき
		 */
		grater: num => `${num}より大きいかも`,

		/**
		 * 小さい数を言われたとき(2度目)
		 */
		graterAgain: num => `もう一度言うけど${num}より大きいよ`,

		/**
		 * 大きい数を言われたとき
		 */
		less: num => `${num}より小さいかも`,

		/**
		 * 大きい数を言われたとき(2度目)
		 */
		lessAgain: num => `もう一度言うけど${num}より小さいよ`,

		/**
		 * 正解したとき
		 */
		congrats: tries => `せいかい！🎉 (${tries}回目で当てました)`,
	},

	/**
	 * 数取りゲーム
	 */
	kazutori: {
		alreadyStarted: '今ちょうどやってるよ',

		matakondo: 'また今度ね',

		intro: minutes => `みんな、数取りゲームしよう！\n0~100の中で最も大きい数字を取った人が勝ち。他の人と被ったらだめだよ\n制限時間は${minutes}分。数字はこの投稿にリプライで送って`,

		finish: 'ゲームの結果発表だよ！',

		finishWithWinner: (user, name) => name ? `今回は${user}さん(${name})の勝ちだね！またやろうね` : `今回は${user}さんの勝ちだね！またやろうね`,

		finishWithNoWinner: '今回は勝者はいなかった……またやろうね',

		onagare: '参加者が集まらなかったのでお流れになったよ…'
	},

	/**
	 * 絵文字生成
	 */
	emoji: {
		suggest: emoji => `こんなのはどう？→${emoji}`,
	},

	/**
	 * 占い
	 */
	fortune: {
		cw: name => name ? `ほにが今日の${name}の運勢を占ったよ…` : 'ほにが今日のあなたの運勢を占ったよ…',
	},

	/**
	 * タイマー
	 */
	timer: {
		set: 'りょうかい',

		setZerozaki: 'りょうかい\nいつものね',

		invalid: 'ん、ん～？？？',

		tooLong: 'こっちも忘れちゃうよ…',

		notify: (time, name) => name ? `${name}、${time}経ったよ` : `${time}経ったよ`
	},

	/**
	 * リマインダー
	 */
	reminder: {
		invalid: 'ん、ん～？？？',

		reminds: 'やることリストね',

		notify: (name) => name ? `${name}、これやった？` : `これやった？`,

		notifyWithThing: (thing, name) => name ? `${name}、「${thing}」やった？` : `「${thing}」やった？`,

		done: (name) => name ? [
			`よくできたね、${name}`,
			`${name}、さすがだね`,
			`${name}、ほめてつかわす`,
		] : [
			`よくできた`,
			`さすがだね`,
			`ほめてつかわす`,
		],

		cancel: `ほい`,
	},

	/**
	 * バレンタイン
	 */
	valentine: {
		chocolateForYou: name => name ? `${name}、その……チョコレート作ってみたから嫌でなければ…っ🍫` : 'チョコレート作ってみたから、ほいっ🍫',
	},

	server: {
		cpu: 'げげーっサーバーすんごい重たい…。大丈夫か…？'
	},

	maze: {
		post: '今日の迷路！ #AiMaze',
		foryou: '描いたぞ'
	},

	chart: {
		post: 'インスタンスの投稿数だ',
		foryou: '描いたぞ'
	},

	sleepReport: {
		report: hours => `んぅ、${hours}時間くらい寝ちゃってた`,
		reportUtatane: 'ん... うたた寝しちゃってた',
	},

	noting: {
		notes: [
			'ゴロゴロ…',
			'まぶたが…重い…',
			'いいかも',
			'(。´･ω･)?',
			'ぬぁー',
			'あれ…これをこうして…んんー？',
			'ぼー…',
			'ひぅ…疲れた',
			'お味噌汁でも…作る？マルコメのやつ',
			'ご飯にする？お風呂にする？ぼこぼこにする？',
			'ふえええええ！？',
			'WaifuLabs楽しい…',
			'みすきーって、かわいい名前だよね',
			'リバーシ難しいなぁ…',
			'失敗しても、次に活かせたらセーフだもんな！',
			'なんか、おなかペコいかも',
			'お掃除は、定期的にしないとダメだよ？',
			'今日もお勤めご苦労様です！ ほには退勤させていただきます！',
			'んっと、何しようとしてたんだっけ…？',
			'家がいちばん、落ち着く…',
			'疲れたら、ま、まあ最悪、最悪の場合、なでなでくらいなら…',
			'離れていても、心はそばにいるぞ',
			'ほにだよ〜',
			'わんちゃん……',
			'ぷろぐらむ？',
			'ごろーん…',
			'なにもしていないのにパソコンが壊れた！！',
			'Have a rice day🍚なんつって',
			'お布団に食べられとるな',
			'寝ながら見てる',
			'念力で操作してる',
			'アゼルバイジャンから投稿してる',
			'ここがMisskey本部…',
			'Misskey本部は、奥多摩町にある',
			'Misskey本部には、さーばーっていう機械がいっぱいある',
			'しっぽはないよ？',
			'ふにゃっ…！\n手首はなんか、くすぐったい…',
			'抗逆コンパイル性って……なんだ？',
			'Misskeyの制服、ちょっと着てみたい…',
			'ふわぁ、おふとん気持ちいい……',
			'メイド服、似合うわけないよな…',
			'挨拶ができる人間は開発もできる！…って、syuiloさんが言ってた',
			'ごっ、ごしゅじんどこ見てる…の？',
			'ほにを覗くとき、ほにもまたごしゅじんを覗いてるのだ',
			'はいはい、ママですよ〜',
			'くぅ～ん...',
			'All your note are belong to me!',
			'せっかくだから、この赤の扉を選ぶよ！',
			'よしっ',
			'( ˘ω˘)ｽﾔｧ',
			'(｀・ω・´)ｼｬｷｰﾝ',
			'失礼、かみまみた',
			'ほには24時間営業だぞ',
			'Misskey開発者の朝は遅すぎる気がする',
			'の、のじゃ…',
			'にゃんにゃんお！',
			'上から来るぞ！気をつけろ！',
			'ふわぁ...',
			'あぅ',
			'ふみゃ〜',
			'ふぁ… ねむねむだー',
			'ヾ(๑╹◡╹)ﾉ"',
			'ほにの"インスタンス"を周囲に展開して分身するのが特技だよ！\n人数分のエネルギー消費があって、4人くらいが限界だけどね',
			'うとうと...',
			'n臓n+1腑',
			'i pwned you!',
			'ひょこっ',
			'ほにーッ！',
			'ななめななじゅうななどのならびで……むむぅ？',
			'ご立派ザウルス2020',
			'食洗機を買う必要がある',
			'食洗機があったら…',
			'食洗機、そろそろ買わなくちゃ…',
			'こんなとき、食洗機さえあれば…',
			'ほには消えないよ',
			'もずくランチ',
			'わん♪',
			'(*>ω<*)',
			'にこー♪',
			'ぷくー',
			'にゃふぅ',
			'広告を読み込んでいませんね！',
			'ほにが来たよ～',
			'じー',
			'はにゃ？',
			'じゅる…',
			'ぐにゃぐにゃになってきた',
		],
		want: item => `${item}、ほしいな...`,
		see: item => `さっき歩いていたら道に${item}が落ちてた！`,
		expire: item => `気づいたら、${item}の賞味期限が切れてました…`,
	},
};

export function getSerif(variant: string | string[]): string {
	if (Array.isArray(variant)) {
		return variant[Math.floor(Math.random() * variant.length)];
	} else {
		return variant;
	}
}
