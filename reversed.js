const protobufjs = require('protobufjs');

function aH(e) {
    if (e)
        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
}

function kH(e) {
    if (this.matrix = [], this.originx = [], this.originy = [], this.scale = [], e)
        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
}

function vH(e) {
    if (this.box = [], e)
        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
}

function GH(e) {
    if (this.coord = [], e)
        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
}

function RH(e) {
    if (e)
        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
}

function _H(e) {
    if (e)
        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
}

function jI(e) {
    if (e)
        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
}

function uI(e) {
    if (this.layer = [], this.font = [], this.image = [], e)
        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
}

var oneOfGetter = function(e) {
    for (var n = {}, t = 0; t < e.length; ++t) n[e[t]] = 1;
    return function() {
        for (var e = Object.keys(this), t = e.length - 1; - 1 < t; --t)
            if (1 === n[e[t]] && void 0 !== this[e[t]] && null !== this[e[t]]) return e[t]
    }
}

var oneOfSetter = function(n) {
    return function(e) {
        for (var t = 0; t < n.length; ++t) n[t] !== e && delete this[n[t]]
    }
}

$root = {};
$Reader = protobufjs.Reader;

$root.layers = (ZG = {}, ZG.BlendType = ($G = {}, (_G = Object.create($G))[$G[0] = "Normal"] = 0, _G[$G[1] = "Multiply"] = 1, _G[$G[2] = "Screen"] = 2, _G[$G[3] = "Overlay"] = 3, _G[$G[4] = "Darken"] = 4, _G[$G[5] = "Lighten"] = 5, _G[$G[6] = "Colordodge"] = 6, _G[$G[7] = "Colorburn"] = 7, _G[$G[8] = "Hardlight"] = 8, _G[$G[9] = "Softlight"] = 9, _G[$G[10] = "Difference"] = 10, _G[$G[11] = "Exclusion"] = 11, _G[$G[12] = "Hue"] = 12, _G[$G[13] = "Saturation"] = 13, _G[$G[14] = "Color"] = 14, _G[$G[15] = "Luminosity"] = 15, _G), ZG.ImageLayer = (aH.prototype.image = 0, aH.prototype.width = 0, aH.prototype.height = 0, aH.decode = function(e, t) {
    e instanceof $Reader || (e = $Reader.create(e));
    for (var n = void 0 === t ? e.len : e.pos + t, r = new $root.layers.ImageLayer; e.pos < n;) {
        var o = e.uint32();
        switch (o >>> 3) {
            case 1:
                r.image = e.uint32();
                break;
            case 2:
                r.width = e.uint32();
                break;
            case 3:
                r.height = e.uint32();
                break;
            default:
                e.skipType(7 & o)
        }
    }
    return r
}, aH), ZG.TextLayer = (kH.prototype.text = "", kH.prototype.font = 0, kH.prototype.size = 0, kH.prototype.color = 0, kH.prototype.matrix = [], kH.prototype.originx = [], kH.prototype.originy = [], kH.prototype.scale = [], kH.decode = function(e, t) {
    e instanceof $Reader || (e = $Reader.create(e));
    for (var n = void 0 === t ? e.len : e.pos + t, r = new $root.layers.TextLayer; e.pos < n;) {
        var o = e.uint32();
        switch (o >>> 3) {
            case 1:
                r.text = e.string();
                break;
            case 2:
                r.font = e.uint32();
                break;
            case 3:
                r.size = e.float();
                break;
            case 4:
                r.color = e.uint32();
                break;
            case 5:
                if (r.matrix && r.matrix.length || (r.matrix = []), 2 == (7 & o))
                    for (var i = e.uint32() + e.pos; e.pos < i;) r.matrix.push(e.float());
                else r.matrix.push(e.float());
                break;
            case 6:
                if (r.originx && r.originx.length || (r.originx = []), 2 == (7 & o))
                    for (i = e.uint32() + e.pos; e.pos < i;) r.originx.push(e.float());
                else r.originx.push(e.float());
                break;
            case 7:
                if (r.originy && r.originy.length || (r.originy = []), 2 == (7 & o))
                    for (i = e.uint32() + e.pos; e.pos < i;) r.originy.push(e.float());
                else r.originy.push(e.float());
                break;
            case 8:
                if (r.scale && r.scale.length || (r.scale = []), 2 == (7 & o))
                    for (i = e.uint32() + e.pos; e.pos < i;) r.scale.push(e.float());
                else r.scale.push(e.float());
                break;
            default:
                e.skipType(7 & o)
        }
    }
    return r
}, kH), ZG.RectLayer = (vH.prototype.color = 0, vH.prototype.blend = 0, vH.prototype.box = [], vH.decode = function(e, t) {
    e instanceof $Reader || (e = $Reader.create(e));
    for (var n = void 0 === t ? e.len : e.pos + t, r = new $root.layers.RectLayer; e.pos < n;) {
        var o = e.uint32();
        switch (o >>> 3) {
            case 1:
                r.color = e.uint32();
                break;
            case 2:
                r.blend = e.int32();
                break;
            case 3:
                if (r.box && r.box.length || (r.box = []), 2 == (7 & o))
                    for (var i = e.uint32() + e.pos; e.pos < i;) r.box.push(e.float());
                else r.box.push(e.float());
                break;
            default:
                e.skipType(7 & o)
        }
    }
    return r
}, vH), ZG.LineLayer = (GH.prototype.color = 0, GH.prototype.blend = 0, GH.prototype.coord = [], GH.decode = function(e, t) {
    e instanceof $Reader || (e = $Reader.create(e));
    for (var n = void 0 === t ? e.len : e.pos + t, r = new $root.layers.LineLayer; e.pos < n;) {
        var o = e.uint32();
        switch (o >>> 3) {
            case 1:
                r.color = e.uint32();
                break;
            case 2:
                r.blend = e.int32();
                break;
            case 3:
                if (r.coord && r.coord.length || (r.coord = []), 2 == (7 & o))
                    for (var i = e.uint32() + e.pos; e.pos < i;) r.coord.push(e.float());
                else r.coord.push(e.float());
                break;
            default:
                e.skipType(7 & o)
        }
    }
    return r
}, GH), ZG.Font = (RH.prototype.resource = new Uint8Array([]), RH.prototype.weight = 0, RH.decode = function(e, t) {
    e instanceof $Reader || (e = $Reader.create(e));
    for (var n = void 0 === t ? e.len : e.pos + t, r = new $root.layers.Font; e.pos < n;) {
        var o = e.uint32();
        switch (o >>> 3) {
            case 1:
                r.resource = e.bytes();
                break;
            case 2:
                r.weight = e.uint32();
                break;
            default:
                e.skipType(7 & o)
        }
    }
    return r
}, RH), ZG.Image = (_H.prototype.resource = new Uint8Array([]), _H.prototype.width = 0, _H.prototype.height = 0, _H.decode = function(e, t) {
    e instanceof $Reader || (e = $Reader.create(e));
    for (var n = void 0 === t ? e.len : e.pos + t, r = new $root.layers.Image; e.pos < n;) {
        var o = e.uint32();
        switch (o >>> 3) {
            case 1:
                r.resource = e.bytes();
                break;
            case 2:
                r.width = e.uint32();
                break;
            case 3:
                r.height = e.uint32();
                break;
            default:
                e.skipType(7 & o)
        }
    }
    return r
}, _H), ZG.Layer = (jI.prototype.image = null, jI.prototype.text = null, jI.prototype.rect = null, jI.prototype.line = null, Object.defineProperty(jI.prototype, "kind", {
    get: oneOfGetter(kI = ["image", "text", "rect", "line"]),
    set: oneOfSetter(kI)
}), jI.decode = function(e, t) {
    e instanceof $Reader || (e = $Reader.create(e));
    for (var n = void 0 === t ? e.len : e.pos + t, r = new $root.layers.Layer; e.pos < n;) {
        var o = e.uint32();
        switch (o >>> 3) {
            case 1:
                r.image = $root.layers.ImageLayer.decode(e, e.uint32());
                break;
            case 2:
                r.text = $root.layers.TextLayer.decode(e, e.uint32());
                break;
            case 3:
                r.rect = $root.layers.RectLayer.decode(e, e.uint32());
                break;
            case 4:
                r.line = $root.layers.LineLayer.decode(e, e.uint32());
                break;
            default:
                e.skipType(7 & o)
        }
    }
    return r
}, jI), ZG.Page = (uI.prototype.page = 0, uI.prototype.version = 0, uI.prototype.build = "", uI.prototype.width = 0, uI.prototype.height = 0, uI.prototype.usable = !1, uI.prototype.rmse = 0, uI.prototype.fallback = "", uI.prototype.layer = [], uI.prototype.font = [], uI.prototype.image = [], uI.decode = function(e, t) {
    e instanceof $Reader || (e = $Reader.create(e));
    for (var n = void 0 === t ? e.len : e.pos + t, r = new $root.layers.Page; e.pos < n;) {
        var o = e.uint32();
        switch (o >>> 3) {
            case 1:
                r.page = e.uint32();
                break;
            case 2:
                r.version = e.uint32();
                break;
            case 3:
                r.build = e.string();
                break;
            case 4:
                r.width = e.uint32();
                break;
            case 5:
                r.height = e.uint32();
                break;
            case 6:
                r.usable = e.bool();
                break;
            case 7:
                r.rmse = e.float();
                break;
            case 8:
                r.fallback = e.string();
                break;
            case 9:
                r.layer && r.layer.length || (r.layer = []), r.layer.push($root.layers.Layer.decode(e, e.uint32()));
                break;
            case 10:
                r.font && r.font.length || (r.font = []), r.font.push($root.layers.Font.decode(e, e.uint32()));
                break;
            case 11:
                r.image && r.image.length || (r.image = []), r.image.push($root.layers.Image.decode(e, e.uint32()));
                break;
            default:
                e.skipType(7 & o)
        }
    }
    return r
}, uI), ZG);

module.exports = $root.layers;
