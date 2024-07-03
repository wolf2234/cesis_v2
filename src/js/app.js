// Подключение основного файла стилей
import "../scss/style.scss";

import "./jquery/jquery-3.7.1.min.js";
import "./jquery/slick.min.js";
import "./jquery/slider.js";

import "./base/burger.js";
import "./base/form.js";
import "./base/video.js";

import { showBlock } from "./modules/functions.js";
import { addCustomSelect } from "./modules/select-custom.js";
import { hoverElement } from "./modules/functions.js";

showBlock(1);
addCustomSelect();
hoverElement();
