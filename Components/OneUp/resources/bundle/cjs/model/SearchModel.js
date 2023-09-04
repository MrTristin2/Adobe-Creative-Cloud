"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2020 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/
const _formatSearchData = searchData => ({
  currentResult: {
    pageNumber: searchData.currResult ? searchData.currResult.pageNum : undefined,
    index: searchData.currResult ? searchData.currResult.index : undefined
  },
  totalResults: searchData.totalResults,
  status: searchData.status
});

class SearchModel {
  constructor(searchObject) {
    this.getExposedAPIs = () => ({
      onResultsUpdate: this.onResultsUpdate,
      next: this.next,
      previous: this.previous,
      clear: this.clear
    });

    this.onResultsUpdate = async callbackFn => {
      if (this.searchObject) {
        return this.searchObject.onResultsUpdate(data => {
          callbackFn(_formatSearchData(data));
        });
      }

      return false;
    };

    this.next = async () => {
      if (this.searchObject) {
        return this.searchObject.next();
      }

      return false;
    };

    this.previous = async () => {
      if (this.searchObject) {
        return this.searchObject.previous();
      }

      return false;
    };

    this.clear = async () => {
      if (this.searchObject) {
        const result = this.searchObject.clear();
        this.searchObject = undefined;
        return result;
      }

      return false;
    };

    this.searchObject = searchObject;
  }

}

exports.default = SearchModel;
