// eslint-disable-next-line max-classes-per-file
export default class BasicItem {
  itemId: number;

  itemImg: string;

  itemTitle: string;

  itemSubTitle: string;

  itemDate: Date;

  itemLike?: boolean;

  constructor(builder: BasicItemBuilder) {
    this.itemDate = builder.itemDate;
    this.itemId = builder.itemId;
    this.itemImg = builder.itemImg;
    this.itemTitle = builder.itemTitle;
    this.itemSubTitle = builder.itemSubTitle;

    if (builder.itemLike) {
      this.itemLike = builder.itemLike;
    }
  }

  static get Builder() {
    return new BasicItemBuilder();
  }
}

class BasicItemBuilder {
  itemId: number = 0;

  itemImg: string = '';

  itemTitle: string = '';

  itemSubTitle: string = '';

  itemDate: Date = new Date();

  itemLike?: boolean;

  withBasicItemId(itemId: number): BasicItemBuilder {
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

  withBasicItemLike(itemLike: boolean): BasicItemBuilder {
    this.itemLike = itemLike;
    return this;
  }

  build(): BasicItem {
    return new BasicItem(this);
  }
}
