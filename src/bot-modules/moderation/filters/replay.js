/**
 * Moderation Filter: Replays
 */

'use strict';

const Replay_Default_Value = 1;

const Path = require('path');

const Translator = Tools.get('translate.js');

const translator = new Translator(Path.resolve(__dirname, 'replay.translations'));

exports.id = 'replay';

exports.parse = function (context) {
	let msg = context.msgLow;
	let val = this.getModTypeValue(exports.id, Replay_Default_Value);
	if (msg.indexOf("replay.pokemonshowdown.com/") > -1) {
		context.infractions.push(exports.id);
		context.totalPointVal += val;
		if (context.pointVal < val) {
			context.pointVal = val;
			context.muteMessage = translator.get('replays', this.getLanguage(context.room));
		}
	}
};
