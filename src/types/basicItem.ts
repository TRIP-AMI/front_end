// eslint-disable-next-line max-classes-per-file
export default class BasicItem {
  itemId: string;

  itemImg: string;

  itemTitle: string;

  itemSubTitle: string;

  itemDate: Date;

  constructor(builder: BasicItemBuilder) {
    this.itemDate = builder.itemDate;
    this.itemId = builder.itemId;
    this.itemImg = builder.itemImg;
    this.itemTitle = builder.itemTitle;
    this.itemSubTitle = builder.itemSubTitle;
  }

  static get Builder() {
    return new BasicItemBuilder();
  }
}

class BasicItemBuilder {
  itemId: string = '';

  itemImg: string = '';

  itemTitle: string = '';

  itemSubTitle: string = '';

  itemDate: Date = new Date();

  withBasicItemId(itemId: string): BasicItemBuilder {
    this.itemId = itemId;
    return this;
  }

  withBasicItemImg(itemImg: string): BasicItemBuilder {
    this.itemImg = itemImg;
    return this;
  }

  withBasicItemTitle(itemTitle: string): BasicItemBuilder {
    this.itemTitle = itemTitle;
    return this;
  }

  withBasicItemSubTitle(itemSubTitle: string): BasicItemBuilder {
    this.itemSubTitle = itemSubTitle;
    return this;
  }

  withBasicItemDate(itemDate: Date): BasicItemBuilder {
    this.itemDate = itemDate;
    return this;
  }

  build(): BasicItem {
    return new BasicItem(this);
  }
}
