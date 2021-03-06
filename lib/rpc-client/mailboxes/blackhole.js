const EventEmitter = require('events').EventEmitter;
const utils = require('../../util/Utils');
const logger = require('pomelo-logger').getLogger('pomelo-rpc', __filename);

const exp = module.exports = new EventEmitter();

exp.connect = function(tracer, cb)
{
	tracer && tracer.info('client', __filename, 'connect', 'connect to blackhole');
	process.nextTick(function()
	{
		utils.InvokeCallback(cb, new Error('fail to connect to remote server and switch to blackhole.'));
	});
};

exp.close = function(cb)
{
};

exp.send = function(tracer, msg, opts, cb)
{
	tracer && tracer.info('client', __filename, 'send', 'send rpc msg to blackhole');
	tracer && logger.info('message into blackhole: %j', msg);
	process.nextTick(function()
{
		utils.InvokeCallback(cb, tracer, new Error('message was forward to blackhole.'));
	});
};
