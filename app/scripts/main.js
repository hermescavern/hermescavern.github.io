/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
(function (window) {
  'use strict';

  var path = window.location.pathname;
  var url = 'vkmm://vkmm.net' + path;
  var openSong = document.getElementById('open-song');
  openSong.href = url;

  openSong.addEventListener('click', function(){
	ga = window.ga;
  	ga('send', 'event', 'link', 'click', path);
  });

  if(path === '/'){
  	openSong.style.display = 'none';
  }

  var apkLink = document.getElementById('apk-link');
  apkLink.addEventListener('click', function(){
  	ga = window.ga;
  	ga('send', 'event', 'apk', 'click');
  });

})(window);
