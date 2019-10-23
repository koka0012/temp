#! /usr/bin/env bash

set -ex

yarn --force

if [[ "$OSTYPE" == "darwin"* ]]; then
  yarn mobile:pod
fi