import { html } from '@polymer/lit-element';

const style = html`
  <style is='custom-style'>
    ha-card {
      cursor: default;
      display: flex;
      background: transparent;
      overflow: hidden;
      padding: 0;
      position: relative;
    }
    ha-card[group] {
      box-shadow: none;
    }
    ha-card[more-info] {
      cursor: pointer;
    }
    ha-card[collapse] {
      overflow: visible;
    }
    ha-card:before {
      content: '';
      padding-top: 0px;
      transition: padding-top .5s cubic-bezier(.21,.61,.35,1);
      will-change: padding-top;
    }
    ha-card[initial] .entity__artwork,
    ha-card[initial] .entity__icon {
      animation-duration: .001s;
    }
    ha-card[initial]:before,
    ha-card[initial] .player {
      transition: none;
    }
    header {
      display: none;
    }
    ha-card[has-title] header {
      display: block;
      font-size: var(--paper-font-headline_-_font-size);
      font-weight: var(--paper-font-headline_-_font-weight);
      letter-spacing: var(--paper-font-headline_-_letter-spacing);
      line-height: var(--paper-font-headline_-_line-height);
      padding: 24px 16px 16px;
      position: relative;
    }
    ha-card[artwork='full-cover'][has-artwork]:before {
      padding-top: 56%;
    }
    ha-card[artwork='full-cover'][has-artwork][content='music']:before,
    ha-card[artwork='full-cover-fit'][has-artwork]:before {
      padding-top: 100%;
    }
    .bg {
      background: var(--paper-card-background-color, white);
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
    }
    ha-card[group] .bg {
      background: transparent;
    }
    .cover,
    .cover:before {
      display: block;
      opacity: 0;
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      transition: opacity .75s cubic-bezier(.21,.61,.35,1);
      will-change: opacity;
    }
    .cover {
      animation: fade-in .5s cubic-bezier(.21,.61,.35,1);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .cover:before {
      background: rgba(0,0,0,.5);
      content: '';
    }
    ha-card[artwork*='full-cover'][has-artwork] .player {
      background: rgba(0,0,0,.75);
      background: linear-gradient(to top, rgba(0,0,0,.75) 0%, rgba(0,0,0,.5) 50%, transparent 100%);
    }
    ha-card[has-artwork] .cover,
    ha-card[has-artwork][artwork='cover'] .cover:before,
    ha-card[bg] .cover {
      opacity: .999;
    }
    ha-card[artwork='default'] .cover {
      display: none;
    }
    ha-card[bg] .cover {
      display: block;
    }
    ha-card[artwork='full-cover-fit'][has-artwork] .cover {
      background-color: black;
      background-size: contain;
    }
    .player {
      align-self: flex-end;
      box-sizing: border-box;
      position: relative;
      padding: 16px;
      transition: padding .25s ease-out;
      width: 100%;
      will-change: padding;
    }
    ha-card[group] .player {
      padding: 2px 0;
    }
    ha-card[has-title] .player {
      padding-top: 0;
    }
    ha-card[artwork*='cover'][has-artwork] paper-icon-button,
    ha-card[artwork*='cover'][has-artwork] ha-icon,
    ha-card[artwork*='cover'][has-artwork] .entity__info,
    ha-card[artwork*='cover'][has-artwork] .entity__info__name,
    ha-card[artwork*='cover'][has-artwork] paper-button,
    ha-card[artwork*='cover'][has-artwork] header,
    ha-card[artwork*='cover'][has-artwork] .speaker-select > span,
    ha-card[artwork*='cover'][has-artwork] paper-menu-button paper-button[focused] iron-icon {
      color: #FFFFFF;
      border-color: #FFFFFF;
    }
    ha-card[artwork*='cover'][has-artwork] paper-input {
      --paper-input-container-focus-color: #FFFFFF;
    }
    ha-card[artwork*='cover'][has-artwork] paper-checkbox[disabled] {
      --paper-checkbox-checkmark-color: rgba(0,0,0,.5);
    }
    ha-card[artwork*='cover'][has-artwork] paper-checkbox {
      --paper-checkbox-unchecked-color: #FFFFFF;
      --paper-checkbox-label-color: #FFFFFF;
    }
    ha-card[artwork*='cover'][has-artwork] .media-buttons paper-button,
    ha-card[artwork*='cover'][has-artwork] .speaker-select paper-button {
      background-color: rgba(255,255,255,.65);
      color: black;
    }
    ha-card[artwork*='cover'][has-artwork] paper-input {
      --paper-input-container-color: #FFFFFF;
      --paper-input-container-input-color: #FFFFFF;
    }
    .flex {
      display: flex;
      display: -ms-flexbox;
      display: -webkit-flex;
      flex-direction: row;
    }
    .justify {
      -webkit-justify-content: space-between;
      justify-content: space-between;
    }
    .hidden {
      display: none;
    }
    .entity {
      position: relative;
    }
    .entity__info {
      justify-content: center;
      display: flex;
      flex-direction: column;
      margin-left: 8px;
      position: relative;
      overflow: hidden;
      user-select: none;
    }
    .rows {
      margin-left: 56px;
      position: relative;
    }
    .rows > *:nth-child(2) {
      margin-top: 0px;
    }
    .entity__info__media[short] {
      max-height: 20px;
      overflow: hidden;
    }
    .entity__icon {
      color: var(--paper-item-icon-color, #44739e);
    }
    .entity__artwork, .entity__icon {
      animation: fade-in .25s ease-out;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 100%;
      height: 40px;
      line-height: 40px;
      margin-right: 8px;
      min-width: 40px;
      position: relative;
      text-align: center;
      width: 40px;
      will-change: border-color;
      transition: border-color .25s ease-out;
    }
    .entity__artwork[border] {
      border: 2px solid var(--primary-text-color);
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
    }
    .entity__artwork[state='playing'] {
      border-color: var(--accent-color);
    }
    .entity__info__name,
    .entity__info__media[short],
    .source-menu__source,
    .media-dropdown__label,
    .media-label,
    .label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .entity__info__name {
      line-height: 20px;
    }
    .control-row--top {
      line-height: 40px;
    }
    .entity[inactive] .entity__info__media,
    .entity__info__name,
    paper-icon-button,
    paper-button {
      color: var(--primary-text-color);
      position: relative;
    }
    .entity__info__media {
      color: var(--secondary-text-color);
      max-height: 6em;
      word-break: break-word;
    }
    .attr__app_name {
      display: none;
    }
    .attr__app_name:first-child {
      display: inline;
    }
    .entity[inactive] .entity__info__media {
      opacity: .5;
    }
    .entity[inactive] .entity__info__media {
      max-width: 200px;
    }
    .entity__info__media[scroll] > span {
      visibility: hidden;
    }
    .entity__info__media[scroll] > div {
      animation: move linear infinite;
    }
    .entity__info__media[scroll] .marquee {
      animation: slide linear infinite;
    }
    .entity__info__media[scroll] .marquee,
    .entity__info__media[scroll] > div {
      animation-duration: inherit;
      visibility: visible;
    }
    .entity__info__media[scroll] {
      animation-duration: 10s;
      text-overflow: clip !important;
      mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
      -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
    }
    .marquee {
      visibility: hidden;
      position: absolute;
      white-space: nowrap;
    }
    ha-card[artwork*='cover'][has-artwork] .entity__info__media,
    paper-icon-button[color] {
      color: var(--accent-color) !important;
    }
    paper-icon-button {
      transition: color .25s ease-in-out;
      will-change: color;
    }
    .entity__info__media span:before {
      content: ' - ';
    }
    .entity__info__media span:first-of-type:before {
      content: '';
    }
    .entity__info__media span:empty,
    .source-menu span:empty {
      display: none;
    }
    .tts {
      align-items: center;
      margin-top: 8px;
    }
    .tts__input {
      cursor: text;
      flex: 1;
      margin-right: 8px;
      --paper-input-container-input: {
        font-size: 1em;
      };
    }
    .tts paper-button {
      margin: 0;
      padding: .4em;
    }
    .media-dropdown {
      box-sizing: border-box;
      padding: 0;
      width: 100%;
      margin-top: 8px;
    }
    .media-dropdown__button {
      border-bottom: 1px solid var(--primary-text-color);
      border-radius: 0;
      display: flex;
      font-size: 1em;
      justify-content: space-between;
      margin: 0;
      opacity: .75;
      padding: 0 8px 0 0;
      width: 100%;
    }
    .media-dropdown__label {
      padding: .2em .2em .2em 0;
      text-align: left;
      text-transform: none;
    }
    .media-dropdown__icon {
      height: 24px;
      width: 24px;
    }
    .media-buttons {
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      margin-top: 8px;
      padding-top: 8px;
    }
    .media-buttons > paper-button {
      background-color: rgba(255,255,255,.1);
      border-radius: 0;
      box-sizing: border-box;
      margin: 8px 0 0 0;
      min-width: 0;
      padding: .2em 1em;
      width: calc(50% - 4px);
    }
    .media-buttons > paper-button > span {
      line-height: 24px;
    }
    .media-buttons > paper-button > *:nth-child(2),
    .media-dropdown paper-item > *:nth-child(2) {
      margin-left: 4px;
    }
    .media-buttons > paper-button:nth-child(odd) {
      margin-right: 8px;
    }
    .media-buttons > paper-button:nth-child(-n+2) {
      margin-top: 0;
    }
    .media-buttons > paper-button:nth-last-child(1):nth-child(odd) {
      margin: 8px 0 0 0;
      width: 100%;
    }
    .control-row--top .vol-control {
      max-width: 200px;
    }
    .control-row--top {
      flex: 1;
      justify-content: flex-end;
      margin-right: 0;
      margin-left: auto;
      width: auto;
      max-width: 100%;
    }
    .control-row--top paper-slider {
      flex: 1;
      height: 40px;
      line-height: initial;
    }
    .control-row {
      flex-wrap: wrap;
      justify-content: center;
    }
    .control-row > .flex {
      flex: 1;
      justify-content: space-between;
    }
    .control-row > .shuffle {
      flex: 3;
      flex-shrink: 200;
      justify-content: center;
    }
    .control-row > .vol-control {
      flex: 100;
    }
    .vol-control {
      flex: 1;
      max-height: 40px;
    }
    .speaker-select {
      display: flex;
      flex-direction: column;
    }
    .speaker-select > span {
      font-weight: 500;
      margin-top: 12px;
      text-transform: uppercase;
    }
    .speaker-select paper-checkbox {
      padding: 8px 0;
    }
    .speaker-select .buttons {
      display: flex;
    }
    .speaker-select paper-button {
      background-color: rgba(255,255,255,.1);
      margin: 8px 8px 0 0;
      min-width: 0;
      padding: .5em 1em;
      text-transform: uppercase;
      text-align: center;
      width: 50%;
    }
    .speaker-select paper-button:nth-child(even) {
      margin: 8px 0 0 8px;
    }
    .speaker-select > paper-checkbox > span {
      font-weight: 600;
    }
    paper-slider {
      max-width: 400px;
      min-width: 100px;
      width: 100%;
    }
    paper-input {
      opacity: .75;
      --paper-input-container-color: var(--primary-text-color);
      --paper-input-container-focus-color: var(--primary-text-color);
      --paper-input-container: {
        padding: 0;
      };
    }
    .source-menu {
      height: 40px;
      line-height: 20px;
      padding: 0;
    }
    paper-menu-button[focused] paper-button > iron-icon {
      color: var(--accent-color);
      transform: rotate(180deg);
    }
    paper-menu-button paper-button[focused] iron-icon {
      color: var(--primary-text-color);
      transform: rotate(0deg);
    }
    .source-menu__button {
      height: 40px;
      line-height: 20px;
      margin: 0;
      min-width: 0;
      text-transform: initial;
    }
    .source-menu__source {
      display: block;
      max-width: 60px;
      position: relative;
      width: auto;
    }
    .source-menu__source[display="icon"] {
      display: none;
    }
    .source-menu__source[display="full"] {
      max-width: none;
    }
    .progress {
      height: 12px;
      cursor: pointer;
      left: 0; right: 0; bottom: 0;
      position: absolute;
    }
    ha-card[group] .progress {
      bottom: -2px;
      height: 5px;
    }
    ha-card[group] paper-progress {
      height: var(--paper-progress-height, 2px);
    }
    paper-progress {
      height: var(--paper-progress-height, 4px);
      bottom: 0;
      position: absolute;
      width: 100%;
      --paper-progress-active-color: var(--accent-color);
      --paper-progress-container-color: rgba(100,100,100,.15);
      --paper-progress-transition-duration: 1s;
      --paper-progress-transition-timing-function: linear;
      --paper-progress-transition-delay: 0s;
    }
    ha-card[state='paused'] paper-progress {
      --paper-progress-active-color: var(--disabled-text-color, rgba(150,150,150,.5));
    }
    .label {
      margin: 0 8px;
    }
    .media-dropdown[focused] paper-button,
    paper-icon-button[color][opaque],
    paper-input[focused] {
      opacity: 1;
    }
    .media-dropdown[focused] paper-button[focused] {
      opacity: .75;
    }
    paper-icon-button[opaque],
    .speaker-select paper-button[disabled] {
      opacity: .5;
    }
    ha-card[flow] .control-row--top {
      justify-content: space-between;
    }
    ha-card[flow] .power-row {
      margin-left: auto;
    }
    ha-card[flow] .entity__info {
      display: none;
    }
    ha-card[flow] paper-slider,
    ha-card[flow] .vol-control {
      width: 100%;
      max-width: none;
    }
    ha-card[break*="break"] .rows {
      margin-left: 0;
    }
    ha-card[break*="break"] .rows > * {
      padding-left: 8px;
      padding-right: 8px;
    }
    ha-card[break*="break"] .rows > .control-row {
      padding: 0;
    }
    ha-card[break*="break"] .media-dropdown__button {
      padding-right: 0;
    }
    .player div:empty,
    ha-card[break="break-width"] .source-menu__source,
    .entity[inactive] .source-menu__source {
      display: none;
    }
    @keyframes slide {
      100% { transform: translateX(-100%); }
    }
    @keyframes move {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    }
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  </style>`;

export default style;