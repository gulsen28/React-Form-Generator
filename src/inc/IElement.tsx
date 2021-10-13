export interface IElement {
    tag:      string;
    html:     string;
    children: IElementChild[];
}

export interface IElementChild {
    tag:       string;
    html:      string;
    class?:    string;
    children?: PurpleChild[];
}

export interface PurpleChild {
    tag:       string;
    class:     string;
    for?:      string;
    html:      string;
    children?: FluffyChild[];
}

export interface FluffyChild {
    tag:          string;
    id?:          string;
    name?:        string;
    type?:        string;
    placeholder?: string;
    class:        string;
    required?:    string;
    html?:        string;
}