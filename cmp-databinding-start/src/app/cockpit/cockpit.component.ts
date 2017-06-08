import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output('srvCreate') serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, content: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  areInputsValid(): boolean {
    return this.newServerName !== '' && this.newServerContent !== '';
  }

  clearInputs(): void {
    this.newServerName = this.newServerContent = '';
  }

  checkEmitClear(emit: Function): void {
    if (this.areInputsValid()) {
      emit();
      this.clearInputs();
    }
  }

  onAddServer(): void {
    this.checkEmitClear( () => {
      this.serverCreated.emit({name: this.newServerName, content: this.newServerContent});
    });
  }

  onAddBlueprint(): void {
    this.checkEmitClear( () => {
      this.blueprintCreated.emit({name: this.newServerName, content: this.newServerContent});
    });
  }

}
