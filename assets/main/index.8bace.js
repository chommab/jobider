System.register("chunks:///_virtual/Audio.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Sound.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, AudioSource, Component, Sound;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      AudioSource = module.AudioSource;
      Component = module.Component;
    }, function (module) {
      Sound = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class3;

      cclegacy._RF.push({}, "5503cSSg8VDxYnXtIEWdrVy", "Audio", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Audio = exports('Audio', (_dec = ccclass('Audio'), _dec2 = property(Sound), _dec3 = property(Sound), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(AudioSource), _dec11 = property(AudioSource), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Audio, _Component);

        function Audio() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "Music", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Sound", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "MusicSprite", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "SoundSprite", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "MusicOn", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "MusicOff", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "SoundOn", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "SoundOff", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "MusicSource", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "SoundSource", _descriptor10, _assertThisInitialized(_this));

          _this.One = true;
          _this.Two = true;
          return _this;
        }

        var _proto = Audio.prototype;

        _proto.start = function start() {
          this.MusicPlay("Background");
          Audio.instance = this;
        };

        _proto.MusicPlay = function MusicPlay(Name) {
          var MSC = this.Music.find(function (a) {
            return a.Name == Name;
          });

          if (MSC == null) {
            console.log("Music not found please check...!");
          } else {
            this.MusicSource.clip = MSC.AudioClip;
            this.MusicSource.play();
          }
        };

        _proto.MusicPause = function MusicPause(Name) {
          var MSC = this.Music.find(function (a) {
            return a.Name == Name;
          });

          if (MSC == null) {
            console.log("Music not found please check...!");
          } else {
            this.MusicSource.clip = MSC.AudioClip;
            this.MusicSource.stop();
          }
        };

        _proto.SoundPlay = function SoundPlay(Name) {
          var SD = this.Sound.find(function (a) {
            return a.Name == Name;
          });

          if (SD == null) {
            console.log("Sound not found please check...!");
          } else {
            this.SoundSource.clip = SD.AudioClip;
            this.SoundSource.play();
          }
        };

        _proto.SoundPause = function SoundPause(Name) {
          var SD = this.Sound.find(function (a) {
            return a.Name == Name;
          });

          if (SD == null) {
            console.log("Sound not found please check...!");
          } else {
            this.SoundSource.clip = SD.AudioClip;
            this.SoundSource.stop();
          }
        };

        _proto.MusicButton = function MusicButton() {
          this.SoundPlay("Tap");
          this.One = !this.One;

          if (!this.One) {
            this.MusicSource.volume = 0;
            this.MusicSprite.spriteFrame = this.MusicOff;
          } else if (this.One) {
            this.MusicSource.volume = 1;
            this.MusicSprite.spriteFrame = this.MusicOn;
          }
        };

        _proto.SoundButton = function SoundButton() {
          this.SoundPlay("Tap");
          this.Two = !this.Two;

          if (!this.Two) {
            this.SoundSource.volume = 0;
            this.SoundSprite.spriteFrame = this.SoundOff;
          } else if (this.Two) {
            this.SoundSource.volume = 1;
            this.SoundSprite.spriteFrame = this.SoundOn;
          }
        };

        return Audio;
      }(Component), _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Music", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Sound", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "MusicSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "SoundSprite", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "MusicOn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "MusicOff", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "SoundOn", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "SoundOff", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "MusicSource", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "SoundSource", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Canvas, UITransform, instantiate, Label, Color, RichText, Toggle, Button, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      Color = module.Color;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);

        function DebugViewRuntimeControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));

          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct TRT', 'Env TRT', 'TRT All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'TRT', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }

        var _proto = DebugViewRuntimeControl.prototype;

        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);

          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }

          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
              y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
              height = 20; // new nodes

          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles'; // title

          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;

            var _labelComponent = newLabel.getComponent(Label);

            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }

          y -= height; // single

          var currentRow = 0;

          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }

            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }

          x += width; // buttons

          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent; // misc

          y -= 40;

          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);

            _newNode.setPosition(x, y - height * _i2, 0.0);

            _newNode.setScale(0.5, 0.5, 0.5);

            _newNode.parent = miscNode;

            var _textComponent = _newNode.getComponentInChildren(RichText);

            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;

            var toggleComponent = _newNode.getComponent(Toggle);

            toggleComponent.isChecked = _i2 ? true : false;

            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);

            this.miscModeToggleList[_i2] = _newNode;
          } // composite


          y -= 150;

          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;

            _newNode2.setPosition(x, y - height * _i3, 0.0);

            _newNode2.setScale(0.5, 0.5, 0.5);

            _newNode2.parent = this.compositeModeToggle.parent;

            var _textComponent2 = _newNode2.getComponentInChildren(RichText);

            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;

            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);

            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };

        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');

          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };

        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };

        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };

        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };

        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };

        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);

          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);

            _toggleComponent.isChecked = true;
          }

          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };

        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };

        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;

          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }

          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }

          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };

        _proto.onLoad = function onLoad() {};

        _proto.update = function update(deltaTime) {};

        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Game.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Audio.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Button, Sprite, SpriteFrame, Animation, AnimationComponent, Node, game, Component, Audio;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Button = module.Button;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Animation = module.Animation;
      AnimationComponent = module.AnimationComponent;
      Node = module.Node;
      game = module.game;
      Component = module.Component;
    }, function (module) {
      Audio = module.Audio;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46;

      cclegacy._RF.push({}, "7ab84fDMENPgYwm1cFooRNE", "Game", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Game = exports('Game', (_dec = ccclass('Game'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Button), _dec19 = property(Button), _dec20 = property(Button), _dec21 = property(Button), _dec22 = property(Button), _dec23 = property(Button), _dec24 = property(Button), _dec25 = property(Button), _dec26 = property(Button), _dec27 = property(Button), _dec28 = property(Button), _dec29 = property(Button), _dec30 = property(Button), _dec31 = property(Button), _dec32 = property(Button), _dec33 = property(Button), _dec34 = property(Label), _dec35 = property(Label), _dec36 = property(Label), _dec37 = property(Sprite), _dec38 = property(Sprite), _dec39 = property(Sprite), _dec40 = property(SpriteFrame), _dec41 = property(Animation), _dec42 = property(AnimationComponent), _dec43 = property(AnimationComponent), _dec44 = property(Node), _dec45 = property(Animation), _dec46 = property(Animation), _dec47 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Game, _Component);

        function Game() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "TaiLabel", _descriptor, _assertThisInitialized(_this));

          _this.BetTaiNum = 0;

          _initializerDefineProperty(_this, "XiuLabel", _descriptor2, _assertThisInitialized(_this));

          _this.BetXiuNum = 0;

          _initializerDefineProperty(_this, "Bet4Label", _descriptor3, _assertThisInitialized(_this));

          _this.Bet4Num = 0;

          _initializerDefineProperty(_this, "Bet5Label", _descriptor4, _assertThisInitialized(_this));

          _this.Bet5Num = 0;

          _initializerDefineProperty(_this, "Bet6Label", _descriptor5, _assertThisInitialized(_this));

          _this.Bet6Num = 0;

          _initializerDefineProperty(_this, "Bet7Label", _descriptor6, _assertThisInitialized(_this));

          _this.Bet7Num = 0;

          _initializerDefineProperty(_this, "Bet8Label", _descriptor7, _assertThisInitialized(_this));

          _this.Bet8Num = 0;

          _initializerDefineProperty(_this, "Bet9Label", _descriptor8, _assertThisInitialized(_this));

          _this.Bet9Num = 0;

          _initializerDefineProperty(_this, "Bet10Label", _descriptor9, _assertThisInitialized(_this));

          _this.Bet10Num = 0;

          _initializerDefineProperty(_this, "Bet11Label", _descriptor10, _assertThisInitialized(_this));

          _this.Bet11Num = 0;

          _initializerDefineProperty(_this, "Bet12Label", _descriptor11, _assertThisInitialized(_this));

          _this.Bet12Num = 0;

          _initializerDefineProperty(_this, "Bet13Label", _descriptor12, _assertThisInitialized(_this));

          _this.Bet13Num = 0;

          _initializerDefineProperty(_this, "Bet14Label", _descriptor13, _assertThisInitialized(_this));

          _this.Bet14Num = 0;

          _initializerDefineProperty(_this, "Bet15Label", _descriptor14, _assertThisInitialized(_this));

          _this.Bet15Num = 0;

          _initializerDefineProperty(_this, "Bet16Label", _descriptor15, _assertThisInitialized(_this));

          _this.Bet16Num = 0;

          _initializerDefineProperty(_this, "Bet17Label", _descriptor16, _assertThisInitialized(_this));

          _this.Bet17Num = 0;

          _initializerDefineProperty(_this, "TaiButton", _descriptor17, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "XiuButton", _descriptor18, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Bet4Button", _descriptor19, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Bet5Button", _descriptor20, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Bet6Button", _descriptor21, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Bet7Button", _descriptor22, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Bet8Button", _descriptor23, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Bet9Button", _descriptor24, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Bet10Button", _descriptor25, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Bet11Button", _descriptor26, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Bet12Button", _descriptor27, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Bet13Button", _descriptor28, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Bet14Button", _descriptor29, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Bet15Button", _descriptor30, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Bet16Button", _descriptor31, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Bet17Button", _descriptor32, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "TotalWinLabel", _descriptor33, _assertThisInitialized(_this));

          _this.TotalWinNum = 0;

          _initializerDefineProperty(_this, "CreditLabel", _descriptor34, _assertThisInitialized(_this));

          _this.CreditNum = 10000;

          _initializerDefineProperty(_this, "ChangeBetLabel", _descriptor35, _assertThisInitialized(_this));

          _this.ChangeNum = 100;

          _initializerDefineProperty(_this, "DiceSprite1", _descriptor36, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "DiceSprite2", _descriptor37, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "DiceSprite3", _descriptor38, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "DiceSpriteAllFrame", _descriptor39, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "LidAnimation", _descriptor40, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Win", _descriptor41, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "WinFrame", _descriptor42, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "FrameWin", _descriptor43, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "SettingSound", _descriptor44, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "boxanimation", _descriptor45, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "shakebuttom", _descriptor46, _assertThisInitialized(_this));

          _this.OnclickSetting = true;
          return _this;
        }

        var _proto = Game.prototype; // Start

        _proto.start = function start() {
          Audio.instance.MusicPlay('Background');
          this.TaiLabel.string = this.BetTaiNum.toString() + '$';
          this.XiuLabel.string = this.BetXiuNum.toString() + '$';
          this.Bet4Label.string = this.Bet4Num.toString() + '$';
          this.Bet5Label.string = this.Bet5Num.toString() + '$';
          this.Bet6Label.string = this.Bet6Num.toString() + '$';
          this.Bet7Label.string = this.Bet7Num.toString() + '$';
          this.Bet8Label.string = this.Bet8Num.toString() + '$';
          this.Bet9Label.string = this.Bet9Num.toString() + '$';
          this.Bet10Label.string = this.Bet10Num.toString() + '$';
          this.Bet11Label.string = this.Bet11Num.toString() + '$';
          this.Bet12Label.string = this.Bet12Num.toString() + '$';
          this.Bet13Label.string = this.Bet13Num.toString() + '$';
          this.Bet14Label.string = this.Bet14Num.toString() + '$';
          this.Bet15Label.string = this.Bet15Num.toString() + '$';
          this.Bet16Label.string = this.Bet16Num.toString() + '$';
          this.Bet17Label.string = this.Bet17Num.toString() + '$';
          this.CreditLabel.string = this.CreditNum.toString() + '$';
          this.ChangeBetLabel.string = this.ChangeNum.toString() + '$';
        };

        _proto.update = function update(deltaTime) {} // Play
        ;

        _proto.PlayButton = function PlayButton() {
          var _this2 = this;

          this.shakebuttom.interactable = false;
          Audio.instance.SoundPlay('ClickButton');
          Audio.instance.SoundPlay('Shake');
          this.LidAnimation.play('Lid');
          this.TaiButton.interactable = false;
          this.XiuButton.interactable = false;
          this.Bet4Button.interactable = false;
          this.Bet5Button.interactable = false;
          this.Bet6Button.interactable = false;
          this.Bet7Button.interactable = false;
          this.Bet8Button.interactable = false;
          this.Bet9Button.interactable = false;
          this.Bet10Button.interactable = false;
          this.Bet11Button.interactable = false;
          this.Bet12Button.interactable = false;
          this.Bet13Button.interactable = false;
          this.Bet14Button.interactable = false;
          this.Bet15Button.interactable = false;
          this.Bet16Button.interactable = false;
          this.Bet17Button.interactable = false;
          setTimeout(function () {
            _this2.LidAnimation.play('OpenLid');

            _this2.RandomCalculate();

            setTimeout(function () {
              _this2.Remove(); // FrameWin active


              _this2.FrameWin[0].active = false;
              _this2.FrameWin[1].active = false;
              _this2.FrameWin[2].active = false;
              _this2.FrameWin[3].active = false;
              _this2.FrameWin[4].active = false;
              _this2.FrameWin[5].active = false;
              _this2.FrameWin[6].active = false;
              _this2.FrameWin[7].active = false;
              _this2.FrameWin[8].active = false;
              _this2.FrameWin[9].active = false;
              _this2.FrameWin[10].active = false;
              _this2.FrameWin[11].active = false;
              _this2.FrameWin[12].active = false;
              _this2.FrameWin[13].active = false; // interactable button

              _this2.shakebuttom.interactable = true;
              _this2.TaiButton.interactable = true;
              _this2.XiuButton.interactable = true;
              _this2.Bet4Button.interactable = true;
              _this2.Bet5Button.interactable = true;
              _this2.Bet6Button.interactable = true;
              _this2.Bet7Button.interactable = true;
              _this2.Bet8Button.interactable = true;
              _this2.Bet9Button.interactable = true;
              _this2.Bet10Button.interactable = true;
              _this2.Bet11Button.interactable = true;
              _this2.Bet12Button.interactable = true;
              _this2.Bet13Button.interactable = true;
              _this2.Bet14Button.interactable = true;
              _this2.Bet15Button.interactable = true;
              _this2.Bet16Button.interactable = true;
              _this2.Bet17Button.interactable = true;
            }, 4000);
          }, 3000);
        } // RandomCalculate
        ;

        _proto.RandomCalculate = function RandomCalculate() {
          var One = Math.floor(Math.random() * 6) + 1;
          var Two = Math.floor(Math.random() * 6) + 1;
          var Three = Math.floor(Math.random() * 6) + 1; // Sum

          var Sum = One + Two + Three;
          console.log(Sum);

          if (this.DiceSpriteAllFrame.length > 0) {
            this.DiceSprite1.spriteFrame = this.DiceSpriteAllFrame[One - 1];
          }

          if (this.DiceSpriteAllFrame.length > 0) {
            this.DiceSprite2.spriteFrame = this.DiceSpriteAllFrame[Two - 1];
          }

          if (this.DiceSpriteAllFrame.length > 0) {
            this.DiceSprite3.spriteFrame = this.DiceSpriteAllFrame[Three - 1];
          } // Calculate
          // Sum 5


          if (Sum == 5) {
            Audio.instance.SoundPlay('Win');
            this.Win[3].play();
            this.WinFrame[1].play();
            this.FrameWin[1].active = true;
            this.TotalWinNum += this.Bet5Num;
            this.CreditNum += this.TotalWinNum * 17;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.TotalWinLabel.string = this.TotalWinNum.toString() + '$';
            console.log("5");
          } // Sum 6


          if (Sum == 6) {
            Audio.instance.SoundPlay('Win');
            this.Win[4].play();
            this.WinFrame[2].play();
            this.FrameWin[2].active = true;
            this.TotalWinNum += this.Bet6Num;
            this.CreditNum += this.TotalWinNum * 13;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.TotalWinLabel.string = this.TotalWinNum.toString() + '$';
            console.log("6");
          } // Sum 7


          if (Sum == 7) {
            Audio.instance.SoundPlay('Win');
            this.Win[5].play();
            this.WinFrame[3].play();
            this.FrameWin[3].active = true;
            this.TotalWinNum += this.Bet7Num;
            this.CreditNum += this.TotalWinNum * 11;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.TotalWinLabel.string = this.TotalWinNum.toString() + '$';
            console.log("7");
          } // Sum 8


          if (Sum == 8) {
            Audio.instance.SoundPlay('Win');
            this.Win[6].play();
            this.WinFrame[4].play();
            this.FrameWin[4].active = true;
            this.TotalWinNum += this.Bet8Num;
            this.CreditNum += this.TotalWinNum * 7;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.TotalWinLabel.string = this.TotalWinNum.toString() + '$';
            console.log("8");
          } // Sum 9


          if (Sum == 9) {
            Audio.instance.SoundPlay('Win');
            this.Win[7].play();
            this.WinFrame[5].play();
            this.FrameWin[5].active = true;
            this.TotalWinNum += this.Bet9Num;
            this.CreditNum += this.TotalWinNum * 5;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.TotalWinLabel.string = this.TotalWinNum.toString() + '$';
            console.log("9");
          } // Sum 10


          if (Sum == 10) {
            Audio.instance.SoundPlay('Win');
            this.Win[8].play();
            this.WinFrame[6].play();
            this.FrameWin[6].active = true;
            this.TotalWinNum += this.Bet10Num;
            this.CreditNum += this.TotalWinNum * 5;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.TotalWinLabel.string = this.TotalWinNum.toString() + '$';
            console.log("10");
          } // Sum 11


          if (Sum == 11) {
            Audio.instance.SoundPlay('Win');
            this.Win[9].play();
            this.WinFrame[7].play();
            this.FrameWin[7].active = true;
            this.TotalWinNum += this.Bet11Num;
            this.CreditNum += this.TotalWinNum * 5;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.TotalWinLabel.string = this.TotalWinNum.toString() + '$';
            console.log("11");
          } // Sum 12


          if (Sum == 12) {
            Audio.instance.SoundPlay('Win');
            this.Win[10].play();
            this.WinFrame[8].play();
            this.FrameWin[8].active = true;
            this.TotalWinNum += this.Bet12Num;
            this.CreditNum += this.TotalWinNum * 5;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.TotalWinLabel.string = this.TotalWinNum.toString() + '$';
            console.log("12");
          } // Sum 13


          if (Sum == 13) {
            Audio.instance.SoundPlay('Win');
            this.Win[11].play();
            this.WinFrame[9].play();
            this.FrameWin[9].active = true;
            this.TotalWinNum += this.Bet13Num;
            this.CreditNum += this.TotalWinNum * 7;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.TotalWinLabel.string = this.TotalWinNum.toString() + '$';
            console.log("13");
          } // Sum 14


          if (Sum == 14) {
            Audio.instance.SoundPlay('Win');
            this.Win[12].play();
            this.WinFrame[10].play();
            this.FrameWin[10].active = true;
            this.TotalWinNum += this.Bet14Num;
            this.CreditNum += this.TotalWinNum * 11;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.TotalWinLabel.string = this.TotalWinNum.toString() + '$';
            console.log("14");
          } // Sum 15


          if (Sum == 15) {
            Audio.instance.SoundPlay('Win');
            this.Win[13].play();
            this.WinFrame[11].play();
            this.FrameWin[11].active = true;
            this.TotalWinNum += this.Bet15Num;
            this.CreditNum += this.TotalWinNum * 13;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.TotalWinLabel.string = this.TotalWinNum.toString() + '$';
            console.log("15");
          } // Sum 16


          if (Sum == 16) {
            Audio.instance.SoundPlay('Win');
            this.Win[14].play();
            this.WinFrame[12].play();
            this.FrameWin[12].active = true;
            this.TotalWinNum += this.Bet16Num;
            this.CreditNum += this.TotalWinNum * 17;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.TotalWinLabel.string = this.TotalWinNum.toString() + '$';
            console.log("16");
          } // Sum 4


          if (One == 3 && Two == 3 && Three == 3) {
            Audio.instance.SoundPlay('Win');
            this.Win[2].play();
            this.WinFrame[0].play();
            this.FrameWin[0].active = true;
            this.TotalWinNum += this.Bet4Num;
            this.CreditNum += this.TotalWinNum * 48;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.TotalWinLabel.string = this.TotalWinNum.toString() + '$';
            console.log("4");
          } // Sum 17


          if (One == 5 && Two == 5 && Three == 5) {
            Audio.instance.SoundPlay('Win');
            this.Win[15].play();
            this.WinFrame[13].play();
            this.FrameWin[13].active = true;
            this.TotalWinNum += this.Bet17Num;
            this.CreditNum += this.TotalWinNum * 48;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.TotalWinLabel.string = this.TotalWinNum.toString() + '$';
            console.log("17");
          } // Sum Tai


          if (Sum >= 10) {
            Audio.instance.SoundPlay('Win');
            this.Win[0].play();
            this.TotalWinNum += this.BetTaiNum;
            this.CreditNum += this.TotalWinNum * 2;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.TotalWinLabel.string = this.TotalWinNum.toString() + '$';
            console.log("Tai");
          } // Sum Xiu
          else {
              Audio.instance.SoundPlay('Win');
              this.Win[1].play();
              this.TotalWinNum += this.BetXiuNum;
              this.CreditNum += this.TotalWinNum * 2;
              this.CreditLabel.string = this.CreditNum.toString() + '$';
              this.TotalWinLabel.string = this.TotalWinNum.toString() + '$';
              console.log("Xiu");
            }
        } // Decress -
        ;

        _proto.Decress = function Decress() {
          if (this.ChangeNum > 100) {
            Audio.instance.SoundPlay('ClickButton');
            this.ChangeNum -= 100;
            this.ChangeBetLabel.string = this.ChangeNum.toString() + '$';
          }
        } // Incress +
        ;

        _proto.Incress = function Incress() {
          Audio.instance.SoundPlay('ClickButton');
          this.ChangeNum += 100;
          this.ChangeBetLabel.string = this.ChangeNum.toString() + '$';
        } // TaiBet
        ;

        _proto.TaiBet = function TaiBet() {
          if (this.CreditNum > 0) {
            Audio.instance.SoundPlay('ClickBet');
            this.BetTaiNum += this.ChangeNum;
            this.CreditNum -= this.ChangeNum;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.ChangeBetLabel.string = this.ChangeNum.toString() + '$';
            this.TaiLabel.string = this.BetTaiNum.toString() + '$';
          }
        } // XiuBet
        ;

        _proto.XiuBet = function XiuBet() {
          if (this.CreditNum > 0) {
            Audio.instance.SoundPlay('ClickBet');
            this.BetXiuNum += this.ChangeNum;
            this.CreditNum -= this.ChangeNum;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.ChangeBetLabel.string = this.ChangeNum.toString() + '$';
            this.XiuLabel.string = this.BetXiuNum.toString() + '$';
          }
        } // Num4Bet
        ;

        _proto.Num4Bet = function Num4Bet() {
          if (this.CreditNum > 0) {
            Audio.instance.SoundPlay('ClickBet');
            this.Bet4Num += this.ChangeNum;
            this.CreditNum -= this.ChangeNum;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.ChangeBetLabel.string = this.ChangeNum.toString() + '$';
            this.Bet4Label.string = this.Bet4Num.toString() + '$';
          }
        } // Num5Bet
        ;

        _proto.Num5Bet = function Num5Bet() {
          if (this.CreditNum > 0) {
            Audio.instance.SoundPlay('ClickBet');
            this.Bet5Num += this.ChangeNum;
            this.CreditNum -= this.ChangeNum;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.ChangeBetLabel.string = this.ChangeNum.toString() + '$';
            this.Bet5Label.string = this.Bet5Num.toString() + '$';
          }
        } // Num6Bet
        ;

        _proto.Num6Bet = function Num6Bet() {
          if (this.CreditNum > 0) {
            Audio.instance.SoundPlay('ClickBet');
            this.Bet6Num += this.ChangeNum;
            this.CreditNum -= this.ChangeNum;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.ChangeBetLabel.string = this.ChangeNum.toString() + '$';
            this.Bet6Label.string = this.Bet6Num.toString() + '$';
          }
        } // Num7Bet
        ;

        _proto.Num7Bet = function Num7Bet() {
          if (this.CreditNum > 0) {
            Audio.instance.SoundPlay('ClickBet');
            this.Bet7Num += this.ChangeNum;
            this.CreditNum -= this.ChangeNum;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.ChangeBetLabel.string = this.ChangeNum.toString() + '$';
            this.Bet7Label.string = this.Bet7Num.toString() + '$';
          }
        } // Num8Bet
        ;

        _proto.Num8Bet = function Num8Bet() {
          if (this.CreditNum > 0) {
            Audio.instance.SoundPlay('ClickBet');
            this.Bet8Num += this.ChangeNum;
            this.CreditNum -= this.ChangeNum;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.ChangeBetLabel.string = this.ChangeNum.toString() + '$';
            this.Bet8Label.string = this.Bet8Num.toString() + '$';
          }
        } // Num9Bet
        ;

        _proto.Num9Bet = function Num9Bet() {
          if (this.CreditNum > 0) {
            Audio.instance.SoundPlay('ClickBet');
            this.Bet9Num += this.ChangeNum;
            this.CreditNum -= this.ChangeNum;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.ChangeBetLabel.string = this.ChangeNum.toString() + '$';
            this.Bet9Label.string = this.Bet9Num.toString() + '$';
          }
        } // Num10Bet
        ;

        _proto.Num10Bet = function Num10Bet() {
          if (this.CreditNum > 0) {
            Audio.instance.SoundPlay('ClickBet');
            this.Bet10Num += this.ChangeNum;
            this.CreditNum -= this.ChangeNum;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.ChangeBetLabel.string = this.ChangeNum.toString() + '$';
            this.Bet10Label.string = this.Bet10Num.toString() + '$';
          }
        } // Num11Bet
        ;

        _proto.Num11Bet = function Num11Bet() {
          if (this.CreditNum > 0) {
            Audio.instance.SoundPlay('ClickBet');
            this.Bet11Num += this.ChangeNum;
            this.CreditNum -= this.ChangeNum;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.ChangeBetLabel.string = this.ChangeNum.toString() + '$';
            this.Bet11Label.string = this.Bet11Num.toString() + '$';
          }
        } // Num12Bet
        ;

        _proto.Num12Bet = function Num12Bet() {
          if (this.CreditNum > 0) {
            Audio.instance.SoundPlay('ClickBet');
            this.Bet12Num += this.ChangeNum;
            this.CreditNum -= this.ChangeNum;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.ChangeBetLabel.string = this.ChangeNum.toString() + '$';
            this.Bet12Label.string = this.Bet12Num.toString() + '$';
          }
        } // Num13Bet
        ;

        _proto.Num13Bet = function Num13Bet() {
          if (this.CreditNum > 0) {
            Audio.instance.SoundPlay('ClickBet');
            this.Bet13Num += this.ChangeNum;
            this.CreditNum -= this.ChangeNum;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.ChangeBetLabel.string = this.ChangeNum.toString() + '$';
            this.Bet13Label.string = this.Bet13Num.toString() + '$';
          }
        } // Num14Bet
        ;

        _proto.Num14Bet = function Num14Bet() {
          if (this.CreditNum > 0) {
            Audio.instance.SoundPlay('ClickBet');
            this.Bet14Num += this.ChangeNum;
            this.CreditNum -= this.ChangeNum;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.ChangeBetLabel.string = this.ChangeNum.toString() + '$';
            this.Bet14Label.string = this.Bet14Num.toString() + '$';
          }
        } // Num15Bet
        ;

        _proto.Num15Bet = function Num15Bet() {
          if (this.CreditNum > 0) {
            Audio.instance.SoundPlay('ClickBet');
            this.Bet15Num += this.ChangeNum;
            this.CreditNum -= this.ChangeNum;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.ChangeBetLabel.string = this.ChangeNum.toString() + '$';
            this.Bet15Label.string = this.Bet15Num.toString() + '$';
          }
        } // Num16Bet
        ;

        _proto.Num16Bet = function Num16Bet() {
          if (this.CreditNum > 0) {
            Audio.instance.SoundPlay('ClickBet');
            this.Bet16Num += this.ChangeNum;
            this.CreditNum -= this.ChangeNum;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.ChangeBetLabel.string = this.ChangeNum.toString() + '$';
            this.Bet16Label.string = this.Bet16Num.toString() + '$';
          }
        } // Num17Bet
        ;

        _proto.Num17Bet = function Num17Bet() {
          if (this.CreditNum > 0) {
            Audio.instance.SoundPlay('ClickBet');
            this.Bet17Num += this.ChangeNum;
            this.CreditNum -= this.ChangeNum;
            this.CreditLabel.string = this.CreditNum.toString() + '$';
            this.ChangeBetLabel.string = this.ChangeNum.toString() + '$';
            this.Bet17Label.string = this.Bet17Num.toString() + '$';
          }
        }; // Setting button


        _proto.ButtonSetting = function ButtonSetting() {
          Audio.instance.SoundPlay("ClickButton");
          this.OnclickSetting = !this.OnclickSetting;

          if (!this.OnclickSetting) {
            this.SettingSound.play("SoundAnimation");
          } else if (this.OnclickSetting) {
            this.SettingSound.play("Hide_SettingSound");
          }
        } // Remove
        ;

        _proto.Remove = function Remove() {
          this.TotalWinNum = 0;
          this.BetTaiNum = 0;
          this.BetXiuNum = 0;
          this.Bet4Num = 0;
          this.Bet5Num = 0;
          this.Bet6Num = 0;
          this.Bet7Num = 0;
          this.Bet8Num = 0;
          this.Bet9Num = 0;
          this.Bet10Num = 0;
          this.Bet11Num = 0;
          this.Bet12Num = 0;
          this.Bet13Num = 0;
          this.Bet14Num = 0;
          this.Bet15Num = 0;
          this.Bet16Num = 0;
          this.Bet17Num = 0;
          this.TaiLabel.string = this.BetTaiNum.toString() + '$';
          this.XiuLabel.string = this.BetXiuNum.toString() + '$';
          this.TotalWinLabel.string = this.TotalWinNum.toString() + '$';
          this.Bet4Label.string = this.Bet4Num.toString() + '$';
          this.Bet5Label.string = this.Bet5Num.toString() + '$';
          this.Bet6Label.string = this.Bet6Num.toString() + '$';
          this.Bet7Label.string = this.Bet7Num.toString() + '$';
          this.Bet8Label.string = this.Bet8Num.toString() + '$';
          this.Bet9Label.string = this.Bet9Num.toString() + '$';
          this.Bet10Label.string = this.Bet10Num.toString() + '$';
          this.Bet11Label.string = this.Bet11Num.toString() + '$';
          this.Bet12Label.string = this.Bet12Num.toString() + '$';
          this.Bet13Label.string = this.Bet13Num.toString() + '$';
          this.Bet14Label.string = this.Bet14Num.toString() + '$';
          this.Bet15Label.string = this.Bet15Num.toString() + '$';
          this.Bet16Label.string = this.Bet16Num.toString() + '$';
          this.Bet17Label.string = this.Bet17Num.toString() + '$'; // win stop

          this.Win[0].stop();
          this.Win[1].stop();
          this.Win[2].stop();
          this.Win[3].stop();
          this.Win[4].stop();
          this.Win[5].stop();
          this.Win[6].stop();
          this.Win[7].stop();
          this.Win[8].stop();
          this.Win[9].stop();
          this.Win[10].stop();
          this.Win[11].stop();
          this.Win[12].stop();
          this.Win[13].stop();
          this.Win[14].stop();
          this.Win[15].stop(); // winframe stop

          this.WinFrame[0].stop();
          this.WinFrame[1].stop();
          this.WinFrame[2].stop();
          this.WinFrame[3].stop();
          this.WinFrame[4].stop();
          this.WinFrame[5].stop();
          this.WinFrame[6].stop();
          this.WinFrame[7].stop();
          this.WinFrame[8].stop();
          this.WinFrame[9].stop();
          this.WinFrame[10].stop();
          this.WinFrame[11].stop();
          this.WinFrame[12].stop();
          this.WinFrame[13].stop();
        };

        _proto.Box = function Box() {
          // this.boxexit.active = true;
          this.boxanimation.play('SettingSound');
          Audio.instance.SoundPlay("ClickButton");
        };

        _proto.hiddenexit = function hiddenexit() {
          // this.boxexit.active = false;
          this.boxanimation.play('hiddenexit');
          Audio.instance.SoundPlay("ClickButton");
        } // Quit button
        ;

        _proto.QuitButton = function QuitButton() {
          game.end();
          Audio.instance.SoundPlay("ClickButton");
        };

        _proto.SettingButton = function SettingButton() {
          this.SettingSound.play('SettingSound');
          Audio.instance.SoundPlay("ClickButton");
        };

        _proto.Exitsetting = function Exitsetting() {
          this.SettingSound.play('HideSettingSound');
          Audio.instance.SoundPlay("ClickButton");
        };

        return Game;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "TaiLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "XiuLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Bet4Label", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Bet5Label", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Bet6Label", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Bet7Label", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Bet8Label", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Bet9Label", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Bet10Label", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Bet11Label", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Bet12Label", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Bet13Label", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Bet14Label", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Bet15Label", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Bet16Label", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Bet17Label", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "TaiButton", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "XiuButton", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Bet4Button", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Bet5Button", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Bet6Button", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Bet7Button", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Bet8Button", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Bet9Button", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "Bet10Button", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Bet11Button", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "Bet12Button", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "Bet13Button", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "Bet14Button", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "Bet15Button", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "Bet16Button", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "Bet17Button", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "TotalWinLabel", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "CreditLabel", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "ChangeBetLabel", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "DiceSprite1", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "DiceSprite2", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "DiceSprite3", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "DiceSpriteAllFrame", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "LidAnimation", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "Win", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "WinFrame", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "FrameWin", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "SettingSound", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "boxanimation", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "shakebuttom", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Loading.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ProgressBar, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      ProgressBar = module.ProgressBar;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "30e18dyDjhPKYdc6gqy8Hvx", "Loading", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Loading = exports('Loading', (_dec = ccclass('Loading'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(ProgressBar), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Loading, _Component);

        function Loading() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "Start", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Progress", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "LoadProgress", _descriptor3, _assertThisInitialized(_this));

          _this.CurrentValue = 0.1;
          _this.Increment = 0.016;
          _this.Interval = 0.078;
          return _this;
        }

        var _proto = Loading.prototype;

        _proto.start = function start() {
          var _this2 = this;

          this.Start.active = false;
          this.Progress.active = true;
          this.schedule(this.updateProgress, this.Interval);
          setTimeout(function () {
            _this2.unschedule(_this2.updateProgress);

            _this2.Progress.active = false;
            _this2.Start.active = true;
          }, 5000);
        };

        _proto.updateProgress = function updateProgress() {
          var _this3 = this;

          this.LoadProgress.progress = this.CurrentValue;

          if (this.CurrentValue >= 1) {
            setTimeout(function () {
              _this3.CurrentValue = 0.1;
            }, 1000);
          } else {
            this.CurrentValue += this.Increment;
          }
        };

        _proto.StartButton = function StartButton() {
          director.loadScene('Game');
        };

        return Loading;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Start", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Progress", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "LoadProgress", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './Audio.ts', './Game.ts', './Loading.ts', './Sound.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Sound.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, AudioClip;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "f4171c+sApDNohcAKQYsKo/", "Sound", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Sound = exports('default', (_dec = ccclass('Sound'), _dec2 = property(String), _dec3 = property(AudioClip), _dec(_class = (_class2 = function Sound() {
        _initializerDefineProperty(this, "Name", _descriptor, this);

        _initializerDefineProperty(this, "AudioClip", _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Name", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "AudioClip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});