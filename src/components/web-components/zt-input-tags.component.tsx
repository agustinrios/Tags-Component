import { Component, Prop, State, h, Watch, EventEmitter, Event } from '@stencil/core';
import Tagify from '@yaireo/tagify'

@Component({
    tag: 'zt-input-tags',
    styleUrl: 'app-tags.css',
    shadow: true
})

export class tags {
    //@Prop() name: string;
    @Prop() type: string;
    @Prop() label: string;
    @Prop({
        reflect: true,
        mutable: true
    }) value: string;

    @State() valueState: string;
    @State() _invalid: boolean;
    @State() _touched = false;
    @State() focus: boolean = false;

    @Watch('value')
    valueChanged(newValue: string, oldValue: string) {
        if (newValue !== oldValue) {
            this.valueState = newValue;
        }
    }

    @Event({
        bubbles: true,
        composed: true
    }) ztInputEmmiter: EventEmitter;
    @Event() ztBlur: EventEmitter;
    @Event() ztFocus: EventEmitter;

    @Event() ztFocusIn: EventEmitter;
    @Event() ztFocusOut: EventEmitter;

    element: HTMLInputElement;

    Tags() {
        const input = document.querySelector('input[name=tags-outside]');
        const tagify = new Tagify(input, {
            whitelist: ["foo", "bar", "baz"],
            dropdown: {
                position: "input",
                enabled : 0 
            }
        })
        return tagify;
    }
    
    render() {
        return [
            <div class="">
                <input 
                    onClick={() => this.Tags}
                    name={'tags-outside'} 
                    class='tagify--outside' 
                    placeholder='write some tags'
                    value={this.valueState} 
                />
            </div>
        ];
    }

}

