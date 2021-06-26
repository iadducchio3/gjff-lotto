export {};
declare global {
  export interface Number {
    toFriendlyTime(): string;
    toRank(): string;
    toSuperRank(): string;
  }
}

Number.prototype.toFriendlyTime = function (this: number): string {
  const minutes = Math.floor(this / 60);
  const seconds = this % 60;
  if (minutes > 0) return `${minutes}:${seconds}`;
  return seconds.toString();
};

Number.prototype.toRank = function (this: number): string {
  switch (this) {
    case 1:
      return '1st';
    case 2:
      return '2nd';
    case 3:
      return '3rd';
    default:
      return this.toString() + 'th';
  }
};

Number.prototype.toSuperRank = function (this: number): string {
  switch (this) {
    case 1:
      return '1<sup>st</sup>';
    case 2:
      return '2<sup>nd</sup>';
    case 3:
      return '3<sup>rd</sup>';
    default:
      return this.toString() + '<sup>th</sup>';
  }
};
