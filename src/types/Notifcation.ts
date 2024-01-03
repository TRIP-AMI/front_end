// eslint-disable-next-line max-classes-per-file
export default class Alarm {
  alarmId: string;

  alarmTitle: string;

  alarmContent: string;

  alarmReadState: boolean;

  alarmDate: Date;

  constructor(builder: AlarmBuilder) {
    this.alarmId = builder.alarmId;
    this.alarmTitle = builder.alarmTitle;
    this.alarmContent = builder.alarmContent;
    this.alarmReadState = builder.alarmReadState;
    this.alarmDate = builder.alarmDate;
  }

  static get Builder() {
    return new AlarmBuilder();
  }
}

class AlarmBuilder {
  alarmId: string = '';

  alarmTitle: string = '';

  alarmContent: string = '';

  alarmReadState: boolean = false;

  alarmDate: Date = new Date();

  withAlarmId(alarmId: string): AlarmBuilder {
    this.alarmId = alarmId;
    return this;
  }

  withAlarmTitle(alarmTitle: string): AlarmBuilder {
    this.alarmTitle = alarmTitle;
    return this;
  }

  withAlarmContent(alarmContent: string): AlarmBuilder {
    this.alarmContent = alarmContent;
    return this;
  }

  withAlarmReadState(alarmReadState: boolean): AlarmBuilder {
    this.alarmReadState = alarmReadState;
    return this;
  }

  withAlarmDate(alarmDate: Date): AlarmBuilder {
    this.alarmDate = alarmDate;
    return this;
  }

  build(): Alarm {
    return new Alarm(this);
  }
}
