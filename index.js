'use strict';

class OASS {
  constructor(options) {
    this.components = {};
    this.tags = [];
    this.paths = {};
    Object.assign(this, options);
  }
  tag(options) {
    this.tags.push(options);
  }
  schemas(options) {
    if (!this.components.schemas) {
      this.components.schemas = {};
    }
    Object.assign(this.components.schemas, options)
  }
  path(path, options) {
    this.paths[path] = options;
  }
  get(path, get) {
    if (!this.paths[path]) {
      this.paths[path] = {};
    }
    this.paths[path].get = get;
  }
  post(path, post) {
    if (!this.paths[path]) {
      this.paths[path] = {};
    }
    this.paths[path].post = post;
  }
  put(path, put) {
    if (!this.paths[path]) {
      this.paths[path] = {};
    }
    this.paths[path].put = put;
  }
  delete(path, Delete) {
    if (!this.paths[path]) {
      this.paths[path] = {};
    }
    this.paths[path].delete = Delete;
  }
}

module.exports = OASS;
