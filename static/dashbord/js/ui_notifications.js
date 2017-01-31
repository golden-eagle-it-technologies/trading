/*! light-blue - v3.3.0 - 2016-03-08 */
(function() {
    var a, b, c, d = {}.hasOwnProperty,
        e = function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var e in b) d.call(b, e) && (a[e] = b[e]);
            return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
        };
    a = jQuery, c = '<div class="messenger-spinner">\n    <span class="messenger-spinner-side messenger-spinner-side-left">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n    <span class="messenger-spinner-side messenger-spinner-side-right">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n</div>', b = function(b) {
        function d() {
            return d.__super__.constructor.apply(this, arguments)
        }
        return e(d, b), d.prototype.template = function(b) {
            var e;
            return e = d.__super__.template.apply(this, arguments), e.append(a(c)), e
        }, d
    }(window.Messenger.Message), window.Messenger.themes.air = {
        Message: b
    }
}).call(this), $(function() {
    function a() {
        $(".widget").widgster();
        var a = "air";
        $.globalMessenger({
            theme: a
        }), Messenger.options = {
            theme: a
        }, Messenger().post("Thanks for checking out Messenger!");
        var b = ["bottom", "right"],
            c = $(".location-selector"),
            d = function() {
                for (var c = "messenger-fixed", d = 0; d < b.length; d++) c += " messenger-on-" + b[d];
                $.globalMessenger({
                    extraClasses: c,
                    theme: a
                }), Messenger.options = {
                    extraClasses: c,
                    theme: a
                }
            };
        d(), c.locationSelector().on("update", function(a) {
            b = a, d()
        }), $("#show-error-message").on("click", function() {
            var a;
            return a = 0, Messenger().run({
                errorMessage: "Error destroying alien planet",
                successMessage: "Alien planet destroyed!",
                action: function(b) {
                    return ++a < 3 ? b.error({
                        status: 500,
                        readyState: 0,
                        responseText: 0
                    }) : b.success()
                }
            }), !1
        }), $("#show-info-message").on("click", function() {
            var a = Messenger().post({
                message: "Launching thermonuclear war...",
                actions: {
                    cancel: {
                        label: "cancel launch",
                        action: function() {
                            return a.update({
                                message: "Thermonuclear war averted",
                                type: "success",
                                actions: !1
                            })
                        }
                    }
                }
            });
            return !1
        }), $("#show-success-message").on("click", function() {
            return Messenger().post({
                message: "Showing success message was successful!",
                type: "success",
                showCloseButton: !0
            }), !1
        })
    }
    a(), PjaxApp.onPageLoad(a)
});