export interface IForm {
    forms: Form[];
}

export interface Form {
    durum:    boolean;
    mesaj:    string;
    bilgiler: Bilgiler;
}

export interface Bilgiler {
    formId:   string;
    formname: Formname;
    formhtml: string;
    formjson: Formjson;
    date:     Date;
}

export interface Formjson {
    tag:      string;
    children: FormjsonChild[];
}

export interface FormjsonChild {
    tag:      string;
    children: PurpleChild[];
    html:     Formname;
}

export interface PurpleChild {
    tag:      string;
    class:    string;
    html:     Formname;
    children: FluffyChild[];
}

export interface FluffyChild {
    tag:      string;
    html:     string;
    children: TentacledChild[];
}

export interface TentacledChild {
    tag:       TentacledTag;
    html:      Formname;
    class?:    FluffyClass;
    children?: StickyChild[];
}

export interface StickyChild {
    tag:       FluffyTag;
    class:     PurpleClass;
    for?:      string;
    html:      string;
    children?: IndigoChild[];
}

export interface IndigoChild {
    tag:          string;
    class?:       string;
    html?:        string;
    children?:    IndecentChild[];
    id?:          string;
    name?:        string;
    type?:        Type;
    placeholder?: string;
    required?:    string;
    multiple?:    string;
    for?:         string;
}

export interface IndecentChild {
    tag:          PurpleTag;
    class?:       string;
    html?:        string;
    id?:          string;
    name?:        string;
    placeholder?: string;
    type?:        Type;
    required?:    string;
    value?:       string;
    checked?:     string;
    children?:    HilariousChild[];
}

export interface HilariousChild {
    tag:            string;
    type?:          Type;
    checked?:       string;
    class?:         string;
    "data-toggle"?: string;
    html?:          string;
    children?:      AmbitiousChild[];
}

export interface AmbitiousChild {
    tag:       string;
    class?:    string;
    children?: CunningChild[];
    type?:     Type;
}

export interface CunningChild {
    tag:  string;
    href: string;
    html: string;
}

export enum Type {
    Checkbox = "checkbox",
    Radio = "radio",
    Text = "text",
}

export enum PurpleTag {
    Div = "div",
    Input = "input",
    Option = "option",
    Span = "span",
}

export enum PurpleClass {
    ControlLabel = "control-label",
    Controls = "controls",
}

export enum FluffyTag {
    Div = "div",
    Label = "label",
}

export enum FluffyClass {
    ControlGroup = "control-group",
}

export enum Formname {
    Empty = "\u000d\n",
    FormName = "Form Name",
}

export enum TentacledTag {
    Div = "div",
    Legend = "legend",
}