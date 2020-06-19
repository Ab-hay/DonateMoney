import winston from 'winston';

const myFormat = winston.format.printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${level}] ${label}: ${message}`;
});


let LoggerFactory = (() => {
    var logger: winston.Logger;

    function createLogger() {

        return winston.createLogger({
            format: winston.format.combine(
                winston.format.label({ label: 'burn-money-app' }),
                winston.format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss'
                }),
                myFormat
            ),
            level: 'info',
            defaultMeta: { service: 'burn-money' },
            transports: [
                // - error logs to error.log
                // - info logs to application.log
                new winston.transports.File({ filename: 'error.log', level: 'error' }),
                new winston.transports.File({ filename: 'application.log' }),
            ]
        });
    }

    return {
        getLogger: function () {
            if (!logger) {
                logger = createLogger();
            }
            return logger;
        }
    };
})();

export default LoggerFactory;
