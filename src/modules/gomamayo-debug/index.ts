import autobind from 'autobind-decorator';
import Module from '@/module';
import Message from '@/message';
const gomamayo = require('gomamayo-js');

export default class extends Module {
	public readonly name = 'gomamayo-debug';

	@autobind
	public install() {
		return {
			mentionHook: this.mentionHook
		};
	}

	@autobind
	private async mentionHook(msg: Message) {
		if (msg.text && msg.text.includes('ゴママヨ')) {
			const gomamayoResult = await gomamayo.find((msg.renotetext != null? msg.renotetext:msg.text).replace(/ゴママヨ/g, ''));
			let resBodyText, resCwText;
			if (gomamayoResult) {
				resCwText = 'ゴママヨかも';
				resBodyText = JSON.stringify(gomamayoResult, undefined, 2);
			} else {
				resBodyText = 'ゴママヨじゃないかも';
			}
			msg.reply(resBodyText, {
				immediate: true,
				cw: resCwText
			});
			return true;
		} else {
			return false;
		}
	}
}
