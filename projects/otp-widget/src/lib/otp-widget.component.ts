import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

type TGap = "otp-gap-1" | "otp-gap-2" | "otp-gap-3" | "otp-gap-4" | "otp-gap-5" | "otp-gap-6" | "otp-gap-7" | "otp-gap-8" | "otp-gap-9" | "otp-gap-10" | "otp-gap-11" | "otp-gap-12" | "otp-gap-13" | "otp-gap-14" | "otp-gap-15" | "otp-gap-16" | "otp-gap-17" | "otp-gap-18" | "otp-gap-19" | "otp-gap-20" | "otp-gap-21" | "otp-gap-22" | "otp-gap-23" | "otp-gap-24" | "otp-gap-25" | "otp-gap-26" | "otp-gap-27" | "otp-gap-28" | "otp-gap-29" | "otp-gap-30" | "otp-gap-31" | "otp-gap-32" | "otp-gap-33" | "otp-gap-34" | "otp-gap-35" | "otp-gap-36" | "otp-gap-37" | "otp-gap-38" | "otp-gap-39" | "otp-gap-40" | "otp-gap-41" | "otp-gap-42" | "otp-gap-43" | "otp-gap-44" | "otp-gap-45" | "otp-gap-46" | "otp-gap-47" | "otp-gap-48";

@Component({
  selector: 'otp-widget',
  templateUrl: './otp-widget.component.html',
  styleUrls: [
    './otp-widget.component.scss'
  ]
})
export class OtpWidgetComponent implements OnInit {

  @Input() childs?: number = 4;
  @Input() type?: "number" | "text" = "number";
  @Input() placeholder?: string = '';
  @Input() gap?: TGap = "otp-gap-16";

  @Output() code = new EventEmitter<string>(true);
  @Output() filled = new EventEmitter<boolean>(true);

  @ViewChild('parent') parent?: ElementRef;
  #code: string[] = [];

  constructor(private changeDetectorRef:  ChangeDetectorRef, public el: ElementRef) { }

  ngOnInit(): void {
  }

  #targetIndex (elm: HTMLElement): number {
    const parentChilds: HTMLCollection = (elm.parentNode as HTMLElement).children;
    return [...Array.from(parentChilds)].indexOf(elm);
  };

  clearedToFocus (event: Event): void {
    const target = (event.target as HTMLInputElement);
    (target.value = String(target.value)[0] || '');
  };

  checkEvent (event: KeyboardEvent): void {
    event.preventDefault();
    event.stopPropagation();
    //
    const that: HTMLInputElement = event.target as HTMLInputElement;
    const index = this.#targetIndex(that);
    const isNumber = /^\d$/i.test(event.key) && this.type === 'number';
    const isText = /(^\D)|(^\d)$/i.test(event.key) && this.type === 'text';
    const nextSibling: HTMLInputElement = (this.parent?.nativeElement as HTMLElement).children[index + 1] as HTMLInputElement;
    const prevSibling: HTMLInputElement = (this.parent?.nativeElement as HTMLElement).children[index - 1] as HTMLInputElement;
    if (event.key !== "Backspace" && (isNumber || isText)) {
      this.#code.push(String(that.value));
      if(that.value) that.classList.add('hasvalue');
      if (nextSibling) nextSibling.focus();
    } else if (event.key === "Backspace") {
      that.value = "";
      this.#code.splice(this.#code.indexOf(String(that.value), 1));
      that.classList.remove('hasvalue');
      if (prevSibling) prevSibling.focus();
    }
  };

  codeFromClipboard (e: ClipboardEvent): void {
    const codep = String((e.clipboardData as DataTransfer).getData('Text')).trim();
    const ins = (this.parent?.nativeElement as HTMLElement).querySelectorAll("input");
    if(codep && codep.length === this.childs) {
      if( (this.type === "text" && /^[a-zA-Z0-9]*$/.test(codep)) || (this.type === "number" && /^[0-9]*$/.test(codep))) {
        ins.forEach((node, index)=>{
          node.value = codep[index];
          this.#code.push(String(codep[index]));
          node.focus();
        })
      }
    }
  };


  ngOnChanges(changes: SimpleChanges): void {
    // console.log({ changes });
  }

  ngAfterViewChecked() {
   this.#watchCode();
  }

  #watchCode (): void {
    //
    if (this.#code.length !==0) {
      const codeLength = this.#code.length;
      const sendCode = this.#code.join("");
      if (codeLength === this.childs) {
        this.code.emit(sendCode);
        this.filled.emit(true);
      }
      else if (codeLength === 0) this.code.emit(sendCode);
    }
  }

  trackInputsField (index: number, item: number): number {
    void index;
    return item;
  }

  refName (index: number): string {
    return `widget-otp-input-${index}`;
  }

  get gapTranslate (): Record<string, boolean> {
    return { [this.gap as string]: true};
  }

  get childsArray (): Array<number> {
    return [...Array(this.childs).keys()]
  }

}
