"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionStatus = void 0;
exports.validSubscriptionStatus = validSubscriptionStatus;
var SubscriptionStatus;
(function (SubscriptionStatus) {
    SubscriptionStatus["ACTIVE"] = "active";
    SubscriptionStatus["INACTIVE"] = "inactive";
    SubscriptionStatus["PAUSED"] = "paused";
    SubscriptionStatus["PENDING"] = "pending";
    SubscriptionStatus["CANCELLED"] = "cancelled";
    SubscriptionStatus["EXPIRED"] = "expired";
    SubscriptionStatus["UNPAID"] = "unpaid";
})(SubscriptionStatus || (exports.SubscriptionStatus = SubscriptionStatus = {}));
function validSubscriptionStatus(status) {
    return status !== SubscriptionStatus.INACTIVE &&
        status !== SubscriptionStatus.EXPIRED &&
        status !== SubscriptionStatus.UNPAID;
}
//# sourceMappingURL=SubscriptionStatus.js.map