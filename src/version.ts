// バージョン表記の一元管理
//
// package.json の `_v` は upstream(lqvp/ai)の `_v` と常に一致させ、
// fork(amiewa/ai)側の追加リビジョンは `_fork` フィールドで区別する。
// これにより upstream 取り込み時に `_v` 行が競合しにくくなる。
// upstream ベースが上がったら `_fork` は `amiewa.1` にリセットする。

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pkg = require('../package.json');

/**
 * upstream 準拠のベースバージョン。
 * fork 分の識別子(_fork)を含まない、upstream の `_v` と同一の値。
 * update-checker が upstream のリリースタグと比較する際に使用する。
 */
export const baseVersion: string = pkg._v;

/**
 * 表示用フルバージョン(例: 3.2.5-lqvp+amiewa.1)。
 * ユーザーに見せる箇所(起動ログ・info コマンドなど)ではこちらを使用する。
 */
export const fullVersion: string = pkg._fork
  ? `${baseVersion}+${pkg._fork}`
  : baseVersion;
