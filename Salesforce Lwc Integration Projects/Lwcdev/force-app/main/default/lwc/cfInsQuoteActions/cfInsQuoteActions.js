import { masterLayout } from "vlocity_ins/masterLayout";                                import { LightningElement, api, track } from "lwc";                                import data from "./definition";export default class cfInsQuoteActions extends masterLayout(LightningElement) {@api recordId;@api theme = 'slds';@api debug;connectedCallback() {                            super.connectedCallback();                            this.definition = data;}}