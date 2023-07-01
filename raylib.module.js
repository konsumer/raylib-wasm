
const importLocation = document?.location?.toString()


var Module = (() => {
  var _scriptDir = importLocation;
  
  return (
function(Module = {})  {

var Module=typeof Module!="undefined"?Module:{};var readyPromiseResolve,readyPromiseReject;Module["ready"]=new Promise((resolve,reject)=>{readyPromiseResolve=resolve;readyPromiseReject=reject});var moduleOverrides=Object.assign({},Module);var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var ENVIRONMENT_IS_WEB=true;var ENVIRONMENT_IS_WORKER=false;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(_scriptDir){scriptDirectory=_scriptDir}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1)}else{scriptDirectory=""}{read_=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=(url,onload,onerror)=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=()=>{if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=title=>document.title=title}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.error.bind(console);Object.assign(Module,moduleOverrides);moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime=Module["noExitRuntime"]||true;if(typeof WebAssembly!="object"){abort("no native wasm support detected")}var wasmMemory;var ABORT=false;var EXITSTATUS;function assert(condition,text){if(!condition){abort(text)}}var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateMemoryViews(){var b=wasmMemory.buffer;Module["HEAP8"]=HEAP8=new Int8Array(b);Module["HEAP16"]=HEAP16=new Int16Array(b);Module["HEAP32"]=HEAP32=new Int32Array(b);Module["HEAPU8"]=HEAPU8=new Uint8Array(b);Module["HEAPU16"]=HEAPU16=new Uint16Array(b);Module["HEAPU32"]=HEAPU32=new Uint32Array(b);Module["HEAPF32"]=HEAPF32=new Float32Array(b);Module["HEAPF64"]=HEAPF64=new Float64Array(b)}var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATEXIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;var runtimeKeepaliveCounter=0;function keepRuntimeAlive(){return noExitRuntime||runtimeKeepaliveCounter>0}function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;if(!Module["noFSInit"]&&!FS.init.initialized)FS.init();FS.ignorePermissions=false;TTY.init();callRuntimeCallbacks(__ATINIT__)}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function getUniqueRunDependency(id){return id}function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}what="Aborted("+what+")";err(what);ABORT=true;EXITSTATUS=1;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);readyPromiseReject(e);throw e}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}var wasmBinaryFile;if(Module["locateFile"]){wasmBinaryFile="raylib_wasm.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}}else{wasmBinaryFile=new URL("raylib_wasm.wasm",importLocation).href}function getBinary(file){try{if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}catch(err){abort(err)}}function getBinaryPromise(binaryFile){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch=="function"){return fetch(binaryFile,{credentials:"same-origin"}).then(response=>{if(!response["ok"]){throw"failed to load wasm binary file at '"+binaryFile+"'"}return response["arrayBuffer"]()}).catch(()=>getBinary(binaryFile))}}return Promise.resolve().then(()=>getBinary(binaryFile))}function instantiateArrayBuffer(binaryFile,imports,receiver){return getBinaryPromise(binaryFile).then(binary=>{return WebAssembly.instantiate(binary,imports)}).then(instance=>{return instance}).then(receiver,reason=>{err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(binary,binaryFile,imports,callback){if(!binary&&typeof WebAssembly.instantiateStreaming=="function"&&!isDataURI(binaryFile)&&typeof fetch=="function"){return fetch(binaryFile,{credentials:"same-origin"}).then(response=>{var result=WebAssembly.instantiateStreaming(response,imports);return result.then(callback,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(binaryFile,imports,callback)})})}else{return instantiateArrayBuffer(binaryFile,imports,callback)}}function createWasm(){var info={"a":wasmImports};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;wasmMemory=Module["asm"]["He"];updateMemoryViews();wasmTable=Module["asm"]["xo"];addOnInit(Module["asm"]["Ie"]);removeRunDependency("wasm-instantiate");return exports}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){receiveInstance(result["instance"])}if(Module["instantiateWasm"]){try{return Module["instantiateWasm"](info,receiveInstance)}catch(e){err("Module.instantiateWasm callback failed with error: "+e);readyPromiseReject(e)}}instantiateAsync(wasmBinary,wasmBinaryFile,info,receiveInstantiationResult).catch(readyPromiseReject);return{}}var tempDouble;var tempI64;var ASM_CONSTS={86063:()=>{if(typeof window==="undefined"||(window.AudioContext||window.webkitAudioContext)===undefined){return 0}if(typeof window.miniaudio==="undefined"){window.miniaudio={referenceCount:0};miniaudio.devices=[];miniaudio.track_device=function(device){for(var iDevice=0;iDevice<miniaudio.devices.length;++iDevice){if(miniaudio.devices[iDevice]==null){miniaudio.devices[iDevice]=device;return iDevice}}miniaudio.devices.push(device);return miniaudio.devices.length-1};miniaudio.untrack_device_by_index=function(deviceIndex){miniaudio.devices[deviceIndex]=null;while(miniaudio.devices.length>0){if(miniaudio.devices[miniaudio.devices.length-1]==null){miniaudio.devices.pop()}else{break}}};miniaudio.untrack_device=function(device){for(var iDevice=0;iDevice<miniaudio.devices.length;++iDevice){if(miniaudio.devices[iDevice]==device){return miniaudio.untrack_device_by_index(iDevice)}}};miniaudio.get_device_by_index=function(deviceIndex){return miniaudio.devices[deviceIndex]};miniaudio.unlock_event_types=function(){return["touchstart","touchend","click"]}();miniaudio.unlock=function(){for(var i=0;i<miniaudio.devices.length;++i){var device=miniaudio.devices[i];if(device!=null&&device.webaudio!=null&&device.state===2){device.webaudio.resume()}}miniaudio.unlock_event_types.map(function(event_type){document.removeEventListener(event_type,miniaudio.unlock,true)})};miniaudio.unlock_event_types.map(function(event_type){document.addEventListener(event_type,miniaudio.unlock,true)})}window.miniaudio.referenceCount++;return 1},87762:()=>{if(typeof window.miniaudio!=="undefined"){window.miniaudio.referenceCount--;if(window.miniaudio.referenceCount===0){delete window.miniaudio}}},87923:()=>{return navigator.mediaDevices!==undefined&&navigator.mediaDevices.getUserMedia!==undefined},88027:()=>{try{var temp=new(window.AudioContext||window.webkitAudioContext);var sampleRate=temp.sampleRate;temp.close();return sampleRate}catch(e){return 0}},88198:($0,$1,$2,$3,$4,$5)=>{var channels=$0;var sampleRate=$1;var bufferSize=$2;var isCapture=$3;var pDevice=$4;var pAllocationCallbacks=$5;if(typeof window.miniaudio==="undefined"){return-1}var device={};device.webaudio=new(window.AudioContext||window.webkitAudioContext)({sampleRate:sampleRate});device.webaudio.suspend();device.state=1;device.intermediaryBufferSizeInBytes=channels*bufferSize*4;device.intermediaryBuffer=_ma_malloc_emscripten(device.intermediaryBufferSizeInBytes,pAllocationCallbacks);device.intermediaryBufferView=new Float32Array(Module.HEAPF32.buffer,device.intermediaryBuffer,device.intermediaryBufferSizeInBytes);device.scriptNode=device.webaudio.createScriptProcessor(bufferSize,isCapture?channels:0,isCapture?0:channels);if(isCapture){device.scriptNode.onaudioprocess=function(e){if(device.intermediaryBuffer===undefined){return}if(device.intermediaryBufferView.length==0){device.intermediaryBufferView=new Float32Array(Module.HEAPF32.buffer,device.intermediaryBuffer,device.intermediaryBufferSizeInBytes)}for(var iChannel=0;iChannel<e.outputBuffer.numberOfChannels;++iChannel){e.outputBuffer.getChannelData(iChannel).fill(0)}var sendSilence=false;if(device.streamNode===undefined){sendSilence=true}if(e.inputBuffer.numberOfChannels!=channels){console.log("Capture: Channel count mismatch. "+e.inputBufer.numberOfChannels+" != "+channels+". Sending silence.");sendSilence=true}var totalFramesProcessed=0;while(totalFramesProcessed<e.inputBuffer.length){var framesRemaining=e.inputBuffer.length-totalFramesProcessed;var framesToProcess=framesRemaining;if(framesToProcess>device.intermediaryBufferSizeInBytes/channels/4){framesToProcess=device.intermediaryBufferSizeInBytes/channels/4}if(sendSilence){device.intermediaryBufferView.fill(0)}else{for(var iFrame=0;iFrame<framesToProcess;++iFrame){for(var iChannel=0;iChannel<e.inputBuffer.numberOfChannels;++iChannel){device.intermediaryBufferView[iFrame*channels+iChannel]=e.inputBuffer.getChannelData(iChannel)[totalFramesProcessed+iFrame]}}}_ma_device_process_pcm_frames_capture__webaudio(pDevice,framesToProcess,device.intermediaryBuffer);totalFramesProcessed+=framesToProcess}};navigator.mediaDevices.getUserMedia({audio:true,video:false}).then(function(stream){device.streamNode=device.webaudio.createMediaStreamSource(stream);device.streamNode.connect(device.scriptNode);device.scriptNode.connect(device.webaudio.destination)}).catch(function(error){device.scriptNode.connect(device.webaudio.destination)})}else{device.scriptNode.onaudioprocess=function(e){if(device.intermediaryBuffer===undefined){return}if(device.intermediaryBufferView.length==0){device.intermediaryBufferView=new Float32Array(Module.HEAPF32.buffer,device.intermediaryBuffer,device.intermediaryBufferSizeInBytes)}var outputSilence=false;if(e.outputBuffer.numberOfChannels!=channels){console.log("Playback: Channel count mismatch. "+e.outputBufer.numberOfChannels+" != "+channels+". Outputting silence.");outputSilence=true;return}var totalFramesProcessed=0;while(totalFramesProcessed<e.outputBuffer.length){var framesRemaining=e.outputBuffer.length-totalFramesProcessed;var framesToProcess=framesRemaining;if(framesToProcess>device.intermediaryBufferSizeInBytes/channels/4){framesToProcess=device.intermediaryBufferSizeInBytes/channels/4}_ma_device_process_pcm_frames_playback__webaudio(pDevice,framesToProcess,device.intermediaryBuffer);if(outputSilence){for(var iChannel=0;iChannel<e.outputBuffer.numberOfChannels;++iChannel){e.outputBuffer.getChannelData(iChannel).fill(0)}}else{for(var iChannel=0;iChannel<e.outputBuffer.numberOfChannels;++iChannel){var outputBuffer=e.outputBuffer.getChannelData(iChannel);var intermediaryBuffer=device.intermediaryBufferView;for(var iFrame=0;iFrame<framesToProcess;++iFrame){outputBuffer[totalFramesProcessed+iFrame]=intermediaryBuffer[iFrame*channels+iChannel]}}}totalFramesProcessed+=framesToProcess}};device.scriptNode.connect(device.webaudio.destination)}return miniaudio.track_device(device)},92548:$0=>{return miniaudio.get_device_by_index($0).webaudio.sampleRate},92614:($0,$1,$2,$3)=>{var device=miniaudio.get_device_by_index($0);var pAllocationCallbacks=$3;if(device.scriptNode!==undefined){device.scriptNode.onaudioprocess=function(e){};device.scriptNode.disconnect();device.scriptNode=undefined}if(device.streamNode!==undefined){device.streamNode.disconnect();device.streamNode=undefined}device.webaudio.close();device.webaudio=undefined;if(device.intermediaryBuffer!==undefined){_ma_free_emscripten(device.intermediaryBuffer,pAllocationCallbacks);device.intermediaryBuffer=undefined;device.intermediaryBufferView=undefined;device.intermediaryBufferSizeInBytes=undefined}miniaudio.untrack_device_by_index($0)},93300:$0=>{var device=miniaudio.get_device_by_index($0);device.webaudio.resume();device.state=2},93396:$0=>{var device=miniaudio.get_device_by_index($0);device.webaudio.resume();device.state=2},93492:$0=>{var device=miniaudio.get_device_by_index($0);device.webaudio.suspend();device.state=1},93589:$0=>{var device=miniaudio.get_device_by_index($0);device.webaudio.suspend();device.state=1}};function ExitStatus(status){this.name="ExitStatus";this.message=`Program terminated with exit(${status})`;this.status=status}function callRuntimeCallbacks(callbacks){while(callbacks.length>0){callbacks.shift()(Module)}}function getValue(ptr,type="i8"){if(type.endsWith("*"))type="*";switch(type){case"i1":return HEAP8[ptr>>0];case"i8":return HEAP8[ptr>>0];case"i16":return HEAP16[ptr>>1];case"i32":return HEAP32[ptr>>2];case"i64":return HEAP32[ptr>>2];case"float":return HEAPF32[ptr>>2];case"double":return HEAPF64[ptr>>3];case"*":return HEAPU32[ptr>>2];default:abort(`invalid type for getValue: ${type}`)}}function setValue(ptr,value,type="i8"){if(type.endsWith("*"))type="*";switch(type){case"i1":HEAP8[ptr>>0]=value;break;case"i8":HEAP8[ptr>>0]=value;break;case"i16":HEAP16[ptr>>1]=value;break;case"i32":HEAP32[ptr>>2]=value;break;case"i64":tempI64=[value>>>0,(tempDouble=value,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[ptr>>2]=tempI64[0],HEAP32[ptr+4>>2]=tempI64[1];break;case"float":HEAPF32[ptr>>2]=value;break;case"double":HEAPF64[ptr>>3]=value;break;case"*":HEAPU32[ptr>>2]=value;break;default:abort(`invalid type for setValue: ${type}`)}}var UTF8Decoder=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(heapOrArray,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heapOrArray[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.subarray(idx,endPtr))}var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}function ___assert_fail(condition,filename,line,func){abort(`Assertion failed: ${UTF8ToString(condition)}, at: `+[filename?UTF8ToString(filename):"unknown filename",line,func?UTF8ToString(func):"unknown function"])}var PATH={isAbs:path=>path.charAt(0)==="/",splitPath:filename=>{var splitPathRe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return splitPathRe.exec(filename).slice(1)},normalizeArray:(parts,allowAboveRoot)=>{var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1)}else if(last===".."){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){for(;up;up--){parts.unshift("..")}}return parts},normalize:path=>{var isAbsolute=PATH.isAbs(path),trailingSlash=path.substr(-1)==="/";path=PATH.normalizeArray(path.split("/").filter(p=>!!p),!isAbsolute).join("/");if(!path&&!isAbsolute){path="."}if(path&&trailingSlash){path+="/"}return(isAbsolute?"/":"")+path},dirname:path=>{var result=PATH.splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){return"."}if(dir){dir=dir.substr(0,dir.length-1)}return root+dir},basename:path=>{if(path==="/")return"/";path=PATH.normalize(path);path=path.replace(/\/$/,"");var lastSlash=path.lastIndexOf("/");if(lastSlash===-1)return path;return path.substr(lastSlash+1)},join:function(){var paths=Array.prototype.slice.call(arguments);return PATH.normalize(paths.join("/"))},join2:(l,r)=>{return PATH.normalize(l+"/"+r)}};function initRandomFill(){if(typeof crypto=="object"&&typeof crypto["getRandomValues"]=="function"){return view=>crypto.getRandomValues(view)}else abort("initRandomDevice")}function randomFill(view){return(randomFill=initRandomFill())(view)}var PATH_FS={resolve:function(){var resolvedPath="",resolvedAbsolute=false;for(var i=arguments.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?arguments[i]:FS.cwd();if(typeof path!="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){return""}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=PATH.isAbs(path)}resolvedPath=PATH.normalizeArray(resolvedPath.split("/").filter(p=>!!p),!resolvedAbsolute).join("/");return(resolvedAbsolute?"/":"")+resolvedPath||"."},relative:(from,to)=>{from=PATH_FS.resolve(from).substr(1);to=PATH_FS.resolve(to).substr(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..")}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")}};function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var c=str.charCodeAt(i);if(c<=127){len++}else if(c<=2047){len+=2}else if(c>=55296&&c<=57343){len+=4;++i}else{len+=3}}return len}function stringToUTF8Array(str,heap,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023}if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}}heap[outIdx]=0;return outIdx-startIdx}function intArrayFromString(stringy,dontAddNull,length){var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array}var TTY={ttys:[],init:function(){},shutdown:function(){},register:function(dev,ops){TTY.ttys[dev]={input:[],output:[],ops:ops};FS.registerDevice(dev,TTY.stream_ops)},stream_ops:{open:function(stream){var tty=TTY.ttys[stream.node.rdev];if(!tty){throw new FS.ErrnoError(43)}stream.tty=tty;stream.seekable=false},close:function(stream){stream.tty.ops.fsync(stream.tty)},fsync:function(stream){stream.tty.ops.fsync(stream.tty)},read:function(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.get_char){throw new FS.ErrnoError(60)}var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=stream.tty.ops.get_char(stream.tty)}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.timestamp=Date.now()}return bytesRead},write:function(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.put_char){throw new FS.ErrnoError(60)}try{for(var i=0;i<length;i++){stream.tty.ops.put_char(stream.tty,buffer[offset+i])}}catch(e){throw new FS.ErrnoError(29)}if(length){stream.node.timestamp=Date.now()}return i}},default_tty_ops:{get_char:function(tty){if(!tty.input.length){var result=null;if(typeof window!="undefined"&&typeof window.prompt=="function"){result=window.prompt("Input: ");if(result!==null){result+="\n"}}else if(typeof readline=="function"){result=readline();if(result!==null){result+="\n"}}if(!result){return null}tty.input=intArrayFromString(result,true)}return tty.input.shift()},put_char:function(tty,val){if(val===null||val===10){out(UTF8ArrayToString(tty.output,0));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync:function(tty){if(tty.output&&tty.output.length>0){out(UTF8ArrayToString(tty.output,0));tty.output=[]}}},default_tty1_ops:{put_char:function(tty,val){if(val===null||val===10){err(UTF8ArrayToString(tty.output,0));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync:function(tty){if(tty.output&&tty.output.length>0){err(UTF8ArrayToString(tty.output,0));tty.output=[]}}}};function mmapAlloc(size){abort()}var MEMFS={ops_table:null,mount:function(mount){return MEMFS.createNode(null,"/",16384|511,0)},createNode:function(parent,name,mode,dev){if(FS.isBlkdev(mode)||FS.isFIFO(mode)){throw new FS.ErrnoError(63)}if(!MEMFS.ops_table){MEMFS.ops_table={dir:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,lookup:MEMFS.node_ops.lookup,mknod:MEMFS.node_ops.mknod,rename:MEMFS.node_ops.rename,unlink:MEMFS.node_ops.unlink,rmdir:MEMFS.node_ops.rmdir,readdir:MEMFS.node_ops.readdir,symlink:MEMFS.node_ops.symlink},stream:{llseek:MEMFS.stream_ops.llseek}},file:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:{llseek:MEMFS.stream_ops.llseek,read:MEMFS.stream_ops.read,write:MEMFS.stream_ops.write,allocate:MEMFS.stream_ops.allocate,mmap:MEMFS.stream_ops.mmap,msync:MEMFS.stream_ops.msync}},link:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,readlink:MEMFS.node_ops.readlink},stream:{}},chrdev:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:FS.chrdev_stream_ops}}}var node=FS.createNode(parent,name,mode,dev);if(FS.isDir(node.mode)){node.node_ops=MEMFS.ops_table.dir.node;node.stream_ops=MEMFS.ops_table.dir.stream;node.contents={}}else if(FS.isFile(node.mode)){node.node_ops=MEMFS.ops_table.file.node;node.stream_ops=MEMFS.ops_table.file.stream;node.usedBytes=0;node.contents=null}else if(FS.isLink(node.mode)){node.node_ops=MEMFS.ops_table.link.node;node.stream_ops=MEMFS.ops_table.link.stream}else if(FS.isChrdev(node.mode)){node.node_ops=MEMFS.ops_table.chrdev.node;node.stream_ops=MEMFS.ops_table.chrdev.stream}node.timestamp=Date.now();if(parent){parent.contents[name]=node;parent.timestamp=node.timestamp}return node},getFileDataAsTypedArray:function(node){if(!node.contents)return new Uint8Array(0);if(node.contents.subarray)return node.contents.subarray(0,node.usedBytes);return new Uint8Array(node.contents)},expandFileStorage:function(node,newCapacity){var prevCapacity=node.contents?node.contents.length:0;if(prevCapacity>=newCapacity)return;var CAPACITY_DOUBLING_MAX=1024*1024;newCapacity=Math.max(newCapacity,prevCapacity*(prevCapacity<CAPACITY_DOUBLING_MAX?2:1.125)>>>0);if(prevCapacity!=0)newCapacity=Math.max(newCapacity,256);var oldContents=node.contents;node.contents=new Uint8Array(newCapacity);if(node.usedBytes>0)node.contents.set(oldContents.subarray(0,node.usedBytes),0)},resizeFileStorage:function(node,newSize){if(node.usedBytes==newSize)return;if(newSize==0){node.contents=null;node.usedBytes=0}else{var oldContents=node.contents;node.contents=new Uint8Array(newSize);if(oldContents){node.contents.set(oldContents.subarray(0,Math.min(newSize,node.usedBytes)))}node.usedBytes=newSize}},node_ops:{getattr:function(node){var attr={};attr.dev=FS.isChrdev(node.mode)?node.id:1;attr.ino=node.id;attr.mode=node.mode;attr.nlink=1;attr.uid=0;attr.gid=0;attr.rdev=node.rdev;if(FS.isDir(node.mode)){attr.size=4096}else if(FS.isFile(node.mode)){attr.size=node.usedBytes}else if(FS.isLink(node.mode)){attr.size=node.link.length}else{attr.size=0}attr.atime=new Date(node.timestamp);attr.mtime=new Date(node.timestamp);attr.ctime=new Date(node.timestamp);attr.blksize=4096;attr.blocks=Math.ceil(attr.size/attr.blksize);return attr},setattr:function(node,attr){if(attr.mode!==undefined){node.mode=attr.mode}if(attr.timestamp!==undefined){node.timestamp=attr.timestamp}if(attr.size!==undefined){MEMFS.resizeFileStorage(node,attr.size)}},lookup:function(parent,name){throw FS.genericErrors[44]},mknod:function(parent,name,mode,dev){return MEMFS.createNode(parent,name,mode,dev)},rename:function(old_node,new_dir,new_name){if(FS.isDir(old_node.mode)){var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(new_node){for(var i in new_node.contents){throw new FS.ErrnoError(55)}}}delete old_node.parent.contents[old_node.name];old_node.parent.timestamp=Date.now();old_node.name=new_name;new_dir.contents[new_name]=old_node;new_dir.timestamp=old_node.parent.timestamp;old_node.parent=new_dir},unlink:function(parent,name){delete parent.contents[name];parent.timestamp=Date.now()},rmdir:function(parent,name){var node=FS.lookupNode(parent,name);for(var i in node.contents){throw new FS.ErrnoError(55)}delete parent.contents[name];parent.timestamp=Date.now()},readdir:function(node){var entries=[".",".."];for(var key in node.contents){if(!node.contents.hasOwnProperty(key)){continue}entries.push(key)}return entries},symlink:function(parent,newname,oldpath){var node=MEMFS.createNode(parent,newname,511|40960,0);node.link=oldpath;return node},readlink:function(node){if(!FS.isLink(node.mode)){throw new FS.ErrnoError(28)}return node.link}},stream_ops:{read:function(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=stream.node.usedBytes)return 0;var size=Math.min(stream.node.usedBytes-position,length);if(size>8&&contents.subarray){buffer.set(contents.subarray(position,position+size),offset)}else{for(var i=0;i<size;i++)buffer[offset+i]=contents[position+i]}return size},write:function(stream,buffer,offset,length,position,canOwn){if(buffer.buffer===HEAP8.buffer){canOwn=false}if(!length)return 0;var node=stream.node;node.timestamp=Date.now();if(buffer.subarray&&(!node.contents||node.contents.subarray)){if(canOwn){node.contents=buffer.subarray(offset,offset+length);node.usedBytes=length;return length}else if(node.usedBytes===0&&position===0){node.contents=buffer.slice(offset,offset+length);node.usedBytes=length;return length}else if(position+length<=node.usedBytes){node.contents.set(buffer.subarray(offset,offset+length),position);return length}}MEMFS.expandFileStorage(node,position+length);if(node.contents.subarray&&buffer.subarray){node.contents.set(buffer.subarray(offset,offset+length),position)}else{for(var i=0;i<length;i++){node.contents[position+i]=buffer[offset+i]}}node.usedBytes=Math.max(node.usedBytes,position+length);return length},llseek:function(stream,offset,whence){var position=offset;if(whence===1){position+=stream.position}else if(whence===2){if(FS.isFile(stream.node.mode)){position+=stream.node.usedBytes}}if(position<0){throw new FS.ErrnoError(28)}return position},allocate:function(stream,offset,length){MEMFS.expandFileStorage(stream.node,offset+length);stream.node.usedBytes=Math.max(stream.node.usedBytes,offset+length)},mmap:function(stream,length,position,prot,flags){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}var ptr;var allocated;var contents=stream.node.contents;if(!(flags&2)&&contents.buffer===HEAP8.buffer){allocated=false;ptr=contents.byteOffset}else{if(position>0||position+length<contents.length){if(contents.subarray){contents=contents.subarray(position,position+length)}else{contents=Array.prototype.slice.call(contents,position,position+length)}}allocated=true;ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}HEAP8.set(contents,ptr)}return{ptr:ptr,allocated:allocated}},msync:function(stream,buffer,offset,length,mmapFlags){MEMFS.stream_ops.write(stream,buffer,0,length,offset,false);return 0}}};function asyncLoad(url,onload,onerror,noRunDep){var dep=!noRunDep?getUniqueRunDependency(`al ${url}`):"";readAsync(url,arrayBuffer=>{assert(arrayBuffer,`Loading data file "${url}" failed (no arrayBuffer).`);onload(new Uint8Array(arrayBuffer));if(dep)removeRunDependency(dep)},event=>{if(onerror){onerror()}else{throw`Loading data file "${url}" failed.`}});if(dep)addRunDependency(dep)}var preloadPlugins=Module["preloadPlugins"]||[];function FS_handledByPreloadPlugin(byteArray,fullname,finish,onerror){if(typeof Browser!="undefined")Browser.init();var handled=false;preloadPlugins.forEach(function(plugin){if(handled)return;if(plugin["canHandle"](fullname)){plugin["handle"](byteArray,fullname,finish,onerror);handled=true}});return handled}function FS_createPreloadedFile(parent,name,url,canRead,canWrite,onload,onerror,dontCreateFile,canOwn,preFinish){var fullname=name?PATH_FS.resolve(PATH.join2(parent,name)):parent;var dep=getUniqueRunDependency(`cp ${fullname}`);function processData(byteArray){function finish(byteArray){if(preFinish)preFinish();if(!dontCreateFile){FS.createDataFile(parent,name,byteArray,canRead,canWrite,canOwn)}if(onload)onload();removeRunDependency(dep)}if(FS_handledByPreloadPlugin(byteArray,fullname,finish,()=>{if(onerror)onerror();removeRunDependency(dep)})){return}finish(byteArray)}addRunDependency(dep);if(typeof url=="string"){asyncLoad(url,byteArray=>processData(byteArray),onerror)}else{processData(url)}}function FS_modeStringToFlags(str){var flagModes={"r":0,"r+":2,"w":512|64|1,"w+":512|64|2,"a":1024|64|1,"a+":1024|64|2};var flags=flagModes[str];if(typeof flags=="undefined"){throw new Error(`Unknown file open mode: ${str}`)}return flags}function FS_getMode(canRead,canWrite){var mode=0;if(canRead)mode|=292|73;if(canWrite)mode|=146;return mode}var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:(path,opts={})=>{path=PATH_FS.resolve(path);if(!path)return{path:"",node:null};var defaults={follow_mount:true,recurse_count:0};opts=Object.assign(defaults,opts);if(opts.recurse_count>8){throw new FS.ErrnoError(32)}var parts=path.split("/").filter(p=>!!p);var current=FS.root;var current_path="/";for(var i=0;i<parts.length;i++){var islast=i===parts.length-1;if(islast&&opts.parent){break}current=FS.lookupNode(current,parts[i]);current_path=PATH.join2(current_path,parts[i]);if(FS.isMountpoint(current)){if(!islast||islast&&opts.follow_mount){current=current.mounted.root}}if(!islast||opts.follow){var count=0;while(FS.isLink(current.mode)){var link=FS.readlink(current_path);current_path=PATH_FS.resolve(PATH.dirname(current_path),link);var lookup=FS.lookupPath(current_path,{recurse_count:opts.recurse_count+1});current=lookup.node;if(count++>40){throw new FS.ErrnoError(32)}}}}return{path:current_path,node:current}},getPath:node=>{var path;while(true){if(FS.isRoot(node)){var mount=node.mount.mountpoint;if(!path)return mount;return mount[mount.length-1]!=="/"?`${mount}/${path}`:mount+path}path=path?`${node.name}/${path}`:node.name;node=node.parent}},hashName:(parentid,name)=>{var hash=0;for(var i=0;i<name.length;i++){hash=(hash<<5)-hash+name.charCodeAt(i)|0}return(parentid+hash>>>0)%FS.nameTable.length},hashAddNode:node=>{var hash=FS.hashName(node.parent.id,node.name);node.name_next=FS.nameTable[hash];FS.nameTable[hash]=node},hashRemoveNode:node=>{var hash=FS.hashName(node.parent.id,node.name);if(FS.nameTable[hash]===node){FS.nameTable[hash]=node.name_next}else{var current=FS.nameTable[hash];while(current){if(current.name_next===node){current.name_next=node.name_next;break}current=current.name_next}}},lookupNode:(parent,name)=>{var errCode=FS.mayLookup(parent);if(errCode){throw new FS.ErrnoError(errCode,parent)}var hash=FS.hashName(parent.id,name);for(var node=FS.nameTable[hash];node;node=node.name_next){var nodeName=node.name;if(node.parent.id===parent.id&&nodeName===name){return node}}return FS.lookup(parent,name)},createNode:(parent,name,mode,rdev)=>{var node=new FS.FSNode(parent,name,mode,rdev);FS.hashAddNode(node);return node},destroyNode:node=>{FS.hashRemoveNode(node)},isRoot:node=>{return node===node.parent},isMountpoint:node=>{return!!node.mounted},isFile:mode=>{return(mode&61440)===32768},isDir:mode=>{return(mode&61440)===16384},isLink:mode=>{return(mode&61440)===40960},isChrdev:mode=>{return(mode&61440)===8192},isBlkdev:mode=>{return(mode&61440)===24576},isFIFO:mode=>{return(mode&61440)===4096},isSocket:mode=>{return(mode&49152)===49152},flagsToPermissionString:flag=>{var perms=["r","w","rw"][flag&3];if(flag&512){perms+="w"}return perms},nodePermissions:(node,perms)=>{if(FS.ignorePermissions){return 0}if(perms.includes("r")&&!(node.mode&292)){return 2}else if(perms.includes("w")&&!(node.mode&146)){return 2}else if(perms.includes("x")&&!(node.mode&73)){return 2}return 0},mayLookup:dir=>{var errCode=FS.nodePermissions(dir,"x");if(errCode)return errCode;if(!dir.node_ops.lookup)return 2;return 0},mayCreate:(dir,name)=>{try{var node=FS.lookupNode(dir,name);return 20}catch(e){}return FS.nodePermissions(dir,"wx")},mayDelete:(dir,name,isdir)=>{var node;try{node=FS.lookupNode(dir,name)}catch(e){return e.errno}var errCode=FS.nodePermissions(dir,"wx");if(errCode){return errCode}if(isdir){if(!FS.isDir(node.mode)){return 54}if(FS.isRoot(node)||FS.getPath(node)===FS.cwd()){return 10}}else{if(FS.isDir(node.mode)){return 31}}return 0},mayOpen:(node,flags)=>{if(!node){return 44}if(FS.isLink(node.mode)){return 32}else if(FS.isDir(node.mode)){if(FS.flagsToPermissionString(flags)!=="r"||flags&512){return 31}}return FS.nodePermissions(node,FS.flagsToPermissionString(flags))},MAX_OPEN_FDS:4096,nextfd:()=>{for(var fd=0;fd<=FS.MAX_OPEN_FDS;fd++){if(!FS.streams[fd]){return fd}}throw new FS.ErrnoError(33)},getStream:fd=>FS.streams[fd],createStream:(stream,fd=-1)=>{if(!FS.FSStream){FS.FSStream=function(){this.shared={}};FS.FSStream.prototype={};Object.defineProperties(FS.FSStream.prototype,{object:{get:function(){return this.node},set:function(val){this.node=val}},isRead:{get:function(){return(this.flags&2097155)!==1}},isWrite:{get:function(){return(this.flags&2097155)!==0}},isAppend:{get:function(){return this.flags&1024}},flags:{get:function(){return this.shared.flags},set:function(val){this.shared.flags=val}},position:{get:function(){return this.shared.position},set:function(val){this.shared.position=val}}})}stream=Object.assign(new FS.FSStream,stream);if(fd==-1){fd=FS.nextfd()}stream.fd=fd;FS.streams[fd]=stream;return stream},closeStream:fd=>{FS.streams[fd]=null},chrdev_stream_ops:{open:stream=>{var device=FS.getDevice(stream.node.rdev);stream.stream_ops=device.stream_ops;if(stream.stream_ops.open){stream.stream_ops.open(stream)}},llseek:()=>{throw new FS.ErrnoError(70)}},major:dev=>dev>>8,minor:dev=>dev&255,makedev:(ma,mi)=>ma<<8|mi,registerDevice:(dev,ops)=>{FS.devices[dev]={stream_ops:ops}},getDevice:dev=>FS.devices[dev],getMounts:mount=>{var mounts=[];var check=[mount];while(check.length){var m=check.pop();mounts.push(m);check.push.apply(check,m.mounts)}return mounts},syncfs:(populate,callback)=>{if(typeof populate=="function"){callback=populate;populate=false}FS.syncFSRequests++;if(FS.syncFSRequests>1){err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`)}var mounts=FS.getMounts(FS.root.mount);var completed=0;function doCallback(errCode){FS.syncFSRequests--;return callback(errCode)}function done(errCode){if(errCode){if(!done.errored){done.errored=true;return doCallback(errCode)}return}if(++completed>=mounts.length){doCallback(null)}}mounts.forEach(mount=>{if(!mount.type.syncfs){return done(null)}mount.type.syncfs(mount,populate,done)})},mount:(type,opts,mountpoint)=>{var root=mountpoint==="/";var pseudo=!mountpoint;var node;if(root&&FS.root){throw new FS.ErrnoError(10)}else if(!root&&!pseudo){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});mountpoint=lookup.path;node=lookup.node;if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}if(!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}}var mount={type:type,opts:opts,mountpoint:mountpoint,mounts:[]};var mountRoot=type.mount(mount);mountRoot.mount=mount;mount.root=mountRoot;if(root){FS.root=mountRoot}else if(node){node.mounted=mount;if(node.mount){node.mount.mounts.push(mount)}}return mountRoot},unmount:mountpoint=>{var lookup=FS.lookupPath(mountpoint,{follow_mount:false});if(!FS.isMountpoint(lookup.node)){throw new FS.ErrnoError(28)}var node=lookup.node;var mount=node.mounted;var mounts=FS.getMounts(mount);Object.keys(FS.nameTable).forEach(hash=>{var current=FS.nameTable[hash];while(current){var next=current.name_next;if(mounts.includes(current.mount)){FS.destroyNode(current)}current=next}});node.mounted=null;var idx=node.mount.mounts.indexOf(mount);node.mount.mounts.splice(idx,1)},lookup:(parent,name)=>{return parent.node_ops.lookup(parent,name)},mknod:(path,mode,dev)=>{var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);if(!name||name==="."||name===".."){throw new FS.ErrnoError(28)}var errCode=FS.mayCreate(parent,name);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.mknod){throw new FS.ErrnoError(63)}return parent.node_ops.mknod(parent,name,mode,dev)},create:(path,mode)=>{mode=mode!==undefined?mode:438;mode&=4095;mode|=32768;return FS.mknod(path,mode,0)},mkdir:(path,mode)=>{mode=mode!==undefined?mode:511;mode&=511|512;mode|=16384;return FS.mknod(path,mode,0)},mkdirTree:(path,mode)=>{var dirs=path.split("/");var d="";for(var i=0;i<dirs.length;++i){if(!dirs[i])continue;d+="/"+dirs[i];try{FS.mkdir(d,mode)}catch(e){if(e.errno!=20)throw e}}},mkdev:(path,mode,dev)=>{if(typeof dev=="undefined"){dev=mode;mode=438}mode|=8192;return FS.mknod(path,mode,dev)},symlink:(oldpath,newpath)=>{if(!PATH_FS.resolve(oldpath)){throw new FS.ErrnoError(44)}var lookup=FS.lookupPath(newpath,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var newname=PATH.basename(newpath);var errCode=FS.mayCreate(parent,newname);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.symlink){throw new FS.ErrnoError(63)}return parent.node_ops.symlink(parent,newname,oldpath)},rename:(old_path,new_path)=>{var old_dirname=PATH.dirname(old_path);var new_dirname=PATH.dirname(new_path);var old_name=PATH.basename(old_path);var new_name=PATH.basename(new_path);var lookup,old_dir,new_dir;lookup=FS.lookupPath(old_path,{parent:true});old_dir=lookup.node;lookup=FS.lookupPath(new_path,{parent:true});new_dir=lookup.node;if(!old_dir||!new_dir)throw new FS.ErrnoError(44);if(old_dir.mount!==new_dir.mount){throw new FS.ErrnoError(75)}var old_node=FS.lookupNode(old_dir,old_name);var relative=PATH_FS.relative(old_path,new_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(28)}relative=PATH_FS.relative(new_path,old_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(55)}var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(old_node===new_node){return}var isdir=FS.isDir(old_node.mode);var errCode=FS.mayDelete(old_dir,old_name,isdir);if(errCode){throw new FS.ErrnoError(errCode)}errCode=new_node?FS.mayDelete(new_dir,new_name,isdir):FS.mayCreate(new_dir,new_name);if(errCode){throw new FS.ErrnoError(errCode)}if(!old_dir.node_ops.rename){throw new FS.ErrnoError(63)}if(FS.isMountpoint(old_node)||new_node&&FS.isMountpoint(new_node)){throw new FS.ErrnoError(10)}if(new_dir!==old_dir){errCode=FS.nodePermissions(old_dir,"w");if(errCode){throw new FS.ErrnoError(errCode)}}FS.hashRemoveNode(old_node);try{old_dir.node_ops.rename(old_node,new_dir,new_name)}catch(e){throw e}finally{FS.hashAddNode(old_node)}},rmdir:path=>{var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,true);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.rmdir){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.rmdir(parent,name);FS.destroyNode(node)},readdir:path=>{var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;if(!node.node_ops.readdir){throw new FS.ErrnoError(54)}return node.node_ops.readdir(node)},unlink:path=>{var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,false);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.unlink){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.unlink(parent,name);FS.destroyNode(node)},readlink:path=>{var lookup=FS.lookupPath(path);var link=lookup.node;if(!link){throw new FS.ErrnoError(44)}if(!link.node_ops.readlink){throw new FS.ErrnoError(28)}return PATH_FS.resolve(FS.getPath(link.parent),link.node_ops.readlink(link))},stat:(path,dontFollow)=>{var lookup=FS.lookupPath(path,{follow:!dontFollow});var node=lookup.node;if(!node){throw new FS.ErrnoError(44)}if(!node.node_ops.getattr){throw new FS.ErrnoError(63)}return node.node_ops.getattr(node)},lstat:path=>{return FS.stat(path,true)},chmod:(path,mode,dontFollow)=>{var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}if(!node.node_ops.setattr){throw new FS.ErrnoError(63)}node.node_ops.setattr(node,{mode:mode&4095|node.mode&~4095,timestamp:Date.now()})},lchmod:(path,mode)=>{FS.chmod(path,mode,true)},fchmod:(fd,mode)=>{var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(8)}FS.chmod(stream.node,mode)},chown:(path,uid,gid,dontFollow)=>{var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}if(!node.node_ops.setattr){throw new FS.ErrnoError(63)}node.node_ops.setattr(node,{timestamp:Date.now()})},lchown:(path,uid,gid)=>{FS.chown(path,uid,gid,true)},fchown:(fd,uid,gid)=>{var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(8)}FS.chown(stream.node,uid,gid)},truncate:(path,len)=>{if(len<0){throw new FS.ErrnoError(28)}var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:true});node=lookup.node}else{node=path}if(!node.node_ops.setattr){throw new FS.ErrnoError(63)}if(FS.isDir(node.mode)){throw new FS.ErrnoError(31)}if(!FS.isFile(node.mode)){throw new FS.ErrnoError(28)}var errCode=FS.nodePermissions(node,"w");if(errCode){throw new FS.ErrnoError(errCode)}node.node_ops.setattr(node,{size:len,timestamp:Date.now()})},ftruncate:(fd,len)=>{var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(28)}FS.truncate(stream.node,len)},utime:(path,atime,mtime)=>{var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;node.node_ops.setattr(node,{timestamp:Math.max(atime,mtime)})},open:(path,flags,mode)=>{if(path===""){throw new FS.ErrnoError(44)}flags=typeof flags=="string"?FS_modeStringToFlags(flags):flags;mode=typeof mode=="undefined"?438:mode;if(flags&64){mode=mode&4095|32768}else{mode=0}var node;if(typeof path=="object"){node=path}else{path=PATH.normalize(path);try{var lookup=FS.lookupPath(path,{follow:!(flags&131072)});node=lookup.node}catch(e){}}var created=false;if(flags&64){if(node){if(flags&128){throw new FS.ErrnoError(20)}}else{node=FS.mknod(path,mode,0);created=true}}if(!node){throw new FS.ErrnoError(44)}if(FS.isChrdev(node.mode)){flags&=~512}if(flags&65536&&!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}if(!created){var errCode=FS.mayOpen(node,flags);if(errCode){throw new FS.ErrnoError(errCode)}}if(flags&512&&!created){FS.truncate(node,0)}flags&=~(128|512|131072);var stream=FS.createStream({node:node,path:FS.getPath(node),flags:flags,seekable:true,position:0,stream_ops:node.stream_ops,ungotten:[],error:false});if(stream.stream_ops.open){stream.stream_ops.open(stream)}if(Module["logReadFiles"]&&!(flags&1)){if(!FS.readFiles)FS.readFiles={};if(!(path in FS.readFiles)){FS.readFiles[path]=1}}return stream},close:stream=>{if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(stream.getdents)stream.getdents=null;try{if(stream.stream_ops.close){stream.stream_ops.close(stream)}}catch(e){throw e}finally{FS.closeStream(stream.fd)}stream.fd=null},isClosed:stream=>{return stream.fd===null},llseek:(stream,offset,whence)=>{if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(!stream.seekable||!stream.stream_ops.llseek){throw new FS.ErrnoError(70)}if(whence!=0&&whence!=1&&whence!=2){throw new FS.ErrnoError(28)}stream.position=stream.stream_ops.llseek(stream,offset,whence);stream.ungotten=[];return stream.position},read:(stream,buffer,offset,length,position)=>{if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.read){throw new FS.ErrnoError(28)}var seeking=typeof position!="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesRead=stream.stream_ops.read(stream,buffer,offset,length,position);if(!seeking)stream.position+=bytesRead;return bytesRead},write:(stream,buffer,offset,length,position,canOwn)=>{if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.write){throw new FS.ErrnoError(28)}if(stream.seekable&&stream.flags&1024){FS.llseek(stream,0,2)}var seeking=typeof position!="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesWritten=stream.stream_ops.write(stream,buffer,offset,length,position,canOwn);if(!seeking)stream.position+=bytesWritten;return bytesWritten},allocate:(stream,offset,length)=>{if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(offset<0||length<=0){throw new FS.ErrnoError(28)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(8)}if(!FS.isFile(stream.node.mode)&&!FS.isDir(stream.node.mode)){throw new FS.ErrnoError(43)}if(!stream.stream_ops.allocate){throw new FS.ErrnoError(138)}stream.stream_ops.allocate(stream,offset,length)},mmap:(stream,length,position,prot,flags)=>{if((prot&2)!==0&&(flags&2)===0&&(stream.flags&2097155)!==2){throw new FS.ErrnoError(2)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(2)}if(!stream.stream_ops.mmap){throw new FS.ErrnoError(43)}return stream.stream_ops.mmap(stream,length,position,prot,flags)},msync:(stream,buffer,offset,length,mmapFlags)=>{if(!stream.stream_ops.msync){return 0}return stream.stream_ops.msync(stream,buffer,offset,length,mmapFlags)},munmap:stream=>0,ioctl:(stream,cmd,arg)=>{if(!stream.stream_ops.ioctl){throw new FS.ErrnoError(59)}return stream.stream_ops.ioctl(stream,cmd,arg)},readFile:(path,opts={})=>{opts.flags=opts.flags||0;opts.encoding=opts.encoding||"binary";if(opts.encoding!=="utf8"&&opts.encoding!=="binary"){throw new Error(`Invalid encoding type "${opts.encoding}"`)}var ret;var stream=FS.open(path,opts.flags);var stat=FS.stat(path);var length=stat.size;var buf=new Uint8Array(length);FS.read(stream,buf,0,length,0);if(opts.encoding==="utf8"){ret=UTF8ArrayToString(buf,0)}else if(opts.encoding==="binary"){ret=buf}FS.close(stream);return ret},writeFile:(path,data,opts={})=>{opts.flags=opts.flags||577;var stream=FS.open(path,opts.flags,opts.mode);if(typeof data=="string"){var buf=new Uint8Array(lengthBytesUTF8(data)+1);var actualNumBytes=stringToUTF8Array(data,buf,0,buf.length);FS.write(stream,buf,0,actualNumBytes,undefined,opts.canOwn)}else if(ArrayBuffer.isView(data)){FS.write(stream,data,0,data.byteLength,undefined,opts.canOwn)}else{throw new Error("Unsupported data type")}FS.close(stream)},cwd:()=>FS.currentPath,chdir:path=>{var lookup=FS.lookupPath(path,{follow:true});if(lookup.node===null){throw new FS.ErrnoError(44)}if(!FS.isDir(lookup.node.mode)){throw new FS.ErrnoError(54)}var errCode=FS.nodePermissions(lookup.node,"x");if(errCode){throw new FS.ErrnoError(errCode)}FS.currentPath=lookup.path},createDefaultDirectories:()=>{FS.mkdir("/tmp");FS.mkdir("/home");FS.mkdir("/home/web_user")},createDefaultDevices:()=>{FS.mkdir("/dev");FS.registerDevice(FS.makedev(1,3),{read:()=>0,write:(stream,buffer,offset,length,pos)=>length});FS.mkdev("/dev/null",FS.makedev(1,3));TTY.register(FS.makedev(5,0),TTY.default_tty_ops);TTY.register(FS.makedev(6,0),TTY.default_tty1_ops);FS.mkdev("/dev/tty",FS.makedev(5,0));FS.mkdev("/dev/tty1",FS.makedev(6,0));var randomBuffer=new Uint8Array(1024),randomLeft=0;var randomByte=()=>{if(randomLeft===0){randomLeft=randomFill(randomBuffer).byteLength}return randomBuffer[--randomLeft]};FS.createDevice("/dev","random",randomByte);FS.createDevice("/dev","urandom",randomByte);FS.mkdir("/dev/shm");FS.mkdir("/dev/shm/tmp")},createSpecialDirectories:()=>{FS.mkdir("/proc");var proc_self=FS.mkdir("/proc/self");FS.mkdir("/proc/self/fd");FS.mount({mount:()=>{var node=FS.createNode(proc_self,"fd",16384|511,73);node.node_ops={lookup:(parent,name)=>{var fd=+name;var stream=FS.getStream(fd);if(!stream)throw new FS.ErrnoError(8);var ret={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>stream.path}};ret.parent=ret;return ret}};return node}},{},"/proc/self/fd")},createStandardStreams:()=>{if(Module["stdin"]){FS.createDevice("/dev","stdin",Module["stdin"])}else{FS.symlink("/dev/tty","/dev/stdin")}if(Module["stdout"]){FS.createDevice("/dev","stdout",null,Module["stdout"])}else{FS.symlink("/dev/tty","/dev/stdout")}if(Module["stderr"]){FS.createDevice("/dev","stderr",null,Module["stderr"])}else{FS.symlink("/dev/tty1","/dev/stderr")}var stdin=FS.open("/dev/stdin",0);var stdout=FS.open("/dev/stdout",1);var stderr=FS.open("/dev/stderr",1)},ensureErrnoError:()=>{if(FS.ErrnoError)return;FS.ErrnoError=function ErrnoError(errno,node){this.name="ErrnoError";this.node=node;this.setErrno=function(errno){this.errno=errno};this.setErrno(errno);this.message="FS error"};FS.ErrnoError.prototype=new Error;FS.ErrnoError.prototype.constructor=FS.ErrnoError;[44].forEach(code=>{FS.genericErrors[code]=new FS.ErrnoError(code);FS.genericErrors[code].stack="<generic error, no stack>"})},staticInit:()=>{FS.ensureErrnoError();FS.nameTable=new Array(4096);FS.mount(MEMFS,{},"/");FS.createDefaultDirectories();FS.createDefaultDevices();FS.createSpecialDirectories();FS.filesystems={"MEMFS":MEMFS}},init:(input,output,error)=>{FS.init.initialized=true;FS.ensureErrnoError();Module["stdin"]=input||Module["stdin"];Module["stdout"]=output||Module["stdout"];Module["stderr"]=error||Module["stderr"];FS.createStandardStreams()},quit:()=>{FS.init.initialized=false;for(var i=0;i<FS.streams.length;i++){var stream=FS.streams[i];if(!stream){continue}FS.close(stream)}},findObject:(path,dontResolveLastLink)=>{var ret=FS.analyzePath(path,dontResolveLastLink);if(!ret.exists){return null}return ret.object},analyzePath:(path,dontResolveLastLink)=>{try{var lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});path=lookup.path}catch(e){}var ret={isRoot:false,exists:false,error:0,name:null,path:null,object:null,parentExists:false,parentPath:null,parentObject:null};try{var lookup=FS.lookupPath(path,{parent:true});ret.parentExists=true;ret.parentPath=lookup.path;ret.parentObject=lookup.node;ret.name=PATH.basename(path);lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});ret.exists=true;ret.path=lookup.path;ret.object=lookup.node;ret.name=lookup.node.name;ret.isRoot=lookup.path==="/"}catch(e){ret.error=e.errno}return ret},createPath:(parent,path,canRead,canWrite)=>{parent=typeof parent=="string"?parent:FS.getPath(parent);var parts=path.split("/").reverse();while(parts.length){var part=parts.pop();if(!part)continue;var current=PATH.join2(parent,part);try{FS.mkdir(current)}catch(e){}parent=current}return current},createFile:(parent,name,properties,canRead,canWrite)=>{var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS_getMode(canRead,canWrite);return FS.create(path,mode)},createDataFile:(parent,name,data,canRead,canWrite,canOwn)=>{var path=name;if(parent){parent=typeof parent=="string"?parent:FS.getPath(parent);path=name?PATH.join2(parent,name):parent}var mode=FS_getMode(canRead,canWrite);var node=FS.create(path,mode);if(data){if(typeof data=="string"){var arr=new Array(data.length);for(var i=0,len=data.length;i<len;++i)arr[i]=data.charCodeAt(i);data=arr}FS.chmod(node,mode|146);var stream=FS.open(node,577);FS.write(stream,data,0,data.length,0,canOwn);FS.close(stream);FS.chmod(node,mode)}return node},createDevice:(parent,name,input,output)=>{var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS_getMode(!!input,!!output);if(!FS.createDevice.major)FS.createDevice.major=64;var dev=FS.makedev(FS.createDevice.major++,0);FS.registerDevice(dev,{open:stream=>{stream.seekable=false},close:stream=>{if(output&&output.buffer&&output.buffer.length){output(10)}},read:(stream,buffer,offset,length,pos)=>{var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=input()}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.timestamp=Date.now()}return bytesRead},write:(stream,buffer,offset,length,pos)=>{for(var i=0;i<length;i++){try{output(buffer[offset+i])}catch(e){throw new FS.ErrnoError(29)}}if(length){stream.node.timestamp=Date.now()}return i}});return FS.mkdev(path,mode,dev)},forceLoadFile:obj=>{if(obj.isDevice||obj.isFolder||obj.link||obj.contents)return true;if(typeof XMLHttpRequest!="undefined"){throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")}else if(read_){try{obj.contents=intArrayFromString(read_(obj.url),true);obj.usedBytes=obj.contents.length}catch(e){throw new FS.ErrnoError(29)}}else{throw new Error("Cannot load without read() or XMLHttpRequest.")}},createLazyFile:(parent,name,url,canRead,canWrite)=>{function LazyUint8Array(){this.lengthKnown=false;this.chunks=[]}LazyUint8Array.prototype.get=function LazyUint8Array_get(idx){if(idx>this.length-1||idx<0){return undefined}var chunkOffset=idx%this.chunkSize;var chunkNum=idx/this.chunkSize|0;return this.getter(chunkNum)[chunkOffset]};LazyUint8Array.prototype.setDataGetter=function LazyUint8Array_setDataGetter(getter){this.getter=getter};LazyUint8Array.prototype.cacheLength=function LazyUint8Array_cacheLength(){var xhr=new XMLHttpRequest;xhr.open("HEAD",url,false);xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))throw new Error("Couldn't load "+url+". Status: "+xhr.status);var datalength=Number(xhr.getResponseHeader("Content-length"));var header;var hasByteServing=(header=xhr.getResponseHeader("Accept-Ranges"))&&header==="bytes";var usesGzip=(header=xhr.getResponseHeader("Content-Encoding"))&&header==="gzip";var chunkSize=1024*1024;if(!hasByteServing)chunkSize=datalength;var doXHR=(from,to)=>{if(from>to)throw new Error("invalid range ("+from+", "+to+") or no bytes requested!");if(to>datalength-1)throw new Error("only "+datalength+" bytes available! programmer error!");var xhr=new XMLHttpRequest;xhr.open("GET",url,false);if(datalength!==chunkSize)xhr.setRequestHeader("Range","bytes="+from+"-"+to);xhr.responseType="arraybuffer";if(xhr.overrideMimeType){xhr.overrideMimeType("text/plain; charset=x-user-defined")}xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))throw new Error("Couldn't load "+url+". Status: "+xhr.status);if(xhr.response!==undefined){return new Uint8Array(xhr.response||[])}return intArrayFromString(xhr.responseText||"",true)};var lazyArray=this;lazyArray.setDataGetter(chunkNum=>{var start=chunkNum*chunkSize;var end=(chunkNum+1)*chunkSize-1;end=Math.min(end,datalength-1);if(typeof lazyArray.chunks[chunkNum]=="undefined"){lazyArray.chunks[chunkNum]=doXHR(start,end)}if(typeof lazyArray.chunks[chunkNum]=="undefined")throw new Error("doXHR failed!");return lazyArray.chunks[chunkNum]});if(usesGzip||!datalength){chunkSize=datalength=1;datalength=this.getter(0).length;chunkSize=datalength;out("LazyFiles on gzip forces download of the whole file when length is accessed")}this._length=datalength;this._chunkSize=chunkSize;this.lengthKnown=true};if(typeof XMLHttpRequest!="undefined"){if(!ENVIRONMENT_IS_WORKER)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var lazyArray=new LazyUint8Array;Object.defineProperties(lazyArray,{length:{get:function(){if(!this.lengthKnown){this.cacheLength()}return this._length}},chunkSize:{get:function(){if(!this.lengthKnown){this.cacheLength()}return this._chunkSize}}});var properties={isDevice:false,contents:lazyArray}}else{var properties={isDevice:false,url:url}}var node=FS.createFile(parent,name,properties,canRead,canWrite);if(properties.contents){node.contents=properties.contents}else if(properties.url){node.contents=null;node.url=properties.url}Object.defineProperties(node,{usedBytes:{get:function(){return this.contents.length}}});var stream_ops={};var keys=Object.keys(node.stream_ops);keys.forEach(key=>{var fn=node.stream_ops[key];stream_ops[key]=function forceLoadLazyFile(){FS.forceLoadFile(node);return fn.apply(null,arguments)}});function writeChunks(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=contents.length)return 0;var size=Math.min(contents.length-position,length);if(contents.slice){for(var i=0;i<size;i++){buffer[offset+i]=contents[position+i]}}else{for(var i=0;i<size;i++){buffer[offset+i]=contents.get(position+i)}}return size}stream_ops.read=(stream,buffer,offset,length,position)=>{FS.forceLoadFile(node);return writeChunks(stream,buffer,offset,length,position)};stream_ops.mmap=(stream,length,position,prot,flags)=>{FS.forceLoadFile(node);var ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}writeChunks(stream,HEAP8,ptr,length,position);return{ptr:ptr,allocated:true}};node.stream_ops=stream_ops;return node}};var SYSCALLS={DEFAULT_POLLMASK:5,calculateAt:function(dirfd,path,allowEmpty){if(PATH.isAbs(path)){return path}var dir;if(dirfd===-100){dir=FS.cwd()}else{var dirstream=SYSCALLS.getStreamFromFD(dirfd);dir=dirstream.path}if(path.length==0){if(!allowEmpty){throw new FS.ErrnoError(44)}return dir}return PATH.join2(dir,path)},doStat:function(func,path,buf){try{var stat=func(path)}catch(e){if(e&&e.node&&PATH.normalize(path)!==PATH.normalize(FS.getPath(e.node))){return-54}throw e}HEAP32[buf>>2]=stat.dev;HEAP32[buf+8>>2]=stat.ino;HEAP32[buf+12>>2]=stat.mode;HEAPU32[buf+16>>2]=stat.nlink;HEAP32[buf+20>>2]=stat.uid;HEAP32[buf+24>>2]=stat.gid;HEAP32[buf+28>>2]=stat.rdev;tempI64=[stat.size>>>0,(tempDouble=stat.size,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+40>>2]=tempI64[0],HEAP32[buf+44>>2]=tempI64[1];HEAP32[buf+48>>2]=4096;HEAP32[buf+52>>2]=stat.blocks;var atime=stat.atime.getTime();var mtime=stat.mtime.getTime();var ctime=stat.ctime.getTime();tempI64=[Math.floor(atime/1e3)>>>0,(tempDouble=Math.floor(atime/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+56>>2]=tempI64[0],HEAP32[buf+60>>2]=tempI64[1];HEAPU32[buf+64>>2]=atime%1e3*1e3;tempI64=[Math.floor(mtime/1e3)>>>0,(tempDouble=Math.floor(mtime/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+72>>2]=tempI64[0],HEAP32[buf+76>>2]=tempI64[1];HEAPU32[buf+80>>2]=mtime%1e3*1e3;tempI64=[Math.floor(ctime/1e3)>>>0,(tempDouble=Math.floor(ctime/1e3),+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+88>>2]=tempI64[0],HEAP32[buf+92>>2]=tempI64[1];HEAPU32[buf+96>>2]=ctime%1e3*1e3;tempI64=[stat.ino>>>0,(tempDouble=stat.ino,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[buf+104>>2]=tempI64[0],HEAP32[buf+108>>2]=tempI64[1];return 0},doMsync:function(addr,stream,len,flags,offset){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}if(flags&2){return 0}var buffer=HEAPU8.slice(addr,addr+len);FS.msync(stream,buffer,offset,len,flags)},varargs:undefined,get:function(){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret},getStr:function(ptr){var ret=UTF8ToString(ptr);return ret},getStreamFromFD:function(fd){var stream=FS.getStream(fd);if(!stream)throw new FS.ErrnoError(8);return stream}};function ___syscall_chdir(path){try{path=SYSCALLS.getStr(path);FS.chdir(path);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_faccessat(dirfd,path,amode,flags){try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);if(amode&~7){return-28}var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;if(!node){return-44}var perms="";if(amode&4)perms+="r";if(amode&2)perms+="w";if(amode&1)perms+="x";if(perms&&FS.nodePermissions(node,perms)){return-2}return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function setErrNo(value){HEAP32[___errno_location()>>2]=value;return value}function ___syscall_fcntl64(fd,cmd,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(fd);switch(cmd){case 0:{var arg=SYSCALLS.get();if(arg<0){return-28}var newStream;newStream=FS.createStream(stream,arg);return newStream.fd}case 1:case 2:return 0;case 3:return stream.flags;case 4:{var arg=SYSCALLS.get();stream.flags|=arg;return 0}case 5:{var arg=SYSCALLS.get();var offset=0;HEAP16[arg+offset>>1]=2;return 0}case 6:case 7:return 0;case 16:case 8:return-28;case 9:setErrNo(28);return-1;default:{return-28}}}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}function ___syscall_getcwd(buf,size){try{if(size===0)return-28;var cwd=FS.cwd();var cwdLengthInBytes=lengthBytesUTF8(cwd)+1;if(size<cwdLengthInBytes)return-68;stringToUTF8(cwd,buf,size);return cwdLengthInBytes}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_getdents64(fd,dirp,count){try{var stream=SYSCALLS.getStreamFromFD(fd);if(!stream.getdents){stream.getdents=FS.readdir(stream.path)}var struct_size=280;var pos=0;var off=FS.llseek(stream,0,1);var idx=Math.floor(off/struct_size);while(idx<stream.getdents.length&&pos+struct_size<=count){var id;var type;var name=stream.getdents[idx];if(name==="."){id=stream.node.id;type=4}else if(name===".."){var lookup=FS.lookupPath(stream.path,{parent:true});id=lookup.node.id;type=4}else{var child=FS.lookupNode(stream.node,name);id=child.id;type=FS.isChrdev(child.mode)?2:FS.isDir(child.mode)?4:FS.isLink(child.mode)?10:8}tempI64=[id>>>0,(tempDouble=id,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[dirp+pos>>2]=tempI64[0],HEAP32[dirp+pos+4>>2]=tempI64[1];tempI64=[(idx+1)*struct_size>>>0,(tempDouble=(idx+1)*struct_size,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[dirp+pos+8>>2]=tempI64[0],HEAP32[dirp+pos+12>>2]=tempI64[1];HEAP16[dirp+pos+16>>1]=280;HEAP8[dirp+pos+18>>0]=type;stringToUTF8(name,dirp+pos+19,256);pos+=struct_size;idx+=1}FS.llseek(stream,idx*struct_size,0);return pos}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_ioctl(fd,op,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(fd);switch(op){case 21509:case 21505:{if(!stream.tty)return-59;return 0}case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:{if(!stream.tty)return-59;return 0}case 21519:{if(!stream.tty)return-59;var argp=SYSCALLS.get();HEAP32[argp>>2]=0;return 0}case 21520:{if(!stream.tty)return-59;return-28}case 21531:{var argp=SYSCALLS.get();return FS.ioctl(stream,op,argp)}case 21523:{if(!stream.tty)return-59;return 0}case 21524:{if(!stream.tty)return-59;return 0}default:return-28}}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_openat(dirfd,path,flags,varargs){SYSCALLS.varargs=varargs;try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);var mode=varargs?SYSCALLS.get():0;return FS.open(path,flags,mode).fd}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_stat64(path,buf){try{path=SYSCALLS.getStr(path);return SYSCALLS.doStat(FS.stat,path,buf)}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var readEmAsmArgsArray=[];function readEmAsmArgs(sigPtr,buf){readEmAsmArgsArray.length=0;var ch;buf>>=2;while(ch=HEAPU8[sigPtr++]){buf+=ch!=105&buf;readEmAsmArgsArray.push(ch==105?HEAP32[buf]:HEAPF64[buf++>>1]);++buf}return readEmAsmArgsArray}function runEmAsmFunction(code,sigPtr,argbuf){var args=readEmAsmArgs(sigPtr,argbuf);return ASM_CONSTS[code].apply(null,args)}function _emscripten_asm_const_int(code,sigPtr,argbuf){return runEmAsmFunction(code,sigPtr,argbuf)}function _emscripten_date_now(){return Date.now()}var JSEvents={inEventHandler:0,removeAllEventListeners:function(){for(var i=JSEvents.eventHandlers.length-1;i>=0;--i){JSEvents._removeHandler(i)}JSEvents.eventHandlers=[];JSEvents.deferredCalls=[]},registerRemoveEventListeners:function(){if(!JSEvents.removeEventListenersRegistered){__ATEXIT__.push(JSEvents.removeAllEventListeners);JSEvents.removeEventListenersRegistered=true}},deferredCalls:[],deferCall:function(targetFunction,precedence,argsList){function arraysHaveEqualContent(arrA,arrB){if(arrA.length!=arrB.length)return false;for(var i in arrA){if(arrA[i]!=arrB[i])return false}return true}for(var i in JSEvents.deferredCalls){var call=JSEvents.deferredCalls[i];if(call.targetFunction==targetFunction&&arraysHaveEqualContent(call.argsList,argsList)){return}}JSEvents.deferredCalls.push({targetFunction:targetFunction,precedence:precedence,argsList:argsList});JSEvents.deferredCalls.sort(function(x,y){return x.precedence<y.precedence})},removeDeferredCalls:function(targetFunction){for(var i=0;i<JSEvents.deferredCalls.length;++i){if(JSEvents.deferredCalls[i].targetFunction==targetFunction){JSEvents.deferredCalls.splice(i,1);--i}}},canPerformEventHandlerRequests:function(){return JSEvents.inEventHandler&&JSEvents.currentEventHandler.allowsDeferredCalls},runDeferredCalls:function(){if(!JSEvents.canPerformEventHandlerRequests()){return}for(var i=0;i<JSEvents.deferredCalls.length;++i){var call=JSEvents.deferredCalls[i];JSEvents.deferredCalls.splice(i,1);--i;call.targetFunction.apply(null,call.argsList)}},eventHandlers:[],removeAllHandlersOnTarget:function(target,eventTypeString){for(var i=0;i<JSEvents.eventHandlers.length;++i){if(JSEvents.eventHandlers[i].target==target&&(!eventTypeString||eventTypeString==JSEvents.eventHandlers[i].eventTypeString)){JSEvents._removeHandler(i--)}}},_removeHandler:function(i){var h=JSEvents.eventHandlers[i];h.target.removeEventListener(h.eventTypeString,h.eventListenerFunc,h.useCapture);JSEvents.eventHandlers.splice(i,1)},registerOrRemoveHandler:function(eventHandler){if(!eventHandler.target){return-4}var jsEventHandler=function jsEventHandler(event){++JSEvents.inEventHandler;JSEvents.currentEventHandler=eventHandler;JSEvents.runDeferredCalls();eventHandler.handlerFunc(event);JSEvents.runDeferredCalls();--JSEvents.inEventHandler};if(eventHandler.callbackfunc){eventHandler.eventListenerFunc=jsEventHandler;eventHandler.target.addEventListener(eventHandler.eventTypeString,jsEventHandler,eventHandler.useCapture);JSEvents.eventHandlers.push(eventHandler);JSEvents.registerRemoveEventListeners()}else{for(var i=0;i<JSEvents.eventHandlers.length;++i){if(JSEvents.eventHandlers[i].target==eventHandler.target&&JSEvents.eventHandlers[i].eventTypeString==eventHandler.eventTypeString){JSEvents._removeHandler(i--)}}}return 0},getNodeNameForTarget:function(target){if(!target)return"";if(target==window)return"#window";if(target==screen)return"#screen";return target&&target.nodeName?target.nodeName:""},fullscreenEnabled:function(){return document.fullscreenEnabled||document.webkitFullscreenEnabled}};function requestPointerLock(target){if(target.requestPointerLock){target.requestPointerLock()}else{if(document.body.requestPointerLock){return-3}return-1}return 0}function _emscripten_exit_pointerlock(){JSEvents.removeDeferredCalls(requestPointerLock);if(document.exitPointerLock){document.exitPointerLock()}else{return-1}return 0}function maybeCStringToJsString(cString){return cString>2?UTF8ToString(cString):cString}var specialHTMLTargets=[0,document,window];function findEventTarget(target){target=maybeCStringToJsString(target);var domElement=specialHTMLTargets[target]||document.querySelector(target);return domElement}function getBoundingClientRect(e){return specialHTMLTargets.indexOf(e)<0?e.getBoundingClientRect():{"left":0,"top":0}}function _emscripten_get_element_css_size(target,width,height){target=findEventTarget(target);if(!target)return-4;var rect=getBoundingClientRect(target);HEAPF64[width>>3]=rect.width;HEAPF64[height>>3]=rect.height;return 0}function fillGamepadEventData(eventStruct,e){HEAPF64[eventStruct>>3]=e.timestamp;for(var i=0;i<e.axes.length;++i){HEAPF64[eventStruct+i*8+16>>3]=e.axes[i]}for(var i=0;i<e.buttons.length;++i){if(typeof e.buttons[i]=="object"){HEAPF64[eventStruct+i*8+528>>3]=e.buttons[i].value}else{HEAPF64[eventStruct+i*8+528>>3]=e.buttons[i]}}for(var i=0;i<e.buttons.length;++i){if(typeof e.buttons[i]=="object"){HEAP32[eventStruct+i*4+1040>>2]=e.buttons[i].pressed}else{HEAP32[eventStruct+i*4+1040>>2]=e.buttons[i]==1}}HEAP32[eventStruct+1296>>2]=e.connected;HEAP32[eventStruct+1300>>2]=e.index;HEAP32[eventStruct+8>>2]=e.axes.length;HEAP32[eventStruct+12>>2]=e.buttons.length;stringToUTF8(e.id,eventStruct+1304,64);stringToUTF8(e.mapping,eventStruct+1368,64)}function _emscripten_get_gamepad_status(index,gamepadState){if(index<0||index>=JSEvents.lastGamepadState.length)return-5;if(!JSEvents.lastGamepadState[index])return-7;fillGamepadEventData(gamepadState,JSEvents.lastGamepadState[index]);return 0}var _emscripten_get_now;_emscripten_get_now=()=>performance.now();function _emscripten_get_num_gamepads(){return JSEvents.lastGamepadState.length}function webgl_enable_ANGLE_instanced_arrays(ctx){var ext=ctx.getExtension("ANGLE_instanced_arrays");if(ext){ctx["vertexAttribDivisor"]=function(index,divisor){ext["vertexAttribDivisorANGLE"](index,divisor)};ctx["drawArraysInstanced"]=function(mode,first,count,primcount){ext["drawArraysInstancedANGLE"](mode,first,count,primcount)};ctx["drawElementsInstanced"]=function(mode,count,type,indices,primcount){ext["drawElementsInstancedANGLE"](mode,count,type,indices,primcount)};return 1}}function webgl_enable_OES_vertex_array_object(ctx){var ext=ctx.getExtension("OES_vertex_array_object");if(ext){ctx["createVertexArray"]=function(){return ext["createVertexArrayOES"]()};ctx["deleteVertexArray"]=function(vao){ext["deleteVertexArrayOES"](vao)};ctx["bindVertexArray"]=function(vao){ext["bindVertexArrayOES"](vao)};ctx["isVertexArray"]=function(vao){return ext["isVertexArrayOES"](vao)};return 1}}function webgl_enable_WEBGL_draw_buffers(ctx){var ext=ctx.getExtension("WEBGL_draw_buffers");if(ext){ctx["drawBuffers"]=function(n,bufs){ext["drawBuffersWEBGL"](n,bufs)};return 1}}function webgl_enable_WEBGL_multi_draw(ctx){return!!(ctx.multiDrawWebgl=ctx.getExtension("WEBGL_multi_draw"))}var GL={counter:1,buffers:[],programs:[],framebuffers:[],renderbuffers:[],textures:[],shaders:[],vaos:[],contexts:[],offscreenCanvases:{},queries:[],stringCache:{},unpackAlignment:4,recordError:function recordError(errorCode){if(!GL.lastError){GL.lastError=errorCode}},getNewId:function(table){var ret=GL.counter++;for(var i=table.length;i<ret;i++){table[i]=null}return ret},getSource:function(shader,count,string,length){var source="";for(var i=0;i<count;++i){var len=length?HEAP32[length+i*4>>2]:-1;source+=UTF8ToString(HEAP32[string+i*4>>2],len<0?undefined:len)}return source},createContext:function(canvas,webGLContextAttributes){if(!canvas.getContextSafariWebGL2Fixed){canvas.getContextSafariWebGL2Fixed=canvas.getContext;function fixedGetContext(ver,attrs){var gl=canvas.getContextSafariWebGL2Fixed(ver,attrs);return ver=="webgl"==gl instanceof WebGLRenderingContext?gl:null}canvas.getContext=fixedGetContext}var ctx=canvas.getContext("webgl",webGLContextAttributes);if(!ctx)return 0;var handle=GL.registerContext(ctx,webGLContextAttributes);return handle},registerContext:function(ctx,webGLContextAttributes){var handle=GL.getNewId(GL.contexts);var context={handle:handle,attributes:webGLContextAttributes,version:webGLContextAttributes.majorVersion,GLctx:ctx};if(ctx.canvas)ctx.canvas.GLctxObject=context;GL.contexts[handle]=context;if(typeof webGLContextAttributes.enableExtensionsByDefault=="undefined"||webGLContextAttributes.enableExtensionsByDefault){GL.initExtensions(context)}return handle},makeContextCurrent:function(contextHandle){GL.currentContext=GL.contexts[contextHandle];Module.ctx=GLctx=GL.currentContext&&GL.currentContext.GLctx;return!(contextHandle&&!GLctx)},getContext:function(contextHandle){return GL.contexts[contextHandle]},deleteContext:function(contextHandle){if(GL.currentContext===GL.contexts[contextHandle])GL.currentContext=null;if(typeof JSEvents=="object")JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas);if(GL.contexts[contextHandle]&&GL.contexts[contextHandle].GLctx.canvas)GL.contexts[contextHandle].GLctx.canvas.GLctxObject=undefined;GL.contexts[contextHandle]=null},initExtensions:function(context){if(!context)context=GL.currentContext;if(context.initExtensionsDone)return;context.initExtensionsDone=true;var GLctx=context.GLctx;webgl_enable_ANGLE_instanced_arrays(GLctx);webgl_enable_OES_vertex_array_object(GLctx);webgl_enable_WEBGL_draw_buffers(GLctx);{GLctx.disjointTimerQueryExt=GLctx.getExtension("EXT_disjoint_timer_query")}webgl_enable_WEBGL_multi_draw(GLctx);var exts=GLctx.getSupportedExtensions()||[];exts.forEach(function(ext){if(!ext.includes("lose_context")&&!ext.includes("debug")){GLctx.getExtension(ext)}})}};function _glActiveTexture(x0){GLctx.activeTexture(x0)}var _emscripten_glActiveTexture=_glActiveTexture;function _glAttachShader(program,shader){GLctx.attachShader(GL.programs[program],GL.shaders[shader])}var _emscripten_glAttachShader=_glAttachShader;function _glBeginQueryEXT(target,id){GLctx.disjointTimerQueryExt["beginQueryEXT"](target,GL.queries[id])}var _emscripten_glBeginQueryEXT=_glBeginQueryEXT;function _glBindAttribLocation(program,index,name){GLctx.bindAttribLocation(GL.programs[program],index,UTF8ToString(name))}var _emscripten_glBindAttribLocation=_glBindAttribLocation;function _glBindBuffer(target,buffer){GLctx.bindBuffer(target,GL.buffers[buffer])}var _emscripten_glBindBuffer=_glBindBuffer;function _glBindFramebuffer(target,framebuffer){GLctx.bindFramebuffer(target,GL.framebuffers[framebuffer])}var _emscripten_glBindFramebuffer=_glBindFramebuffer;function _glBindRenderbuffer(target,renderbuffer){GLctx.bindRenderbuffer(target,GL.renderbuffers[renderbuffer])}var _emscripten_glBindRenderbuffer=_glBindRenderbuffer;function _glBindTexture(target,texture){GLctx.bindTexture(target,GL.textures[texture])}var _emscripten_glBindTexture=_glBindTexture;function _glBindVertexArray(vao){GLctx.bindVertexArray(GL.vaos[vao])}var _glBindVertexArrayOES=_glBindVertexArray;var _emscripten_glBindVertexArrayOES=_glBindVertexArrayOES;function _glBlendColor(x0,x1,x2,x3){GLctx.blendColor(x0,x1,x2,x3)}var _emscripten_glBlendColor=_glBlendColor;function _glBlendEquation(x0){GLctx.blendEquation(x0)}var _emscripten_glBlendEquation=_glBlendEquation;function _glBlendEquationSeparate(x0,x1){GLctx.blendEquationSeparate(x0,x1)}var _emscripten_glBlendEquationSeparate=_glBlendEquationSeparate;function _glBlendFunc(x0,x1){GLctx.blendFunc(x0,x1)}var _emscripten_glBlendFunc=_glBlendFunc;function _glBlendFuncSeparate(x0,x1,x2,x3){GLctx.blendFuncSeparate(x0,x1,x2,x3)}var _emscripten_glBlendFuncSeparate=_glBlendFuncSeparate;function _glBufferData(target,size,data,usage){GLctx.bufferData(target,data?HEAPU8.subarray(data,data+size):size,usage)}var _emscripten_glBufferData=_glBufferData;function _glBufferSubData(target,offset,size,data){GLctx.bufferSubData(target,offset,HEAPU8.subarray(data,data+size))}var _emscripten_glBufferSubData=_glBufferSubData;function _glCheckFramebufferStatus(x0){return GLctx.checkFramebufferStatus(x0)}var _emscripten_glCheckFramebufferStatus=_glCheckFramebufferStatus;function _glClear(x0){GLctx.clear(x0)}var _emscripten_glClear=_glClear;function _glClearColor(x0,x1,x2,x3){GLctx.clearColor(x0,x1,x2,x3)}var _emscripten_glClearColor=_glClearColor;function _glClearDepthf(x0){GLctx.clearDepth(x0)}var _emscripten_glClearDepthf=_glClearDepthf;function _glClearStencil(x0){GLctx.clearStencil(x0)}var _emscripten_glClearStencil=_glClearStencil;function _glColorMask(red,green,blue,alpha){GLctx.colorMask(!!red,!!green,!!blue,!!alpha)}var _emscripten_glColorMask=_glColorMask;function _glCompileShader(shader){GLctx.compileShader(GL.shaders[shader])}var _emscripten_glCompileShader=_glCompileShader;function _glCompressedTexImage2D(target,level,internalFormat,width,height,border,imageSize,data){GLctx.compressedTexImage2D(target,level,internalFormat,width,height,border,data?HEAPU8.subarray(data,data+imageSize):null)}var _emscripten_glCompressedTexImage2D=_glCompressedTexImage2D;function _glCompressedTexSubImage2D(target,level,xoffset,yoffset,width,height,format,imageSize,data){GLctx.compressedTexSubImage2D(target,level,xoffset,yoffset,width,height,format,data?HEAPU8.subarray(data,data+imageSize):null)}var _emscripten_glCompressedTexSubImage2D=_glCompressedTexSubImage2D;function _glCopyTexImage2D(x0,x1,x2,x3,x4,x5,x6,x7){GLctx.copyTexImage2D(x0,x1,x2,x3,x4,x5,x6,x7)}var _emscripten_glCopyTexImage2D=_glCopyTexImage2D;function _glCopyTexSubImage2D(x0,x1,x2,x3,x4,x5,x6,x7){GLctx.copyTexSubImage2D(x0,x1,x2,x3,x4,x5,x6,x7)}var _emscripten_glCopyTexSubImage2D=_glCopyTexSubImage2D;function _glCreateProgram(){var id=GL.getNewId(GL.programs);var program=GLctx.createProgram();program.name=id;program.maxUniformLength=program.maxAttributeLength=program.maxUniformBlockNameLength=0;program.uniformIdCounter=1;GL.programs[id]=program;return id}var _emscripten_glCreateProgram=_glCreateProgram;function _glCreateShader(shaderType){var id=GL.getNewId(GL.shaders);GL.shaders[id]=GLctx.createShader(shaderType);return id}var _emscripten_glCreateShader=_glCreateShader;function _glCullFace(x0){GLctx.cullFace(x0)}var _emscripten_glCullFace=_glCullFace;function _glDeleteBuffers(n,buffers){for(var i=0;i<n;i++){var id=HEAP32[buffers+i*4>>2];var buffer=GL.buffers[id];if(!buffer)continue;GLctx.deleteBuffer(buffer);buffer.name=0;GL.buffers[id]=null}}var _emscripten_glDeleteBuffers=_glDeleteBuffers;function _glDeleteFramebuffers(n,framebuffers){for(var i=0;i<n;++i){var id=HEAP32[framebuffers+i*4>>2];var framebuffer=GL.framebuffers[id];if(!framebuffer)continue;GLctx.deleteFramebuffer(framebuffer);framebuffer.name=0;GL.framebuffers[id]=null}}var _emscripten_glDeleteFramebuffers=_glDeleteFramebuffers;function _glDeleteProgram(id){if(!id)return;var program=GL.programs[id];if(!program){GL.recordError(1281);return}GLctx.deleteProgram(program);program.name=0;GL.programs[id]=null}var _emscripten_glDeleteProgram=_glDeleteProgram;function _glDeleteQueriesEXT(n,ids){for(var i=0;i<n;i++){var id=HEAP32[ids+i*4>>2];var query=GL.queries[id];if(!query)continue;GLctx.disjointTimerQueryExt["deleteQueryEXT"](query);GL.queries[id]=null}}var _emscripten_glDeleteQueriesEXT=_glDeleteQueriesEXT;function _glDeleteRenderbuffers(n,renderbuffers){for(var i=0;i<n;i++){var id=HEAP32[renderbuffers+i*4>>2];var renderbuffer=GL.renderbuffers[id];if(!renderbuffer)continue;GLctx.deleteRenderbuffer(renderbuffer);renderbuffer.name=0;GL.renderbuffers[id]=null}}var _emscripten_glDeleteRenderbuffers=_glDeleteRenderbuffers;function _glDeleteShader(id){if(!id)return;var shader=GL.shaders[id];if(!shader){GL.recordError(1281);return}GLctx.deleteShader(shader);GL.shaders[id]=null}var _emscripten_glDeleteShader=_glDeleteShader;function _glDeleteTextures(n,textures){for(var i=0;i<n;i++){var id=HEAP32[textures+i*4>>2];var texture=GL.textures[id];if(!texture)continue;GLctx.deleteTexture(texture);texture.name=0;GL.textures[id]=null}}var _emscripten_glDeleteTextures=_glDeleteTextures;function _glDeleteVertexArrays(n,vaos){for(var i=0;i<n;i++){var id=HEAP32[vaos+i*4>>2];GLctx.deleteVertexArray(GL.vaos[id]);GL.vaos[id]=null}}var _glDeleteVertexArraysOES=_glDeleteVertexArrays;var _emscripten_glDeleteVertexArraysOES=_glDeleteVertexArraysOES;function _glDepthFunc(x0){GLctx.depthFunc(x0)}var _emscripten_glDepthFunc=_glDepthFunc;function _glDepthMask(flag){GLctx.depthMask(!!flag)}var _emscripten_glDepthMask=_glDepthMask;function _glDepthRangef(x0,x1){GLctx.depthRange(x0,x1)}var _emscripten_glDepthRangef=_glDepthRangef;function _glDetachShader(program,shader){GLctx.detachShader(GL.programs[program],GL.shaders[shader])}var _emscripten_glDetachShader=_glDetachShader;function _glDisable(x0){GLctx.disable(x0)}var _emscripten_glDisable=_glDisable;function _glDisableVertexAttribArray(index){GLctx.disableVertexAttribArray(index)}var _emscripten_glDisableVertexAttribArray=_glDisableVertexAttribArray;function _glDrawArrays(mode,first,count){GLctx.drawArrays(mode,first,count)}var _emscripten_glDrawArrays=_glDrawArrays;function _glDrawArraysInstanced(mode,first,count,primcount){GLctx.drawArraysInstanced(mode,first,count,primcount)}var _glDrawArraysInstancedANGLE=_glDrawArraysInstanced;var _emscripten_glDrawArraysInstancedANGLE=_glDrawArraysInstancedANGLE;var tempFixedLengthArray=[];function _glDrawBuffers(n,bufs){var bufArray=tempFixedLengthArray[n];for(var i=0;i<n;i++){bufArray[i]=HEAP32[bufs+i*4>>2]}GLctx.drawBuffers(bufArray)}var _glDrawBuffersWEBGL=_glDrawBuffers;var _emscripten_glDrawBuffersWEBGL=_glDrawBuffersWEBGL;function _glDrawElements(mode,count,type,indices){GLctx.drawElements(mode,count,type,indices)}var _emscripten_glDrawElements=_glDrawElements;function _glDrawElementsInstanced(mode,count,type,indices,primcount){GLctx.drawElementsInstanced(mode,count,type,indices,primcount)}var _glDrawElementsInstancedANGLE=_glDrawElementsInstanced;var _emscripten_glDrawElementsInstancedANGLE=_glDrawElementsInstancedANGLE;function _glEnable(x0){GLctx.enable(x0)}var _emscripten_glEnable=_glEnable;function _glEnableVertexAttribArray(index){GLctx.enableVertexAttribArray(index)}var _emscripten_glEnableVertexAttribArray=_glEnableVertexAttribArray;function _glEndQueryEXT(target){GLctx.disjointTimerQueryExt["endQueryEXT"](target)}var _emscripten_glEndQueryEXT=_glEndQueryEXT;function _glFinish(){GLctx.finish()}var _emscripten_glFinish=_glFinish;function _glFlush(){GLctx.flush()}var _emscripten_glFlush=_glFlush;function _glFramebufferRenderbuffer(target,attachment,renderbuffertarget,renderbuffer){GLctx.framebufferRenderbuffer(target,attachment,renderbuffertarget,GL.renderbuffers[renderbuffer])}var _emscripten_glFramebufferRenderbuffer=_glFramebufferRenderbuffer;function _glFramebufferTexture2D(target,attachment,textarget,texture,level){GLctx.framebufferTexture2D(target,attachment,textarget,GL.textures[texture],level)}var _emscripten_glFramebufferTexture2D=_glFramebufferTexture2D;function _glFrontFace(x0){GLctx.frontFace(x0)}var _emscripten_glFrontFace=_glFrontFace;function __glGenObject(n,buffers,createFunction,objectTable){for(var i=0;i<n;i++){var buffer=GLctx[createFunction]();var id=buffer&&GL.getNewId(objectTable);if(buffer){buffer.name=id;objectTable[id]=buffer}else{GL.recordError(1282)}HEAP32[buffers+i*4>>2]=id}}function _glGenBuffers(n,buffers){__glGenObject(n,buffers,"createBuffer",GL.buffers)}var _emscripten_glGenBuffers=_glGenBuffers;function _glGenFramebuffers(n,ids){__glGenObject(n,ids,"createFramebuffer",GL.framebuffers)}var _emscripten_glGenFramebuffers=_glGenFramebuffers;function _glGenQueriesEXT(n,ids){for(var i=0;i<n;i++){var query=GLctx.disjointTimerQueryExt["createQueryEXT"]();if(!query){GL.recordError(1282);while(i<n)HEAP32[ids+i++*4>>2]=0;return}var id=GL.getNewId(GL.queries);query.name=id;GL.queries[id]=query;HEAP32[ids+i*4>>2]=id}}var _emscripten_glGenQueriesEXT=_glGenQueriesEXT;function _glGenRenderbuffers(n,renderbuffers){__glGenObject(n,renderbuffers,"createRenderbuffer",GL.renderbuffers)}var _emscripten_glGenRenderbuffers=_glGenRenderbuffers;function _glGenTextures(n,textures){__glGenObject(n,textures,"createTexture",GL.textures)}var _emscripten_glGenTextures=_glGenTextures;function _glGenVertexArrays(n,arrays){__glGenObject(n,arrays,"createVertexArray",GL.vaos)}var _glGenVertexArraysOES=_glGenVertexArrays;var _emscripten_glGenVertexArraysOES=_glGenVertexArraysOES;function _glGenerateMipmap(x0){GLctx.generateMipmap(x0)}var _emscripten_glGenerateMipmap=_glGenerateMipmap;function __glGetActiveAttribOrUniform(funcName,program,index,bufSize,length,size,type,name){program=GL.programs[program];var info=GLctx[funcName](program,index);if(info){var numBytesWrittenExclNull=name&&stringToUTF8(info.name,name,bufSize);if(length)HEAP32[length>>2]=numBytesWrittenExclNull;if(size)HEAP32[size>>2]=info.size;if(type)HEAP32[type>>2]=info.type}}function _glGetActiveAttrib(program,index,bufSize,length,size,type,name){__glGetActiveAttribOrUniform("getActiveAttrib",program,index,bufSize,length,size,type,name)}var _emscripten_glGetActiveAttrib=_glGetActiveAttrib;function _glGetActiveUniform(program,index,bufSize,length,size,type,name){__glGetActiveAttribOrUniform("getActiveUniform",program,index,bufSize,length,size,type,name)}var _emscripten_glGetActiveUniform=_glGetActiveUniform;function _glGetAttachedShaders(program,maxCount,count,shaders){var result=GLctx.getAttachedShaders(GL.programs[program]);var len=result.length;if(len>maxCount){len=maxCount}HEAP32[count>>2]=len;for(var i=0;i<len;++i){var id=GL.shaders.indexOf(result[i]);HEAP32[shaders+i*4>>2]=id}}var _emscripten_glGetAttachedShaders=_glGetAttachedShaders;function _glGetAttribLocation(program,name){return GLctx.getAttribLocation(GL.programs[program],UTF8ToString(name))}var _emscripten_glGetAttribLocation=_glGetAttribLocation;function writeI53ToI64(ptr,num){HEAPU32[ptr>>2]=num;HEAPU32[ptr+4>>2]=(num-HEAPU32[ptr>>2])/4294967296}function emscriptenWebGLGet(name_,p,type){if(!p){GL.recordError(1281);return}var ret=undefined;switch(name_){case 36346:ret=1;break;case 36344:if(type!=0&&type!=1){GL.recordError(1280)}return;case 36345:ret=0;break;case 34466:var formats=GLctx.getParameter(34467);ret=formats?formats.length:0;break}if(ret===undefined){var result=GLctx.getParameter(name_);switch(typeof result){case"number":ret=result;break;case"boolean":ret=result?1:0;break;case"string":GL.recordError(1280);return;case"object":if(result===null){switch(name_){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:{ret=0;break}default:{GL.recordError(1280);return}}}else if(result instanceof Float32Array||result instanceof Uint32Array||result instanceof Int32Array||result instanceof Array){for(var i=0;i<result.length;++i){switch(type){case 0:HEAP32[p+i*4>>2]=result[i];break;case 2:HEAPF32[p+i*4>>2]=result[i];break;case 4:HEAP8[p+i>>0]=result[i]?1:0;break}}return}else{try{ret=result.name|0}catch(e){GL.recordError(1280);err("GL_INVALID_ENUM in glGet"+type+"v: Unknown object returned from WebGL getParameter("+name_+")! (error: "+e+")");return}}break;default:GL.recordError(1280);err("GL_INVALID_ENUM in glGet"+type+"v: Native code calling glGet"+type+"v("+name_+") and it returns "+result+" of type "+typeof result+"!");return}}switch(type){case 1:writeI53ToI64(p,ret);break;case 0:HEAP32[p>>2]=ret;break;case 2:HEAPF32[p>>2]=ret;break;case 4:HEAP8[p>>0]=ret?1:0;break}}function _glGetBooleanv(name_,p){emscriptenWebGLGet(name_,p,4)}var _emscripten_glGetBooleanv=_glGetBooleanv;function _glGetBufferParameteriv(target,value,data){if(!data){GL.recordError(1281);return}HEAP32[data>>2]=GLctx.getBufferParameter(target,value)}var _emscripten_glGetBufferParameteriv=_glGetBufferParameteriv;function _glGetError(){var error=GLctx.getError()||GL.lastError;GL.lastError=0;return error}var _emscripten_glGetError=_glGetError;function _glGetFloatv(name_,p){emscriptenWebGLGet(name_,p,2)}var _emscripten_glGetFloatv=_glGetFloatv;function _glGetFramebufferAttachmentParameteriv(target,attachment,pname,params){var result=GLctx.getFramebufferAttachmentParameter(target,attachment,pname);if(result instanceof WebGLRenderbuffer||result instanceof WebGLTexture){result=result.name|0}HEAP32[params>>2]=result}var _emscripten_glGetFramebufferAttachmentParameteriv=_glGetFramebufferAttachmentParameteriv;function _glGetIntegerv(name_,p){emscriptenWebGLGet(name_,p,0)}var _emscripten_glGetIntegerv=_glGetIntegerv;function _glGetProgramInfoLog(program,maxLength,length,infoLog){var log=GLctx.getProgramInfoLog(GL.programs[program]);if(log===null)log="(unknown error)";var numBytesWrittenExclNull=maxLength>0&&infoLog?stringToUTF8(log,infoLog,maxLength):0;if(length)HEAP32[length>>2]=numBytesWrittenExclNull}var _emscripten_glGetProgramInfoLog=_glGetProgramInfoLog;function _glGetProgramiv(program,pname,p){if(!p){GL.recordError(1281);return}if(program>=GL.counter){GL.recordError(1281);return}program=GL.programs[program];if(pname==35716){var log=GLctx.getProgramInfoLog(program);if(log===null)log="(unknown error)";HEAP32[p>>2]=log.length+1}else if(pname==35719){if(!program.maxUniformLength){for(var i=0;i<GLctx.getProgramParameter(program,35718);++i){program.maxUniformLength=Math.max(program.maxUniformLength,GLctx.getActiveUniform(program,i).name.length+1)}}HEAP32[p>>2]=program.maxUniformLength}else if(pname==35722){if(!program.maxAttributeLength){for(var i=0;i<GLctx.getProgramParameter(program,35721);++i){program.maxAttributeLength=Math.max(program.maxAttributeLength,GLctx.getActiveAttrib(program,i).name.length+1)}}HEAP32[p>>2]=program.maxAttributeLength}else if(pname==35381){if(!program.maxUniformBlockNameLength){for(var i=0;i<GLctx.getProgramParameter(program,35382);++i){program.maxUniformBlockNameLength=Math.max(program.maxUniformBlockNameLength,GLctx.getActiveUniformBlockName(program,i).length+1)}}HEAP32[p>>2]=program.maxUniformBlockNameLength}else{HEAP32[p>>2]=GLctx.getProgramParameter(program,pname)}}var _emscripten_glGetProgramiv=_glGetProgramiv;function _glGetQueryObjecti64vEXT(id,pname,params){if(!params){GL.recordError(1281);return}var query=GL.queries[id];var param;{param=GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query,pname)}var ret;if(typeof param=="boolean"){ret=param?1:0}else{ret=param}writeI53ToI64(params,ret)}var _emscripten_glGetQueryObjecti64vEXT=_glGetQueryObjecti64vEXT;function _glGetQueryObjectivEXT(id,pname,params){if(!params){GL.recordError(1281);return}var query=GL.queries[id];var param=GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query,pname);var ret;if(typeof param=="boolean"){ret=param?1:0}else{ret=param}HEAP32[params>>2]=ret}var _emscripten_glGetQueryObjectivEXT=_glGetQueryObjectivEXT;var _glGetQueryObjectui64vEXT=_glGetQueryObjecti64vEXT;var _emscripten_glGetQueryObjectui64vEXT=_glGetQueryObjectui64vEXT;var _glGetQueryObjectuivEXT=_glGetQueryObjectivEXT;var _emscripten_glGetQueryObjectuivEXT=_glGetQueryObjectuivEXT;function _glGetQueryivEXT(target,pname,params){if(!params){GL.recordError(1281);return}HEAP32[params>>2]=GLctx.disjointTimerQueryExt["getQueryEXT"](target,pname)}var _emscripten_glGetQueryivEXT=_glGetQueryivEXT;function _glGetRenderbufferParameteriv(target,pname,params){if(!params){GL.recordError(1281);return}HEAP32[params>>2]=GLctx.getRenderbufferParameter(target,pname)}var _emscripten_glGetRenderbufferParameteriv=_glGetRenderbufferParameteriv;function _glGetShaderInfoLog(shader,maxLength,length,infoLog){var log=GLctx.getShaderInfoLog(GL.shaders[shader]);if(log===null)log="(unknown error)";var numBytesWrittenExclNull=maxLength>0&&infoLog?stringToUTF8(log,infoLog,maxLength):0;if(length)HEAP32[length>>2]=numBytesWrittenExclNull}var _emscripten_glGetShaderInfoLog=_glGetShaderInfoLog;function _glGetShaderPrecisionFormat(shaderType,precisionType,range,precision){var result=GLctx.getShaderPrecisionFormat(shaderType,precisionType);HEAP32[range>>2]=result.rangeMin;HEAP32[range+4>>2]=result.rangeMax;HEAP32[precision>>2]=result.precision}var _emscripten_glGetShaderPrecisionFormat=_glGetShaderPrecisionFormat;function _glGetShaderSource(shader,bufSize,length,source){var result=GLctx.getShaderSource(GL.shaders[shader]);if(!result)return;var numBytesWrittenExclNull=bufSize>0&&source?stringToUTF8(result,source,bufSize):0;if(length)HEAP32[length>>2]=numBytesWrittenExclNull}var _emscripten_glGetShaderSource=_glGetShaderSource;function _glGetShaderiv(shader,pname,p){if(!p){GL.recordError(1281);return}if(pname==35716){var log=GLctx.getShaderInfoLog(GL.shaders[shader]);if(log===null)log="(unknown error)";var logLength=log?log.length+1:0;HEAP32[p>>2]=logLength}else if(pname==35720){var source=GLctx.getShaderSource(GL.shaders[shader]);var sourceLength=source?source.length+1:0;HEAP32[p>>2]=sourceLength}else{HEAP32[p>>2]=GLctx.getShaderParameter(GL.shaders[shader],pname)}}var _emscripten_glGetShaderiv=_glGetShaderiv;function stringToNewUTF8(str){var size=lengthBytesUTF8(str)+1;var ret=_malloc(size);if(ret)stringToUTF8(str,ret,size);return ret}function _glGetString(name_){var ret=GL.stringCache[name_];if(!ret){switch(name_){case 7939:var exts=GLctx.getSupportedExtensions()||[];exts=exts.concat(exts.map(function(e){return"GL_"+e}));ret=stringToNewUTF8(exts.join(" "));break;case 7936:case 7937:case 37445:case 37446:var s=GLctx.getParameter(name_);if(!s){GL.recordError(1280)}ret=s&&stringToNewUTF8(s);break;case 7938:var glVersion=GLctx.getParameter(7938);{glVersion="OpenGL ES 2.0 ("+glVersion+")"}ret=stringToNewUTF8(glVersion);break;case 35724:var glslVersion=GLctx.getParameter(35724);var ver_re=/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;var ver_num=glslVersion.match(ver_re);if(ver_num!==null){if(ver_num[1].length==3)ver_num[1]=ver_num[1]+"0";glslVersion="OpenGL ES GLSL ES "+ver_num[1]+" ("+glslVersion+")"}ret=stringToNewUTF8(glslVersion);break;default:GL.recordError(1280)}GL.stringCache[name_]=ret}return ret}var _emscripten_glGetString=_glGetString;function _glGetTexParameterfv(target,pname,params){if(!params){GL.recordError(1281);return}HEAPF32[params>>2]=GLctx.getTexParameter(target,pname)}var _emscripten_glGetTexParameterfv=_glGetTexParameterfv;function _glGetTexParameteriv(target,pname,params){if(!params){GL.recordError(1281);return}HEAP32[params>>2]=GLctx.getTexParameter(target,pname)}var _emscripten_glGetTexParameteriv=_glGetTexParameteriv;function jstoi_q(str){return parseInt(str)}function webglGetLeftBracePos(name){return name.slice(-1)=="]"&&name.lastIndexOf("[")}function webglPrepareUniformLocationsBeforeFirstUse(program){var uniformLocsById=program.uniformLocsById,uniformSizeAndIdsByName=program.uniformSizeAndIdsByName,i,j;if(!uniformLocsById){program.uniformLocsById=uniformLocsById={};program.uniformArrayNamesById={};for(i=0;i<GLctx.getProgramParameter(program,35718);++i){var u=GLctx.getActiveUniform(program,i);var nm=u.name;var sz=u.size;var lb=webglGetLeftBracePos(nm);var arrayName=lb>0?nm.slice(0,lb):nm;var id=program.uniformIdCounter;program.uniformIdCounter+=sz;uniformSizeAndIdsByName[arrayName]=[sz,id];for(j=0;j<sz;++j){uniformLocsById[id]=j;program.uniformArrayNamesById[id++]=arrayName}}}}function _glGetUniformLocation(program,name){name=UTF8ToString(name);if(program=GL.programs[program]){webglPrepareUniformLocationsBeforeFirstUse(program);var uniformLocsById=program.uniformLocsById;var arrayIndex=0;var uniformBaseName=name;var leftBrace=webglGetLeftBracePos(name);if(leftBrace>0){arrayIndex=jstoi_q(name.slice(leftBrace+1))>>>0;uniformBaseName=name.slice(0,leftBrace)}var sizeAndId=program.uniformSizeAndIdsByName[uniformBaseName];if(sizeAndId&&arrayIndex<sizeAndId[0]){arrayIndex+=sizeAndId[1];if(uniformLocsById[arrayIndex]=uniformLocsById[arrayIndex]||GLctx.getUniformLocation(program,name)){return arrayIndex}}}else{GL.recordError(1281)}return-1}var _emscripten_glGetUniformLocation=_glGetUniformLocation;function webglGetUniformLocation(location){var p=GLctx.currentProgram;if(p){var webglLoc=p.uniformLocsById[location];if(typeof webglLoc=="number"){p.uniformLocsById[location]=webglLoc=GLctx.getUniformLocation(p,p.uniformArrayNamesById[location]+(webglLoc>0?"["+webglLoc+"]":""))}return webglLoc}else{GL.recordError(1282)}}function emscriptenWebGLGetUniform(program,location,params,type){if(!params){GL.recordError(1281);return}program=GL.programs[program];webglPrepareUniformLocationsBeforeFirstUse(program);var data=GLctx.getUniform(program,webglGetUniformLocation(location));if(typeof data=="number"||typeof data=="boolean"){switch(type){case 0:HEAP32[params>>2]=data;break;case 2:HEAPF32[params>>2]=data;break}}else{for(var i=0;i<data.length;i++){switch(type){case 0:HEAP32[params+i*4>>2]=data[i];break;case 2:HEAPF32[params+i*4>>2]=data[i];break}}}}function _glGetUniformfv(program,location,params){emscriptenWebGLGetUniform(program,location,params,2)}var _emscripten_glGetUniformfv=_glGetUniformfv;function _glGetUniformiv(program,location,params){emscriptenWebGLGetUniform(program,location,params,0)}var _emscripten_glGetUniformiv=_glGetUniformiv;function _glGetVertexAttribPointerv(index,pname,pointer){if(!pointer){GL.recordError(1281);return}HEAP32[pointer>>2]=GLctx.getVertexAttribOffset(index,pname)}var _emscripten_glGetVertexAttribPointerv=_glGetVertexAttribPointerv;function emscriptenWebGLGetVertexAttrib(index,pname,params,type){if(!params){GL.recordError(1281);return}var data=GLctx.getVertexAttrib(index,pname);if(pname==34975){HEAP32[params>>2]=data&&data["name"]}else if(typeof data=="number"||typeof data=="boolean"){switch(type){case 0:HEAP32[params>>2]=data;break;case 2:HEAPF32[params>>2]=data;break;case 5:HEAP32[params>>2]=Math.fround(data);break}}else{for(var i=0;i<data.length;i++){switch(type){case 0:HEAP32[params+i*4>>2]=data[i];break;case 2:HEAPF32[params+i*4>>2]=data[i];break;case 5:HEAP32[params+i*4>>2]=Math.fround(data[i]);break}}}}function _glGetVertexAttribfv(index,pname,params){emscriptenWebGLGetVertexAttrib(index,pname,params,2)}var _emscripten_glGetVertexAttribfv=_glGetVertexAttribfv;function _glGetVertexAttribiv(index,pname,params){emscriptenWebGLGetVertexAttrib(index,pname,params,5)}var _emscripten_glGetVertexAttribiv=_glGetVertexAttribiv;function _glHint(x0,x1){GLctx.hint(x0,x1)}var _emscripten_glHint=_glHint;function _glIsBuffer(buffer){var b=GL.buffers[buffer];if(!b)return 0;return GLctx.isBuffer(b)}var _emscripten_glIsBuffer=_glIsBuffer;function _glIsEnabled(x0){return GLctx.isEnabled(x0)}var _emscripten_glIsEnabled=_glIsEnabled;function _glIsFramebuffer(framebuffer){var fb=GL.framebuffers[framebuffer];if(!fb)return 0;return GLctx.isFramebuffer(fb)}var _emscripten_glIsFramebuffer=_glIsFramebuffer;function _glIsProgram(program){program=GL.programs[program];if(!program)return 0;return GLctx.isProgram(program)}var _emscripten_glIsProgram=_glIsProgram;function _glIsQueryEXT(id){var query=GL.queries[id];if(!query)return 0;return GLctx.disjointTimerQueryExt["isQueryEXT"](query)}var _emscripten_glIsQueryEXT=_glIsQueryEXT;function _glIsRenderbuffer(renderbuffer){var rb=GL.renderbuffers[renderbuffer];if(!rb)return 0;return GLctx.isRenderbuffer(rb)}var _emscripten_glIsRenderbuffer=_glIsRenderbuffer;function _glIsShader(shader){var s=GL.shaders[shader];if(!s)return 0;return GLctx.isShader(s)}var _emscripten_glIsShader=_glIsShader;function _glIsTexture(id){var texture=GL.textures[id];if(!texture)return 0;return GLctx.isTexture(texture)}var _emscripten_glIsTexture=_glIsTexture;function _glIsVertexArray(array){var vao=GL.vaos[array];if(!vao)return 0;return GLctx.isVertexArray(vao)}var _glIsVertexArrayOES=_glIsVertexArray;var _emscripten_glIsVertexArrayOES=_glIsVertexArrayOES;function _glLineWidth(x0){GLctx.lineWidth(x0)}var _emscripten_glLineWidth=_glLineWidth;function _glLinkProgram(program){program=GL.programs[program];GLctx.linkProgram(program);program.uniformLocsById=0;program.uniformSizeAndIdsByName={}}var _emscripten_glLinkProgram=_glLinkProgram;function _glPixelStorei(pname,param){if(pname==3317){GL.unpackAlignment=param}GLctx.pixelStorei(pname,param)}var _emscripten_glPixelStorei=_glPixelStorei;function _glPolygonOffset(x0,x1){GLctx.polygonOffset(x0,x1)}var _emscripten_glPolygonOffset=_glPolygonOffset;function _glQueryCounterEXT(id,target){GLctx.disjointTimerQueryExt["queryCounterEXT"](GL.queries[id],target)}var _emscripten_glQueryCounterEXT=_glQueryCounterEXT;function computeUnpackAlignedImageSize(width,height,sizePerPixel,alignment){function roundedToNextMultipleOf(x,y){return x+y-1&-y}var plainRowSize=width*sizePerPixel;var alignedRowSize=roundedToNextMultipleOf(plainRowSize,alignment);return height*alignedRowSize}function colorChannelsInGlTextureFormat(format){var colorChannels={5:3,6:4,8:2,29502:3,29504:4};return colorChannels[format-6402]||1}function heapObjectForWebGLType(type){type-=5120;if(type==1)return HEAPU8;if(type==4)return HEAP32;if(type==6)return HEAPF32;if(type==5||type==28922)return HEAPU32;return HEAPU16}function heapAccessShiftForWebGLHeap(heap){return 31-Math.clz32(heap.BYTES_PER_ELEMENT)}function emscriptenWebGLGetTexPixelData(type,format,width,height,pixels,internalFormat){var heap=heapObjectForWebGLType(type);var shift=heapAccessShiftForWebGLHeap(heap);var byteSize=1<<shift;var sizePerPixel=colorChannelsInGlTextureFormat(format)*byteSize;var bytes=computeUnpackAlignedImageSize(width,height,sizePerPixel,GL.unpackAlignment);return heap.subarray(pixels>>shift,pixels+bytes>>shift)}function _glReadPixels(x,y,width,height,format,type,pixels){var pixelData=emscriptenWebGLGetTexPixelData(type,format,width,height,pixels,format);if(!pixelData){GL.recordError(1280);return}GLctx.readPixels(x,y,width,height,format,type,pixelData)}var _emscripten_glReadPixels=_glReadPixels;function _glReleaseShaderCompiler(){}var _emscripten_glReleaseShaderCompiler=_glReleaseShaderCompiler;function _glRenderbufferStorage(x0,x1,x2,x3){GLctx.renderbufferStorage(x0,x1,x2,x3)}var _emscripten_glRenderbufferStorage=_glRenderbufferStorage;function _glSampleCoverage(value,invert){GLctx.sampleCoverage(value,!!invert)}var _emscripten_glSampleCoverage=_glSampleCoverage;function _glScissor(x0,x1,x2,x3){GLctx.scissor(x0,x1,x2,x3)}var _emscripten_glScissor=_glScissor;function _glShaderBinary(count,shaders,binaryformat,binary,length){GL.recordError(1280)}var _emscripten_glShaderBinary=_glShaderBinary;function _glShaderSource(shader,count,string,length){var source=GL.getSource(shader,count,string,length);GLctx.shaderSource(GL.shaders[shader],source)}var _emscripten_glShaderSource=_glShaderSource;function _glStencilFunc(x0,x1,x2){GLctx.stencilFunc(x0,x1,x2)}var _emscripten_glStencilFunc=_glStencilFunc;function _glStencilFuncSeparate(x0,x1,x2,x3){GLctx.stencilFuncSeparate(x0,x1,x2,x3)}var _emscripten_glStencilFuncSeparate=_glStencilFuncSeparate;function _glStencilMask(x0){GLctx.stencilMask(x0)}var _emscripten_glStencilMask=_glStencilMask;function _glStencilMaskSeparate(x0,x1){GLctx.stencilMaskSeparate(x0,x1)}var _emscripten_glStencilMaskSeparate=_glStencilMaskSeparate;function _glStencilOp(x0,x1,x2){GLctx.stencilOp(x0,x1,x2)}var _emscripten_glStencilOp=_glStencilOp;function _glStencilOpSeparate(x0,x1,x2,x3){GLctx.stencilOpSeparate(x0,x1,x2,x3)}var _emscripten_glStencilOpSeparate=_glStencilOpSeparate;function _glTexImage2D(target,level,internalFormat,width,height,border,format,type,pixels){GLctx.texImage2D(target,level,internalFormat,width,height,border,format,type,pixels?emscriptenWebGLGetTexPixelData(type,format,width,height,pixels,internalFormat):null)}var _emscripten_glTexImage2D=_glTexImage2D;function _glTexParameterf(x0,x1,x2){GLctx.texParameterf(x0,x1,x2)}var _emscripten_glTexParameterf=_glTexParameterf;function _glTexParameterfv(target,pname,params){var param=HEAPF32[params>>2];GLctx.texParameterf(target,pname,param)}var _emscripten_glTexParameterfv=_glTexParameterfv;function _glTexParameteri(x0,x1,x2){GLctx.texParameteri(x0,x1,x2)}var _emscripten_glTexParameteri=_glTexParameteri;function _glTexParameteriv(target,pname,params){var param=HEAP32[params>>2];GLctx.texParameteri(target,pname,param)}var _emscripten_glTexParameteriv=_glTexParameteriv;function _glTexSubImage2D(target,level,xoffset,yoffset,width,height,format,type,pixels){var pixelData=null;if(pixels)pixelData=emscriptenWebGLGetTexPixelData(type,format,width,height,pixels,0);GLctx.texSubImage2D(target,level,xoffset,yoffset,width,height,format,type,pixelData)}var _emscripten_glTexSubImage2D=_glTexSubImage2D;function _glUniform1f(location,v0){GLctx.uniform1f(webglGetUniformLocation(location),v0)}var _emscripten_glUniform1f=_glUniform1f;var miniTempWebGLFloatBuffers=[];function _glUniform1fv(location,count,value){if(count<=288){var view=miniTempWebGLFloatBuffers[count-1];for(var i=0;i<count;++i){view[i]=HEAPF32[value+4*i>>2]}}else{var view=HEAPF32.subarray(value>>2,value+count*4>>2)}GLctx.uniform1fv(webglGetUniformLocation(location),view)}var _emscripten_glUniform1fv=_glUniform1fv;function _glUniform1i(location,v0){GLctx.uniform1i(webglGetUniformLocation(location),v0)}var _emscripten_glUniform1i=_glUniform1i;var miniTempWebGLIntBuffers=[];function _glUniform1iv(location,count,value){if(count<=288){var view=miniTempWebGLIntBuffers[count-1];for(var i=0;i<count;++i){view[i]=HEAP32[value+4*i>>2]}}else{var view=HEAP32.subarray(value>>2,value+count*4>>2)}GLctx.uniform1iv(webglGetUniformLocation(location),view)}var _emscripten_glUniform1iv=_glUniform1iv;function _glUniform2f(location,v0,v1){GLctx.uniform2f(webglGetUniformLocation(location),v0,v1)}var _emscripten_glUniform2f=_glUniform2f;function _glUniform2fv(location,count,value){if(count<=144){var view=miniTempWebGLFloatBuffers[2*count-1];for(var i=0;i<2*count;i+=2){view[i]=HEAPF32[value+4*i>>2];view[i+1]=HEAPF32[value+(4*i+4)>>2]}}else{var view=HEAPF32.subarray(value>>2,value+count*8>>2)}GLctx.uniform2fv(webglGetUniformLocation(location),view)}var _emscripten_glUniform2fv=_glUniform2fv;function _glUniform2i(location,v0,v1){GLctx.uniform2i(webglGetUniformLocation(location),v0,v1)}var _emscripten_glUniform2i=_glUniform2i;function _glUniform2iv(location,count,value){if(count<=144){var view=miniTempWebGLIntBuffers[2*count-1];for(var i=0;i<2*count;i+=2){view[i]=HEAP32[value+4*i>>2];view[i+1]=HEAP32[value+(4*i+4)>>2]}}else{var view=HEAP32.subarray(value>>2,value+count*8>>2)}GLctx.uniform2iv(webglGetUniformLocation(location),view)}var _emscripten_glUniform2iv=_glUniform2iv;function _glUniform3f(location,v0,v1,v2){GLctx.uniform3f(webglGetUniformLocation(location),v0,v1,v2)}var _emscripten_glUniform3f=_glUniform3f;function _glUniform3fv(location,count,value){if(count<=96){var view=miniTempWebGLFloatBuffers[3*count-1];for(var i=0;i<3*count;i+=3){view[i]=HEAPF32[value+4*i>>2];view[i+1]=HEAPF32[value+(4*i+4)>>2];view[i+2]=HEAPF32[value+(4*i+8)>>2]}}else{var view=HEAPF32.subarray(value>>2,value+count*12>>2)}GLctx.uniform3fv(webglGetUniformLocation(location),view)}var _emscripten_glUniform3fv=_glUniform3fv;function _glUniform3i(location,v0,v1,v2){GLctx.uniform3i(webglGetUniformLocation(location),v0,v1,v2)}var _emscripten_glUniform3i=_glUniform3i;function _glUniform3iv(location,count,value){if(count<=96){var view=miniTempWebGLIntBuffers[3*count-1];for(var i=0;i<3*count;i+=3){view[i]=HEAP32[value+4*i>>2];view[i+1]=HEAP32[value+(4*i+4)>>2];view[i+2]=HEAP32[value+(4*i+8)>>2]}}else{var view=HEAP32.subarray(value>>2,value+count*12>>2)}GLctx.uniform3iv(webglGetUniformLocation(location),view)}var _emscripten_glUniform3iv=_glUniform3iv;function _glUniform4f(location,v0,v1,v2,v3){GLctx.uniform4f(webglGetUniformLocation(location),v0,v1,v2,v3)}var _emscripten_glUniform4f=_glUniform4f;function _glUniform4fv(location,count,value){if(count<=72){var view=miniTempWebGLFloatBuffers[4*count-1];var heap=HEAPF32;value>>=2;for(var i=0;i<4*count;i+=4){var dst=value+i;view[i]=heap[dst];view[i+1]=heap[dst+1];view[i+2]=heap[dst+2];view[i+3]=heap[dst+3]}}else{var view=HEAPF32.subarray(value>>2,value+count*16>>2)}GLctx.uniform4fv(webglGetUniformLocation(location),view)}var _emscripten_glUniform4fv=_glUniform4fv;function _glUniform4i(location,v0,v1,v2,v3){GLctx.uniform4i(webglGetUniformLocation(location),v0,v1,v2,v3)}var _emscripten_glUniform4i=_glUniform4i;function _glUniform4iv(location,count,value){if(count<=72){var view=miniTempWebGLIntBuffers[4*count-1];for(var i=0;i<4*count;i+=4){view[i]=HEAP32[value+4*i>>2];view[i+1]=HEAP32[value+(4*i+4)>>2];view[i+2]=HEAP32[value+(4*i+8)>>2];view[i+3]=HEAP32[value+(4*i+12)>>2]}}else{var view=HEAP32.subarray(value>>2,value+count*16>>2)}GLctx.uniform4iv(webglGetUniformLocation(location),view)}var _emscripten_glUniform4iv=_glUniform4iv;function _glUniformMatrix2fv(location,count,transpose,value){if(count<=72){var view=miniTempWebGLFloatBuffers[4*count-1];for(var i=0;i<4*count;i+=4){view[i]=HEAPF32[value+4*i>>2];view[i+1]=HEAPF32[value+(4*i+4)>>2];view[i+2]=HEAPF32[value+(4*i+8)>>2];view[i+3]=HEAPF32[value+(4*i+12)>>2]}}else{var view=HEAPF32.subarray(value>>2,value+count*16>>2)}GLctx.uniformMatrix2fv(webglGetUniformLocation(location),!!transpose,view)}var _emscripten_glUniformMatrix2fv=_glUniformMatrix2fv;function _glUniformMatrix3fv(location,count,transpose,value){if(count<=32){var view=miniTempWebGLFloatBuffers[9*count-1];for(var i=0;i<9*count;i+=9){view[i]=HEAPF32[value+4*i>>2];view[i+1]=HEAPF32[value+(4*i+4)>>2];view[i+2]=HEAPF32[value+(4*i+8)>>2];view[i+3]=HEAPF32[value+(4*i+12)>>2];view[i+4]=HEAPF32[value+(4*i+16)>>2];view[i+5]=HEAPF32[value+(4*i+20)>>2];view[i+6]=HEAPF32[value+(4*i+24)>>2];view[i+7]=HEAPF32[value+(4*i+28)>>2];view[i+8]=HEAPF32[value+(4*i+32)>>2]}}else{var view=HEAPF32.subarray(value>>2,value+count*36>>2)}GLctx.uniformMatrix3fv(webglGetUniformLocation(location),!!transpose,view)}var _emscripten_glUniformMatrix3fv=_glUniformMatrix3fv;function _glUniformMatrix4fv(location,count,transpose,value){if(count<=18){var view=miniTempWebGLFloatBuffers[16*count-1];var heap=HEAPF32;value>>=2;for(var i=0;i<16*count;i+=16){var dst=value+i;view[i]=heap[dst];view[i+1]=heap[dst+1];view[i+2]=heap[dst+2];view[i+3]=heap[dst+3];view[i+4]=heap[dst+4];view[i+5]=heap[dst+5];view[i+6]=heap[dst+6];view[i+7]=heap[dst+7];view[i+8]=heap[dst+8];view[i+9]=heap[dst+9];view[i+10]=heap[dst+10];view[i+11]=heap[dst+11];view[i+12]=heap[dst+12];view[i+13]=heap[dst+13];view[i+14]=heap[dst+14];view[i+15]=heap[dst+15]}}else{var view=HEAPF32.subarray(value>>2,value+count*64>>2)}GLctx.uniformMatrix4fv(webglGetUniformLocation(location),!!transpose,view)}var _emscripten_glUniformMatrix4fv=_glUniformMatrix4fv;function _glUseProgram(program){program=GL.programs[program];GLctx.useProgram(program);GLctx.currentProgram=program}var _emscripten_glUseProgram=_glUseProgram;function _glValidateProgram(program){GLctx.validateProgram(GL.programs[program])}var _emscripten_glValidateProgram=_glValidateProgram;function _glVertexAttrib1f(x0,x1){GLctx.vertexAttrib1f(x0,x1)}var _emscripten_glVertexAttrib1f=_glVertexAttrib1f;function _glVertexAttrib1fv(index,v){GLctx.vertexAttrib1f(index,HEAPF32[v>>2])}var _emscripten_glVertexAttrib1fv=_glVertexAttrib1fv;function _glVertexAttrib2f(x0,x1,x2){GLctx.vertexAttrib2f(x0,x1,x2)}var _emscripten_glVertexAttrib2f=_glVertexAttrib2f;function _glVertexAttrib2fv(index,v){GLctx.vertexAttrib2f(index,HEAPF32[v>>2],HEAPF32[v+4>>2])}var _emscripten_glVertexAttrib2fv=_glVertexAttrib2fv;function _glVertexAttrib3f(x0,x1,x2,x3){GLctx.vertexAttrib3f(x0,x1,x2,x3)}var _emscripten_glVertexAttrib3f=_glVertexAttrib3f;function _glVertexAttrib3fv(index,v){GLctx.vertexAttrib3f(index,HEAPF32[v>>2],HEAPF32[v+4>>2],HEAPF32[v+8>>2])}var _emscripten_glVertexAttrib3fv=_glVertexAttrib3fv;function _glVertexAttrib4f(x0,x1,x2,x3,x4){GLctx.vertexAttrib4f(x0,x1,x2,x3,x4)}var _emscripten_glVertexAttrib4f=_glVertexAttrib4f;function _glVertexAttrib4fv(index,v){GLctx.vertexAttrib4f(index,HEAPF32[v>>2],HEAPF32[v+4>>2],HEAPF32[v+8>>2],HEAPF32[v+12>>2])}var _emscripten_glVertexAttrib4fv=_glVertexAttrib4fv;function _glVertexAttribDivisor(index,divisor){GLctx.vertexAttribDivisor(index,divisor)}var _glVertexAttribDivisorANGLE=_glVertexAttribDivisor;var _emscripten_glVertexAttribDivisorANGLE=_glVertexAttribDivisorANGLE;function _glVertexAttribPointer(index,size,type,normalized,stride,ptr){GLctx.vertexAttribPointer(index,size,type,!!normalized,stride,ptr)}var _emscripten_glVertexAttribPointer=_glVertexAttribPointer;function _glViewport(x0,x1,x2,x3){GLctx.viewport(x0,x1,x2,x3)}var _emscripten_glViewport=_glViewport;function _emscripten_memcpy_big(dest,src,num){HEAPU8.copyWithin(dest,src,src+num)}function _emscripten_request_pointerlock(target,deferUntilInEventHandler){target=findEventTarget(target);if(!target)return-4;if(!target.requestPointerLock){return-1}var canPerformRequests=JSEvents.canPerformEventHandlerRequests();if(!canPerformRequests){if(deferUntilInEventHandler){JSEvents.deferCall(requestPointerLock,2,[target]);return 1}return-2}return requestPointerLock(target)}function getHeapMax(){return 2147483648}function emscripten_realloc_buffer(size){var b=wasmMemory.buffer;try{wasmMemory.grow(size-b.byteLength+65535>>>16);updateMemoryViews();return 1}catch(e){}}function _emscripten_resize_heap(requestedSize){var oldSize=HEAPU8.length;requestedSize=requestedSize>>>0;var maxHeapSize=getHeapMax();if(requestedSize>maxHeapSize){return false}var alignUp=(x,multiple)=>x+(multiple-x%multiple)%multiple;for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignUp(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=emscripten_realloc_buffer(newSize);if(replacement){return true}}return false}function _emscripten_run_script(ptr){eval(UTF8ToString(ptr))}function _emscripten_sample_gamepad_data(){return(JSEvents.lastGamepadState=navigator.getGamepads?navigator.getGamepads():navigator.webkitGetGamepads?navigator.webkitGetGamepads():null)?0:-1}function fillMouseEventData(eventStruct,e,target){HEAPF64[eventStruct>>3]=e.timeStamp;var idx=eventStruct>>2;HEAP32[idx+2]=e.screenX;HEAP32[idx+3]=e.screenY;HEAP32[idx+4]=e.clientX;HEAP32[idx+5]=e.clientY;HEAP32[idx+6]=e.ctrlKey;HEAP32[idx+7]=e.shiftKey;HEAP32[idx+8]=e.altKey;HEAP32[idx+9]=e.metaKey;HEAP16[idx*2+20]=e.button;HEAP16[idx*2+21]=e.buttons;HEAP32[idx+11]=e["movementX"];HEAP32[idx+12]=e["movementY"];var rect=getBoundingClientRect(target);HEAP32[idx+13]=e.clientX-rect.left;HEAP32[idx+14]=e.clientY-rect.top}function getWasmTableEntry(funcPtr){return wasmTable.get(funcPtr)}function registerMouseEventCallback(target,userData,useCapture,callbackfunc,eventTypeId,eventTypeString,targetThread){if(!JSEvents.mouseEvent)JSEvents.mouseEvent=_malloc(72);target=findEventTarget(target);var mouseEventHandlerFunc=function(e=event){fillMouseEventData(JSEvents.mouseEvent,e,target);if(getWasmTableEntry(callbackfunc)(eventTypeId,JSEvents.mouseEvent,userData))e.preventDefault()};var eventHandler={target:target,allowsDeferredCalls:eventTypeString!="mousemove"&&eventTypeString!="mouseenter"&&eventTypeString!="mouseleave",eventTypeString:eventTypeString,callbackfunc:callbackfunc,handlerFunc:mouseEventHandlerFunc,useCapture:useCapture};return JSEvents.registerOrRemoveHandler(eventHandler)}function _emscripten_set_click_callback_on_thread(target,userData,useCapture,callbackfunc,targetThread){return registerMouseEventCallback(target,userData,useCapture,callbackfunc,4,"click",targetThread)}function fillFullscreenChangeEventData(eventStruct){var fullscreenElement=document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;var isFullscreen=!!fullscreenElement;HEAP32[eventStruct>>2]=isFullscreen;HEAP32[eventStruct+4>>2]=JSEvents.fullscreenEnabled();var reportedElement=isFullscreen?fullscreenElement:JSEvents.previousFullscreenElement;var nodeName=JSEvents.getNodeNameForTarget(reportedElement);var id=reportedElement&&reportedElement.id?reportedElement.id:"";stringToUTF8(nodeName,eventStruct+8,128);stringToUTF8(id,eventStruct+136,128);HEAP32[eventStruct+264>>2]=reportedElement?reportedElement.clientWidth:0;HEAP32[eventStruct+268>>2]=reportedElement?reportedElement.clientHeight:0;HEAP32[eventStruct+272>>2]=screen.width;HEAP32[eventStruct+276>>2]=screen.height;if(isFullscreen){JSEvents.previousFullscreenElement=fullscreenElement}}function registerFullscreenChangeEventCallback(target,userData,useCapture,callbackfunc,eventTypeId,eventTypeString,targetThread){if(!JSEvents.fullscreenChangeEvent)JSEvents.fullscreenChangeEvent=_malloc(280);var fullscreenChangeEventhandlerFunc=function(e=event){var fullscreenChangeEvent=JSEvents.fullscreenChangeEvent;fillFullscreenChangeEventData(fullscreenChangeEvent);if(getWasmTableEntry(callbackfunc)(eventTypeId,fullscreenChangeEvent,userData))e.preventDefault()};var eventHandler={target:target,eventTypeString:eventTypeString,callbackfunc:callbackfunc,handlerFunc:fullscreenChangeEventhandlerFunc,useCapture:useCapture};return JSEvents.registerOrRemoveHandler(eventHandler)}function _emscripten_set_fullscreenchange_callback_on_thread(target,userData,useCapture,callbackfunc,targetThread){if(!JSEvents.fullscreenEnabled())return-1;target=findEventTarget(target);if(!target)return-4;registerFullscreenChangeEventCallback(target,userData,useCapture,callbackfunc,19,"webkitfullscreenchange",targetThread);return registerFullscreenChangeEventCallback(target,userData,useCapture,callbackfunc,19,"fullscreenchange",targetThread)}function registerGamepadEventCallback(target,userData,useCapture,callbackfunc,eventTypeId,eventTypeString,targetThread){if(!JSEvents.gamepadEvent)JSEvents.gamepadEvent=_malloc(1432);var gamepadEventHandlerFunc=function(e=event){var gamepadEvent=JSEvents.gamepadEvent;fillGamepadEventData(gamepadEvent,e["gamepad"]);if(getWasmTableEntry(callbackfunc)(eventTypeId,gamepadEvent,userData))e.preventDefault()};var eventHandler={target:findEventTarget(target),allowsDeferredCalls:true,eventTypeString:eventTypeString,callbackfunc:callbackfunc,handlerFunc:gamepadEventHandlerFunc,useCapture:useCapture};return JSEvents.registerOrRemoveHandler(eventHandler)}function _emscripten_set_gamepadconnected_callback_on_thread(userData,useCapture,callbackfunc,targetThread){if(!navigator.getGamepads&&!navigator.webkitGetGamepads)return-1;return registerGamepadEventCallback(2,userData,useCapture,callbackfunc,26,"gamepadconnected",targetThread)}function _emscripten_set_gamepaddisconnected_callback_on_thread(userData,useCapture,callbackfunc,targetThread){if(!navigator.getGamepads&&!navigator.webkitGetGamepads)return-1;return registerGamepadEventCallback(2,userData,useCapture,callbackfunc,27,"gamepaddisconnected",targetThread)}function registerTouchEventCallback(target,userData,useCapture,callbackfunc,eventTypeId,eventTypeString,targetThread){if(!JSEvents.touchEvent)JSEvents.touchEvent=_malloc(1696);target=findEventTarget(target);var touchEventHandlerFunc=function(e){var t,touches={},et=e.touches;for(var i=0;i<et.length;++i){t=et[i];t.isChanged=t.onTarget=0;touches[t.identifier]=t}for(var i=0;i<e.changedTouches.length;++i){t=e.changedTouches[i];t.isChanged=1;touches[t.identifier]=t}for(var i=0;i<e.targetTouches.length;++i){touches[e.targetTouches[i].identifier].onTarget=1}var touchEvent=JSEvents.touchEvent;HEAPF64[touchEvent>>3]=e.timeStamp;var idx=touchEvent>>2;HEAP32[idx+3]=e.ctrlKey;HEAP32[idx+4]=e.shiftKey;HEAP32[idx+5]=e.altKey;HEAP32[idx+6]=e.metaKey;idx+=7;var targetRect=getBoundingClientRect(target);var numTouches=0;for(var i in touches){t=touches[i];HEAP32[idx+0]=t.identifier;HEAP32[idx+1]=t.screenX;HEAP32[idx+2]=t.screenY;HEAP32[idx+3]=t.clientX;HEAP32[idx+4]=t.clientY;HEAP32[idx+5]=t.pageX;HEAP32[idx+6]=t.pageY;HEAP32[idx+7]=t.isChanged;HEAP32[idx+8]=t.onTarget;HEAP32[idx+9]=t.clientX-targetRect.left;HEAP32[idx+10]=t.clientY-targetRect.top;idx+=13;if(++numTouches>31){break}}HEAP32[touchEvent+8>>2]=numTouches;if(getWasmTableEntry(callbackfunc)(eventTypeId,touchEvent,userData))e.preventDefault()};var eventHandler={target:target,allowsDeferredCalls:eventTypeString=="touchstart"||eventTypeString=="touchend",eventTypeString:eventTypeString,callbackfunc:callbackfunc,handlerFunc:touchEventHandlerFunc,useCapture:useCapture};return JSEvents.registerOrRemoveHandler(eventHandler)}function _emscripten_set_touchcancel_callback_on_thread(target,userData,useCapture,callbackfunc,targetThread){return registerTouchEventCallback(target,userData,useCapture,callbackfunc,25,"touchcancel",targetThread)}function _emscripten_set_touchend_callback_on_thread(target,userData,useCapture,callbackfunc,targetThread){return registerTouchEventCallback(target,userData,useCapture,callbackfunc,23,"touchend",targetThread)}function _emscripten_set_touchmove_callback_on_thread(target,userData,useCapture,callbackfunc,targetThread){return registerTouchEventCallback(target,userData,useCapture,callbackfunc,24,"touchmove",targetThread)}function _emscripten_set_touchstart_callback_on_thread(target,userData,useCapture,callbackfunc,targetThread){return registerTouchEventCallback(target,userData,useCapture,callbackfunc,22,"touchstart",targetThread)}function _emscripten_sleep(){throw"Please compile your program with async support in order to use asynchronous operations like emscripten_sleep"}function _proc_exit(code){EXITSTATUS=code;if(!keepRuntimeAlive()){if(Module["onExit"])Module["onExit"](code);ABORT=true}quit_(code,new ExitStatus(code))}function exitJS(status,implicit){EXITSTATUS=status;_proc_exit(status)}var _exit=exitJS;function _fd_close(fd){try{var stream=SYSCALLS.getStreamFromFD(fd);FS.close(stream);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function doReadv(stream,iov,iovcnt,offset){var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;var curr=FS.read(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len)break;if(typeof offset!=="undefined"){offset+=curr}}return ret}function _fd_read(fd,iov,iovcnt,pnum){try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doReadv(stream,iov,iovcnt);HEAPU32[pnum>>2]=num;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function convertI32PairToI53Checked(lo,hi){return hi+2097152>>>0<4194305-!!lo?(lo>>>0)+hi*4294967296:NaN}function _fd_seek(fd,offset_low,offset_high,whence,newOffset){try{var offset=convertI32PairToI53Checked(offset_low,offset_high);if(isNaN(offset))return 61;var stream=SYSCALLS.getStreamFromFD(fd);FS.llseek(stream,offset,whence);tempI64=[stream.position>>>0,(tempDouble=stream.position,+Math.abs(tempDouble)>=1?tempDouble>0?+Math.floor(tempDouble/4294967296)>>>0:~~+Math.ceil((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],HEAP32[newOffset>>2]=tempI64[0],HEAP32[newOffset+4>>2]=tempI64[1];if(stream.getdents&&offset===0&&whence===0)stream.getdents=null;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function doWritev(stream,iov,iovcnt,offset){var ret=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;var curr=FS.write(stream,HEAP8,ptr,len,offset);if(curr<0)return-1;ret+=curr;if(typeof offset!=="undefined"){offset+=curr}}return ret}function _fd_write(fd,iov,iovcnt,pnum){try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doWritev(stream,iov,iovcnt);HEAPU32[pnum>>2]=num;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _emscripten_set_main_loop_timing(mode,value){Browser.mainLoop.timingMode=mode;Browser.mainLoop.timingValue=value;if(!Browser.mainLoop.func){return 1}if(!Browser.mainLoop.running){Browser.mainLoop.running=true}if(mode==0){Browser.mainLoop.scheduler=function Browser_mainLoop_scheduler_setTimeout(){var timeUntilNextTick=Math.max(0,Browser.mainLoop.tickStartTime+value-_emscripten_get_now())|0;setTimeout(Browser.mainLoop.runner,timeUntilNextTick)};Browser.mainLoop.method="timeout"}else if(mode==1){Browser.mainLoop.scheduler=function Browser_mainLoop_scheduler_rAF(){Browser.requestAnimationFrame(Browser.mainLoop.runner)};Browser.mainLoop.method="rAF"}else if(mode==2){if(typeof setImmediate=="undefined"){var setImmediates=[];var emscriptenMainLoopMessageId="setimmediate";var Browser_setImmediate_messageHandler=event=>{if(event.data===emscriptenMainLoopMessageId||event.data.target===emscriptenMainLoopMessageId){event.stopPropagation();setImmediates.shift()()}};addEventListener("message",Browser_setImmediate_messageHandler,true);setImmediate=function Browser_emulated_setImmediate(func){setImmediates.push(func);if(ENVIRONMENT_IS_WORKER){if(Module["setImmediates"]===undefined)Module["setImmediates"]=[];Module["setImmediates"].push(func);postMessage({target:emscriptenMainLoopMessageId})}else postMessage(emscriptenMainLoopMessageId,"*")}}Browser.mainLoop.scheduler=function Browser_mainLoop_scheduler_setImmediate(){setImmediate(Browser.mainLoop.runner)};Browser.mainLoop.method="immediate"}return 0}function setMainLoop(browserIterationFunc,fps,simulateInfiniteLoop,arg,noSetTiming){assert(!Browser.mainLoop.func,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");Browser.mainLoop.func=browserIterationFunc;Browser.mainLoop.arg=arg;var thisMainLoopId=Browser.mainLoop.currentlyRunningMainloop;function checkIsRunning(){if(thisMainLoopId<Browser.mainLoop.currentlyRunningMainloop){return false}return true}Browser.mainLoop.running=false;Browser.mainLoop.runner=function Browser_mainLoop_runner(){if(ABORT)return;if(Browser.mainLoop.queue.length>0){var start=Date.now();var blocker=Browser.mainLoop.queue.shift();blocker.func(blocker.arg);if(Browser.mainLoop.remainingBlockers){var remaining=Browser.mainLoop.remainingBlockers;var next=remaining%1==0?remaining-1:Math.floor(remaining);if(blocker.counted){Browser.mainLoop.remainingBlockers=next}else{next=next+.5;Browser.mainLoop.remainingBlockers=(8*remaining+next)/9}}out('main loop blocker "'+blocker.name+'" took '+(Date.now()-start)+" ms");Browser.mainLoop.updateStatus();if(!checkIsRunning())return;setTimeout(Browser.mainLoop.runner,0);return}if(!checkIsRunning())return;Browser.mainLoop.currentFrameNumber=Browser.mainLoop.currentFrameNumber+1|0;if(Browser.mainLoop.timingMode==1&&Browser.mainLoop.timingValue>1&&Browser.mainLoop.currentFrameNumber%Browser.mainLoop.timingValue!=0){Browser.mainLoop.scheduler();return}else if(Browser.mainLoop.timingMode==0){Browser.mainLoop.tickStartTime=_emscripten_get_now()}Browser.mainLoop.runIter(browserIterationFunc);if(!checkIsRunning())return;if(typeof SDL=="object"&&SDL.audio&&SDL.audio.queueNewAudioData)SDL.audio.queueNewAudioData();Browser.mainLoop.scheduler()};if(!noSetTiming){if(fps&&fps>0){_emscripten_set_main_loop_timing(0,1e3/fps)}else{_emscripten_set_main_loop_timing(1,1)}Browser.mainLoop.scheduler()}if(simulateInfiniteLoop){throw"unwind"}}function handleException(e){if(e instanceof ExitStatus||e=="unwind"){return EXITSTATUS}quit_(1,e)}function maybeExit(){if(!keepRuntimeAlive()){try{_exit(EXITSTATUS)}catch(e){handleException(e)}}}function callUserCallback(func){if(ABORT){return}try{func();maybeExit()}catch(e){handleException(e)}}function safeSetTimeout(func,timeout){return setTimeout(()=>{callUserCallback(func)},timeout)}var Browser={mainLoop:{running:false,scheduler:null,method:"",currentlyRunningMainloop:0,func:null,arg:0,timingMode:0,timingValue:0,currentFrameNumber:0,queue:[],pause:function(){Browser.mainLoop.scheduler=null;Browser.mainLoop.currentlyRunningMainloop++},resume:function(){Browser.mainLoop.currentlyRunningMainloop++;var timingMode=Browser.mainLoop.timingMode;var timingValue=Browser.mainLoop.timingValue;var func=Browser.mainLoop.func;Browser.mainLoop.func=null;setMainLoop(func,0,false,Browser.mainLoop.arg,true);_emscripten_set_main_loop_timing(timingMode,timingValue);Browser.mainLoop.scheduler()},updateStatus:function(){if(Module["setStatus"]){var message=Module["statusMessage"]||"Please wait...";var remaining=Browser.mainLoop.remainingBlockers;var expected=Browser.mainLoop.expectedBlockers;if(remaining){if(remaining<expected){Module["setStatus"](message+" ("+(expected-remaining)+"/"+expected+")")}else{Module["setStatus"](message)}}else{Module["setStatus"]("")}}},runIter:function(func){if(ABORT)return;if(Module["preMainLoop"]){var preRet=Module["preMainLoop"]();if(preRet===false){return}}callUserCallback(func);if(Module["postMainLoop"])Module["postMainLoop"]()}},isFullscreen:false,pointerLock:false,moduleContextCreatedCallbacks:[],workers:[],init:function(){if(Browser.initted)return;Browser.initted=true;var imagePlugin={};imagePlugin["canHandle"]=function imagePlugin_canHandle(name){return!Module.noImageDecoding&&/\.(jpg|jpeg|png|bmp)$/i.test(name)};imagePlugin["handle"]=function imagePlugin_handle(byteArray,name,onload,onerror){var b=new Blob([byteArray],{type:Browser.getMimetype(name)});if(b.size!==byteArray.length){b=new Blob([new Uint8Array(byteArray).buffer],{type:Browser.getMimetype(name)})}var url=URL.createObjectURL(b);var img=new Image;img.onload=()=>{assert(img.complete,"Image "+name+" could not be decoded");var canvas=document.createElement("canvas");canvas.width=img.width;canvas.height=img.height;var ctx=canvas.getContext("2d");ctx.drawImage(img,0,0);preloadedImages[name]=canvas;URL.revokeObjectURL(url);if(onload)onload(byteArray)};img.onerror=event=>{out("Image "+url+" could not be decoded");if(onerror)onerror()};img.src=url};preloadPlugins.push(imagePlugin);var audioPlugin={};audioPlugin["canHandle"]=function audioPlugin_canHandle(name){return!Module.noAudioDecoding&&name.substr(-4)in{".ogg":1,".wav":1,".mp3":1}};audioPlugin["handle"]=function audioPlugin_handle(byteArray,name,onload,onerror){var done=false;function finish(audio){if(done)return;done=true;preloadedAudios[name]=audio;if(onload)onload(byteArray)}var b=new Blob([byteArray],{type:Browser.getMimetype(name)});var url=URL.createObjectURL(b);var audio=new Audio;audio.addEventListener("canplaythrough",()=>finish(audio),false);audio.onerror=function audio_onerror(event){if(done)return;err("warning: browser could not fully decode audio "+name+", trying slower base64 approach");function encode64(data){var BASE="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var PAD="=";var ret="";var leftchar=0;var leftbits=0;for(var i=0;i<data.length;i++){leftchar=leftchar<<8|data[i];leftbits+=8;while(leftbits>=6){var curr=leftchar>>leftbits-6&63;leftbits-=6;ret+=BASE[curr]}}if(leftbits==2){ret+=BASE[(leftchar&3)<<4];ret+=PAD+PAD}else if(leftbits==4){ret+=BASE[(leftchar&15)<<2];ret+=PAD}return ret}audio.src="data:audio/x-"+name.substr(-3)+";base64,"+encode64(byteArray);finish(audio)};audio.src=url;safeSetTimeout(()=>{finish(audio)},1e4)};preloadPlugins.push(audioPlugin);function pointerLockChange(){Browser.pointerLock=document["pointerLockElement"]===Module["canvas"]||document["mozPointerLockElement"]===Module["canvas"]||document["webkitPointerLockElement"]===Module["canvas"]||document["msPointerLockElement"]===Module["canvas"]}var canvas=Module["canvas"];if(canvas){canvas.requestPointerLock=canvas["requestPointerLock"]||canvas["mozRequestPointerLock"]||canvas["webkitRequestPointerLock"]||canvas["msRequestPointerLock"]||(()=>{});canvas.exitPointerLock=document["exitPointerLock"]||document["mozExitPointerLock"]||document["webkitExitPointerLock"]||document["msExitPointerLock"]||(()=>{});canvas.exitPointerLock=canvas.exitPointerLock.bind(document);document.addEventListener("pointerlockchange",pointerLockChange,false);document.addEventListener("mozpointerlockchange",pointerLockChange,false);document.addEventListener("webkitpointerlockchange",pointerLockChange,false);document.addEventListener("mspointerlockchange",pointerLockChange,false);if(Module["elementPointerLock"]){canvas.addEventListener("click",ev=>{if(!Browser.pointerLock&&Module["canvas"].requestPointerLock){Module["canvas"].requestPointerLock();ev.preventDefault()}},false)}}},createContext:function(canvas,useWebGL,setInModule,webGLContextAttributes){if(useWebGL&&Module.ctx&&canvas==Module.canvas)return Module.ctx;var ctx;var contextHandle;if(useWebGL){var contextAttributes={antialias:false,alpha:false,majorVersion:1};if(webGLContextAttributes){for(var attribute in webGLContextAttributes){contextAttributes[attribute]=webGLContextAttributes[attribute]}}if(typeof GL!="undefined"){contextHandle=GL.createContext(canvas,contextAttributes);if(contextHandle){ctx=GL.getContext(contextHandle).GLctx}}}else{ctx=canvas.getContext("2d")}if(!ctx)return null;if(setInModule){if(!useWebGL)assert(typeof GLctx=="undefined","cannot set in module if GLctx is used, but we are a non-GL context that would replace it");Module.ctx=ctx;if(useWebGL)GL.makeContextCurrent(contextHandle);Module.useWebGL=useWebGL;Browser.moduleContextCreatedCallbacks.forEach(callback=>callback());Browser.init()}return ctx},destroyContext:function(canvas,useWebGL,setInModule){},fullscreenHandlersInstalled:false,lockPointer:undefined,resizeCanvas:undefined,requestFullscreen:function(lockPointer,resizeCanvas){Browser.lockPointer=lockPointer;Browser.resizeCanvas=resizeCanvas;if(typeof Browser.lockPointer=="undefined")Browser.lockPointer=true;if(typeof Browser.resizeCanvas=="undefined")Browser.resizeCanvas=false;var canvas=Module["canvas"];function fullscreenChange(){Browser.isFullscreen=false;var canvasContainer=canvas.parentNode;if((document["fullscreenElement"]||document["mozFullScreenElement"]||document["msFullscreenElement"]||document["webkitFullscreenElement"]||document["webkitCurrentFullScreenElement"])===canvasContainer){canvas.exitFullscreen=Browser.exitFullscreen;if(Browser.lockPointer)canvas.requestPointerLock();Browser.isFullscreen=true;if(Browser.resizeCanvas){Browser.setFullscreenCanvasSize()}else{Browser.updateCanvasDimensions(canvas)}}else{canvasContainer.parentNode.insertBefore(canvas,canvasContainer);canvasContainer.parentNode.removeChild(canvasContainer);if(Browser.resizeCanvas){Browser.setWindowedCanvasSize()}else{Browser.updateCanvasDimensions(canvas)}}if(Module["onFullScreen"])Module["onFullScreen"](Browser.isFullscreen);if(Module["onFullscreen"])Module["onFullscreen"](Browser.isFullscreen)}if(!Browser.fullscreenHandlersInstalled){Browser.fullscreenHandlersInstalled=true;document.addEventListener("fullscreenchange",fullscreenChange,false);document.addEventListener("mozfullscreenchange",fullscreenChange,false);document.addEventListener("webkitfullscreenchange",fullscreenChange,false);document.addEventListener("MSFullscreenChange",fullscreenChange,false)}var canvasContainer=document.createElement("div");canvas.parentNode.insertBefore(canvasContainer,canvas);canvasContainer.appendChild(canvas);canvasContainer.requestFullscreen=canvasContainer["requestFullscreen"]||canvasContainer["mozRequestFullScreen"]||canvasContainer["msRequestFullscreen"]||(canvasContainer["webkitRequestFullscreen"]?()=>canvasContainer["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"]):null)||(canvasContainer["webkitRequestFullScreen"]?()=>canvasContainer["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"]):null);canvasContainer.requestFullscreen()},exitFullscreen:function(){if(!Browser.isFullscreen){return false}var CFS=document["exitFullscreen"]||document["cancelFullScreen"]||document["mozCancelFullScreen"]||document["msExitFullscreen"]||document["webkitCancelFullScreen"]||(()=>{});CFS.apply(document,[]);return true},nextRAF:0,fakeRequestAnimationFrame:function(func){var now=Date.now();if(Browser.nextRAF===0){Browser.nextRAF=now+1e3/60}else{while(now+2>=Browser.nextRAF){Browser.nextRAF+=1e3/60}}var delay=Math.max(Browser.nextRAF-now,0);setTimeout(func,delay)},requestAnimationFrame:function(func){if(typeof requestAnimationFrame=="function"){requestAnimationFrame(func);return}var RAF=Browser.fakeRequestAnimationFrame;RAF(func)},safeSetTimeout:function(func,timeout){return safeSetTimeout(func,timeout)},safeRequestAnimationFrame:function(func){return Browser.requestAnimationFrame(()=>{callUserCallback(func)})},getMimetype:function(name){return{"jpg":"image/jpeg","jpeg":"image/jpeg","png":"image/png","bmp":"image/bmp","ogg":"audio/ogg","wav":"audio/wav","mp3":"audio/mpeg"}[name.substr(name.lastIndexOf(".")+1)]},getUserMedia:function(func){if(!window.getUserMedia){window.getUserMedia=navigator["getUserMedia"]||navigator["mozGetUserMedia"]}window.getUserMedia(func)},getMovementX:function(event){return event["movementX"]||event["mozMovementX"]||event["webkitMovementX"]||0},getMovementY:function(event){return event["movementY"]||event["mozMovementY"]||event["webkitMovementY"]||0},getMouseWheelDelta:function(event){var delta=0;switch(event.type){case"DOMMouseScroll":delta=event.detail/3;break;case"mousewheel":delta=event.wheelDelta/120;break;case"wheel":delta=event.deltaY;switch(event.deltaMode){case 0:delta/=100;break;case 1:delta/=3;break;case 2:delta*=80;break;default:throw"unrecognized mouse wheel delta mode: "+event.deltaMode}break;default:throw"unrecognized mouse wheel event: "+event.type}return delta},mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,touches:{},lastTouches:{},calculateMouseEvent:function(event){if(Browser.pointerLock){if(event.type!="mousemove"&&"mozMovementX"in event){Browser.mouseMovementX=Browser.mouseMovementY=0}else{Browser.mouseMovementX=Browser.getMovementX(event);Browser.mouseMovementY=Browser.getMovementY(event)}if(typeof SDL!="undefined"){Browser.mouseX=SDL.mouseX+Browser.mouseMovementX;Browser.mouseY=SDL.mouseY+Browser.mouseMovementY}else{Browser.mouseX+=Browser.mouseMovementX;Browser.mouseY+=Browser.mouseMovementY}}else{var rect=Module["canvas"].getBoundingClientRect();var cw=Module["canvas"].width;var ch=Module["canvas"].height;var scrollX=typeof window.scrollX!="undefined"?window.scrollX:window.pageXOffset;var scrollY=typeof window.scrollY!="undefined"?window.scrollY:window.pageYOffset;if(event.type==="touchstart"||event.type==="touchend"||event.type==="touchmove"){var touch=event.touch;if(touch===undefined){return}var adjustedX=touch.pageX-(scrollX+rect.left);var adjustedY=touch.pageY-(scrollY+rect.top);adjustedX=adjustedX*(cw/rect.width);adjustedY=adjustedY*(ch/rect.height);var coords={x:adjustedX,y:adjustedY};if(event.type==="touchstart"){Browser.lastTouches[touch.identifier]=coords;Browser.touches[touch.identifier]=coords}else if(event.type==="touchend"||event.type==="touchmove"){var last=Browser.touches[touch.identifier];if(!last)last=coords;Browser.lastTouches[touch.identifier]=last;Browser.touches[touch.identifier]=coords}return}var x=event.pageX-(scrollX+rect.left);var y=event.pageY-(scrollY+rect.top);x=x*(cw/rect.width);y=y*(ch/rect.height);Browser.mouseMovementX=x-Browser.mouseX;Browser.mouseMovementY=y-Browser.mouseY;Browser.mouseX=x;Browser.mouseY=y}},resizeListeners:[],updateResizeListeners:function(){var canvas=Module["canvas"];Browser.resizeListeners.forEach(listener=>listener(canvas.width,canvas.height))},setCanvasSize:function(width,height,noUpdates){var canvas=Module["canvas"];Browser.updateCanvasDimensions(canvas,width,height);if(!noUpdates)Browser.updateResizeListeners()},windowedWidth:0,windowedHeight:0,setFullscreenCanvasSize:function(){if(typeof SDL!="undefined"){var flags=HEAPU32[SDL.screen>>2];flags=flags|8388608;HEAP32[SDL.screen>>2]=flags}Browser.updateCanvasDimensions(Module["canvas"]);Browser.updateResizeListeners()},setWindowedCanvasSize:function(){if(typeof SDL!="undefined"){var flags=HEAPU32[SDL.screen>>2];flags=flags&~8388608;HEAP32[SDL.screen>>2]=flags}Browser.updateCanvasDimensions(Module["canvas"]);Browser.updateResizeListeners()},updateCanvasDimensions:function(canvas,wNative,hNative){if(wNative&&hNative){canvas.widthNative=wNative;canvas.heightNative=hNative}else{wNative=canvas.widthNative;hNative=canvas.heightNative}var w=wNative;var h=hNative;if(Module["forcedAspectRatio"]&&Module["forcedAspectRatio"]>0){if(w/h<Module["forcedAspectRatio"]){w=Math.round(h*Module["forcedAspectRatio"])}else{h=Math.round(w/Module["forcedAspectRatio"])}}if((document["fullscreenElement"]||document["mozFullScreenElement"]||document["msFullscreenElement"]||document["webkitFullscreenElement"]||document["webkitCurrentFullScreenElement"])===canvas.parentNode&&typeof screen!="undefined"){var factor=Math.min(screen.width/w,screen.height/h);w=Math.round(w*factor);h=Math.round(h*factor)}if(Browser.resizeCanvas){if(canvas.width!=w)canvas.width=w;if(canvas.height!=h)canvas.height=h;if(typeof canvas.style!="undefined"){canvas.style.removeProperty("width");canvas.style.removeProperty("height")}}else{if(canvas.width!=wNative)canvas.width=wNative;if(canvas.height!=hNative)canvas.height=hNative;if(typeof canvas.style!="undefined"){if(w!=wNative||h!=hNative){canvas.style.setProperty("width",w+"px","important");canvas.style.setProperty("height",h+"px","important")}else{canvas.style.removeProperty("width");canvas.style.removeProperty("height")}}}}};function GLFW_Window(id,width,height,title,monitor,share){this.id=id;this.x=0;this.y=0;this.fullscreen=false;this.storedX=0;this.storedY=0;this.width=width;this.height=height;this.storedWidth=width;this.storedHeight=height;this.title=title;this.monitor=monitor;this.share=share;this.attributes=GLFW.hints;this.inputModes={208897:212993,208898:0,208899:0};this.buttons=0;this.keys=new Array;this.domKeys=new Array;this.shouldClose=0;this.title=null;this.windowPosFunc=null;this.windowSizeFunc=null;this.windowCloseFunc=null;this.windowRefreshFunc=null;this.windowFocusFunc=null;this.windowIconifyFunc=null;this.windowMaximizeFunc=null;this.framebufferSizeFunc=null;this.windowContentScaleFunc=null;this.mouseButtonFunc=null;this.cursorPosFunc=null;this.cursorEnterFunc=null;this.scrollFunc=null;this.dropFunc=null;this.keyFunc=null;this.charFunc=null;this.userptr=null}var GLFW={WindowFromId:function(id){if(id<=0||!GLFW.windows)return null;return GLFW.windows[id-1]},joystickFunc:null,errorFunc:null,monitorFunc:null,active:null,scale:null,windows:null,monitors:null,monitorString:null,versionString:null,initialTime:null,extensions:null,hints:null,defaultHints:{131073:0,131074:0,131075:1,131076:1,131077:1,131082:0,135169:8,135170:8,135171:8,135172:8,135173:24,135174:8,135175:0,135176:0,135177:0,135178:0,135179:0,135180:0,135181:0,135182:0,135183:0,139265:196609,139266:1,139267:0,139268:0,139269:0,139270:0,139271:0,139272:0,139276:0},DOMToGLFWKeyCode:function(keycode){switch(keycode){case 32:return 32;case 222:return 39;case 188:return 44;case 173:return 45;case 189:return 45;case 190:return 46;case 191:return 47;case 48:return 48;case 49:return 49;case 50:return 50;case 51:return 51;case 52:return 52;case 53:return 53;case 54:return 54;case 55:return 55;case 56:return 56;case 57:return 57;case 59:return 59;case 61:return 61;case 187:return 61;case 65:return 65;case 66:return 66;case 67:return 67;case 68:return 68;case 69:return 69;case 70:return 70;case 71:return 71;case 72:return 72;case 73:return 73;case 74:return 74;case 75:return 75;case 76:return 76;case 77:return 77;case 78:return 78;case 79:return 79;case 80:return 80;case 81:return 81;case 82:return 82;case 83:return 83;case 84:return 84;case 85:return 85;case 86:return 86;case 87:return 87;case 88:return 88;case 89:return 89;case 90:return 90;case 219:return 91;case 220:return 92;case 221:return 93;case 192:return 96;case 27:return 256;case 13:return 257;case 9:return 258;case 8:return 259;case 45:return 260;case 46:return 261;case 39:return 262;case 37:return 263;case 40:return 264;case 38:return 265;case 33:return 266;case 34:return 267;case 36:return 268;case 35:return 269;case 20:return 280;case 145:return 281;case 144:return 282;case 44:return 283;case 19:return 284;case 112:return 290;case 113:return 291;case 114:return 292;case 115:return 293;case 116:return 294;case 117:return 295;case 118:return 296;case 119:return 297;case 120:return 298;case 121:return 299;case 122:return 300;case 123:return 301;case 124:return 302;case 125:return 303;case 126:return 304;case 127:return 305;case 128:return 306;case 129:return 307;case 130:return 308;case 131:return 309;case 132:return 310;case 133:return 311;case 134:return 312;case 135:return 313;case 136:return 314;case 96:return 320;case 97:return 321;case 98:return 322;case 99:return 323;case 100:return 324;case 101:return 325;case 102:return 326;case 103:return 327;case 104:return 328;case 105:return 329;case 110:return 330;case 111:return 331;case 106:return 332;case 109:return 333;case 107:return 334;case 16:return 340;case 17:return 341;case 18:return 342;case 91:return 343;case 93:return 348;default:return-1}},getModBits:function(win){var mod=0;if(win.keys[340])mod|=1;if(win.keys[341])mod|=2;if(win.keys[342])mod|=4;if(win.keys[343])mod|=8;return mod},onKeyPress:function(event){if(!GLFW.active||!GLFW.active.charFunc)return;if(event.ctrlKey||event.metaKey)return;var charCode=event.charCode;if(charCode==0||charCode>=0&&charCode<=31)return;getWasmTableEntry(GLFW.active.charFunc)(GLFW.active.id,charCode)},onKeyChanged:function(keyCode,status){if(!GLFW.active)return;var key=GLFW.DOMToGLFWKeyCode(keyCode);if(key==-1)return;var repeat=status&&GLFW.active.keys[key];GLFW.active.keys[key]=status;GLFW.active.domKeys[keyCode]=status;if(GLFW.active.keyFunc){if(repeat)status=2;getWasmTableEntry(GLFW.active.keyFunc)(GLFW.active.id,key,keyCode,status,GLFW.getModBits(GLFW.active))}},onGamepadConnected:function(event){GLFW.refreshJoysticks()},onGamepadDisconnected:function(event){GLFW.refreshJoysticks()},onKeydown:function(event){GLFW.onKeyChanged(event.keyCode,1);if(event.keyCode===8||event.keyCode===9){event.preventDefault()}},onKeyup:function(event){GLFW.onKeyChanged(event.keyCode,0)},onBlur:function(event){if(!GLFW.active)return;for(var i=0;i<GLFW.active.domKeys.length;++i){if(GLFW.active.domKeys[i]){GLFW.onKeyChanged(i,0)}}},onMousemove:function(event){if(!GLFW.active)return;Browser.calculateMouseEvent(event);if(event.target!=Module["canvas"]||!GLFW.active.cursorPosFunc)return;if(GLFW.active.cursorPosFunc){getWasmTableEntry(GLFW.active.cursorPosFunc)(GLFW.active.id,Browser.mouseX,Browser.mouseY)}},DOMToGLFWMouseButton:function(event){var eventButton=event["button"];if(eventButton>0){if(eventButton==1){eventButton=2}else{eventButton=1}}return eventButton},onMouseenter:function(event){if(!GLFW.active)return;if(event.target!=Module["canvas"])return;if(GLFW.active.cursorEnterFunc){getWasmTableEntry(GLFW.active.cursorEnterFunc)(GLFW.active.id,1)}},onMouseleave:function(event){if(!GLFW.active)return;if(event.target!=Module["canvas"])return;if(GLFW.active.cursorEnterFunc){getWasmTableEntry(GLFW.active.cursorEnterFunc)(GLFW.active.id,0)}},onMouseButtonChanged:function(event,status){if(!GLFW.active)return;Browser.calculateMouseEvent(event);if(event.target!=Module["canvas"])return;var eventButton=GLFW.DOMToGLFWMouseButton(event);if(status==1){GLFW.active.buttons|=1<<eventButton;try{event.target.setCapture()}catch(e){}}else{GLFW.active.buttons&=~(1<<eventButton)}if(GLFW.active.mouseButtonFunc){getWasmTableEntry(GLFW.active.mouseButtonFunc)(GLFW.active.id,eventButton,status,GLFW.getModBits(GLFW.active))}},onMouseButtonDown:function(event){if(!GLFW.active)return;GLFW.onMouseButtonChanged(event,1)},onMouseButtonUp:function(event){if(!GLFW.active)return;GLFW.onMouseButtonChanged(event,0)},onMouseWheel:function(event){var delta=-Browser.getMouseWheelDelta(event);delta=delta==0?0:delta>0?Math.max(delta,1):Math.min(delta,-1);GLFW.wheelPos+=delta;if(!GLFW.active||!GLFW.active.scrollFunc||event.target!=Module["canvas"])return;var sx=0;var sy=delta;if(event.type=="mousewheel"){sx=event.wheelDeltaX}else{sx=event.deltaX}getWasmTableEntry(GLFW.active.scrollFunc)(GLFW.active.id,sx,sy);event.preventDefault()},onCanvasResize:function(width,height){if(!GLFW.active)return;var resizeNeeded=true;if(document["fullscreen"]||document["fullScreen"]||document["mozFullScreen"]||document["webkitIsFullScreen"]){GLFW.active.storedX=GLFW.active.x;GLFW.active.storedY=GLFW.active.y;GLFW.active.storedWidth=GLFW.active.width;GLFW.active.storedHeight=GLFW.active.height;GLFW.active.x=GLFW.active.y=0;GLFW.active.width=screen.width;GLFW.active.height=screen.height;GLFW.active.fullscreen=true}else if(GLFW.active.fullscreen==true){GLFW.active.x=GLFW.active.storedX;GLFW.active.y=GLFW.active.storedY;GLFW.active.width=GLFW.active.storedWidth;GLFW.active.height=GLFW.active.storedHeight;GLFW.active.fullscreen=false}else if(GLFW.active.width!=width||GLFW.active.height!=height){GLFW.active.width=width;GLFW.active.height=height}else{resizeNeeded=false}if(resizeNeeded){Browser.setCanvasSize(GLFW.active.width,GLFW.active.height,true);GLFW.onWindowSizeChanged();GLFW.onFramebufferSizeChanged()}},onWindowSizeChanged:function(){if(!GLFW.active)return;if(GLFW.active.windowSizeFunc){getWasmTableEntry(GLFW.active.windowSizeFunc)(GLFW.active.id,GLFW.active.width,GLFW.active.height)}},onFramebufferSizeChanged:function(){if(!GLFW.active)return;if(GLFW.active.framebufferSizeFunc){getWasmTableEntry(GLFW.active.framebufferSizeFunc)(GLFW.active.id,GLFW.active.width,GLFW.active.height)}},onWindowContentScaleChanged:function(scale){GLFW.scale=scale;if(!GLFW.active)return;if(GLFW.active.windowContentScaleFunc){getWasmTableEntry(GLFW.active.windowContentScaleFunc)(GLFW.active.id,GLFW.scale,GLFW.scale)}},getTime:function(){return _emscripten_get_now()/1e3},setWindowTitle:function(winid,title){var win=GLFW.WindowFromId(winid);if(!win)return;win.title=UTF8ToString(title);if(GLFW.active.id==win.id){document.title=win.title}},setJoystickCallback:function(cbfun){GLFW.joystickFunc=cbfun;GLFW.refreshJoysticks()},joys:{},lastGamepadState:[],lastGamepadStateFrame:null,refreshJoysticks:function(){if(Browser.mainLoop.currentFrameNumber!==GLFW.lastGamepadStateFrame||!Browser.mainLoop.currentFrameNumber){GLFW.lastGamepadState=navigator.getGamepads?navigator.getGamepads():navigator.webkitGetGamepads?navigator.webkitGetGamepads:[];GLFW.lastGamepadStateFrame=Browser.mainLoop.currentFrameNumber;for(var joy=0;joy<GLFW.lastGamepadState.length;++joy){var gamepad=GLFW.lastGamepadState[joy];if(gamepad){if(!GLFW.joys[joy]){out("glfw joystick connected:",joy);GLFW.joys[joy]={id:stringToNewUTF8(gamepad.id),buttonsCount:gamepad.buttons.length,axesCount:gamepad.axes.length,buttons:_malloc(gamepad.buttons.length),axes:_malloc(gamepad.axes.length*4)};if(GLFW.joystickFunc){getWasmTableEntry(GLFW.joystickFunc)(joy,262145)}}var data=GLFW.joys[joy];for(var i=0;i<gamepad.buttons.length;++i){HEAP8[data.buttons+i>>0]=gamepad.buttons[i].pressed}for(var i=0;i<gamepad.axes.length;++i){HEAPF32[data.axes+i*4>>2]=gamepad.axes[i]}}else{if(GLFW.joys[joy]){out("glfw joystick disconnected",joy);if(GLFW.joystickFunc){getWasmTableEntry(GLFW.joystickFunc)(joy,262146)}_free(GLFW.joys[joy].id);_free(GLFW.joys[joy].buttons);_free(GLFW.joys[joy].axes);delete GLFW.joys[joy]}}}}},setKeyCallback:function(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.keyFunc;win.keyFunc=cbfun;return prevcbfun},setCharCallback:function(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.charFunc;win.charFunc=cbfun;return prevcbfun},setMouseButtonCallback:function(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.mouseButtonFunc;win.mouseButtonFunc=cbfun;return prevcbfun},setCursorPosCallback:function(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.cursorPosFunc;win.cursorPosFunc=cbfun;return prevcbfun},setScrollCallback:function(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.scrollFunc;win.scrollFunc=cbfun;return prevcbfun},setDropCallback:function(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.dropFunc;win.dropFunc=cbfun;return prevcbfun},onDrop:function(event){if(!GLFW.active||!GLFW.active.dropFunc)return;if(!event.dataTransfer||!event.dataTransfer.files||event.dataTransfer.files.length==0)return;event.preventDefault();var filenames=_malloc(event.dataTransfer.files.length*4);var filenamesArray=[];var count=event.dataTransfer.files.length;var written=0;var drop_dir=".glfw_dropped_files";FS.createPath("/",drop_dir);function save(file){var path="/"+drop_dir+"/"+file.name.replace(/\//g,"_");var reader=new FileReader;reader.onloadend=e=>{if(reader.readyState!=2){++written;out("failed to read dropped file: "+file.name+": "+reader.error);return}var data=e.target.result;FS.writeFile(path,new Uint8Array(data));if(++written===count){getWasmTableEntry(GLFW.active.dropFunc)(GLFW.active.id,count,filenames);for(var i=0;i<filenamesArray.length;++i){_free(filenamesArray[i])}_free(filenames)}};reader.readAsArrayBuffer(file);var filename=stringToNewUTF8(path);filenamesArray.push(filename);HEAPU32[filenames+i*4>>2]=filename}for(var i=0;i<count;++i){save(event.dataTransfer.files[i])}return false},onDragover:function(event){if(!GLFW.active||!GLFW.active.dropFunc)return;event.preventDefault();return false},setWindowSizeCallback:function(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.windowSizeFunc;win.windowSizeFunc=cbfun;return prevcbfun},setWindowCloseCallback:function(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.windowCloseFunc;win.windowCloseFunc=cbfun;return prevcbfun},setWindowRefreshCallback:function(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.windowRefreshFunc;win.windowRefreshFunc=cbfun;return prevcbfun},onClickRequestPointerLock:function(e){if(!Browser.pointerLock&&Module["canvas"].requestPointerLock){Module["canvas"].requestPointerLock();e.preventDefault()}},setInputMode:function(winid,mode,value){var win=GLFW.WindowFromId(winid);if(!win)return;switch(mode){case 208897:{switch(value){case 212993:{win.inputModes[mode]=value;Module["canvas"].removeEventListener("click",GLFW.onClickRequestPointerLock,true);Module["canvas"].exitPointerLock();break}case 212994:{out("glfwSetInputMode called with GLFW_CURSOR_HIDDEN value not implemented.");break}case 212995:{win.inputModes[mode]=value;Module["canvas"].addEventListener("click",GLFW.onClickRequestPointerLock,true);Module["canvas"].requestPointerLock();break}default:{out("glfwSetInputMode called with unknown value parameter value: "+value+".");break}}break}case 208898:{out("glfwSetInputMode called with GLFW_STICKY_KEYS mode not implemented.");break}case 208899:{out("glfwSetInputMode called with GLFW_STICKY_MOUSE_BUTTONS mode not implemented.");break}case 208900:{out("glfwSetInputMode called with GLFW_LOCK_KEY_MODS mode not implemented.");break}case 3342341:{out("glfwSetInputMode called with GLFW_RAW_MOUSE_MOTION mode not implemented.");break}default:{out("glfwSetInputMode called with unknown mode parameter value: "+mode+".");break}}},getKey:function(winid,key){var win=GLFW.WindowFromId(winid);if(!win)return 0;return win.keys[key]},getMouseButton:function(winid,button){var win=GLFW.WindowFromId(winid);if(!win)return 0;return(win.buttons&1<<button)>0},getCursorPos:function(winid,x,y){HEAPF64[x>>3]=Browser.mouseX;HEAPF64[y>>3]=Browser.mouseY},getMousePos:function(winid,x,y){HEAP32[x>>2]=Browser.mouseX;HEAP32[y>>2]=Browser.mouseY},setCursorPos:function(winid,x,y){},getWindowPos:function(winid,x,y){var wx=0;var wy=0;var win=GLFW.WindowFromId(winid);if(win){wx=win.x;wy=win.y}if(x){HEAP32[x>>2]=wx}if(y){HEAP32[y>>2]=wy}},setWindowPos:function(winid,x,y){var win=GLFW.WindowFromId(winid);if(!win)return;win.x=x;win.y=y},getWindowSize:function(winid,width,height){var ww=0;var wh=0;var win=GLFW.WindowFromId(winid);if(win){ww=win.width;wh=win.height}if(width){HEAP32[width>>2]=ww}if(height){HEAP32[height>>2]=wh}},setWindowSize:function(winid,width,height){var win=GLFW.WindowFromId(winid);if(!win)return;if(GLFW.active.id==win.id){if(width==screen.width&&height==screen.height){Browser.requestFullscreen()}else{Browser.exitFullscreen();Browser.setCanvasSize(width,height);win.width=width;win.height=height}}if(win.windowSizeFunc){getWasmTableEntry(win.windowSizeFunc)(win.id,width,height)}},createWindow:function(width,height,title,monitor,share){var i,id;for(i=0;i<GLFW.windows.length&&GLFW.windows[i]!==null;i++){}if(i>0)throw"glfwCreateWindow only supports one window at time currently";id=i+1;if(width<=0||height<=0)return 0;if(monitor){Browser.requestFullscreen()}else{Browser.setCanvasSize(width,height)}for(i=0;i<GLFW.windows.length&&GLFW.windows[i]==null;i++){}var useWebGL=GLFW.hints[139265]>0;if(i==GLFW.windows.length){if(useWebGL){var contextAttributes={antialias:GLFW.hints[135181]>1,depth:GLFW.hints[135173]>0,stencil:GLFW.hints[135174]>0,alpha:GLFW.hints[135172]>0};Module.ctx=Browser.createContext(Module["canvas"],true,true,contextAttributes)}else{Browser.init()}}if(!Module.ctx&&useWebGL)return 0;var win=new GLFW_Window(id,width,height,title,monitor,share);if(id-1==GLFW.windows.length){GLFW.windows.push(win)}else{GLFW.windows[id-1]=win}GLFW.active=win;return win.id},destroyWindow:function(winid){var win=GLFW.WindowFromId(winid);if(!win)return;if(win.windowCloseFunc){getWasmTableEntry(win.windowCloseFunc)(win.id)}GLFW.windows[win.id-1]=null;if(GLFW.active.id==win.id)GLFW.active=null;for(var i=0;i<GLFW.windows.length;i++)if(GLFW.windows[i]!==null)return;Module.ctx=Browser.destroyContext(Module["canvas"],true,true)},swapBuffers:function(winid){},GLFW2ParamToGLFW3Param:function(param){var table={196609:0,196610:0,196611:0,196612:0,196613:0,196614:0,131073:0,131074:0,131075:0,131076:0,131077:135169,131078:135170,131079:135171,131080:135172,131081:135173,131082:135174,131083:135183,131084:135175,131085:135176,131086:135177,131087:135178,131088:135179,131089:135180,131090:0,131091:135181,131092:139266,131093:139267,131094:139270,131095:139271,131096:139272};return table[param]}};function _glfwCreateWindow(width,height,title,monitor,share){return GLFW.createWindow(width,height,title,monitor,share)}function _glfwDefaultWindowHints(){GLFW.hints=GLFW.defaultHints}function _glfwDestroyWindow(winid){return GLFW.destroyWindow(winid)}function _glfwGetPrimaryMonitor(){return 1}function _glfwGetTime(){return GLFW.getTime()-GLFW.initialTime}function _glfwGetVideoModes(monitor,count){HEAP32[count>>2]=0;return 0}function _emscripten_get_device_pixel_ratio(){return devicePixelRatio}function _glfwInit(){if(GLFW.windows)return 1;GLFW.initialTime=GLFW.getTime();GLFW.hints=GLFW.defaultHints;GLFW.windows=new Array;GLFW.active=null;GLFW.scale=_emscripten_get_device_pixel_ratio();window.addEventListener("gamepadconnected",GLFW.onGamepadConnected,true);window.addEventListener("gamepaddisconnected",GLFW.onGamepadDisconnected,true);window.addEventListener("keydown",GLFW.onKeydown,true);window.addEventListener("keypress",GLFW.onKeyPress,true);window.addEventListener("keyup",GLFW.onKeyup,true);window.addEventListener("blur",GLFW.onBlur,true);(function updatePixelRatio(){window.matchMedia("(resolution: "+window.devicePixelRatio+"dppx)").addEventListener("change",updatePixelRatio,{once:true});GLFW.onWindowContentScaleChanged(_emscripten_get_device_pixel_ratio())})();Module["canvas"].addEventListener("touchmove",GLFW.onMousemove,true);Module["canvas"].addEventListener("touchstart",GLFW.onMouseButtonDown,true);Module["canvas"].addEventListener("touchcancel",GLFW.onMouseButtonUp,true);Module["canvas"].addEventListener("touchend",GLFW.onMouseButtonUp,true);Module["canvas"].addEventListener("mousemove",GLFW.onMousemove,true);Module["canvas"].addEventListener("mousedown",GLFW.onMouseButtonDown,true);Module["canvas"].addEventListener("mouseup",GLFW.onMouseButtonUp,true);Module["canvas"].addEventListener("wheel",GLFW.onMouseWheel,true);Module["canvas"].addEventListener("mousewheel",GLFW.onMouseWheel,true);Module["canvas"].addEventListener("mouseenter",GLFW.onMouseenter,true);Module["canvas"].addEventListener("mouseleave",GLFW.onMouseleave,true);Module["canvas"].addEventListener("drop",GLFW.onDrop,true);Module["canvas"].addEventListener("dragover",GLFW.onDragover,true);Browser.resizeListeners.push((width,height)=>{GLFW.onCanvasResize(width,height)});return 1}function _glfwMakeContextCurrent(winid){}function _glfwSetCharCallback(winid,cbfun){return GLFW.setCharCallback(winid,cbfun)}function _glfwSetCursorEnterCallback(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.cursorEnterFunc;win.cursorEnterFunc=cbfun;return prevcbfun}function _glfwSetCursorPos(winid,x,y){GLFW.setCursorPos(winid,x,y)}function _glfwSetCursorPosCallback(winid,cbfun){return GLFW.setCursorPosCallback(winid,cbfun)}function _glfwSetDropCallback(winid,cbfun){return GLFW.setDropCallback(winid,cbfun)}function _glfwSetErrorCallback(cbfun){var prevcbfun=GLFW.errorFunc;GLFW.errorFunc=cbfun;return prevcbfun}function _glfwSetKeyCallback(winid,cbfun){return GLFW.setKeyCallback(winid,cbfun)}function _glfwSetMouseButtonCallback(winid,cbfun){return GLFW.setMouseButtonCallback(winid,cbfun)}function _glfwSetScrollCallback(winid,cbfun){return GLFW.setScrollCallback(winid,cbfun)}function _glfwSetWindowFocusCallback(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.windowFocusFunc;win.windowFocusFunc=cbfun;return prevcbfun}function _glfwSetWindowIconifyCallback(winid,cbfun){var win=GLFW.WindowFromId(winid);if(!win)return null;var prevcbfun=win.windowIconifyFunc;win.windowIconifyFunc=cbfun;return prevcbfun}function _glfwSetWindowShouldClose(winid,value){var win=GLFW.WindowFromId(winid);if(!win)return;win.shouldClose=value}function _glfwSetWindowSize(winid,width,height){GLFW.setWindowSize(winid,width,height)}function _glfwSetWindowSizeCallback(winid,cbfun){return GLFW.setWindowSizeCallback(winid,cbfun)}function _glfwSwapBuffers(winid){GLFW.swapBuffers(winid)}function _glfwSwapInterval(interval){interval=Math.abs(interval);if(interval==0)_emscripten_set_main_loop_timing(0,0);else _emscripten_set_main_loop_timing(1,interval)}function _glfwTerminate(){window.removeEventListener("gamepadconnected",GLFW.onGamepadConnected,true);window.removeEventListener("gamepaddisconnected",GLFW.onGamepadDisconnected,true);window.removeEventListener("keydown",GLFW.onKeydown,true);window.removeEventListener("keypress",GLFW.onKeyPress,true);window.removeEventListener("keyup",GLFW.onKeyup,true);window.removeEventListener("blur",GLFW.onBlur,true);Module["canvas"].removeEventListener("touchmove",GLFW.onMousemove,true);Module["canvas"].removeEventListener("touchstart",GLFW.onMouseButtonDown,true);Module["canvas"].removeEventListener("touchcancel",GLFW.onMouseButtonUp,true);Module["canvas"].removeEventListener("touchend",GLFW.onMouseButtonUp,true);Module["canvas"].removeEventListener("mousemove",GLFW.onMousemove,true);Module["canvas"].removeEventListener("mousedown",GLFW.onMouseButtonDown,true);Module["canvas"].removeEventListener("mouseup",GLFW.onMouseButtonUp,true);Module["canvas"].removeEventListener("wheel",GLFW.onMouseWheel,true);Module["canvas"].removeEventListener("mousewheel",GLFW.onMouseWheel,true);Module["canvas"].removeEventListener("mouseenter",GLFW.onMouseenter,true);Module["canvas"].removeEventListener("mouseleave",GLFW.onMouseleave,true);Module["canvas"].removeEventListener("drop",GLFW.onDrop,true);Module["canvas"].removeEventListener("dragover",GLFW.onDragover,true);Module["canvas"].width=Module["canvas"].height=1;GLFW.windows=null;GLFW.active=null}function _glfwWindowHint(target,hint){GLFW.hints[target]=hint}function getCFunc(ident){var func=Module["_"+ident];return func}function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer)}function stringToUTF8OnStack(str){var size=lengthBytesUTF8(str)+1;var ret=stackAlloc(size);stringToUTF8(str,ret,size);return ret}function ccall(ident,returnType,argTypes,args,opts){var toC={"string":str=>{var ret=0;if(str!==null&&str!==undefined&&str!==0){ret=stringToUTF8OnStack(str)}return ret},"array":arr=>{var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType==="string"){return UTF8ToString(ret)}if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);function onDone(ret){if(stack!==0)stackRestore(stack);return convertReturnValue(ret)}ret=onDone(ret);return ret}function cwrap(ident,returnType,argTypes,opts){var numericArgs=!argTypes||argTypes.every(type=>type==="number"||type==="boolean");var numericRet=returnType!=="string";if(numericRet&&numericArgs&&!opts){return getCFunc(ident)}return function(){return ccall(ident,returnType,argTypes,arguments,opts)}}var allocateUTF8=stringToNewUTF8;var FSNode=function(parent,name,mode,rdev){if(!parent){parent=this}this.parent=parent;this.mount=parent.mount;this.mounted=null;this.id=FS.nextInode++;this.name=name;this.mode=mode;this.node_ops={};this.stream_ops={};this.rdev=rdev};var readMode=292|73;var writeMode=146;Object.defineProperties(FSNode.prototype,{read:{get:function(){return(this.mode&readMode)===readMode},set:function(val){val?this.mode|=readMode:this.mode&=~readMode}},write:{get:function(){return(this.mode&writeMode)===writeMode},set:function(val){val?this.mode|=writeMode:this.mode&=~writeMode}},isFolder:{get:function(){return FS.isDir(this.mode)}},isDevice:{get:function(){return FS.isChrdev(this.mode)}}});FS.FSNode=FSNode;FS.createPreloadedFile=FS_createPreloadedFile;FS.staticInit();var GLctx;for(var i=0;i<32;++i)tempFixedLengthArray.push(new Array(i));var miniTempWebGLFloatBuffersStorage=new Float32Array(288);for(var i=0;i<288;++i){miniTempWebGLFloatBuffers[i]=miniTempWebGLFloatBuffersStorage.subarray(0,i+1)}var miniTempWebGLIntBuffersStorage=new Int32Array(288);for(var i=0;i<288;++i){miniTempWebGLIntBuffers[i]=miniTempWebGLIntBuffersStorage.subarray(0,i+1)}Module["requestFullscreen"]=function Module_requestFullscreen(lockPointer,resizeCanvas){Browser.requestFullscreen(lockPointer,resizeCanvas)};Module["requestAnimationFrame"]=function Module_requestAnimationFrame(func){Browser.requestAnimationFrame(func)};Module["setCanvasSize"]=function Module_setCanvasSize(width,height,noUpdates){Browser.setCanvasSize(width,height,noUpdates)};Module["pauseMainLoop"]=function Module_pauseMainLoop(){Browser.mainLoop.pause()};Module["resumeMainLoop"]=function Module_resumeMainLoop(){Browser.mainLoop.resume()};Module["getUserMedia"]=function Module_getUserMedia(){Browser.getUserMedia()};Module["createContext"]=function Module_createContext(canvas,useWebGL,setInModule,webGLContextAttributes){return Browser.createContext(canvas,useWebGL,setInModule,webGLContextAttributes)};var preloadedImages={};var preloadedAudios={};var wasmImports={"a":___assert_fail,"Ya":___syscall_chdir,"$a":___syscall_faccessat,"U":___syscall_fcntl64,"sb":___syscall_getcwd,"_a":___syscall_getdents64,"Ea":___syscall_ioctl,"W":___syscall_openat,"Za":___syscall_stat64,"f":_emscripten_asm_const_int,"tb":_emscripten_date_now,"eb":_emscripten_exit_pointerlock,"ib":_emscripten_get_element_css_size,"ab":_emscripten_get_gamepad_status,"_":_emscripten_get_now,"bb":_emscripten_get_num_gamepads,"ae":_emscripten_glActiveTexture,"$d":_emscripten_glAttachShader,"qe":_emscripten_glBeginQueryEXT,"_d":_emscripten_glBindAttribLocation,"Zd":_emscripten_glBindBuffer,"Yd":_emscripten_glBindFramebuffer,"Xd":_emscripten_glBindRenderbuffer,"Wd":_emscripten_glBindTexture,"ie":_emscripten_glBindVertexArrayOES,"Vd":_emscripten_glBlendColor,"Ud":_emscripten_glBlendEquation,"Td":_emscripten_glBlendEquationSeparate,"Sd":_emscripten_glBlendFunc,"Rd":_emscripten_glBlendFuncSeparate,"Qd":_emscripten_glBufferData,"Pd":_emscripten_glBufferSubData,"Od":_emscripten_glCheckFramebufferStatus,"Nd":_emscripten_glClear,"Md":_emscripten_glClearColor,"Ld":_emscripten_glClearDepthf,"Kd":_emscripten_glClearStencil,"Jd":_emscripten_glColorMask,"Id":_emscripten_glCompileShader,"Hd":_emscripten_glCompressedTexImage2D,"Gd":_emscripten_glCompressedTexSubImage2D,"Fd":_emscripten_glCopyTexImage2D,"Ed":_emscripten_glCopyTexSubImage2D,"Dd":_emscripten_glCreateProgram,"Cd":_emscripten_glCreateShader,"Bd":_emscripten_glCullFace,"Ad":_emscripten_glDeleteBuffers,"zd":_emscripten_glDeleteFramebuffers,"yd":_emscripten_glDeleteProgram,"se":_emscripten_glDeleteQueriesEXT,"xd":_emscripten_glDeleteRenderbuffers,"wd":_emscripten_glDeleteShader,"vd":_emscripten_glDeleteTextures,"he":_emscripten_glDeleteVertexArraysOES,"ud":_emscripten_glDepthFunc,"td":_emscripten_glDepthMask,"sd":_emscripten_glDepthRangef,"rd":_emscripten_glDetachShader,"pd":_emscripten_glDisable,"od":_emscripten_glDisableVertexAttribArray,"nd":_emscripten_glDrawArrays,"de":_emscripten_glDrawArraysInstancedANGLE,"ee":_emscripten_glDrawBuffersWEBGL,"md":_emscripten_glDrawElements,"ce":_emscripten_glDrawElementsInstancedANGLE,"ld":_emscripten_glEnable,"kd":_emscripten_glEnableVertexAttribArray,"pe":_emscripten_glEndQueryEXT,"jd":_emscripten_glFinish,"id":_emscripten_glFlush,"hd":_emscripten_glFramebufferRenderbuffer,"gd":_emscripten_glFramebufferTexture2D,"fd":_emscripten_glFrontFace,"ed":_emscripten_glGenBuffers,"cd":_emscripten_glGenFramebuffers,"te":_emscripten_glGenQueriesEXT,"bd":_emscripten_glGenRenderbuffers,"ad":_emscripten_glGenTextures,"ge":_emscripten_glGenVertexArraysOES,"dd":_emscripten_glGenerateMipmap,"$c":_emscripten_glGetActiveAttrib,"_c":_emscripten_glGetActiveUniform,"Zc":_emscripten_glGetAttachedShaders,"Yc":_emscripten_glGetAttribLocation,"Xc":_emscripten_glGetBooleanv,"Wc":_emscripten_glGetBufferParameteriv,"Vc":_emscripten_glGetError,"Uc":_emscripten_glGetFloatv,"Tc":_emscripten_glGetFramebufferAttachmentParameteriv,"Sc":_emscripten_glGetIntegerv,"Qc":_emscripten_glGetProgramInfoLog,"Rc":_emscripten_glGetProgramiv,"ke":_emscripten_glGetQueryObjecti64vEXT,"me":_emscripten_glGetQueryObjectivEXT,"je":_emscripten_glGetQueryObjectui64vEXT,"le":_emscripten_glGetQueryObjectuivEXT,"ne":_emscripten_glGetQueryivEXT,"Pc":_emscripten_glGetRenderbufferParameteriv,"Nc":_emscripten_glGetShaderInfoLog,"Mc":_emscripten_glGetShaderPrecisionFormat,"Lc":_emscripten_glGetShaderSource,"Oc":_emscripten_glGetShaderiv,"Kc":_emscripten_glGetString,"Jc":_emscripten_glGetTexParameterfv,"Ic":_emscripten_glGetTexParameteriv,"Fc":_emscripten_glGetUniformLocation,"Hc":_emscripten_glGetUniformfv,"Gc":_emscripten_glGetUniformiv,"Cc":_emscripten_glGetVertexAttribPointerv,"Ec":_emscripten_glGetVertexAttribfv,"Dc":_emscripten_glGetVertexAttribiv,"Bc":_emscripten_glHint,"Ac":_emscripten_glIsBuffer,"zc":_emscripten_glIsEnabled,"yc":_emscripten_glIsFramebuffer,"xc":_emscripten_glIsProgram,"re":_emscripten_glIsQueryEXT,"wc":_emscripten_glIsRenderbuffer,"vc":_emscripten_glIsShader,"uc":_emscripten_glIsTexture,"fe":_emscripten_glIsVertexArrayOES,"tc":_emscripten_glLineWidth,"sc":_emscripten_glLinkProgram,"rc":_emscripten_glPixelStorei,"qc":_emscripten_glPolygonOffset,"oe":_emscripten_glQueryCounterEXT,"pc":_emscripten_glReadPixels,"oc":_emscripten_glReleaseShaderCompiler,"nc":_emscripten_glRenderbufferStorage,"mc":_emscripten_glSampleCoverage,"lc":_emscripten_glScissor,"kc":_emscripten_glShaderBinary,"jc":_emscripten_glShaderSource,"ic":_emscripten_glStencilFunc,"hc":_emscripten_glStencilFuncSeparate,"gc":_emscripten_glStencilMask,"fc":_emscripten_glStencilMaskSeparate,"ec":_emscripten_glStencilOp,"dc":_emscripten_glStencilOpSeparate,"cc":_emscripten_glTexImage2D,"bc":_emscripten_glTexParameterf,"ac":_emscripten_glTexParameterfv,"$b":_emscripten_glTexParameteri,"_b":_emscripten_glTexParameteriv,"Zb":_emscripten_glTexSubImage2D,"Yb":_emscripten_glUniform1f,"Xb":_emscripten_glUniform1fv,"Wb":_emscripten_glUniform1i,"Vb":_emscripten_glUniform1iv,"Ub":_emscripten_glUniform2f,"Tb":_emscripten_glUniform2fv,"Sb":_emscripten_glUniform2i,"Rb":_emscripten_glUniform2iv,"Qb":_emscripten_glUniform3f,"Pb":_emscripten_glUniform3fv,"Ob":_emscripten_glUniform3i,"Nb":_emscripten_glUniform3iv,"Mb":_emscripten_glUniform4f,"Lb":_emscripten_glUniform4fv,"Kb":_emscripten_glUniform4i,"Jb":_emscripten_glUniform4iv,"Ib":_emscripten_glUniformMatrix2fv,"Hb":_emscripten_glUniformMatrix3fv,"Gb":_emscripten_glUniformMatrix4fv,"Fb":_emscripten_glUseProgram,"Eb":_emscripten_glValidateProgram,"Db":_emscripten_glVertexAttrib1f,"Cb":_emscripten_glVertexAttrib1fv,"Bb":_emscripten_glVertexAttrib2f,"Ab":_emscripten_glVertexAttrib2fv,"zb":_emscripten_glVertexAttrib3f,"yb":_emscripten_glVertexAttrib3fv,"xb":_emscripten_glVertexAttrib4f,"wb":_emscripten_glVertexAttrib4fv,"be":_emscripten_glVertexAttribDivisorANGLE,"vb":_emscripten_glVertexAttribPointer,"ub":_emscripten_glViewport,"Ge":_emscripten_memcpy_big,"db":_emscripten_request_pointerlock,"Ra":_emscripten_resize_heap,"B":_emscripten_run_script,"cb":_emscripten_sample_gamepad_data,"qb":_emscripten_set_click_callback_on_thread,"rb":_emscripten_set_fullscreenchange_callback_on_thread,"kb":_emscripten_set_gamepadconnected_callback_on_thread,"jb":_emscripten_set_gamepaddisconnected_callback_on_thread,"lb":_emscripten_set_touchcancel_callback_on_thread,"ob":_emscripten_set_touchend_callback_on_thread,"mb":_emscripten_set_touchmove_callback_on_thread,"pb":_emscripten_set_touchstart_callback_on_thread,"gb":_emscripten_sleep,"da":_exit,"w":_fd_close,"xa":_fd_read,"Va":_fd_seek,"ha":_fd_write,"L":_glActiveTexture,"P":_glAttachShader,"o":_glBindAttribLocation,"c":_glBindBuffer,"h":_glBindFramebuffer,"V":_glBindRenderbuffer,"e":_glBindTexture,"m":_glBlendEquation,"Ta":_glBlendEquationSeparate,"l":_glBlendFunc,"Ua":_glBlendFuncSeparate,"p":_glBufferData,"D":_glBufferSubData,"Ha":_glCheckFramebufferStatus,"Y":_glClear,"Z":_glClearColor,"Pa":_glClearDepthf,"Da":_glCompileShader,"X":_glCompressedTexImage2D,"Ba":_glCreateProgram,"Ga":_glCreateShader,"nb":_glCullFace,"t":_glDeleteBuffers,"Ia":_glDeleteFramebuffers,"G":_glDeleteProgram,"Ja":_glDeleteRenderbuffers,"x":_glDeleteShader,"F":_glDeleteTextures,"Sa":_glDepthFunc,"y":_glDetachShader,"J":_glDisable,"i":_glDisableVertexAttribArray,"ca":_glDrawArrays,"ba":_glDrawElements,"C":_glEnable,"b":_glEnableVertexAttribArray,"E":_glFramebufferRenderbuffer,"r":_glFramebufferTexture2D,"Qa":_glFrontFace,"q":_glGenBuffers,"T":_glGenFramebuffers,"Na":_glGenRenderbuffers,"H":_glGenTextures,"Ka":_glGenerateMipmap,"A":_glGetAttribLocation,"Xa":_glGetFloatv,"R":_glGetFramebufferAttachmentParameteriv,"za":_glGetProgramInfoLog,"O":_glGetProgramiv,"Ca":_glGetShaderInfoLog,"Q":_glGetShaderiv,"s":_glGetString,"z":_glGetUniformLocation,"Aa":_glLinkProgram,"Oa":_glPixelStorei,"S":_glReadPixels,"Ma":_glRenderbufferStorage,"aa":_glScissor,"Fa":_glShaderSource,"u":_glTexImage2D,"K":_glTexParameterf,"g":_glTexParameteri,"La":_glTexSubImage2D,"ya":_glUniform1fv,"ea":_glUniform1i,"qa":_glUniform1iv,"wa":_glUniform2fv,"ta":_glUniform2iv,"va":_glUniform3fv,"sa":_glUniform3iv,"qd":_glUniform4f,"ua":_glUniform4fv,"ra":_glUniform4iv,"fa":_glUniformMatrix4fv,"j":_glUseProgram,"pa":_glVertexAttrib1fv,"oa":_glVertexAttrib2fv,"na":_glVertexAttrib3fv,"ma":_glVertexAttrib4fv,"n":_glVertexAttribPointer,"v":_glViewport,"M":_glfwCreateWindow,"ja":_glfwDefaultWindowHints,"hb":_glfwDestroyWindow,"N":_glfwGetPrimaryMonitor,"d":_glfwGetTime,"ia":_glfwGetVideoModes,"ka":_glfwInit,"ve":_glfwMakeContextCurrent,"Ae":_glfwSetCharCallback,"we":_glfwSetCursorEnterCallback,"I":_glfwSetCursorPos,"ye":_glfwSetCursorPosCallback,"Ce":_glfwSetDropCallback,"la":_glfwSetErrorCallback,"Be":_glfwSetKeyCallback,"ze":_glfwSetMouseButtonCallback,"xe":_glfwSetScrollCallback,"De":_glfwSetWindowFocusCallback,"Ee":_glfwSetWindowIconifyCallback,"Wa":_glfwSetWindowShouldClose,"fb":_glfwSetWindowSize,"Fe":_glfwSetWindowSizeCallback,"$":_glfwSwapBuffers,"ue":_glfwSwapInterval,"ga":_glfwTerminate,"k":_glfwWindowHint};var asm=createWasm();var ___wasm_call_ctors=function(){return(___wasm_call_ctors=Module["asm"]["Ie"]).apply(null,arguments)};var _SetGesturesEnabled=Module["_SetGesturesEnabled"]=function(){return(_SetGesturesEnabled=Module["_SetGesturesEnabled"]=Module["asm"]["Je"]).apply(null,arguments)};var _IsGestureDetected=Module["_IsGestureDetected"]=function(){return(_IsGestureDetected=Module["_IsGestureDetected"]=Module["asm"]["Ke"]).apply(null,arguments)};var _GetGestureDetected=Module["_GetGestureDetected"]=function(){return(_GetGestureDetected=Module["_GetGestureDetected"]=Module["asm"]["Le"]).apply(null,arguments)};var _GetGestureHoldDuration=Module["_GetGestureHoldDuration"]=function(){return(_GetGestureHoldDuration=Module["_GetGestureHoldDuration"]=Module["asm"]["Me"]).apply(null,arguments)};var _GetGestureDragVector=Module["_GetGestureDragVector"]=function(){return(_GetGestureDragVector=Module["_GetGestureDragVector"]=Module["asm"]["Ne"]).apply(null,arguments)};var _GetGestureDragAngle=Module["_GetGestureDragAngle"]=function(){return(_GetGestureDragAngle=Module["_GetGestureDragAngle"]=Module["asm"]["Oe"]).apply(null,arguments)};var _GetGesturePinchVector=Module["_GetGesturePinchVector"]=function(){return(_GetGesturePinchVector=Module["_GetGesturePinchVector"]=Module["asm"]["Pe"]).apply(null,arguments)};var _GetGesturePinchAngle=Module["_GetGesturePinchAngle"]=function(){return(_GetGesturePinchAngle=Module["_GetGesturePinchAngle"]=Module["asm"]["Qe"]).apply(null,arguments)};var _UpdateCamera=Module["_UpdateCamera"]=function(){return(_UpdateCamera=Module["_UpdateCamera"]=Module["asm"]["Re"]).apply(null,arguments)};var _GetMouseDelta=Module["_GetMouseDelta"]=function(){return(_GetMouseDelta=Module["_GetMouseDelta"]=Module["asm"]["Se"]).apply(null,arguments)};var _GetFrameTime=Module["_GetFrameTime"]=function(){return(_GetFrameTime=Module["_GetFrameTime"]=Module["asm"]["Te"]).apply(null,arguments)};var _IsKeyDown=Module["_IsKeyDown"]=function(){return(_IsKeyDown=Module["_IsKeyDown"]=Module["asm"]["Ue"]).apply(null,arguments)};var _GetMouseWheelMove=Module["_GetMouseWheelMove"]=function(){return(_GetMouseWheelMove=Module["_GetMouseWheelMove"]=Module["asm"]["Ve"]).apply(null,arguments)};var _IsKeyPressed=Module["_IsKeyPressed"]=function(){return(_IsKeyPressed=Module["_IsKeyPressed"]=Module["asm"]["We"]).apply(null,arguments)};var _UpdateCameraPro=Module["_UpdateCameraPro"]=function(){return(_UpdateCameraPro=Module["_UpdateCameraPro"]=Module["asm"]["Xe"]).apply(null,arguments)};var _InitWindow=Module["_InitWindow"]=function(){return(_InitWindow=Module["_InitWindow"]=Module["asm"]["Ye"]).apply(null,arguments)};var _SetWindowPosition=Module["_SetWindowPosition"]=function(){return(_SetWindowPosition=Module["_SetWindowPosition"]=Module["asm"]["Ze"]).apply(null,arguments)};var _GetMonitorWidth=Module["_GetMonitorWidth"]=function(){return(_GetMonitorWidth=Module["_GetMonitorWidth"]=Module["asm"]["_e"]).apply(null,arguments)};var _GetCurrentMonitor=Module["_GetCurrentMonitor"]=function(){return(_GetCurrentMonitor=Module["_GetCurrentMonitor"]=Module["asm"]["$e"]).apply(null,arguments)};var _GetMonitorHeight=Module["_GetMonitorHeight"]=function(){return(_GetMonitorHeight=Module["_GetMonitorHeight"]=Module["asm"]["af"]).apply(null,arguments)};var _GetWorkingDirectory=Module["_GetWorkingDirectory"]=function(){return(_GetWorkingDirectory=Module["_GetWorkingDirectory"]=Module["asm"]["bf"]).apply(null,arguments)};var _CloseWindow=Module["_CloseWindow"]=function(){return(_CloseWindow=Module["_CloseWindow"]=Module["asm"]["cf"]).apply(null,arguments)};var _WindowShouldClose=Module["_WindowShouldClose"]=function(){return(_WindowShouldClose=Module["_WindowShouldClose"]=Module["asm"]["df"]).apply(null,arguments)};var _IsWindowReady=Module["_IsWindowReady"]=function(){return(_IsWindowReady=Module["_IsWindowReady"]=Module["asm"]["ef"]).apply(null,arguments)};var _IsWindowFullscreen=Module["_IsWindowFullscreen"]=function(){return(_IsWindowFullscreen=Module["_IsWindowFullscreen"]=Module["asm"]["ff"]).apply(null,arguments)};var _IsWindowHidden=Module["_IsWindowHidden"]=function(){return(_IsWindowHidden=Module["_IsWindowHidden"]=Module["asm"]["gf"]).apply(null,arguments)};var _IsWindowMinimized=Module["_IsWindowMinimized"]=function(){return(_IsWindowMinimized=Module["_IsWindowMinimized"]=Module["asm"]["hf"]).apply(null,arguments)};var _IsWindowMaximized=Module["_IsWindowMaximized"]=function(){return(_IsWindowMaximized=Module["_IsWindowMaximized"]=Module["asm"]["jf"]).apply(null,arguments)};var _IsWindowFocused=Module["_IsWindowFocused"]=function(){return(_IsWindowFocused=Module["_IsWindowFocused"]=Module["asm"]["kf"]).apply(null,arguments)};var _IsWindowResized=Module["_IsWindowResized"]=function(){return(_IsWindowResized=Module["_IsWindowResized"]=Module["asm"]["lf"]).apply(null,arguments)};var _IsWindowState=Module["_IsWindowState"]=function(){return(_IsWindowState=Module["_IsWindowState"]=Module["asm"]["mf"]).apply(null,arguments)};var _ToggleFullscreen=Module["_ToggleFullscreen"]=function(){return(_ToggleFullscreen=Module["_ToggleFullscreen"]=Module["asm"]["nf"]).apply(null,arguments)};var _MaximizeWindow=Module["_MaximizeWindow"]=function(){return(_MaximizeWindow=Module["_MaximizeWindow"]=Module["asm"]["of"]).apply(null,arguments)};var _MinimizeWindow=Module["_MinimizeWindow"]=function(){return(_MinimizeWindow=Module["_MinimizeWindow"]=Module["asm"]["pf"]).apply(null,arguments)};var _RestoreWindow=Module["_RestoreWindow"]=function(){return(_RestoreWindow=Module["_RestoreWindow"]=Module["asm"]["qf"]).apply(null,arguments)};var _SetWindowState=Module["_SetWindowState"]=function(){return(_SetWindowState=Module["_SetWindowState"]=Module["asm"]["rf"]).apply(null,arguments)};var _ClearWindowState=Module["_ClearWindowState"]=function(){return(_ClearWindowState=Module["_ClearWindowState"]=Module["asm"]["sf"]).apply(null,arguments)};var _SetWindowIcon=Module["_SetWindowIcon"]=function(){return(_SetWindowIcon=Module["_SetWindowIcon"]=Module["asm"]["tf"]).apply(null,arguments)};var _SetWindowIcons=Module["_SetWindowIcons"]=function(){return(_SetWindowIcons=Module["_SetWindowIcons"]=Module["asm"]["uf"]).apply(null,arguments)};var _SetWindowTitle=Module["_SetWindowTitle"]=function(){return(_SetWindowTitle=Module["_SetWindowTitle"]=Module["asm"]["vf"]).apply(null,arguments)};var _SetWindowMonitor=Module["_SetWindowMonitor"]=function(){return(_SetWindowMonitor=Module["_SetWindowMonitor"]=Module["asm"]["wf"]).apply(null,arguments)};var _SetWindowMinSize=Module["_SetWindowMinSize"]=function(){return(_SetWindowMinSize=Module["_SetWindowMinSize"]=Module["asm"]["xf"]).apply(null,arguments)};var _SetWindowSize=Module["_SetWindowSize"]=function(){return(_SetWindowSize=Module["_SetWindowSize"]=Module["asm"]["yf"]).apply(null,arguments)};var _SetWindowOpacity=Module["_SetWindowOpacity"]=function(){return(_SetWindowOpacity=Module["_SetWindowOpacity"]=Module["asm"]["zf"]).apply(null,arguments)};var _GetScreenWidth=Module["_GetScreenWidth"]=function(){return(_GetScreenWidth=Module["_GetScreenWidth"]=Module["asm"]["Af"]).apply(null,arguments)};var _GetScreenHeight=Module["_GetScreenHeight"]=function(){return(_GetScreenHeight=Module["_GetScreenHeight"]=Module["asm"]["Bf"]).apply(null,arguments)};var _GetRenderWidth=Module["_GetRenderWidth"]=function(){return(_GetRenderWidth=Module["_GetRenderWidth"]=Module["asm"]["Cf"]).apply(null,arguments)};var _GetRenderHeight=Module["_GetRenderHeight"]=function(){return(_GetRenderHeight=Module["_GetRenderHeight"]=Module["asm"]["Df"]).apply(null,arguments)};var _GetWindowHandle=Module["_GetWindowHandle"]=function(){return(_GetWindowHandle=Module["_GetWindowHandle"]=Module["asm"]["Ef"]).apply(null,arguments)};var _GetMonitorCount=Module["_GetMonitorCount"]=function(){return(_GetMonitorCount=Module["_GetMonitorCount"]=Module["asm"]["Ff"]).apply(null,arguments)};var _GetMonitorPosition=Module["_GetMonitorPosition"]=function(){return(_GetMonitorPosition=Module["_GetMonitorPosition"]=Module["asm"]["Gf"]).apply(null,arguments)};var _GetMonitorPhysicalWidth=Module["_GetMonitorPhysicalWidth"]=function(){return(_GetMonitorPhysicalWidth=Module["_GetMonitorPhysicalWidth"]=Module["asm"]["Hf"]).apply(null,arguments)};var _GetMonitorPhysicalHeight=Module["_GetMonitorPhysicalHeight"]=function(){return(_GetMonitorPhysicalHeight=Module["_GetMonitorPhysicalHeight"]=Module["asm"]["If"]).apply(null,arguments)};var _GetMonitorRefreshRate=Module["_GetMonitorRefreshRate"]=function(){return(_GetMonitorRefreshRate=Module["_GetMonitorRefreshRate"]=Module["asm"]["Jf"]).apply(null,arguments)};var _GetWindowPosition=Module["_GetWindowPosition"]=function(){return(_GetWindowPosition=Module["_GetWindowPosition"]=Module["asm"]["Kf"]).apply(null,arguments)};var _GetWindowScaleDPI=Module["_GetWindowScaleDPI"]=function(){return(_GetWindowScaleDPI=Module["_GetWindowScaleDPI"]=Module["asm"]["Lf"]).apply(null,arguments)};var _GetMonitorName=Module["_GetMonitorName"]=function(){return(_GetMonitorName=Module["_GetMonitorName"]=Module["asm"]["Mf"]).apply(null,arguments)};var _SetClipboardText=Module["_SetClipboardText"]=function(){return(_SetClipboardText=Module["_SetClipboardText"]=Module["asm"]["Nf"]).apply(null,arguments)};var _GetClipboardText=Module["_GetClipboardText"]=function(){return(_GetClipboardText=Module["_GetClipboardText"]=Module["asm"]["Of"]).apply(null,arguments)};var _EnableEventWaiting=Module["_EnableEventWaiting"]=function(){return(_EnableEventWaiting=Module["_EnableEventWaiting"]=Module["asm"]["Pf"]).apply(null,arguments)};var _DisableEventWaiting=Module["_DisableEventWaiting"]=function(){return(_DisableEventWaiting=Module["_DisableEventWaiting"]=Module["asm"]["Qf"]).apply(null,arguments)};var _ShowCursor=Module["_ShowCursor"]=function(){return(_ShowCursor=Module["_ShowCursor"]=Module["asm"]["Rf"]).apply(null,arguments)};var _HideCursor=Module["_HideCursor"]=function(){return(_HideCursor=Module["_HideCursor"]=Module["asm"]["Sf"]).apply(null,arguments)};var _IsCursorHidden=Module["_IsCursorHidden"]=function(){return(_IsCursorHidden=Module["_IsCursorHidden"]=Module["asm"]["Tf"]).apply(null,arguments)};var _EnableCursor=Module["_EnableCursor"]=function(){return(_EnableCursor=Module["_EnableCursor"]=Module["asm"]["Uf"]).apply(null,arguments)};var _SetMousePosition=Module["_SetMousePosition"]=function(){return(_SetMousePosition=Module["_SetMousePosition"]=Module["asm"]["Vf"]).apply(null,arguments)};var _DisableCursor=Module["_DisableCursor"]=function(){return(_DisableCursor=Module["_DisableCursor"]=Module["asm"]["Wf"]).apply(null,arguments)};var _IsCursorOnScreen=Module["_IsCursorOnScreen"]=function(){return(_IsCursorOnScreen=Module["_IsCursorOnScreen"]=Module["asm"]["Xf"]).apply(null,arguments)};var _ClearBackground=Module["_ClearBackground"]=function(){return(_ClearBackground=Module["_ClearBackground"]=Module["asm"]["Yf"]).apply(null,arguments)};var _BeginDrawing=Module["_BeginDrawing"]=function(){return(_BeginDrawing=Module["_BeginDrawing"]=Module["asm"]["Zf"]).apply(null,arguments)};var _GetTime=Module["_GetTime"]=function(){return(_GetTime=Module["_GetTime"]=Module["asm"]["_f"]).apply(null,arguments)};var _EndDrawing=Module["_EndDrawing"]=function(){return(_EndDrawing=Module["_EndDrawing"]=Module["asm"]["$f"]).apply(null,arguments)};var _WaitTime=Module["_WaitTime"]=function(){return(_WaitTime=Module["_WaitTime"]=Module["asm"]["ag"]).apply(null,arguments)};var _PollInputEvents=Module["_PollInputEvents"]=function(){return(_PollInputEvents=Module["_PollInputEvents"]=Module["asm"]["bg"]).apply(null,arguments)};var _SwapScreenBuffer=Module["_SwapScreenBuffer"]=function(){return(_SwapScreenBuffer=Module["_SwapScreenBuffer"]=Module["asm"]["cg"]).apply(null,arguments)};var _BeginMode2D=Module["_BeginMode2D"]=function(){return(_BeginMode2D=Module["_BeginMode2D"]=Module["asm"]["dg"]).apply(null,arguments)};var _GetCameraMatrix2D=Module["_GetCameraMatrix2D"]=function(){return(_GetCameraMatrix2D=Module["_GetCameraMatrix2D"]=Module["asm"]["eg"]).apply(null,arguments)};var _EndMode2D=Module["_EndMode2D"]=function(){return(_EndMode2D=Module["_EndMode2D"]=Module["asm"]["fg"]).apply(null,arguments)};var _BeginMode3D=Module["_BeginMode3D"]=function(){return(_BeginMode3D=Module["_BeginMode3D"]=Module["asm"]["gg"]).apply(null,arguments)};var _EndMode3D=Module["_EndMode3D"]=function(){return(_EndMode3D=Module["_EndMode3D"]=Module["asm"]["hg"]).apply(null,arguments)};var _BeginTextureMode=Module["_BeginTextureMode"]=function(){return(_BeginTextureMode=Module["_BeginTextureMode"]=Module["asm"]["ig"]).apply(null,arguments)};var _EndTextureMode=Module["_EndTextureMode"]=function(){return(_EndTextureMode=Module["_EndTextureMode"]=Module["asm"]["jg"]).apply(null,arguments)};var _BeginShaderMode=Module["_BeginShaderMode"]=function(){return(_BeginShaderMode=Module["_BeginShaderMode"]=Module["asm"]["kg"]).apply(null,arguments)};var _EndShaderMode=Module["_EndShaderMode"]=function(){return(_EndShaderMode=Module["_EndShaderMode"]=Module["asm"]["lg"]).apply(null,arguments)};var _BeginBlendMode=Module["_BeginBlendMode"]=function(){return(_BeginBlendMode=Module["_BeginBlendMode"]=Module["asm"]["mg"]).apply(null,arguments)};var _EndBlendMode=Module["_EndBlendMode"]=function(){return(_EndBlendMode=Module["_EndBlendMode"]=Module["asm"]["ng"]).apply(null,arguments)};var _BeginScissorMode=Module["_BeginScissorMode"]=function(){return(_BeginScissorMode=Module["_BeginScissorMode"]=Module["asm"]["og"]).apply(null,arguments)};var _EndScissorMode=Module["_EndScissorMode"]=function(){return(_EndScissorMode=Module["_EndScissorMode"]=Module["asm"]["pg"]).apply(null,arguments)};var _BeginVrStereoMode=Module["_BeginVrStereoMode"]=function(){return(_BeginVrStereoMode=Module["_BeginVrStereoMode"]=Module["asm"]["qg"]).apply(null,arguments)};var _EndVrStereoMode=Module["_EndVrStereoMode"]=function(){return(_EndVrStereoMode=Module["_EndVrStereoMode"]=Module["asm"]["rg"]).apply(null,arguments)};var _LoadVrStereoConfig=Module["_LoadVrStereoConfig"]=function(){return(_LoadVrStereoConfig=Module["_LoadVrStereoConfig"]=Module["asm"]["sg"]).apply(null,arguments)};var _UnloadVrStereoConfig=Module["_UnloadVrStereoConfig"]=function(){return(_UnloadVrStereoConfig=Module["_UnloadVrStereoConfig"]=Module["asm"]["tg"]).apply(null,arguments)};var _LoadShader=Module["_LoadShader"]=function(){return(_LoadShader=Module["_LoadShader"]=Module["asm"]["ug"]).apply(null,arguments)};var _LoadShaderFromMemory=Module["_LoadShaderFromMemory"]=function(){return(_LoadShaderFromMemory=Module["_LoadShaderFromMemory"]=Module["asm"]["vg"]).apply(null,arguments)};var _IsShaderReady=Module["_IsShaderReady"]=function(){return(_IsShaderReady=Module["_IsShaderReady"]=Module["asm"]["wg"]).apply(null,arguments)};var _UnloadShader=Module["_UnloadShader"]=function(){return(_UnloadShader=Module["_UnloadShader"]=Module["asm"]["xg"]).apply(null,arguments)};var _GetShaderLocation=Module["_GetShaderLocation"]=function(){return(_GetShaderLocation=Module["_GetShaderLocation"]=Module["asm"]["yg"]).apply(null,arguments)};var _GetShaderLocationAttrib=Module["_GetShaderLocationAttrib"]=function(){return(_GetShaderLocationAttrib=Module["_GetShaderLocationAttrib"]=Module["asm"]["zg"]).apply(null,arguments)};var _SetShaderValue=Module["_SetShaderValue"]=function(){return(_SetShaderValue=Module["_SetShaderValue"]=Module["asm"]["Ag"]).apply(null,arguments)};var _SetShaderValueV=Module["_SetShaderValueV"]=function(){return(_SetShaderValueV=Module["_SetShaderValueV"]=Module["asm"]["Bg"]).apply(null,arguments)};var _SetShaderValueMatrix=Module["_SetShaderValueMatrix"]=function(){return(_SetShaderValueMatrix=Module["_SetShaderValueMatrix"]=Module["asm"]["Cg"]).apply(null,arguments)};var _SetShaderValueTexture=Module["_SetShaderValueTexture"]=function(){return(_SetShaderValueTexture=Module["_SetShaderValueTexture"]=Module["asm"]["Dg"]).apply(null,arguments)};var _GetMouseRay=Module["_GetMouseRay"]=function(){return(_GetMouseRay=Module["_GetMouseRay"]=Module["asm"]["Eg"]).apply(null,arguments)};var _GetCameraMatrix=Module["_GetCameraMatrix"]=function(){return(_GetCameraMatrix=Module["_GetCameraMatrix"]=Module["asm"]["Fg"]).apply(null,arguments)};var _GetWorldToScreen=Module["_GetWorldToScreen"]=function(){return(_GetWorldToScreen=Module["_GetWorldToScreen"]=Module["asm"]["Gg"]).apply(null,arguments)};var _GetWorldToScreenEx=Module["_GetWorldToScreenEx"]=function(){return(_GetWorldToScreenEx=Module["_GetWorldToScreenEx"]=Module["asm"]["Hg"]).apply(null,arguments)};var _GetWorldToScreen2D=Module["_GetWorldToScreen2D"]=function(){return(_GetWorldToScreen2D=Module["_GetWorldToScreen2D"]=Module["asm"]["Ig"]).apply(null,arguments)};var _GetScreenToWorld2D=Module["_GetScreenToWorld2D"]=function(){return(_GetScreenToWorld2D=Module["_GetScreenToWorld2D"]=Module["asm"]["Jg"]).apply(null,arguments)};var _SetTargetFPS=Module["_SetTargetFPS"]=function(){return(_SetTargetFPS=Module["_SetTargetFPS"]=Module["asm"]["Kg"]).apply(null,arguments)};var _GetFPS=Module["_GetFPS"]=function(){return(_GetFPS=Module["_GetFPS"]=Module["asm"]["Lg"]).apply(null,arguments)};var _SetConfigFlags=Module["_SetConfigFlags"]=function(){return(_SetConfigFlags=Module["_SetConfigFlags"]=Module["asm"]["Mg"]).apply(null,arguments)};var _TakeScreenshot=Module["_TakeScreenshot"]=function(){return(_TakeScreenshot=Module["_TakeScreenshot"]=Module["asm"]["Ng"]).apply(null,arguments)};var _GetFileName=Module["_GetFileName"]=function(){return(_GetFileName=Module["_GetFileName"]=Module["asm"]["Og"]).apply(null,arguments)};var _GetRandomValue=Module["_GetRandomValue"]=function(){return(_GetRandomValue=Module["_GetRandomValue"]=Module["asm"]["Pg"]).apply(null,arguments)};var _SetRandomSeed=Module["_SetRandomSeed"]=function(){return(_SetRandomSeed=Module["_SetRandomSeed"]=Module["asm"]["Qg"]).apply(null,arguments)};var _FileExists=Module["_FileExists"]=function(){return(_FileExists=Module["_FileExists"]=Module["asm"]["Rg"]).apply(null,arguments)};var _IsFileExtension=Module["_IsFileExtension"]=function(){return(_IsFileExtension=Module["_IsFileExtension"]=Module["asm"]["Sg"]).apply(null,arguments)};var _GetFileExtension=Module["_GetFileExtension"]=function(){return(_GetFileExtension=Module["_GetFileExtension"]=Module["asm"]["Tg"]).apply(null,arguments)};var _DirectoryExists=Module["_DirectoryExists"]=function(){return(_DirectoryExists=Module["_DirectoryExists"]=Module["asm"]["Ug"]).apply(null,arguments)};var _GetFileLength=Module["_GetFileLength"]=function(){return(_GetFileLength=Module["_GetFileLength"]=Module["asm"]["Vg"]).apply(null,arguments)};var _GetFileNameWithoutExt=Module["_GetFileNameWithoutExt"]=function(){return(_GetFileNameWithoutExt=Module["_GetFileNameWithoutExt"]=Module["asm"]["Wg"]).apply(null,arguments)};var _GetDirectoryPath=Module["_GetDirectoryPath"]=function(){return(_GetDirectoryPath=Module["_GetDirectoryPath"]=Module["asm"]["Xg"]).apply(null,arguments)};var _GetPrevDirectoryPath=Module["_GetPrevDirectoryPath"]=function(){return(_GetPrevDirectoryPath=Module["_GetPrevDirectoryPath"]=Module["asm"]["Yg"]).apply(null,arguments)};var _GetApplicationDirectory=Module["_GetApplicationDirectory"]=function(){return(_GetApplicationDirectory=Module["_GetApplicationDirectory"]=Module["asm"]["Zg"]).apply(null,arguments)};var _LoadDirectoryFiles=Module["_LoadDirectoryFiles"]=function(){return(_LoadDirectoryFiles=Module["_LoadDirectoryFiles"]=Module["asm"]["_g"]).apply(null,arguments)};var _LoadDirectoryFilesEx=Module["_LoadDirectoryFilesEx"]=function(){return(_LoadDirectoryFilesEx=Module["_LoadDirectoryFilesEx"]=Module["asm"]["$g"]).apply(null,arguments)};var _UnloadDirectoryFiles=Module["_UnloadDirectoryFiles"]=function(){return(_UnloadDirectoryFiles=Module["_UnloadDirectoryFiles"]=Module["asm"]["ah"]).apply(null,arguments)};var _ChangeDirectory=Module["_ChangeDirectory"]=function(){return(_ChangeDirectory=Module["_ChangeDirectory"]=Module["asm"]["bh"]).apply(null,arguments)};var _IsPathFile=Module["_IsPathFile"]=function(){return(_IsPathFile=Module["_IsPathFile"]=Module["asm"]["ch"]).apply(null,arguments)};var _IsFileDropped=Module["_IsFileDropped"]=function(){return(_IsFileDropped=Module["_IsFileDropped"]=Module["asm"]["dh"]).apply(null,arguments)};var _LoadDroppedFiles=Module["_LoadDroppedFiles"]=function(){return(_LoadDroppedFiles=Module["_LoadDroppedFiles"]=Module["asm"]["eh"]).apply(null,arguments)};var _UnloadDroppedFiles=Module["_UnloadDroppedFiles"]=function(){return(_UnloadDroppedFiles=Module["_UnloadDroppedFiles"]=Module["asm"]["fh"]).apply(null,arguments)};var _GetFileModTime=Module["_GetFileModTime"]=function(){return(_GetFileModTime=Module["_GetFileModTime"]=Module["asm"]["gh"]).apply(null,arguments)};var _CompressData=Module["_CompressData"]=function(){return(_CompressData=Module["_CompressData"]=Module["asm"]["hh"]).apply(null,arguments)};var _DecompressData=Module["_DecompressData"]=function(){return(_DecompressData=Module["_DecompressData"]=Module["asm"]["ih"]).apply(null,arguments)};var _EncodeDataBase64=Module["_EncodeDataBase64"]=function(){return(_EncodeDataBase64=Module["_EncodeDataBase64"]=Module["asm"]["jh"]).apply(null,arguments)};var _DecodeDataBase64=Module["_DecodeDataBase64"]=function(){return(_DecodeDataBase64=Module["_DecodeDataBase64"]=Module["asm"]["kh"]).apply(null,arguments)};var _OpenURL=Module["_OpenURL"]=function(){return(_OpenURL=Module["_OpenURL"]=Module["asm"]["lh"]).apply(null,arguments)};var _IsKeyReleased=Module["_IsKeyReleased"]=function(){return(_IsKeyReleased=Module["_IsKeyReleased"]=Module["asm"]["mh"]).apply(null,arguments)};var _IsKeyUp=Module["_IsKeyUp"]=function(){return(_IsKeyUp=Module["_IsKeyUp"]=Module["asm"]["nh"]).apply(null,arguments)};var _GetKeyPressed=Module["_GetKeyPressed"]=function(){return(_GetKeyPressed=Module["_GetKeyPressed"]=Module["asm"]["oh"]).apply(null,arguments)};var _GetCharPressed=Module["_GetCharPressed"]=function(){return(_GetCharPressed=Module["_GetCharPressed"]=Module["asm"]["ph"]).apply(null,arguments)};var _SetExitKey=Module["_SetExitKey"]=function(){return(_SetExitKey=Module["_SetExitKey"]=Module["asm"]["qh"]).apply(null,arguments)};var _IsGamepadAvailable=Module["_IsGamepadAvailable"]=function(){return(_IsGamepadAvailable=Module["_IsGamepadAvailable"]=Module["asm"]["rh"]).apply(null,arguments)};var _GetGamepadName=Module["_GetGamepadName"]=function(){return(_GetGamepadName=Module["_GetGamepadName"]=Module["asm"]["sh"]).apply(null,arguments)};var _GetGamepadAxisCount=Module["_GetGamepadAxisCount"]=function(){return(_GetGamepadAxisCount=Module["_GetGamepadAxisCount"]=Module["asm"]["th"]).apply(null,arguments)};var _GetGamepadAxisMovement=Module["_GetGamepadAxisMovement"]=function(){return(_GetGamepadAxisMovement=Module["_GetGamepadAxisMovement"]=Module["asm"]["uh"]).apply(null,arguments)};var _IsGamepadButtonPressed=Module["_IsGamepadButtonPressed"]=function(){return(_IsGamepadButtonPressed=Module["_IsGamepadButtonPressed"]=Module["asm"]["vh"]).apply(null,arguments)};var _IsGamepadButtonDown=Module["_IsGamepadButtonDown"]=function(){return(_IsGamepadButtonDown=Module["_IsGamepadButtonDown"]=Module["asm"]["wh"]).apply(null,arguments)};var _IsGamepadButtonReleased=Module["_IsGamepadButtonReleased"]=function(){return(_IsGamepadButtonReleased=Module["_IsGamepadButtonReleased"]=Module["asm"]["xh"]).apply(null,arguments)};var _IsGamepadButtonUp=Module["_IsGamepadButtonUp"]=function(){return(_IsGamepadButtonUp=Module["_IsGamepadButtonUp"]=Module["asm"]["yh"]).apply(null,arguments)};var _GetGamepadButtonPressed=Module["_GetGamepadButtonPressed"]=function(){return(_GetGamepadButtonPressed=Module["_GetGamepadButtonPressed"]=Module["asm"]["zh"]).apply(null,arguments)};var _SetGamepadMappings=Module["_SetGamepadMappings"]=function(){return(_SetGamepadMappings=Module["_SetGamepadMappings"]=Module["asm"]["Ah"]).apply(null,arguments)};var _IsMouseButtonPressed=Module["_IsMouseButtonPressed"]=function(){return(_IsMouseButtonPressed=Module["_IsMouseButtonPressed"]=Module["asm"]["Bh"]).apply(null,arguments)};var _IsMouseButtonDown=Module["_IsMouseButtonDown"]=function(){return(_IsMouseButtonDown=Module["_IsMouseButtonDown"]=Module["asm"]["Ch"]).apply(null,arguments)};var _IsMouseButtonReleased=Module["_IsMouseButtonReleased"]=function(){return(_IsMouseButtonReleased=Module["_IsMouseButtonReleased"]=Module["asm"]["Dh"]).apply(null,arguments)};var _IsMouseButtonUp=Module["_IsMouseButtonUp"]=function(){return(_IsMouseButtonUp=Module["_IsMouseButtonUp"]=Module["asm"]["Eh"]).apply(null,arguments)};var _GetMouseX=Module["_GetMouseX"]=function(){return(_GetMouseX=Module["_GetMouseX"]=Module["asm"]["Fh"]).apply(null,arguments)};var _GetMouseY=Module["_GetMouseY"]=function(){return(_GetMouseY=Module["_GetMouseY"]=Module["asm"]["Gh"]).apply(null,arguments)};var _GetMousePosition=Module["_GetMousePosition"]=function(){return(_GetMousePosition=Module["_GetMousePosition"]=Module["asm"]["Hh"]).apply(null,arguments)};var _GetTouchPosition=Module["_GetTouchPosition"]=function(){return(_GetTouchPosition=Module["_GetTouchPosition"]=Module["asm"]["Ih"]).apply(null,arguments)};var _SetMouseOffset=Module["_SetMouseOffset"]=function(){return(_SetMouseOffset=Module["_SetMouseOffset"]=Module["asm"]["Jh"]).apply(null,arguments)};var _SetMouseScale=Module["_SetMouseScale"]=function(){return(_SetMouseScale=Module["_SetMouseScale"]=Module["asm"]["Kh"]).apply(null,arguments)};var _GetMouseWheelMoveV=Module["_GetMouseWheelMoveV"]=function(){return(_GetMouseWheelMoveV=Module["_GetMouseWheelMoveV"]=Module["asm"]["Lh"]).apply(null,arguments)};var _SetMouseCursor=Module["_SetMouseCursor"]=function(){return(_SetMouseCursor=Module["_SetMouseCursor"]=Module["asm"]["Mh"]).apply(null,arguments)};var _GetTouchX=Module["_GetTouchX"]=function(){return(_GetTouchX=Module["_GetTouchX"]=Module["asm"]["Nh"]).apply(null,arguments)};var _GetTouchY=Module["_GetTouchY"]=function(){return(_GetTouchY=Module["_GetTouchY"]=Module["asm"]["Oh"]).apply(null,arguments)};var _GetTouchPointId=Module["_GetTouchPointId"]=function(){return(_GetTouchPointId=Module["_GetTouchPointId"]=Module["asm"]["Ph"]).apply(null,arguments)};var _GetTouchPointCount=Module["_GetTouchPointCount"]=function(){return(_GetTouchPointCount=Module["_GetTouchPointCount"]=Module["asm"]["Qh"]).apply(null,arguments)};var _SetShapesTexture=Module["_SetShapesTexture"]=function(){return(_SetShapesTexture=Module["_SetShapesTexture"]=Module["asm"]["Rh"]).apply(null,arguments)};var _DrawPixel=Module["_DrawPixel"]=function(){return(_DrawPixel=Module["_DrawPixel"]=Module["asm"]["Sh"]).apply(null,arguments)};var _DrawPixelV=Module["_DrawPixelV"]=function(){return(_DrawPixelV=Module["_DrawPixelV"]=Module["asm"]["Th"]).apply(null,arguments)};var _DrawLine=Module["_DrawLine"]=function(){return(_DrawLine=Module["_DrawLine"]=Module["asm"]["Uh"]).apply(null,arguments)};var _DrawLineV=Module["_DrawLineV"]=function(){return(_DrawLineV=Module["_DrawLineV"]=Module["asm"]["Vh"]).apply(null,arguments)};var _DrawLineEx=Module["_DrawLineEx"]=function(){return(_DrawLineEx=Module["_DrawLineEx"]=Module["asm"]["Wh"]).apply(null,arguments)};var _DrawTriangleStrip=Module["_DrawTriangleStrip"]=function(){return(_DrawTriangleStrip=Module["_DrawTriangleStrip"]=Module["asm"]["Xh"]).apply(null,arguments)};var _DrawLineBezier=Module["_DrawLineBezier"]=function(){return(_DrawLineBezier=Module["_DrawLineBezier"]=Module["asm"]["Yh"]).apply(null,arguments)};var _DrawLineBezierQuad=Module["_DrawLineBezierQuad"]=function(){return(_DrawLineBezierQuad=Module["_DrawLineBezierQuad"]=Module["asm"]["Zh"]).apply(null,arguments)};var _DrawLineBezierCubic=Module["_DrawLineBezierCubic"]=function(){return(_DrawLineBezierCubic=Module["_DrawLineBezierCubic"]=Module["asm"]["_h"]).apply(null,arguments)};var _DrawLineStrip=Module["_DrawLineStrip"]=function(){return(_DrawLineStrip=Module["_DrawLineStrip"]=Module["asm"]["$h"]).apply(null,arguments)};var _DrawCircle=Module["_DrawCircle"]=function(){return(_DrawCircle=Module["_DrawCircle"]=Module["asm"]["ai"]).apply(null,arguments)};var _DrawCircleSector=Module["_DrawCircleSector"]=function(){return(_DrawCircleSector=Module["_DrawCircleSector"]=Module["asm"]["bi"]).apply(null,arguments)};var _DrawCircleV=Module["_DrawCircleV"]=function(){return(_DrawCircleV=Module["_DrawCircleV"]=Module["asm"]["ci"]).apply(null,arguments)};var _DrawCircleSectorLines=Module["_DrawCircleSectorLines"]=function(){return(_DrawCircleSectorLines=Module["_DrawCircleSectorLines"]=Module["asm"]["di"]).apply(null,arguments)};var _DrawCircleGradient=Module["_DrawCircleGradient"]=function(){return(_DrawCircleGradient=Module["_DrawCircleGradient"]=Module["asm"]["ei"]).apply(null,arguments)};var _DrawCircleLines=Module["_DrawCircleLines"]=function(){return(_DrawCircleLines=Module["_DrawCircleLines"]=Module["asm"]["fi"]).apply(null,arguments)};var _DrawEllipse=Module["_DrawEllipse"]=function(){return(_DrawEllipse=Module["_DrawEllipse"]=Module["asm"]["gi"]).apply(null,arguments)};var _DrawEllipseLines=Module["_DrawEllipseLines"]=function(){return(_DrawEllipseLines=Module["_DrawEllipseLines"]=Module["asm"]["hi"]).apply(null,arguments)};var _DrawRing=Module["_DrawRing"]=function(){return(_DrawRing=Module["_DrawRing"]=Module["asm"]["ii"]).apply(null,arguments)};var _DrawRingLines=Module["_DrawRingLines"]=function(){return(_DrawRingLines=Module["_DrawRingLines"]=Module["asm"]["ji"]).apply(null,arguments)};var _DrawRectangle=Module["_DrawRectangle"]=function(){return(_DrawRectangle=Module["_DrawRectangle"]=Module["asm"]["ki"]).apply(null,arguments)};var _DrawRectanglePro=Module["_DrawRectanglePro"]=function(){return(_DrawRectanglePro=Module["_DrawRectanglePro"]=Module["asm"]["li"]).apply(null,arguments)};var _DrawRectangleV=Module["_DrawRectangleV"]=function(){return(_DrawRectangleV=Module["_DrawRectangleV"]=Module["asm"]["mi"]).apply(null,arguments)};var _DrawRectangleRec=Module["_DrawRectangleRec"]=function(){return(_DrawRectangleRec=Module["_DrawRectangleRec"]=Module["asm"]["ni"]).apply(null,arguments)};var _DrawRectangleGradientV=Module["_DrawRectangleGradientV"]=function(){return(_DrawRectangleGradientV=Module["_DrawRectangleGradientV"]=Module["asm"]["oi"]).apply(null,arguments)};var _DrawRectangleGradientEx=Module["_DrawRectangleGradientEx"]=function(){return(_DrawRectangleGradientEx=Module["_DrawRectangleGradientEx"]=Module["asm"]["pi"]).apply(null,arguments)};var _DrawRectangleGradientH=Module["_DrawRectangleGradientH"]=function(){return(_DrawRectangleGradientH=Module["_DrawRectangleGradientH"]=Module["asm"]["qi"]).apply(null,arguments)};var _DrawRectangleLines=Module["_DrawRectangleLines"]=function(){return(_DrawRectangleLines=Module["_DrawRectangleLines"]=Module["asm"]["ri"]).apply(null,arguments)};var _DrawRectangleLinesEx=Module["_DrawRectangleLinesEx"]=function(){return(_DrawRectangleLinesEx=Module["_DrawRectangleLinesEx"]=Module["asm"]["si"]).apply(null,arguments)};var _DrawRectangleRounded=Module["_DrawRectangleRounded"]=function(){return(_DrawRectangleRounded=Module["_DrawRectangleRounded"]=Module["asm"]["ti"]).apply(null,arguments)};var _DrawRectangleRoundedLines=Module["_DrawRectangleRoundedLines"]=function(){return(_DrawRectangleRoundedLines=Module["_DrawRectangleRoundedLines"]=Module["asm"]["ui"]).apply(null,arguments)};var _DrawTriangle=Module["_DrawTriangle"]=function(){return(_DrawTriangle=Module["_DrawTriangle"]=Module["asm"]["vi"]).apply(null,arguments)};var _DrawTriangleLines=Module["_DrawTriangleLines"]=function(){return(_DrawTriangleLines=Module["_DrawTriangleLines"]=Module["asm"]["wi"]).apply(null,arguments)};var _DrawTriangleFan=Module["_DrawTriangleFan"]=function(){return(_DrawTriangleFan=Module["_DrawTriangleFan"]=Module["asm"]["xi"]).apply(null,arguments)};var _DrawPoly=Module["_DrawPoly"]=function(){return(_DrawPoly=Module["_DrawPoly"]=Module["asm"]["yi"]).apply(null,arguments)};var _DrawPolyLines=Module["_DrawPolyLines"]=function(){return(_DrawPolyLines=Module["_DrawPolyLines"]=Module["asm"]["zi"]).apply(null,arguments)};var _DrawPolyLinesEx=Module["_DrawPolyLinesEx"]=function(){return(_DrawPolyLinesEx=Module["_DrawPolyLinesEx"]=Module["asm"]["Ai"]).apply(null,arguments)};var _CheckCollisionPointRec=Module["_CheckCollisionPointRec"]=function(){return(_CheckCollisionPointRec=Module["_CheckCollisionPointRec"]=Module["asm"]["Bi"]).apply(null,arguments)};var _CheckCollisionPointCircle=Module["_CheckCollisionPointCircle"]=function(){return(_CheckCollisionPointCircle=Module["_CheckCollisionPointCircle"]=Module["asm"]["Ci"]).apply(null,arguments)};var _CheckCollisionCircles=Module["_CheckCollisionCircles"]=function(){return(_CheckCollisionCircles=Module["_CheckCollisionCircles"]=Module["asm"]["Di"]).apply(null,arguments)};var _CheckCollisionPointTriangle=Module["_CheckCollisionPointTriangle"]=function(){return(_CheckCollisionPointTriangle=Module["_CheckCollisionPointTriangle"]=Module["asm"]["Ei"]).apply(null,arguments)};var _CheckCollisionPointPoly=Module["_CheckCollisionPointPoly"]=function(){return(_CheckCollisionPointPoly=Module["_CheckCollisionPointPoly"]=Module["asm"]["Fi"]).apply(null,arguments)};var _CheckCollisionRecs=Module["_CheckCollisionRecs"]=function(){return(_CheckCollisionRecs=Module["_CheckCollisionRecs"]=Module["asm"]["Gi"]).apply(null,arguments)};var _CheckCollisionCircleRec=Module["_CheckCollisionCircleRec"]=function(){return(_CheckCollisionCircleRec=Module["_CheckCollisionCircleRec"]=Module["asm"]["Hi"]).apply(null,arguments)};var _CheckCollisionLines=Module["_CheckCollisionLines"]=function(){return(_CheckCollisionLines=Module["_CheckCollisionLines"]=Module["asm"]["Ii"]).apply(null,arguments)};var _CheckCollisionPointLine=Module["_CheckCollisionPointLine"]=function(){return(_CheckCollisionPointLine=Module["_CheckCollisionPointLine"]=Module["asm"]["Ji"]).apply(null,arguments)};var _GetCollisionRec=Module["_GetCollisionRec"]=function(){return(_GetCollisionRec=Module["_GetCollisionRec"]=Module["asm"]["Ki"]).apply(null,arguments)};var _LoadImage=Module["_LoadImage"]=function(){return(_LoadImage=Module["_LoadImage"]=Module["asm"]["Li"]).apply(null,arguments)};var _LoadImageFromMemory=Module["_LoadImageFromMemory"]=function(){return(_LoadImageFromMemory=Module["_LoadImageFromMemory"]=Module["asm"]["Mi"]).apply(null,arguments)};var _LoadImageRaw=Module["_LoadImageRaw"]=function(){return(_LoadImageRaw=Module["_LoadImageRaw"]=Module["asm"]["Ni"]).apply(null,arguments)};var _GetPixelDataSize=Module["_GetPixelDataSize"]=function(){return(_GetPixelDataSize=Module["_GetPixelDataSize"]=Module["asm"]["Oi"]).apply(null,arguments)};var _LoadImageAnim=Module["_LoadImageAnim"]=function(){return(_LoadImageAnim=Module["_LoadImageAnim"]=Module["asm"]["Pi"]).apply(null,arguments)};var _UnloadImage=Module["_UnloadImage"]=function(){return(_UnloadImage=Module["_UnloadImage"]=Module["asm"]["Qi"]).apply(null,arguments)};var _LoadImageFromTexture=Module["_LoadImageFromTexture"]=function(){return(_LoadImageFromTexture=Module["_LoadImageFromTexture"]=Module["asm"]["Ri"]).apply(null,arguments)};var _LoadImageFromScreen=Module["_LoadImageFromScreen"]=function(){return(_LoadImageFromScreen=Module["_LoadImageFromScreen"]=Module["asm"]["Si"]).apply(null,arguments)};var _IsImageReady=Module["_IsImageReady"]=function(){return(_IsImageReady=Module["_IsImageReady"]=Module["asm"]["Ti"]).apply(null,arguments)};var _ExportImage=Module["_ExportImage"]=function(){return(_ExportImage=Module["_ExportImage"]=Module["asm"]["Ui"]).apply(null,arguments)};var _LoadImageColors=Module["_LoadImageColors"]=function(){return(_LoadImageColors=Module["_LoadImageColors"]=Module["asm"]["Vi"]).apply(null,arguments)};var _ExportImageAsCode=Module["_ExportImageAsCode"]=function(){return(_ExportImageAsCode=Module["_ExportImageAsCode"]=Module["asm"]["Wi"]).apply(null,arguments)};var _GenImageColor=Module["_GenImageColor"]=function(){return(_GenImageColor=Module["_GenImageColor"]=Module["asm"]["Xi"]).apply(null,arguments)};var _GenImageGradientRadial=Module["_GenImageGradientRadial"]=function(){return(_GenImageGradientRadial=Module["_GenImageGradientRadial"]=Module["asm"]["Yi"]).apply(null,arguments)};var _GenImageChecked=Module["_GenImageChecked"]=function(){return(_GenImageChecked=Module["_GenImageChecked"]=Module["asm"]["Zi"]).apply(null,arguments)};var _GenImageWhiteNoise=Module["_GenImageWhiteNoise"]=function(){return(_GenImageWhiteNoise=Module["_GenImageWhiteNoise"]=Module["asm"]["_i"]).apply(null,arguments)};var _GenImagePerlinNoise=Module["_GenImagePerlinNoise"]=function(){return(_GenImagePerlinNoise=Module["_GenImagePerlinNoise"]=Module["asm"]["$i"]).apply(null,arguments)};var _GenImageCellular=Module["_GenImageCellular"]=function(){return(_GenImageCellular=Module["_GenImageCellular"]=Module["asm"]["aj"]).apply(null,arguments)};var _GenImageText=Module["_GenImageText"]=function(){return(_GenImageText=Module["_GenImageText"]=Module["asm"]["bj"]).apply(null,arguments)};var _ImageCopy=Module["_ImageCopy"]=function(){return(_ImageCopy=Module["_ImageCopy"]=Module["asm"]["cj"]).apply(null,arguments)};var _ImageFromImage=Module["_ImageFromImage"]=function(){return(_ImageFromImage=Module["_ImageFromImage"]=Module["asm"]["dj"]).apply(null,arguments)};var _ImageCrop=Module["_ImageCrop"]=function(){return(_ImageCrop=Module["_ImageCrop"]=Module["asm"]["ej"]).apply(null,arguments)};var _ImageFormat=Module["_ImageFormat"]=function(){return(_ImageFormat=Module["_ImageFormat"]=Module["asm"]["fj"]).apply(null,arguments)};var _ImageMipmaps=Module["_ImageMipmaps"]=function(){return(_ImageMipmaps=Module["_ImageMipmaps"]=Module["asm"]["gj"]).apply(null,arguments)};var _ImageResize=Module["_ImageResize"]=function(){return(_ImageResize=Module["_ImageResize"]=Module["asm"]["hj"]).apply(null,arguments)};var _ImageText=Module["_ImageText"]=function(){return(_ImageText=Module["_ImageText"]=Module["asm"]["ij"]).apply(null,arguments)};var _ImageTextEx=Module["_ImageTextEx"]=function(){return(_ImageTextEx=Module["_ImageTextEx"]=Module["asm"]["jj"]).apply(null,arguments)};var _ImageDraw=Module["_ImageDraw"]=function(){return(_ImageDraw=Module["_ImageDraw"]=Module["asm"]["kj"]).apply(null,arguments)};var _ImageResizeNN=Module["_ImageResizeNN"]=function(){return(_ImageResizeNN=Module["_ImageResizeNN"]=Module["asm"]["lj"]).apply(null,arguments)};var _GetPixelColor=Module["_GetPixelColor"]=function(){return(_GetPixelColor=Module["_GetPixelColor"]=Module["asm"]["mj"]).apply(null,arguments)};var _ColorAlphaBlend=Module["_ColorAlphaBlend"]=function(){return(_ColorAlphaBlend=Module["_ColorAlphaBlend"]=Module["asm"]["nj"]).apply(null,arguments)};var _SetPixelColor=Module["_SetPixelColor"]=function(){return(_SetPixelColor=Module["_SetPixelColor"]=Module["asm"]["oj"]).apply(null,arguments)};var _UnloadImageColors=Module["_UnloadImageColors"]=function(){return(_UnloadImageColors=Module["_UnloadImageColors"]=Module["asm"]["pj"]).apply(null,arguments)};var _ImageResizeCanvas=Module["_ImageResizeCanvas"]=function(){return(_ImageResizeCanvas=Module["_ImageResizeCanvas"]=Module["asm"]["qj"]).apply(null,arguments)};var _ImageToPOT=Module["_ImageToPOT"]=function(){return(_ImageToPOT=Module["_ImageToPOT"]=Module["asm"]["rj"]).apply(null,arguments)};var _ImageAlphaCrop=Module["_ImageAlphaCrop"]=function(){return(_ImageAlphaCrop=Module["_ImageAlphaCrop"]=Module["asm"]["sj"]).apply(null,arguments)};var _GetImageAlphaBorder=Module["_GetImageAlphaBorder"]=function(){return(_GetImageAlphaBorder=Module["_GetImageAlphaBorder"]=Module["asm"]["tj"]).apply(null,arguments)};var _ImageAlphaClear=Module["_ImageAlphaClear"]=function(){return(_ImageAlphaClear=Module["_ImageAlphaClear"]=Module["asm"]["uj"]).apply(null,arguments)};var _ImageAlphaMask=Module["_ImageAlphaMask"]=function(){return(_ImageAlphaMask=Module["_ImageAlphaMask"]=Module["asm"]["vj"]).apply(null,arguments)};var _ImageAlphaPremultiply=Module["_ImageAlphaPremultiply"]=function(){return(_ImageAlphaPremultiply=Module["_ImageAlphaPremultiply"]=Module["asm"]["wj"]).apply(null,arguments)};var _ImageBlurGaussian=Module["_ImageBlurGaussian"]=function(){return(_ImageBlurGaussian=Module["_ImageBlurGaussian"]=Module["asm"]["xj"]).apply(null,arguments)};var _ImageDither=Module["_ImageDither"]=function(){return(_ImageDither=Module["_ImageDither"]=Module["asm"]["yj"]).apply(null,arguments)};var _ImageFlipVertical=Module["_ImageFlipVertical"]=function(){return(_ImageFlipVertical=Module["_ImageFlipVertical"]=Module["asm"]["zj"]).apply(null,arguments)};var _ImageFlipHorizontal=Module["_ImageFlipHorizontal"]=function(){return(_ImageFlipHorizontal=Module["_ImageFlipHorizontal"]=Module["asm"]["Aj"]).apply(null,arguments)};var _ImageRotateCW=Module["_ImageRotateCW"]=function(){return(_ImageRotateCW=Module["_ImageRotateCW"]=Module["asm"]["Bj"]).apply(null,arguments)};var _ImageRotateCCW=Module["_ImageRotateCCW"]=function(){return(_ImageRotateCCW=Module["_ImageRotateCCW"]=Module["asm"]["Cj"]).apply(null,arguments)};var _ImageColorTint=Module["_ImageColorTint"]=function(){return(_ImageColorTint=Module["_ImageColorTint"]=Module["asm"]["Dj"]).apply(null,arguments)};var _ImageColorInvert=Module["_ImageColorInvert"]=function(){return(_ImageColorInvert=Module["_ImageColorInvert"]=Module["asm"]["Ej"]).apply(null,arguments)};var _ImageColorGrayscale=Module["_ImageColorGrayscale"]=function(){return(_ImageColorGrayscale=Module["_ImageColorGrayscale"]=Module["asm"]["Fj"]).apply(null,arguments)};var _ImageColorContrast=Module["_ImageColorContrast"]=function(){return(_ImageColorContrast=Module["_ImageColorContrast"]=Module["asm"]["Gj"]).apply(null,arguments)};var _ImageColorBrightness=Module["_ImageColorBrightness"]=function(){return(_ImageColorBrightness=Module["_ImageColorBrightness"]=Module["asm"]["Hj"]).apply(null,arguments)};var _ImageColorReplace=Module["_ImageColorReplace"]=function(){return(_ImageColorReplace=Module["_ImageColorReplace"]=Module["asm"]["Ij"]).apply(null,arguments)};var _LoadImagePalette=Module["_LoadImagePalette"]=function(){return(_LoadImagePalette=Module["_LoadImagePalette"]=Module["asm"]["Jj"]).apply(null,arguments)};var _UnloadImagePalette=Module["_UnloadImagePalette"]=function(){return(_UnloadImagePalette=Module["_UnloadImagePalette"]=Module["asm"]["Kj"]).apply(null,arguments)};var _GetImageColor=Module["_GetImageColor"]=function(){return(_GetImageColor=Module["_GetImageColor"]=Module["asm"]["Lj"]).apply(null,arguments)};var _ImageClearBackground=Module["_ImageClearBackground"]=function(){return(_ImageClearBackground=Module["_ImageClearBackground"]=Module["asm"]["Mj"]).apply(null,arguments)};var _ImageDrawPixel=Module["_ImageDrawPixel"]=function(){return(_ImageDrawPixel=Module["_ImageDrawPixel"]=Module["asm"]["Nj"]).apply(null,arguments)};var _ImageDrawPixelV=Module["_ImageDrawPixelV"]=function(){return(_ImageDrawPixelV=Module["_ImageDrawPixelV"]=Module["asm"]["Oj"]).apply(null,arguments)};var _ImageDrawLine=Module["_ImageDrawLine"]=function(){return(_ImageDrawLine=Module["_ImageDrawLine"]=Module["asm"]["Pj"]).apply(null,arguments)};var _ImageDrawLineV=Module["_ImageDrawLineV"]=function(){return(_ImageDrawLineV=Module["_ImageDrawLineV"]=Module["asm"]["Qj"]).apply(null,arguments)};var _ImageDrawCircle=Module["_ImageDrawCircle"]=function(){return(_ImageDrawCircle=Module["_ImageDrawCircle"]=Module["asm"]["Rj"]).apply(null,arguments)};var _ImageDrawRectangleRec=Module["_ImageDrawRectangleRec"]=function(){return(_ImageDrawRectangleRec=Module["_ImageDrawRectangleRec"]=Module["asm"]["Sj"]).apply(null,arguments)};var _ImageDrawRectangle=Module["_ImageDrawRectangle"]=function(){return(_ImageDrawRectangle=Module["_ImageDrawRectangle"]=Module["asm"]["Tj"]).apply(null,arguments)};var _ImageDrawCircleV=Module["_ImageDrawCircleV"]=function(){return(_ImageDrawCircleV=Module["_ImageDrawCircleV"]=Module["asm"]["Uj"]).apply(null,arguments)};var _ImageDrawCircleLines=Module["_ImageDrawCircleLines"]=function(){return(_ImageDrawCircleLines=Module["_ImageDrawCircleLines"]=Module["asm"]["Vj"]).apply(null,arguments)};var _ImageDrawCircleLinesV=Module["_ImageDrawCircleLinesV"]=function(){return(_ImageDrawCircleLinesV=Module["_ImageDrawCircleLinesV"]=Module["asm"]["Wj"]).apply(null,arguments)};var _ImageDrawRectangleV=Module["_ImageDrawRectangleV"]=function(){return(_ImageDrawRectangleV=Module["_ImageDrawRectangleV"]=Module["asm"]["Xj"]).apply(null,arguments)};var _ImageDrawRectangleLines=Module["_ImageDrawRectangleLines"]=function(){return(_ImageDrawRectangleLines=Module["_ImageDrawRectangleLines"]=Module["asm"]["Yj"]).apply(null,arguments)};var _ImageDrawText=Module["_ImageDrawText"]=function(){return(_ImageDrawText=Module["_ImageDrawText"]=Module["asm"]["Zj"]).apply(null,arguments)};var _ImageDrawTextEx=Module["_ImageDrawTextEx"]=function(){return(_ImageDrawTextEx=Module["_ImageDrawTextEx"]=Module["asm"]["_j"]).apply(null,arguments)};var _LoadTexture=Module["_LoadTexture"]=function(){return(_LoadTexture=Module["_LoadTexture"]=Module["asm"]["$j"]).apply(null,arguments)};var _LoadTextureFromImage=Module["_LoadTextureFromImage"]=function(){return(_LoadTextureFromImage=Module["_LoadTextureFromImage"]=Module["asm"]["ak"]).apply(null,arguments)};var _LoadTextureCubemap=Module["_LoadTextureCubemap"]=function(){return(_LoadTextureCubemap=Module["_LoadTextureCubemap"]=Module["asm"]["bk"]).apply(null,arguments)};var _LoadRenderTexture=Module["_LoadRenderTexture"]=function(){return(_LoadRenderTexture=Module["_LoadRenderTexture"]=Module["asm"]["ck"]).apply(null,arguments)};var _IsTextureReady=Module["_IsTextureReady"]=function(){return(_IsTextureReady=Module["_IsTextureReady"]=Module["asm"]["dk"]).apply(null,arguments)};var _UnloadTexture=Module["_UnloadTexture"]=function(){return(_UnloadTexture=Module["_UnloadTexture"]=Module["asm"]["ek"]).apply(null,arguments)};var _IsRenderTextureReady=Module["_IsRenderTextureReady"]=function(){return(_IsRenderTextureReady=Module["_IsRenderTextureReady"]=Module["asm"]["fk"]).apply(null,arguments)};var _UnloadRenderTexture=Module["_UnloadRenderTexture"]=function(){return(_UnloadRenderTexture=Module["_UnloadRenderTexture"]=Module["asm"]["gk"]).apply(null,arguments)};var _UpdateTexture=Module["_UpdateTexture"]=function(){return(_UpdateTexture=Module["_UpdateTexture"]=Module["asm"]["hk"]).apply(null,arguments)};var _UpdateTextureRec=Module["_UpdateTextureRec"]=function(){return(_UpdateTextureRec=Module["_UpdateTextureRec"]=Module["asm"]["ik"]).apply(null,arguments)};var _GenTextureMipmaps=Module["_GenTextureMipmaps"]=function(){return(_GenTextureMipmaps=Module["_GenTextureMipmaps"]=Module["asm"]["jk"]).apply(null,arguments)};var _SetTextureFilter=Module["_SetTextureFilter"]=function(){return(_SetTextureFilter=Module["_SetTextureFilter"]=Module["asm"]["kk"]).apply(null,arguments)};var _SetTextureWrap=Module["_SetTextureWrap"]=function(){return(_SetTextureWrap=Module["_SetTextureWrap"]=Module["asm"]["lk"]).apply(null,arguments)};var _DrawTexture=Module["_DrawTexture"]=function(){return(_DrawTexture=Module["_DrawTexture"]=Module["asm"]["mk"]).apply(null,arguments)};var _DrawTexturePro=Module["_DrawTexturePro"]=function(){return(_DrawTexturePro=Module["_DrawTexturePro"]=Module["asm"]["nk"]).apply(null,arguments)};var _DrawTextureEx=Module["_DrawTextureEx"]=function(){return(_DrawTextureEx=Module["_DrawTextureEx"]=Module["asm"]["ok"]).apply(null,arguments)};var _DrawTextureV=Module["_DrawTextureV"]=function(){return(_DrawTextureV=Module["_DrawTextureV"]=Module["asm"]["pk"]).apply(null,arguments)};var _DrawTextureRec=Module["_DrawTextureRec"]=function(){return(_DrawTextureRec=Module["_DrawTextureRec"]=Module["asm"]["qk"]).apply(null,arguments)};var _DrawTextureNPatch=Module["_DrawTextureNPatch"]=function(){return(_DrawTextureNPatch=Module["_DrawTextureNPatch"]=Module["asm"]["rk"]).apply(null,arguments)};var _Fade=Module["_Fade"]=function(){return(_Fade=Module["_Fade"]=Module["asm"]["sk"]).apply(null,arguments)};var _ColorToInt=Module["_ColorToInt"]=function(){return(_ColorToInt=Module["_ColorToInt"]=Module["asm"]["tk"]).apply(null,arguments)};var _ColorNormalize=Module["_ColorNormalize"]=function(){return(_ColorNormalize=Module["_ColorNormalize"]=Module["asm"]["uk"]).apply(null,arguments)};var _ColorFromNormalized=Module["_ColorFromNormalized"]=function(){return(_ColorFromNormalized=Module["_ColorFromNormalized"]=Module["asm"]["vk"]).apply(null,arguments)};var _ColorToHSV=Module["_ColorToHSV"]=function(){return(_ColorToHSV=Module["_ColorToHSV"]=Module["asm"]["wk"]).apply(null,arguments)};var _ColorFromHSV=Module["_ColorFromHSV"]=function(){return(_ColorFromHSV=Module["_ColorFromHSV"]=Module["asm"]["xk"]).apply(null,arguments)};var _ColorTint=Module["_ColorTint"]=function(){return(_ColorTint=Module["_ColorTint"]=Module["asm"]["yk"]).apply(null,arguments)};var _ColorBrightness=Module["_ColorBrightness"]=function(){return(_ColorBrightness=Module["_ColorBrightness"]=Module["asm"]["zk"]).apply(null,arguments)};var _ColorContrast=Module["_ColorContrast"]=function(){return(_ColorContrast=Module["_ColorContrast"]=Module["asm"]["Ak"]).apply(null,arguments)};var _ColorAlpha=Module["_ColorAlpha"]=function(){return(_ColorAlpha=Module["_ColorAlpha"]=Module["asm"]["Bk"]).apply(null,arguments)};var _GetColor=Module["_GetColor"]=function(){return(_GetColor=Module["_GetColor"]=Module["asm"]["Ck"]).apply(null,arguments)};var _GetFontDefault=Module["_GetFontDefault"]=function(){return(_GetFontDefault=Module["_GetFontDefault"]=Module["asm"]["Dk"]).apply(null,arguments)};var _LoadFont=Module["_LoadFont"]=function(){return(_LoadFont=Module["_LoadFont"]=Module["asm"]["Ek"]).apply(null,arguments)};var _LoadFontEx=Module["_LoadFontEx"]=function(){return(_LoadFontEx=Module["_LoadFontEx"]=Module["asm"]["Fk"]).apply(null,arguments)};var _UnloadFontData=Module["_UnloadFontData"]=function(){return(_UnloadFontData=Module["_UnloadFontData"]=Module["asm"]["Gk"]).apply(null,arguments)};var _LoadFontFromImage=Module["_LoadFontFromImage"]=function(){return(_LoadFontFromImage=Module["_LoadFontFromImage"]=Module["asm"]["Hk"]).apply(null,arguments)};var _LoadFontFromMemory=Module["_LoadFontFromMemory"]=function(){return(_LoadFontFromMemory=Module["_LoadFontFromMemory"]=Module["asm"]["Ik"]).apply(null,arguments)};var _TextToLower=Module["_TextToLower"]=function(){return(_TextToLower=Module["_TextToLower"]=Module["asm"]["Jk"]).apply(null,arguments)};var _LoadFontData=Module["_LoadFontData"]=function(){return(_LoadFontData=Module["_LoadFontData"]=Module["asm"]["Kk"]).apply(null,arguments)};var _GenImageFontAtlas=Module["_GenImageFontAtlas"]=function(){return(_GenImageFontAtlas=Module["_GenImageFontAtlas"]=Module["asm"]["Lk"]).apply(null,arguments)};var _TextIsEqual=Module["_TextIsEqual"]=function(){return(_TextIsEqual=Module["_TextIsEqual"]=Module["asm"]["Mk"]).apply(null,arguments)};var _IsFontReady=Module["_IsFontReady"]=function(){return(_IsFontReady=Module["_IsFontReady"]=Module["asm"]["Nk"]).apply(null,arguments)};var _UnloadFont=Module["_UnloadFont"]=function(){return(_UnloadFont=Module["_UnloadFont"]=Module["asm"]["Ok"]).apply(null,arguments)};var _ExportFontAsCode=Module["_ExportFontAsCode"]=function(){return(_ExportFontAsCode=Module["_ExportFontAsCode"]=Module["asm"]["Pk"]).apply(null,arguments)};var _TextToPascal=Module["_TextToPascal"]=function(){return(_TextToPascal=Module["_TextToPascal"]=Module["asm"]["Qk"]).apply(null,arguments)};var _TextToUpper=Module["_TextToUpper"]=function(){return(_TextToUpper=Module["_TextToUpper"]=Module["asm"]["Rk"]).apply(null,arguments)};var _DrawFPS=Module["_DrawFPS"]=function(){return(_DrawFPS=Module["_DrawFPS"]=Module["asm"]["Sk"]).apply(null,arguments)};var _TextFormat=Module["_TextFormat"]=function(){return(_TextFormat=Module["_TextFormat"]=Module["asm"]["Tk"]).apply(null,arguments)};var _DrawTextEx=Module["_DrawTextEx"]=function(){return(_DrawTextEx=Module["_DrawTextEx"]=Module["asm"]["Uk"]).apply(null,arguments)};var _DrawText=Module["_DrawText"]=function(){return(_DrawText=Module["_DrawText"]=Module["asm"]["Vk"]).apply(null,arguments)};var _GetCodepointNext=Module["_GetCodepointNext"]=function(){return(_GetCodepointNext=Module["_GetCodepointNext"]=Module["asm"]["Wk"]).apply(null,arguments)};var _DrawTextCodepoint=Module["_DrawTextCodepoint"]=function(){return(_DrawTextCodepoint=Module["_DrawTextCodepoint"]=Module["asm"]["Xk"]).apply(null,arguments)};var _TextLength=Module["_TextLength"]=function(){return(_TextLength=Module["_TextLength"]=Module["asm"]["Yk"]).apply(null,arguments)};var _GetGlyphIndex=Module["_GetGlyphIndex"]=function(){return(_GetGlyphIndex=Module["_GetGlyphIndex"]=Module["asm"]["Zk"]).apply(null,arguments)};var _DrawTextPro=Module["_DrawTextPro"]=function(){return(_DrawTextPro=Module["_DrawTextPro"]=Module["asm"]["_k"]).apply(null,arguments)};var _DrawTextCodepoints=Module["_DrawTextCodepoints"]=function(){return(_DrawTextCodepoints=Module["_DrawTextCodepoints"]=Module["asm"]["$k"]).apply(null,arguments)};var _MeasureText=Module["_MeasureText"]=function(){return(_MeasureText=Module["_MeasureText"]=Module["asm"]["al"]).apply(null,arguments)};var _MeasureTextEx=Module["_MeasureTextEx"]=function(){return(_MeasureTextEx=Module["_MeasureTextEx"]=Module["asm"]["bl"]).apply(null,arguments)};var _GetGlyphInfo=Module["_GetGlyphInfo"]=function(){return(_GetGlyphInfo=Module["_GetGlyphInfo"]=Module["asm"]["cl"]).apply(null,arguments)};var _GetGlyphAtlasRec=Module["_GetGlyphAtlasRec"]=function(){return(_GetGlyphAtlasRec=Module["_GetGlyphAtlasRec"]=Module["asm"]["dl"]).apply(null,arguments)};var _TextToInteger=Module["_TextToInteger"]=function(){return(_TextToInteger=Module["_TextToInteger"]=Module["asm"]["el"]).apply(null,arguments)};var _TextCopy=Module["_TextCopy"]=function(){return(_TextCopy=Module["_TextCopy"]=Module["asm"]["fl"]).apply(null,arguments)};var _TextSubtext=Module["_TextSubtext"]=function(){return(_TextSubtext=Module["_TextSubtext"]=Module["asm"]["gl"]).apply(null,arguments)};var _TextReplace=Module["_TextReplace"]=function(){return(_TextReplace=Module["_TextReplace"]=Module["asm"]["hl"]).apply(null,arguments)};var _TextInsert=Module["_TextInsert"]=function(){return(_TextInsert=Module["_TextInsert"]=Module["asm"]["il"]).apply(null,arguments)};var _TextJoin=Module["_TextJoin"]=function(){return(_TextJoin=Module["_TextJoin"]=Module["asm"]["jl"]).apply(null,arguments)};var _TextSplit=Module["_TextSplit"]=function(){return(_TextSplit=Module["_TextSplit"]=Module["asm"]["kl"]).apply(null,arguments)};var _TextAppend=Module["_TextAppend"]=function(){return(_TextAppend=Module["_TextAppend"]=Module["asm"]["ll"]).apply(null,arguments)};var _TextFindIndex=Module["_TextFindIndex"]=function(){return(_TextFindIndex=Module["_TextFindIndex"]=Module["asm"]["ml"]).apply(null,arguments)};var _LoadUTF8=Module["_LoadUTF8"]=function(){return(_LoadUTF8=Module["_LoadUTF8"]=Module["asm"]["nl"]).apply(null,arguments)};var _CodepointToUTF8=Module["_CodepointToUTF8"]=function(){return(_CodepointToUTF8=Module["_CodepointToUTF8"]=Module["asm"]["ol"]).apply(null,arguments)};var _UnloadUTF8=Module["_UnloadUTF8"]=function(){return(_UnloadUTF8=Module["_UnloadUTF8"]=Module["asm"]["pl"]).apply(null,arguments)};var _LoadCodepoints=Module["_LoadCodepoints"]=function(){return(_LoadCodepoints=Module["_LoadCodepoints"]=Module["asm"]["ql"]).apply(null,arguments)};var _UnloadCodepoints=Module["_UnloadCodepoints"]=function(){return(_UnloadCodepoints=Module["_UnloadCodepoints"]=Module["asm"]["rl"]).apply(null,arguments)};var _GetCodepointCount=Module["_GetCodepointCount"]=function(){return(_GetCodepointCount=Module["_GetCodepointCount"]=Module["asm"]["sl"]).apply(null,arguments)};var _GetCodepoint=Module["_GetCodepoint"]=function(){return(_GetCodepoint=Module["_GetCodepoint"]=Module["asm"]["tl"]).apply(null,arguments)};var _GetCodepointPrevious=Module["_GetCodepointPrevious"]=function(){return(_GetCodepointPrevious=Module["_GetCodepointPrevious"]=Module["asm"]["ul"]).apply(null,arguments)};var _SetTraceLogCallback=Module["_SetTraceLogCallback"]=function(){return(_SetTraceLogCallback=Module["_SetTraceLogCallback"]=Module["asm"]["vl"]).apply(null,arguments)};var _SetLoadFileDataCallback=Module["_SetLoadFileDataCallback"]=function(){return(_SetLoadFileDataCallback=Module["_SetLoadFileDataCallback"]=Module["asm"]["wl"]).apply(null,arguments)};var _SetSaveFileDataCallback=Module["_SetSaveFileDataCallback"]=function(){return(_SetSaveFileDataCallback=Module["_SetSaveFileDataCallback"]=Module["asm"]["xl"]).apply(null,arguments)};var _SetLoadFileTextCallback=Module["_SetLoadFileTextCallback"]=function(){return(_SetLoadFileTextCallback=Module["_SetLoadFileTextCallback"]=Module["asm"]["yl"]).apply(null,arguments)};var _SetSaveFileTextCallback=Module["_SetSaveFileTextCallback"]=function(){return(_SetSaveFileTextCallback=Module["_SetSaveFileTextCallback"]=Module["asm"]["zl"]).apply(null,arguments)};var _SetTraceLogLevel=Module["_SetTraceLogLevel"]=function(){return(_SetTraceLogLevel=Module["_SetTraceLogLevel"]=Module["asm"]["Al"]).apply(null,arguments)};var _TraceLog=Module["_TraceLog"]=function(){return(_TraceLog=Module["_TraceLog"]=Module["asm"]["Bl"]).apply(null,arguments)};var _MemAlloc=Module["_MemAlloc"]=function(){return(_MemAlloc=Module["_MemAlloc"]=Module["asm"]["Cl"]).apply(null,arguments)};var _MemRealloc=Module["_MemRealloc"]=function(){return(_MemRealloc=Module["_MemRealloc"]=Module["asm"]["Dl"]).apply(null,arguments)};var _MemFree=Module["_MemFree"]=function(){return(_MemFree=Module["_MemFree"]=Module["asm"]["El"]).apply(null,arguments)};var _LoadFileData=Module["_LoadFileData"]=function(){return(_LoadFileData=Module["_LoadFileData"]=Module["asm"]["Fl"]).apply(null,arguments)};var _UnloadFileData=Module["_UnloadFileData"]=function(){return(_UnloadFileData=Module["_UnloadFileData"]=Module["asm"]["Gl"]).apply(null,arguments)};var _SaveFileData=Module["_SaveFileData"]=function(){return(_SaveFileData=Module["_SaveFileData"]=Module["asm"]["Hl"]).apply(null,arguments)};var _ExportDataAsCode=Module["_ExportDataAsCode"]=function(){return(_ExportDataAsCode=Module["_ExportDataAsCode"]=Module["asm"]["Il"]).apply(null,arguments)};var _SaveFileText=Module["_SaveFileText"]=function(){return(_SaveFileText=Module["_SaveFileText"]=Module["asm"]["Jl"]).apply(null,arguments)};var _LoadFileText=Module["_LoadFileText"]=function(){return(_LoadFileText=Module["_LoadFileText"]=Module["asm"]["Kl"]).apply(null,arguments)};var _UnloadFileText=Module["_UnloadFileText"]=function(){return(_UnloadFileText=Module["_UnloadFileText"]=Module["asm"]["Ll"]).apply(null,arguments)};var _DrawLine3D=Module["_DrawLine3D"]=function(){return(_DrawLine3D=Module["_DrawLine3D"]=Module["asm"]["Ml"]).apply(null,arguments)};var _DrawPoint3D=Module["_DrawPoint3D"]=function(){return(_DrawPoint3D=Module["_DrawPoint3D"]=Module["asm"]["Nl"]).apply(null,arguments)};var _DrawCircle3D=Module["_DrawCircle3D"]=function(){return(_DrawCircle3D=Module["_DrawCircle3D"]=Module["asm"]["Ol"]).apply(null,arguments)};var _DrawTriangle3D=Module["_DrawTriangle3D"]=function(){return(_DrawTriangle3D=Module["_DrawTriangle3D"]=Module["asm"]["Pl"]).apply(null,arguments)};var _DrawTriangleStrip3D=Module["_DrawTriangleStrip3D"]=function(){return(_DrawTriangleStrip3D=Module["_DrawTriangleStrip3D"]=Module["asm"]["Ql"]).apply(null,arguments)};var _DrawCube=Module["_DrawCube"]=function(){return(_DrawCube=Module["_DrawCube"]=Module["asm"]["Rl"]).apply(null,arguments)};var _DrawCubeV=Module["_DrawCubeV"]=function(){return(_DrawCubeV=Module["_DrawCubeV"]=Module["asm"]["Sl"]).apply(null,arguments)};var _DrawCubeWires=Module["_DrawCubeWires"]=function(){return(_DrawCubeWires=Module["_DrawCubeWires"]=Module["asm"]["Tl"]).apply(null,arguments)};var _DrawCubeWiresV=Module["_DrawCubeWiresV"]=function(){return(_DrawCubeWiresV=Module["_DrawCubeWiresV"]=Module["asm"]["Ul"]).apply(null,arguments)};var _DrawSphere=Module["_DrawSphere"]=function(){return(_DrawSphere=Module["_DrawSphere"]=Module["asm"]["Vl"]).apply(null,arguments)};var _DrawSphereEx=Module["_DrawSphereEx"]=function(){return(_DrawSphereEx=Module["_DrawSphereEx"]=Module["asm"]["Wl"]).apply(null,arguments)};var _DrawSphereWires=Module["_DrawSphereWires"]=function(){return(_DrawSphereWires=Module["_DrawSphereWires"]=Module["asm"]["Xl"]).apply(null,arguments)};var _DrawCylinder=Module["_DrawCylinder"]=function(){return(_DrawCylinder=Module["_DrawCylinder"]=Module["asm"]["Yl"]).apply(null,arguments)};var _DrawCylinderEx=Module["_DrawCylinderEx"]=function(){return(_DrawCylinderEx=Module["_DrawCylinderEx"]=Module["asm"]["Zl"]).apply(null,arguments)};var _DrawCylinderWires=Module["_DrawCylinderWires"]=function(){return(_DrawCylinderWires=Module["_DrawCylinderWires"]=Module["asm"]["_l"]).apply(null,arguments)};var _DrawCylinderWiresEx=Module["_DrawCylinderWiresEx"]=function(){return(_DrawCylinderWiresEx=Module["_DrawCylinderWiresEx"]=Module["asm"]["$l"]).apply(null,arguments)};var _DrawCapsule=Module["_DrawCapsule"]=function(){return(_DrawCapsule=Module["_DrawCapsule"]=Module["asm"]["am"]).apply(null,arguments)};var _DrawCapsuleWires=Module["_DrawCapsuleWires"]=function(){return(_DrawCapsuleWires=Module["_DrawCapsuleWires"]=Module["asm"]["bm"]).apply(null,arguments)};var _DrawPlane=Module["_DrawPlane"]=function(){return(_DrawPlane=Module["_DrawPlane"]=Module["asm"]["cm"]).apply(null,arguments)};var _DrawRay=Module["_DrawRay"]=function(){return(_DrawRay=Module["_DrawRay"]=Module["asm"]["dm"]).apply(null,arguments)};var _DrawGrid=Module["_DrawGrid"]=function(){return(_DrawGrid=Module["_DrawGrid"]=Module["asm"]["em"]).apply(null,arguments)};var _LoadModel=Module["_LoadModel"]=function(){return(_LoadModel=Module["_LoadModel"]=Module["asm"]["fm"]).apply(null,arguments)};var _LoadMaterialDefault=Module["_LoadMaterialDefault"]=function(){return(_LoadMaterialDefault=Module["_LoadMaterialDefault"]=Module["asm"]["gm"]).apply(null,arguments)};var _UploadMesh=Module["_UploadMesh"]=function(){return(_UploadMesh=Module["_UploadMesh"]=Module["asm"]["hm"]).apply(null,arguments)};var _GenMeshCube=Module["_GenMeshCube"]=function(){return(_GenMeshCube=Module["_GenMeshCube"]=Module["asm"]["im"]).apply(null,arguments)};var _LoadModelFromMesh=Module["_LoadModelFromMesh"]=function(){return(_LoadModelFromMesh=Module["_LoadModelFromMesh"]=Module["asm"]["jm"]).apply(null,arguments)};var _IsModelReady=Module["_IsModelReady"]=function(){return(_IsModelReady=Module["_IsModelReady"]=Module["asm"]["km"]).apply(null,arguments)};var _UnloadModel=Module["_UnloadModel"]=function(){return(_UnloadModel=Module["_UnloadModel"]=Module["asm"]["lm"]).apply(null,arguments)};var _UnloadMesh=Module["_UnloadMesh"]=function(){return(_UnloadMesh=Module["_UnloadMesh"]=Module["asm"]["mm"]).apply(null,arguments)};var _GetModelBoundingBox=Module["_GetModelBoundingBox"]=function(){return(_GetModelBoundingBox=Module["_GetModelBoundingBox"]=Module["asm"]["nm"]).apply(null,arguments)};var _GetMeshBoundingBox=Module["_GetMeshBoundingBox"]=function(){return(_GetMeshBoundingBox=Module["_GetMeshBoundingBox"]=Module["asm"]["om"]).apply(null,arguments)};var _UpdateMeshBuffer=Module["_UpdateMeshBuffer"]=function(){return(_UpdateMeshBuffer=Module["_UpdateMeshBuffer"]=Module["asm"]["pm"]).apply(null,arguments)};var _DrawMesh=Module["_DrawMesh"]=function(){return(_DrawMesh=Module["_DrawMesh"]=Module["asm"]["qm"]).apply(null,arguments)};var _DrawMeshInstanced=Module["_DrawMeshInstanced"]=function(){return(_DrawMeshInstanced=Module["_DrawMeshInstanced"]=Module["asm"]["rm"]).apply(null,arguments)};var _ExportMesh=Module["_ExportMesh"]=function(){return(_ExportMesh=Module["_ExportMesh"]=Module["asm"]["sm"]).apply(null,arguments)};var _LoadMaterials=Module["_LoadMaterials"]=function(){return(_LoadMaterials=Module["_LoadMaterials"]=Module["asm"]["tm"]).apply(null,arguments)};var _IsMaterialReady=Module["_IsMaterialReady"]=function(){return(_IsMaterialReady=Module["_IsMaterialReady"]=Module["asm"]["um"]).apply(null,arguments)};var _UnloadMaterial=Module["_UnloadMaterial"]=function(){return(_UnloadMaterial=Module["_UnloadMaterial"]=Module["asm"]["vm"]).apply(null,arguments)};var _SetMaterialTexture=Module["_SetMaterialTexture"]=function(){return(_SetMaterialTexture=Module["_SetMaterialTexture"]=Module["asm"]["wm"]).apply(null,arguments)};var _SetModelMeshMaterial=Module["_SetModelMeshMaterial"]=function(){return(_SetModelMeshMaterial=Module["_SetModelMeshMaterial"]=Module["asm"]["xm"]).apply(null,arguments)};var _LoadModelAnimations=Module["_LoadModelAnimations"]=function(){return(_LoadModelAnimations=Module["_LoadModelAnimations"]=Module["asm"]["ym"]).apply(null,arguments)};var _UpdateModelAnimation=Module["_UpdateModelAnimation"]=function(){return(_UpdateModelAnimation=Module["_UpdateModelAnimation"]=Module["asm"]["zm"]).apply(null,arguments)};var _UnloadModelAnimations=Module["_UnloadModelAnimations"]=function(){return(_UnloadModelAnimations=Module["_UnloadModelAnimations"]=Module["asm"]["Am"]).apply(null,arguments)};var _UnloadModelAnimation=Module["_UnloadModelAnimation"]=function(){return(_UnloadModelAnimation=Module["_UnloadModelAnimation"]=Module["asm"]["Bm"]).apply(null,arguments)};var _IsModelAnimationValid=Module["_IsModelAnimationValid"]=function(){return(_IsModelAnimationValid=Module["_IsModelAnimationValid"]=Module["asm"]["Cm"]).apply(null,arguments)};var _GenMeshPoly=Module["_GenMeshPoly"]=function(){return(_GenMeshPoly=Module["_GenMeshPoly"]=Module["asm"]["Dm"]).apply(null,arguments)};var _GenMeshPlane=Module["_GenMeshPlane"]=function(){return(_GenMeshPlane=Module["_GenMeshPlane"]=Module["asm"]["Em"]).apply(null,arguments)};var _GenMeshSphere=Module["_GenMeshSphere"]=function(){return(_GenMeshSphere=Module["_GenMeshSphere"]=Module["asm"]["Fm"]).apply(null,arguments)};var _GenMeshHemiSphere=Module["_GenMeshHemiSphere"]=function(){return(_GenMeshHemiSphere=Module["_GenMeshHemiSphere"]=Module["asm"]["Gm"]).apply(null,arguments)};var _GenMeshCylinder=Module["_GenMeshCylinder"]=function(){return(_GenMeshCylinder=Module["_GenMeshCylinder"]=Module["asm"]["Hm"]).apply(null,arguments)};var _GenMeshCone=Module["_GenMeshCone"]=function(){return(_GenMeshCone=Module["_GenMeshCone"]=Module["asm"]["Im"]).apply(null,arguments)};var _GenMeshTorus=Module["_GenMeshTorus"]=function(){return(_GenMeshTorus=Module["_GenMeshTorus"]=Module["asm"]["Jm"]).apply(null,arguments)};var _GenMeshKnot=Module["_GenMeshKnot"]=function(){return(_GenMeshKnot=Module["_GenMeshKnot"]=Module["asm"]["Km"]).apply(null,arguments)};var _GenMeshHeightmap=Module["_GenMeshHeightmap"]=function(){return(_GenMeshHeightmap=Module["_GenMeshHeightmap"]=Module["asm"]["Lm"]).apply(null,arguments)};var _GenMeshCubicmap=Module["_GenMeshCubicmap"]=function(){return(_GenMeshCubicmap=Module["_GenMeshCubicmap"]=Module["asm"]["Mm"]).apply(null,arguments)};var _GenMeshTangents=Module["_GenMeshTangents"]=function(){return(_GenMeshTangents=Module["_GenMeshTangents"]=Module["asm"]["Nm"]).apply(null,arguments)};var _DrawModel=Module["_DrawModel"]=function(){return(_DrawModel=Module["_DrawModel"]=Module["asm"]["Om"]).apply(null,arguments)};var _DrawModelEx=Module["_DrawModelEx"]=function(){return(_DrawModelEx=Module["_DrawModelEx"]=Module["asm"]["Pm"]).apply(null,arguments)};var _DrawModelWires=Module["_DrawModelWires"]=function(){return(_DrawModelWires=Module["_DrawModelWires"]=Module["asm"]["Qm"]).apply(null,arguments)};var _DrawModelWiresEx=Module["_DrawModelWiresEx"]=function(){return(_DrawModelWiresEx=Module["_DrawModelWiresEx"]=Module["asm"]["Rm"]).apply(null,arguments)};var _DrawBillboard=Module["_DrawBillboard"]=function(){return(_DrawBillboard=Module["_DrawBillboard"]=Module["asm"]["Sm"]).apply(null,arguments)};var _DrawBillboardPro=Module["_DrawBillboardPro"]=function(){return(_DrawBillboardPro=Module["_DrawBillboardPro"]=Module["asm"]["Tm"]).apply(null,arguments)};var _DrawBillboardRec=Module["_DrawBillboardRec"]=function(){return(_DrawBillboardRec=Module["_DrawBillboardRec"]=Module["asm"]["Um"]).apply(null,arguments)};var _DrawBoundingBox=Module["_DrawBoundingBox"]=function(){return(_DrawBoundingBox=Module["_DrawBoundingBox"]=Module["asm"]["Vm"]).apply(null,arguments)};var _CheckCollisionSpheres=Module["_CheckCollisionSpheres"]=function(){return(_CheckCollisionSpheres=Module["_CheckCollisionSpheres"]=Module["asm"]["Wm"]).apply(null,arguments)};var _CheckCollisionBoxes=Module["_CheckCollisionBoxes"]=function(){return(_CheckCollisionBoxes=Module["_CheckCollisionBoxes"]=Module["asm"]["Xm"]).apply(null,arguments)};var _CheckCollisionBoxSphere=Module["_CheckCollisionBoxSphere"]=function(){return(_CheckCollisionBoxSphere=Module["_CheckCollisionBoxSphere"]=Module["asm"]["Ym"]).apply(null,arguments)};var _GetRayCollisionSphere=Module["_GetRayCollisionSphere"]=function(){return(_GetRayCollisionSphere=Module["_GetRayCollisionSphere"]=Module["asm"]["Zm"]).apply(null,arguments)};var _GetRayCollisionBox=Module["_GetRayCollisionBox"]=function(){return(_GetRayCollisionBox=Module["_GetRayCollisionBox"]=Module["asm"]["_m"]).apply(null,arguments)};var _GetRayCollisionMesh=Module["_GetRayCollisionMesh"]=function(){return(_GetRayCollisionMesh=Module["_GetRayCollisionMesh"]=Module["asm"]["$m"]).apply(null,arguments)};var _GetRayCollisionTriangle=Module["_GetRayCollisionTriangle"]=function(){return(_GetRayCollisionTriangle=Module["_GetRayCollisionTriangle"]=Module["asm"]["an"]).apply(null,arguments)};var _GetRayCollisionQuad=Module["_GetRayCollisionQuad"]=function(){return(_GetRayCollisionQuad=Module["_GetRayCollisionQuad"]=Module["asm"]["bn"]).apply(null,arguments)};var _ma_malloc_emscripten=Module["_ma_malloc_emscripten"]=function(){return(_ma_malloc_emscripten=Module["_ma_malloc_emscripten"]=Module["asm"]["cn"]).apply(null,arguments)};var _ma_free_emscripten=Module["_ma_free_emscripten"]=function(){return(_ma_free_emscripten=Module["_ma_free_emscripten"]=Module["asm"]["dn"]).apply(null,arguments)};var _ma_device_process_pcm_frames_capture__webaudio=Module["_ma_device_process_pcm_frames_capture__webaudio"]=function(){return(_ma_device_process_pcm_frames_capture__webaudio=Module["_ma_device_process_pcm_frames_capture__webaudio"]=Module["asm"]["en"]).apply(null,arguments)};var _ma_device_process_pcm_frames_playback__webaudio=Module["_ma_device_process_pcm_frames_playback__webaudio"]=function(){return(_ma_device_process_pcm_frames_playback__webaudio=Module["_ma_device_process_pcm_frames_playback__webaudio"]=Module["asm"]["fn"]).apply(null,arguments)};var _InitAudioDevice=Module["_InitAudioDevice"]=function(){return(_InitAudioDevice=Module["_InitAudioDevice"]=Module["asm"]["gn"]).apply(null,arguments)};var _CloseAudioDevice=Module["_CloseAudioDevice"]=function(){return(_CloseAudioDevice=Module["_CloseAudioDevice"]=Module["asm"]["hn"]).apply(null,arguments)};var _IsAudioDeviceReady=Module["_IsAudioDeviceReady"]=function(){return(_IsAudioDeviceReady=Module["_IsAudioDeviceReady"]=Module["asm"]["jn"]).apply(null,arguments)};var _SetMasterVolume=Module["_SetMasterVolume"]=function(){return(_SetMasterVolume=Module["_SetMasterVolume"]=Module["asm"]["kn"]).apply(null,arguments)};var _LoadWave=Module["_LoadWave"]=function(){return(_LoadWave=Module["_LoadWave"]=Module["asm"]["ln"]).apply(null,arguments)};var _LoadWaveFromMemory=Module["_LoadWaveFromMemory"]=function(){return(_LoadWaveFromMemory=Module["_LoadWaveFromMemory"]=Module["asm"]["mn"]).apply(null,arguments)};var _IsWaveReady=Module["_IsWaveReady"]=function(){return(_IsWaveReady=Module["_IsWaveReady"]=Module["asm"]["nn"]).apply(null,arguments)};var _LoadSound=Module["_LoadSound"]=function(){return(_LoadSound=Module["_LoadSound"]=Module["asm"]["on"]).apply(null,arguments)};var _LoadSoundFromWave=Module["_LoadSoundFromWave"]=function(){return(_LoadSoundFromWave=Module["_LoadSoundFromWave"]=Module["asm"]["pn"]).apply(null,arguments)};var _UnloadWave=Module["_UnloadWave"]=function(){return(_UnloadWave=Module["_UnloadWave"]=Module["asm"]["qn"]).apply(null,arguments)};var _IsSoundReady=Module["_IsSoundReady"]=function(){return(_IsSoundReady=Module["_IsSoundReady"]=Module["asm"]["rn"]).apply(null,arguments)};var _UnloadSound=Module["_UnloadSound"]=function(){return(_UnloadSound=Module["_UnloadSound"]=Module["asm"]["sn"]).apply(null,arguments)};var _UpdateSound=Module["_UpdateSound"]=function(){return(_UpdateSound=Module["_UpdateSound"]=Module["asm"]["tn"]).apply(null,arguments)};var _ExportWave=Module["_ExportWave"]=function(){return(_ExportWave=Module["_ExportWave"]=Module["asm"]["un"]).apply(null,arguments)};var _ExportWaveAsCode=Module["_ExportWaveAsCode"]=function(){return(_ExportWaveAsCode=Module["_ExportWaveAsCode"]=Module["asm"]["vn"]).apply(null,arguments)};var _PlaySound=Module["_PlaySound"]=function(){return(_PlaySound=Module["_PlaySound"]=Module["asm"]["wn"]).apply(null,arguments)};var _PauseSound=Module["_PauseSound"]=function(){return(_PauseSound=Module["_PauseSound"]=Module["asm"]["xn"]).apply(null,arguments)};var _ResumeSound=Module["_ResumeSound"]=function(){return(_ResumeSound=Module["_ResumeSound"]=Module["asm"]["yn"]).apply(null,arguments)};var _StopSound=Module["_StopSound"]=function(){return(_StopSound=Module["_StopSound"]=Module["asm"]["zn"]).apply(null,arguments)};var _IsSoundPlaying=Module["_IsSoundPlaying"]=function(){return(_IsSoundPlaying=Module["_IsSoundPlaying"]=Module["asm"]["An"]).apply(null,arguments)};var _SetSoundVolume=Module["_SetSoundVolume"]=function(){return(_SetSoundVolume=Module["_SetSoundVolume"]=Module["asm"]["Bn"]).apply(null,arguments)};var _SetSoundPitch=Module["_SetSoundPitch"]=function(){return(_SetSoundPitch=Module["_SetSoundPitch"]=Module["asm"]["Cn"]).apply(null,arguments)};var _SetSoundPan=Module["_SetSoundPan"]=function(){return(_SetSoundPan=Module["_SetSoundPan"]=Module["asm"]["Dn"]).apply(null,arguments)};var _WaveFormat=Module["_WaveFormat"]=function(){return(_WaveFormat=Module["_WaveFormat"]=Module["asm"]["En"]).apply(null,arguments)};var _WaveCopy=Module["_WaveCopy"]=function(){return(_WaveCopy=Module["_WaveCopy"]=Module["asm"]["Fn"]).apply(null,arguments)};var _WaveCrop=Module["_WaveCrop"]=function(){return(_WaveCrop=Module["_WaveCrop"]=Module["asm"]["Gn"]).apply(null,arguments)};var _LoadWaveSamples=Module["_LoadWaveSamples"]=function(){return(_LoadWaveSamples=Module["_LoadWaveSamples"]=Module["asm"]["Hn"]).apply(null,arguments)};var _UnloadWaveSamples=Module["_UnloadWaveSamples"]=function(){return(_UnloadWaveSamples=Module["_UnloadWaveSamples"]=Module["asm"]["In"]).apply(null,arguments)};var _LoadMusicStream=Module["_LoadMusicStream"]=function(){return(_LoadMusicStream=Module["_LoadMusicStream"]=Module["asm"]["Jn"]).apply(null,arguments)};var _LoadAudioStream=Module["_LoadAudioStream"]=function(){return(_LoadAudioStream=Module["_LoadAudioStream"]=Module["asm"]["Kn"]).apply(null,arguments)};var _LoadMusicStreamFromMemory=Module["_LoadMusicStreamFromMemory"]=function(){return(_LoadMusicStreamFromMemory=Module["_LoadMusicStreamFromMemory"]=Module["asm"]["Ln"]).apply(null,arguments)};var _IsMusicReady=Module["_IsMusicReady"]=function(){return(_IsMusicReady=Module["_IsMusicReady"]=Module["asm"]["Mn"]).apply(null,arguments)};var _UnloadMusicStream=Module["_UnloadMusicStream"]=function(){return(_UnloadMusicStream=Module["_UnloadMusicStream"]=Module["asm"]["Nn"]).apply(null,arguments)};var _UnloadAudioStream=Module["_UnloadAudioStream"]=function(){return(_UnloadAudioStream=Module["_UnloadAudioStream"]=Module["asm"]["On"]).apply(null,arguments)};var _PlayMusicStream=Module["_PlayMusicStream"]=function(){return(_PlayMusicStream=Module["_PlayMusicStream"]=Module["asm"]["Pn"]).apply(null,arguments)};var _PlayAudioStream=Module["_PlayAudioStream"]=function(){return(_PlayAudioStream=Module["_PlayAudioStream"]=Module["asm"]["Qn"]).apply(null,arguments)};var _PauseMusicStream=Module["_PauseMusicStream"]=function(){return(_PauseMusicStream=Module["_PauseMusicStream"]=Module["asm"]["Rn"]).apply(null,arguments)};var _PauseAudioStream=Module["_PauseAudioStream"]=function(){return(_PauseAudioStream=Module["_PauseAudioStream"]=Module["asm"]["Sn"]).apply(null,arguments)};var _ResumeMusicStream=Module["_ResumeMusicStream"]=function(){return(_ResumeMusicStream=Module["_ResumeMusicStream"]=Module["asm"]["Tn"]).apply(null,arguments)};var _ResumeAudioStream=Module["_ResumeAudioStream"]=function(){return(_ResumeAudioStream=Module["_ResumeAudioStream"]=Module["asm"]["Un"]).apply(null,arguments)};var _StopMusicStream=Module["_StopMusicStream"]=function(){return(_StopMusicStream=Module["_StopMusicStream"]=Module["asm"]["Vn"]).apply(null,arguments)};var _StopAudioStream=Module["_StopAudioStream"]=function(){return(_StopAudioStream=Module["_StopAudioStream"]=Module["asm"]["Wn"]).apply(null,arguments)};var _SeekMusicStream=Module["_SeekMusicStream"]=function(){return(_SeekMusicStream=Module["_SeekMusicStream"]=Module["asm"]["Xn"]).apply(null,arguments)};var _UpdateMusicStream=Module["_UpdateMusicStream"]=function(){return(_UpdateMusicStream=Module["_UpdateMusicStream"]=Module["asm"]["Yn"]).apply(null,arguments)};var _UpdateAudioStream=Module["_UpdateAudioStream"]=function(){return(_UpdateAudioStream=Module["_UpdateAudioStream"]=Module["asm"]["Zn"]).apply(null,arguments)};var _IsMusicStreamPlaying=Module["_IsMusicStreamPlaying"]=function(){return(_IsMusicStreamPlaying=Module["_IsMusicStreamPlaying"]=Module["asm"]["_n"]).apply(null,arguments)};var _IsAudioStreamPlaying=Module["_IsAudioStreamPlaying"]=function(){return(_IsAudioStreamPlaying=Module["_IsAudioStreamPlaying"]=Module["asm"]["$n"]).apply(null,arguments)};var _SetMusicVolume=Module["_SetMusicVolume"]=function(){return(_SetMusicVolume=Module["_SetMusicVolume"]=Module["asm"]["ao"]).apply(null,arguments)};var _SetAudioStreamVolume=Module["_SetAudioStreamVolume"]=function(){return(_SetAudioStreamVolume=Module["_SetAudioStreamVolume"]=Module["asm"]["bo"]).apply(null,arguments)};var _SetMusicPitch=Module["_SetMusicPitch"]=function(){return(_SetMusicPitch=Module["_SetMusicPitch"]=Module["asm"]["co"]).apply(null,arguments)};var _SetMusicPan=Module["_SetMusicPan"]=function(){return(_SetMusicPan=Module["_SetMusicPan"]=Module["asm"]["eo"]).apply(null,arguments)};var _GetMusicTimeLength=Module["_GetMusicTimeLength"]=function(){return(_GetMusicTimeLength=Module["_GetMusicTimeLength"]=Module["asm"]["fo"]).apply(null,arguments)};var _GetMusicTimePlayed=Module["_GetMusicTimePlayed"]=function(){return(_GetMusicTimePlayed=Module["_GetMusicTimePlayed"]=Module["asm"]["go"]).apply(null,arguments)};var _IsAudioStreamReady=Module["_IsAudioStreamReady"]=function(){return(_IsAudioStreamReady=Module["_IsAudioStreamReady"]=Module["asm"]["ho"]).apply(null,arguments)};var _IsAudioStreamProcessed=Module["_IsAudioStreamProcessed"]=function(){return(_IsAudioStreamProcessed=Module["_IsAudioStreamProcessed"]=Module["asm"]["io"]).apply(null,arguments)};var _SetAudioStreamPitch=Module["_SetAudioStreamPitch"]=function(){return(_SetAudioStreamPitch=Module["_SetAudioStreamPitch"]=Module["asm"]["jo"]).apply(null,arguments)};var _SetAudioStreamPan=Module["_SetAudioStreamPan"]=function(){return(_SetAudioStreamPan=Module["_SetAudioStreamPan"]=Module["asm"]["ko"]).apply(null,arguments)};var _SetAudioStreamBufferSizeDefault=Module["_SetAudioStreamBufferSizeDefault"]=function(){return(_SetAudioStreamBufferSizeDefault=Module["_SetAudioStreamBufferSizeDefault"]=Module["asm"]["lo"]).apply(null,arguments)};var _SetAudioStreamCallback=Module["_SetAudioStreamCallback"]=function(){return(_SetAudioStreamCallback=Module["_SetAudioStreamCallback"]=Module["asm"]["mo"]).apply(null,arguments)};var _AttachAudioStreamProcessor=Module["_AttachAudioStreamProcessor"]=function(){return(_AttachAudioStreamProcessor=Module["_AttachAudioStreamProcessor"]=Module["asm"]["no"]).apply(null,arguments)};var _DetachAudioStreamProcessor=Module["_DetachAudioStreamProcessor"]=function(){return(_DetachAudioStreamProcessor=Module["_DetachAudioStreamProcessor"]=Module["asm"]["oo"]).apply(null,arguments)};var _AttachAudioMixedProcessor=Module["_AttachAudioMixedProcessor"]=function(){return(_AttachAudioMixedProcessor=Module["_AttachAudioMixedProcessor"]=Module["asm"]["po"]).apply(null,arguments)};var _DetachAudioMixedProcessor=Module["_DetachAudioMixedProcessor"]=function(){return(_DetachAudioMixedProcessor=Module["_DetachAudioMixedProcessor"]=Module["asm"]["qo"]).apply(null,arguments)};var ___errno_location=function(){return(___errno_location=Module["asm"]["ro"]).apply(null,arguments)};var _malloc=Module["_malloc"]=function(){return(_malloc=Module["_malloc"]=Module["asm"]["so"]).apply(null,arguments)};var _free=Module["_free"]=function(){return(_free=Module["_free"]=Module["asm"]["to"]).apply(null,arguments)};var stackSave=function(){return(stackSave=Module["asm"]["uo"]).apply(null,arguments)};var stackRestore=function(){return(stackRestore=Module["asm"]["vo"]).apply(null,arguments)};var stackAlloc=function(){return(stackAlloc=Module["asm"]["wo"]).apply(null,arguments)};var ___start_em_js=Module["___start_em_js"]=85988;var ___stop_em_js=Module["___stop_em_js"]=86063;Module["cwrap"]=cwrap;Module["setValue"]=setValue;Module["getValue"]=getValue;Module["UTF8ToString"]=UTF8ToString;Module["stringToUTF8"]=stringToUTF8;Module["FS"]=FS;Module["allocateUTF8"]=allocateUTF8;var calledRun;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(){if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();readyPromiseResolve(Module);if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}run();


  return Module.ready
}

);
})();


// run this function before calling anything
async function raylib_run(canvas, userInit, userUpdate) {
  const raylib = {}
  const mod = await Module({canvas})
  // Vector2, 2 components
  raylib.Vector2 = class Vector2 {
    constructor(init = {}, _address) {
      this._size = 8
      this._address = _address || mod._malloc(this._size)

      this.x = init.x || 0
      this.y = init.y || 0
    }
    
      get x () {
        return mod.getValue(this._address + 0, 'float')
      }
      set x (x) {
        mod.setValue(this._address + 0, x, 'float')
      }

  
      get y () {
        return mod.getValue(this._address + 4, 'float')
      }
      set y (y) {
        mod.setValue(this._address + 4, y, 'float')
      }

  }

  // Vector3, 3 components
  raylib.Vector3 = class Vector3 {
    constructor(init = {}, _address) {
      this._size = 12
      this._address = _address || mod._malloc(this._size)

      this.x = init.x || 0
      this.y = init.y || 0
      this.z = init.z || 0
    }
    
      get x () {
        return mod.getValue(this._address + 0, 'float')
      }
      set x (x) {
        mod.setValue(this._address + 0, x, 'float')
      }

  
      get y () {
        return mod.getValue(this._address + 4, 'float')
      }
      set y (y) {
        mod.setValue(this._address + 4, y, 'float')
      }

  
      get z () {
        return mod.getValue(this._address + 8, 'float')
      }
      set z (z) {
        mod.setValue(this._address + 8, z, 'float')
      }

  }

  // Vector4, 4 components
  raylib.Vector4 = class Vector4 {
    constructor(init = {}, _address) {
      this._size = 16
      this._address = _address || mod._malloc(this._size)

      this.x = init.x || 0
      this.y = init.y || 0
      this.z = init.z || 0
      this.w = init.w || 0
    }
    
      get x () {
        return mod.getValue(this._address + 0, 'float')
      }
      set x (x) {
        mod.setValue(this._address + 0, x, 'float')
      }

  
      get y () {
        return mod.getValue(this._address + 4, 'float')
      }
      set y (y) {
        mod.setValue(this._address + 4, y, 'float')
      }

  
      get z () {
        return mod.getValue(this._address + 8, 'float')
      }
      set z (z) {
        mod.setValue(this._address + 8, z, 'float')
      }

  
      get w () {
        return mod.getValue(this._address + 12, 'float')
      }
      set w (w) {
        mod.setValue(this._address + 12, w, 'float')
      }

  }

  // Matrix, 4x4 components, column major, OpenGL style, right-handed
  raylib.Matrix = class Matrix {
    constructor(init = {}, _address) {
      this._size = 64
      this._address = _address || mod._malloc(this._size)

      this.m0 = init.m0 || 0
      this.m4 = init.m4 || 0
      this.m8 = init.m8 || 0
      this.m12 = init.m12 || 0
      this.m1 = init.m1 || 0
      this.m5 = init.m5 || 0
      this.m9 = init.m9 || 0
      this.m13 = init.m13 || 0
      this.m2 = init.m2 || 0
      this.m6 = init.m6 || 0
      this.m10 = init.m10 || 0
      this.m14 = init.m14 || 0
      this.m3 = init.m3 || 0
      this.m7 = init.m7 || 0
      this.m11 = init.m11 || 0
      this.m15 = init.m15 || 0
    }
    
      get m0 () {
        return mod.getValue(this._address + 0, 'float')
      }
      set m0 (m0) {
        mod.setValue(this._address + 0, m0, 'float')
      }

  
      get m4 () {
        return mod.getValue(this._address + 4, 'float')
      }
      set m4 (m4) {
        mod.setValue(this._address + 4, m4, 'float')
      }

  
      get m8 () {
        return mod.getValue(this._address + 8, 'float')
      }
      set m8 (m8) {
        mod.setValue(this._address + 8, m8, 'float')
      }

  
      get m12 () {
        return mod.getValue(this._address + 12, 'float')
      }
      set m12 (m12) {
        mod.setValue(this._address + 12, m12, 'float')
      }

  
      get m1 () {
        return mod.getValue(this._address + 16, 'float')
      }
      set m1 (m1) {
        mod.setValue(this._address + 16, m1, 'float')
      }

  
      get m5 () {
        return mod.getValue(this._address + 20, 'float')
      }
      set m5 (m5) {
        mod.setValue(this._address + 20, m5, 'float')
      }

  
      get m9 () {
        return mod.getValue(this._address + 24, 'float')
      }
      set m9 (m9) {
        mod.setValue(this._address + 24, m9, 'float')
      }

  
      get m13 () {
        return mod.getValue(this._address + 28, 'float')
      }
      set m13 (m13) {
        mod.setValue(this._address + 28, m13, 'float')
      }

  
      get m2 () {
        return mod.getValue(this._address + 32, 'float')
      }
      set m2 (m2) {
        mod.setValue(this._address + 32, m2, 'float')
      }

  
      get m6 () {
        return mod.getValue(this._address + 36, 'float')
      }
      set m6 (m6) {
        mod.setValue(this._address + 36, m6, 'float')
      }

  
      get m10 () {
        return mod.getValue(this._address + 40, 'float')
      }
      set m10 (m10) {
        mod.setValue(this._address + 40, m10, 'float')
      }

  
      get m14 () {
        return mod.getValue(this._address + 44, 'float')
      }
      set m14 (m14) {
        mod.setValue(this._address + 44, m14, 'float')
      }

  
      get m3 () {
        return mod.getValue(this._address + 48, 'float')
      }
      set m3 (m3) {
        mod.setValue(this._address + 48, m3, 'float')
      }

  
      get m7 () {
        return mod.getValue(this._address + 52, 'float')
      }
      set m7 (m7) {
        mod.setValue(this._address + 52, m7, 'float')
      }

  
      get m11 () {
        return mod.getValue(this._address + 56, 'float')
      }
      set m11 (m11) {
        mod.setValue(this._address + 56, m11, 'float')
      }

  
      get m15 () {
        return mod.getValue(this._address + 60, 'float')
      }
      set m15 (m15) {
        mod.setValue(this._address + 60, m15, 'float')
      }

  }

  // Color, 4 components, R8G8B8A8 (32bit)
  raylib.Color = class Color {
    constructor(init = {}, _address) {
      this._size = 4
      this._address = _address || mod._malloc(this._size)

      this.r = init.r || 0
      this.g = init.g || 0
      this.b = init.b || 0
      this.a = init.a || 0
    }
    
      get r () {
        return mod.HEAPU8[this._address + 0]
      }
      set r (r) {
        mod.HEAPU8[this._address + 0] = r
      }

  
      get g () {
        return mod.HEAPU8[this._address + 1]
      }
      set g (g) {
        mod.HEAPU8[this._address + 1] = g
      }

  
      get b () {
        return mod.HEAPU8[this._address + 2]
      }
      set b (b) {
        mod.HEAPU8[this._address + 2] = b
      }

  
      get a () {
        return mod.HEAPU8[this._address + 3]
      }
      set a (a) {
        mod.HEAPU8[this._address + 3] = a
      }

  }

  // Rectangle, 4 components
  raylib.Rectangle = class Rectangle {
    constructor(init = {}, _address) {
      this._size = 16
      this._address = _address || mod._malloc(this._size)

      this.x = init.x || 0
      this.y = init.y || 0
      this.width = init.width || 0
      this.height = init.height || 0
    }
    
      get x () {
        return mod.getValue(this._address + 0, 'float')
      }
      set x (x) {
        mod.setValue(this._address + 0, x, 'float')
      }

  
      get y () {
        return mod.getValue(this._address + 4, 'float')
      }
      set y (y) {
        mod.setValue(this._address + 4, y, 'float')
      }

  
      get width () {
        return mod.getValue(this._address + 8, 'float')
      }
      set width (width) {
        mod.setValue(this._address + 8, width, 'float')
      }

  
      get height () {
        return mod.getValue(this._address + 12, 'float')
      }
      set height (height) {
        mod.setValue(this._address + 12, height, 'float')
      }

  }

  // Image, pixel data stored in CPU memory (RAM)
  raylib.Image = class Image {
    constructor(init = {}, _address) {
      this._size = 20
      this._address = _address || mod._malloc(this._size)

      this.data = init.data || 0
      this.width = init.width || 0
      this.height = init.height || 0
      this.mipmaps = init.mipmaps || 0
      this.format = init.format || 0
    }
    
      get data () {
        return mod.getValue(this._address + 0, '*')
      }
      set data (data) {
        mod.setValue(this._address + 0, data, '*')
      }

  
      get width () {
        return mod.getValue(this._address + 4, 'i32')
      }
      set width (width) {
        mod.setValue(this._address + 4, width, 'i32')
      }

  
      get height () {
        return mod.getValue(this._address + 8, 'i32')
      }
      set height (height) {
        mod.setValue(this._address + 8, height, 'i32')
      }

  
      get mipmaps () {
        return mod.getValue(this._address + 12, 'i32')
      }
      set mipmaps (mipmaps) {
        mod.setValue(this._address + 12, mipmaps, 'i32')
      }

  
      get format () {
        return mod.getValue(this._address + 16, 'i32')
      }
      set format (format) {
        mod.setValue(this._address + 16, format, 'i32')
      }

  }

  // Texture, tex data stored in GPU memory (VRAM)
  raylib.Texture = class Texture {
    constructor(init = {}, _address) {
      this._size = 20
      this._address = _address || mod._malloc(this._size)

      this.id = init.id || 0
      this.width = init.width || 0
      this.height = init.height || 0
      this.mipmaps = init.mipmaps || 0
      this.format = init.format || 0
    }
    
      get id () {
        return mod.HEAPU32[this._address + 0]
      }
      set id (id) {
        mod.HEAPU32[this._address + 0] = id
      }

  
      get width () {
        return mod.getValue(this._address + 4, 'i32')
      }
      set width (width) {
        mod.setValue(this._address + 4, width, 'i32')
      }

  
      get height () {
        return mod.getValue(this._address + 8, 'i32')
      }
      set height (height) {
        mod.setValue(this._address + 8, height, 'i32')
      }

  
      get mipmaps () {
        return mod.getValue(this._address + 12, 'i32')
      }
      set mipmaps (mipmaps) {
        mod.setValue(this._address + 12, mipmaps, 'i32')
      }

  
      get format () {
        return mod.getValue(this._address + 16, 'i32')
      }
      set format (format) {
        mod.setValue(this._address + 16, format, 'i32')
      }

  }

  // RenderTexture, fbo for texture rendering
  raylib.RenderTexture = class RenderTexture {
    constructor(init = {}, _address) {
      this._size = 44
      this._address = _address || mod._malloc(this._size)

      this.id = init.id || 0
      this.texture = new raylib.Texture(init.texture || {}, this._address + 4)
      this.depth = new raylib.Texture(init.depth || {}, this._address + 24)
    }
    
      get id () {
        return mod.HEAPU32[this._address + 0]
      }
      set id (id) {
        mod.HEAPU32[this._address + 0] = id
      }

  
  
  }

  // NPatchInfo, n-patch layout info
  raylib.NPatchInfo = class NPatchInfo {
    constructor(init = {}, _address) {
      this._size = 36
      this._address = _address || mod._malloc(this._size)

      this.source = new raylib.Rectangle(init.source || {}, this._address + 0)
      this.left = init.left || 0
      this.top = init.top || 0
      this.right = init.right || 0
      this.bottom = init.bottom || 0
      this.layout = init.layout || 0
    }
    
  
      get left () {
        return mod.getValue(this._address + 16, 'i32')
      }
      set left (left) {
        mod.setValue(this._address + 16, left, 'i32')
      }

  
      get top () {
        return mod.getValue(this._address + 20, 'i32')
      }
      set top (top) {
        mod.setValue(this._address + 20, top, 'i32')
      }

  
      get right () {
        return mod.getValue(this._address + 24, 'i32')
      }
      set right (right) {
        mod.setValue(this._address + 24, right, 'i32')
      }

  
      get bottom () {
        return mod.getValue(this._address + 28, 'i32')
      }
      set bottom (bottom) {
        mod.setValue(this._address + 28, bottom, 'i32')
      }

  
      get layout () {
        return mod.getValue(this._address + 32, 'i32')
      }
      set layout (layout) {
        mod.setValue(this._address + 32, layout, 'i32')
      }

  }

  // GlyphInfo, font characters glyphs info
  raylib.GlyphInfo = class GlyphInfo {
    constructor(init = {}, _address) {
      this._size = 36
      this._address = _address || mod._malloc(this._size)

      this.value = init.value || 0
      this.offsetX = init.offsetX || 0
      this.offsetY = init.offsetY || 0
      this.advanceX = init.advanceX || 0
      this.image = new raylib.Image(init.image || {}, this._address + 16)
    }
    
      get value () {
        return mod.getValue(this._address + 0, 'i32')
      }
      set value (value) {
        mod.setValue(this._address + 0, value, 'i32')
      }

  
      get offsetX () {
        return mod.getValue(this._address + 4, 'i32')
      }
      set offsetX (offsetX) {
        mod.setValue(this._address + 4, offsetX, 'i32')
      }

  
      get offsetY () {
        return mod.getValue(this._address + 8, 'i32')
      }
      set offsetY (offsetY) {
        mod.setValue(this._address + 8, offsetY, 'i32')
      }

  
      get advanceX () {
        return mod.getValue(this._address + 12, 'i32')
      }
      set advanceX (advanceX) {
        mod.setValue(this._address + 12, advanceX, 'i32')
      }

  
  }

  // Font, font texture and GlyphInfo array data
  raylib.Font = class Font {
    constructor(init = {}, _address) {
      this._size = 40
      this._address = _address || mod._malloc(this._size)

      this.baseSize = init.baseSize || 0
      this.glyphCount = init.glyphCount || 0
      this.glyphPadding = init.glyphPadding || 0
      this.texture = new raylib.Texture2D(init.texture || {}, this._address + 12)
      this.recs = new raylib.Rectangle(init.recs || {}, this._address + 32)
      this.glyphs = new raylib.GlyphInfo(init.glyphs || {}, this._address + 36)
    }
    
      get baseSize () {
        return mod.getValue(this._address + 0, 'i32')
      }
      set baseSize (baseSize) {
        mod.setValue(this._address + 0, baseSize, 'i32')
      }

  
      get glyphCount () {
        return mod.getValue(this._address + 4, 'i32')
      }
      set glyphCount (glyphCount) {
        mod.setValue(this._address + 4, glyphCount, 'i32')
      }

  
      get glyphPadding () {
        return mod.getValue(this._address + 8, 'i32')
      }
      set glyphPadding (glyphPadding) {
        mod.setValue(this._address + 8, glyphPadding, 'i32')
      }

  
  
  
  }

  // Camera, defines position/orientation in 3d space
  raylib.Camera3D = class Camera3D {
    constructor(init = {}, _address) {
      this._size = 44
      this._address = _address || mod._malloc(this._size)

      this.position = new raylib.Vector3(init.position || {}, this._address + 0)
      this.target = new raylib.Vector3(init.target || {}, this._address + 12)
      this.up = new raylib.Vector3(init.up || {}, this._address + 24)
      this.fovy = init.fovy || 0
      this.projection = init.projection || 0
    }
    
  
  
  
      get fovy () {
        return mod.getValue(this._address + 36, 'float')
      }
      set fovy (fovy) {
        mod.setValue(this._address + 36, fovy, 'float')
      }

  
      get projection () {
        return mod.getValue(this._address + 40, 'i32')
      }
      set projection (projection) {
        mod.setValue(this._address + 40, projection, 'i32')
      }

  }

  // Camera2D, defines position/orientation in 2d space
  raylib.Camera2D = class Camera2D {
    constructor(init = {}, _address) {
      this._size = 24
      this._address = _address || mod._malloc(this._size)

      this.offset = new raylib.Vector2(init.offset || {}, this._address + 0)
      this.target = new raylib.Vector2(init.target || {}, this._address + 8)
      this.rotation = init.rotation || 0
      this.zoom = init.zoom || 0
    }
    
  
  
      get rotation () {
        return mod.getValue(this._address + 16, 'float')
      }
      set rotation (rotation) {
        mod.setValue(this._address + 16, rotation, 'float')
      }

  
      get zoom () {
        return mod.getValue(this._address + 20, 'float')
      }
      set zoom (zoom) {
        mod.setValue(this._address + 20, zoom, 'float')
      }

  }

  // Mesh, vertex data and vao/vbo
  raylib.Mesh = class Mesh {
    constructor(init = {}, _address) {
      this._size = 60
      this._address = _address || mod._malloc(this._size)

      this.vertexCount = init.vertexCount || 0
      this.triangleCount = init.triangleCount || 0
      this.vertices = init.vertices || 0
      this.texcoords = init.texcoords || 0
      this.texcoords2 = init.texcoords2 || 0
      this.normals = init.normals || 0
      this.tangents = init.tangents || 0
      this.colors = init.colors || 0
      this.indices = init.indices || 0
      this.animVertices = init.animVertices || 0
      this.animNormals = init.animNormals || 0
      this.boneIds = init.boneIds || 0
      this.boneWeights = init.boneWeights || 0
      this.vaoId = init.vaoId || 0
      this.vboId = init.vboId || 0
    }
    
      get vertexCount () {
        return mod.getValue(this._address + 0, 'i32')
      }
      set vertexCount (vertexCount) {
        mod.setValue(this._address + 0, vertexCount, 'i32')
      }

  
      get triangleCount () {
        return mod.getValue(this._address + 4, 'i32')
      }
      set triangleCount (triangleCount) {
        mod.setValue(this._address + 4, triangleCount, 'i32')
      }

  
      get vertices () {
        return mod.getValue(this._address + 8, '*')
      }
      set vertices (vertices) {
        mod.setValue(this._address + 8, vertices, '*')
      }

  
      get texcoords () {
        return mod.getValue(this._address + 12, '*')
      }
      set texcoords (texcoords) {
        mod.setValue(this._address + 12, texcoords, '*')
      }

  
      get texcoords2 () {
        return mod.getValue(this._address + 16, '*')
      }
      set texcoords2 (texcoords2) {
        mod.setValue(this._address + 16, texcoords2, '*')
      }

  
      get normals () {
        return mod.getValue(this._address + 20, '*')
      }
      set normals (normals) {
        mod.setValue(this._address + 20, normals, '*')
      }

  
      get tangents () {
        return mod.getValue(this._address + 24, '*')
      }
      set tangents (tangents) {
        mod.setValue(this._address + 24, tangents, '*')
      }

  
      get colors () {
        return mod.getValue(this._address + 28, '*')
      }
      set colors (colors) {
        mod.setValue(this._address + 28, colors, '*')
      }

  
      get indices () {
        return mod.getValue(this._address + 32, '*')
      }
      set indices (indices) {
        mod.setValue(this._address + 32, indices, '*')
      }

  
      get animVertices () {
        return mod.getValue(this._address + 36, '*')
      }
      set animVertices (animVertices) {
        mod.setValue(this._address + 36, animVertices, '*')
      }

  
      get animNormals () {
        return mod.getValue(this._address + 40, '*')
      }
      set animNormals (animNormals) {
        mod.setValue(this._address + 40, animNormals, '*')
      }

  
      get boneIds () {
        return mod.getValue(this._address + 44, '*')
      }
      set boneIds (boneIds) {
        mod.setValue(this._address + 44, boneIds, '*')
      }

  
      get boneWeights () {
        return mod.getValue(this._address + 48, '*')
      }
      set boneWeights (boneWeights) {
        mod.setValue(this._address + 48, boneWeights, '*')
      }

  
      get vaoId () {
        return mod.HEAPU32[this._address + 52]
      }
      set vaoId (vaoId) {
        mod.HEAPU32[this._address + 52] = vaoId
      }

  
      get vboId () {
        return mod.getValue(this._address + 56, '*')
      }
      set vboId (vboId) {
        mod.setValue(this._address + 56, vboId, '*')
      }

  }

  // Shader
  raylib.Shader = class Shader {
    constructor(init = {}, _address) {
      this._size = 8
      this._address = _address || mod._malloc(this._size)

      this.id = init.id || 0
      this.locs = init.locs || 0
    }
    
      get id () {
        return mod.HEAPU32[this._address + 0]
      }
      set id (id) {
        mod.HEAPU32[this._address + 0] = id
      }

  
      get locs () {
        return mod.getValue(this._address + 4, '*')
      }
      set locs (locs) {
        mod.setValue(this._address + 4, locs, '*')
      }

  }

  // MaterialMap
  raylib.MaterialMap = class MaterialMap {
    constructor(init = {}, _address) {
      this._size = 28
      this._address = _address || mod._malloc(this._size)

      this.texture = new raylib.Texture2D(init.texture || {}, this._address + 0)
      this.color = new raylib.Color(init.color || {}, this._address + 20)
      this.value = init.value || 0
    }
    
  
  
      get value () {
        return mod.getValue(this._address + 24, 'float')
      }
      set value (value) {
        mod.setValue(this._address + 24, value, 'float')
      }

  }

  // Material, includes shader and maps
  raylib.Material = class Material {
    constructor(init = {}, _address) {
      this._size = 28
      this._address = _address || mod._malloc(this._size)

      this.shader = new raylib.Shader(init.shader || {}, this._address + 0)
      this.maps = new raylib.MaterialMap(init.maps || {}, this._address + 8)
      this.params = init.params || [0, 0, 0, 0]
    }
    
  
  
      get params () {
        return mod.getValue(this._address + 12, '*')
      }
      set params (params) {
        mod.setValue(this._address + 12, params, '*')
      }

  }

  // Transform, vertex transformation data
  raylib.Transform = class Transform {
    constructor(init = {}, _address) {
      this._size = 40
      this._address = _address || mod._malloc(this._size)

      this.translation = new raylib.Vector3(init.translation || {}, this._address + 0)
      this.rotation = new raylib.Quaternion(init.rotation || {}, this._address + 12)
      this.scale = new raylib.Vector3(init.scale || {}, this._address + 28)
    }
    
  
  
  }

  // Bone, skeletal animation bone
  raylib.BoneInfo = class BoneInfo {
    constructor(init = {}, _address) {
      this._size = 36
      this._address = _address || mod._malloc(this._size)

      this.name = init.name || ''
      this.parent = init.parent || 0
    }
    
      get name () {
        return mod.UTF8ToString(this._address + 0)
      }
      set name (name) {
        mod.stringToUTF8(this._address + 0, name)
      }

  
      get parent () {
        return mod.getValue(this._address + 32, 'i32')
      }
      set parent (parent) {
        mod.setValue(this._address + 32, parent, 'i32')
      }

  }

  // Model, meshes, materials and animation data
  raylib.Model = class Model {
    constructor(init = {}, _address) {
      this._size = 96
      this._address = _address || mod._malloc(this._size)

      this.transform = new raylib.Matrix(init.transform || {}, this._address + 0)
      this.meshCount = init.meshCount || 0
      this.materialCount = init.materialCount || 0
      this.meshes = new raylib.Mesh(init.meshes || {}, this._address + 72)
      this.materials = new raylib.Material(init.materials || {}, this._address + 76)
      this.meshMaterial = init.meshMaterial || 0
      this.boneCount = init.boneCount || 0
      this.bones = new raylib.BoneInfo(init.bones || {}, this._address + 88)
      this.bindPose = new raylib.Transform(init.bindPose || {}, this._address + 92)
    }
    
  
      get meshCount () {
        return mod.getValue(this._address + 64, 'i32')
      }
      set meshCount (meshCount) {
        mod.setValue(this._address + 64, meshCount, 'i32')
      }

  
      get materialCount () {
        return mod.getValue(this._address + 68, 'i32')
      }
      set materialCount (materialCount) {
        mod.setValue(this._address + 68, materialCount, 'i32')
      }

  
  
  
      get meshMaterial () {
        return mod.getValue(this._address + 80, '*')
      }
      set meshMaterial (meshMaterial) {
        mod.setValue(this._address + 80, meshMaterial, '*')
      }

  
      get boneCount () {
        return mod.getValue(this._address + 84, 'i32')
      }
      set boneCount (boneCount) {
        mod.setValue(this._address + 84, boneCount, 'i32')
      }

  
  
  }

  // ModelAnimation
  raylib.ModelAnimation = class ModelAnimation {
    constructor(init = {}, _address) {
      this._size = 48
      this._address = _address || mod._malloc(this._size)

      this.boneCount = init.boneCount || 0
      this.frameCount = init.frameCount || 0
      this.bones = new raylib.BoneInfo(init.bones || {}, this._address + 8)
      this.framePoses = init.framePoses || new raylib.Transform()
      this.name = init.name || ''
    }
    
      get boneCount () {
        return mod.getValue(this._address + 0, 'i32')
      }
      set boneCount (boneCount) {
        mod.setValue(this._address + 0, boneCount, 'i32')
      }

  
      get frameCount () {
        return mod.getValue(this._address + 4, 'i32')
      }
      set frameCount (frameCount) {
        mod.setValue(this._address + 4, frameCount, 'i32')
      }

  
  
      get framePoses () {
        return mod.getValue(this._address + 12, '*')
      }
      set framePoses (framePoses) {
        mod.setValue(this._address + 12, framePoses, '*')
      }

  
      get name () {
        return mod.UTF8ToString(this._address + 16)
      }
      set name (name) {
        mod.stringToUTF8(this._address + 16, name)
      }

  }

  // Ray, ray for raycasting
  raylib.Ray = class Ray {
    constructor(init = {}, _address) {
      this._size = 24
      this._address = _address || mod._malloc(this._size)

      this.position = new raylib.Vector3(init.position || {}, this._address + 0)
      this.direction = new raylib.Vector3(init.direction || {}, this._address + 12)
    }
    
  
  }

  // RayCollision, ray hit information
  raylib.RayCollision = class RayCollision {
    constructor(init = {}, _address) {
      this._size = 29
      this._address = _address || mod._malloc(this._size)

      this.hit = init.hit || 0
      this.distance = init.distance || 0
      this.point = new raylib.Vector3(init.point || {}, this._address + 5)
      this.normal = new raylib.Vector3(init.normal || {}, this._address + 17)
    }
    
      get hit () {
        return mod.getValue(this._address + 0, 'i1')
      }
      set hit (hit) {
        mod.setValue(this._address + 0, hit, 'i1')
      }

  
      get distance () {
        return mod.getValue(this._address + 1, 'float')
      }
      set distance (distance) {
        mod.setValue(this._address + 1, distance, 'float')
      }

  
  
  }

  // BoundingBox
  raylib.BoundingBox = class BoundingBox {
    constructor(init = {}, _address) {
      this._size = 24
      this._address = _address || mod._malloc(this._size)

      this.min = new raylib.Vector3(init.min || {}, this._address + 0)
      this.max = new raylib.Vector3(init.max || {}, this._address + 12)
    }
    
  
  }

  // Wave, audio wave data
  raylib.Wave = class Wave {
    constructor(init = {}, _address) {
      this._size = 20
      this._address = _address || mod._malloc(this._size)

      this.frameCount = init.frameCount || 0
      this.sampleRate = init.sampleRate || 0
      this.sampleSize = init.sampleSize || 0
      this.channels = init.channels || 0
      this.data = init.data || 0
    }
    
      get frameCount () {
        return mod.HEAPU32[this._address + 0]
      }
      set frameCount (frameCount) {
        mod.HEAPU32[this._address + 0] = frameCount
      }

  
      get sampleRate () {
        return mod.HEAPU32[this._address + 4]
      }
      set sampleRate (sampleRate) {
        mod.HEAPU32[this._address + 4] = sampleRate
      }

  
      get sampleSize () {
        return mod.HEAPU32[this._address + 8]
      }
      set sampleSize (sampleSize) {
        mod.HEAPU32[this._address + 8] = sampleSize
      }

  
      get channels () {
        return mod.HEAPU32[this._address + 12]
      }
      set channels (channels) {
        mod.HEAPU32[this._address + 12] = channels
      }

  
      get data () {
        return mod.getValue(this._address + 16, '*')
      }
      set data (data) {
        mod.setValue(this._address + 16, data, '*')
      }

  }

  // AudioStream, custom audio stream
  raylib.AudioStream = class AudioStream {
    constructor(init = {}, _address) {
      this._size = 20
      this._address = _address || mod._malloc(this._size)

      this.buffer = init.buffer || 0
      this.processor = init.processor || 0
      this.sampleRate = init.sampleRate || 0
      this.sampleSize = init.sampleSize || 0
      this.channels = init.channels || 0
    }
    
      get buffer () {
        return mod.getValue(this._address + 0, '*')
      }
      set buffer (buffer) {
        mod.setValue(this._address + 0, buffer, '*')
      }

  
      get processor () {
        return mod.getValue(this._address + 4, '*')
      }
      set processor (processor) {
        mod.setValue(this._address + 4, processor, '*')
      }

  
      get sampleRate () {
        return mod.HEAPU32[this._address + 8]
      }
      set sampleRate (sampleRate) {
        mod.HEAPU32[this._address + 8] = sampleRate
      }

  
      get sampleSize () {
        return mod.HEAPU32[this._address + 12]
      }
      set sampleSize (sampleSize) {
        mod.HEAPU32[this._address + 12] = sampleSize
      }

  
      get channels () {
        return mod.HEAPU32[this._address + 16]
      }
      set channels (channels) {
        mod.HEAPU32[this._address + 16] = channels
      }

  }

  // Sound
  raylib.Sound = class Sound {
    constructor(init = {}, _address) {
      this._size = 24
      this._address = _address || mod._malloc(this._size)

      this.stream = new raylib.AudioStream(init.stream || {}, this._address + 0)
      this.frameCount = init.frameCount || 0
    }
    
  
      get frameCount () {
        return mod.HEAPU32[this._address + 20]
      }
      set frameCount (frameCount) {
        mod.HEAPU32[this._address + 20] = frameCount
      }

  }

  // Music, audio stream, anything longer than ~10 seconds should be streamed
  raylib.Music = class Music {
    constructor(init = {}, _address) {
      this._size = 33
      this._address = _address || mod._malloc(this._size)

      this.stream = new raylib.AudioStream(init.stream || {}, this._address + 0)
      this.frameCount = init.frameCount || 0
      this.looping = init.looping || 0
      this.ctxType = init.ctxType || 0
      this.ctxData = init.ctxData || 0
    }
    
  
      get frameCount () {
        return mod.HEAPU32[this._address + 20]
      }
      set frameCount (frameCount) {
        mod.HEAPU32[this._address + 20] = frameCount
      }

  
      get looping () {
        return mod.getValue(this._address + 24, 'i1')
      }
      set looping (looping) {
        mod.setValue(this._address + 24, looping, 'i1')
      }

  
      get ctxType () {
        return mod.getValue(this._address + 25, 'i32')
      }
      set ctxType (ctxType) {
        mod.setValue(this._address + 25, ctxType, 'i32')
      }

  
      get ctxData () {
        return mod.getValue(this._address + 29, '*')
      }
      set ctxData (ctxData) {
        mod.setValue(this._address + 29, ctxData, '*')
      }

  }

  // VrDeviceInfo, Head-Mounted-Display device parameters
  raylib.VrDeviceInfo = class VrDeviceInfo {
    constructor(init = {}, _address) {
      this._size = 64
      this._address = _address || mod._malloc(this._size)

      this.hResolution = init.hResolution || 0
      this.vResolution = init.vResolution || 0
      this.hScreenSize = init.hScreenSize || 0
      this.vScreenSize = init.vScreenSize || 0
      this.vScreenCenter = init.vScreenCenter || 0
      this.eyeToScreenDistance = init.eyeToScreenDistance || 0
      this.lensSeparationDistance = init.lensSeparationDistance || 0
      this.interpupillaryDistance = init.interpupillaryDistance || 0
      this.lensDistortionValues = init.lensDistortionValues || [0, 0, 0, 0]
      this.chromaAbCorrection = init.chromaAbCorrection || [0, 0, 0, 0]
    }
    
      get hResolution () {
        return mod.getValue(this._address + 0, 'i32')
      }
      set hResolution (hResolution) {
        mod.setValue(this._address + 0, hResolution, 'i32')
      }

  
      get vResolution () {
        return mod.getValue(this._address + 4, 'i32')
      }
      set vResolution (vResolution) {
        mod.setValue(this._address + 4, vResolution, 'i32')
      }

  
      get hScreenSize () {
        return mod.getValue(this._address + 8, 'float')
      }
      set hScreenSize (hScreenSize) {
        mod.setValue(this._address + 8, hScreenSize, 'float')
      }

  
      get vScreenSize () {
        return mod.getValue(this._address + 12, 'float')
      }
      set vScreenSize (vScreenSize) {
        mod.setValue(this._address + 12, vScreenSize, 'float')
      }

  
      get vScreenCenter () {
        return mod.getValue(this._address + 16, 'float')
      }
      set vScreenCenter (vScreenCenter) {
        mod.setValue(this._address + 16, vScreenCenter, 'float')
      }

  
      get eyeToScreenDistance () {
        return mod.getValue(this._address + 20, 'float')
      }
      set eyeToScreenDistance (eyeToScreenDistance) {
        mod.setValue(this._address + 20, eyeToScreenDistance, 'float')
      }

  
      get lensSeparationDistance () {
        return mod.getValue(this._address + 24, 'float')
      }
      set lensSeparationDistance (lensSeparationDistance) {
        mod.setValue(this._address + 24, lensSeparationDistance, 'float')
      }

  
      get interpupillaryDistance () {
        return mod.getValue(this._address + 28, 'float')
      }
      set interpupillaryDistance (interpupillaryDistance) {
        mod.setValue(this._address + 28, interpupillaryDistance, 'float')
      }

  
      get lensDistortionValues () {
        return mod.getValue(this._address + 32, '*')
      }
      set lensDistortionValues (lensDistortionValues) {
        mod.setValue(this._address + 32, lensDistortionValues, '*')
      }

  
      get chromaAbCorrection () {
        return mod.getValue(this._address + 48, '*')
      }
      set chromaAbCorrection (chromaAbCorrection) {
        mod.setValue(this._address + 48, chromaAbCorrection, '*')
      }

  }

  // VrStereoConfig, VR stereo rendering configuration for simulator
  raylib.VrStereoConfig = class VrStereoConfig {
    constructor(init = {}, _address) {
      this._size = 304
      this._address = _address || mod._malloc(this._size)

      this.projection = init.projection || [new raylib.Matrix(), new raylib.Matrix()]
      this.viewOffset = init.viewOffset || [new raylib.Matrix(), new raylib.Matrix()]
      this.leftLensCenter = init.leftLensCenter || [0, 0]
      this.rightLensCenter = init.rightLensCenter || [0, 0]
      this.leftScreenCenter = init.leftScreenCenter || [0, 0]
      this.rightScreenCenter = init.rightScreenCenter || [0, 0]
      this.scale = init.scale || [0, 0]
      this.scaleIn = init.scaleIn || [0, 0]
    }
    
      get projection () {
        return mod.getValue(this._address + 0, '*')
      }
      set projection (projection) {
        mod.setValue(this._address + 0, projection, '*')
      }

  
      get viewOffset () {
        return mod.getValue(this._address + 128, '*')
      }
      set viewOffset (viewOffset) {
        mod.setValue(this._address + 128, viewOffset, '*')
      }

  
      get leftLensCenter () {
        return mod.getValue(this._address + 256, '*')
      }
      set leftLensCenter (leftLensCenter) {
        mod.setValue(this._address + 256, leftLensCenter, '*')
      }

  
      get rightLensCenter () {
        return mod.getValue(this._address + 264, '*')
      }
      set rightLensCenter (rightLensCenter) {
        mod.setValue(this._address + 264, rightLensCenter, '*')
      }

  
      get leftScreenCenter () {
        return mod.getValue(this._address + 272, '*')
      }
      set leftScreenCenter (leftScreenCenter) {
        mod.setValue(this._address + 272, leftScreenCenter, '*')
      }

  
      get rightScreenCenter () {
        return mod.getValue(this._address + 280, '*')
      }
      set rightScreenCenter (rightScreenCenter) {
        mod.setValue(this._address + 280, rightScreenCenter, '*')
      }

  
      get scale () {
        return mod.getValue(this._address + 288, '*')
      }
      set scale (scale) {
        mod.setValue(this._address + 288, scale, '*')
      }

  
      get scaleIn () {
        return mod.getValue(this._address + 296, '*')
      }
      set scaleIn (scaleIn) {
        mod.setValue(this._address + 296, scaleIn, '*')
      }

  }

  // File path list
  raylib.FilePathList = class FilePathList {
    constructor(init = {}, _address) {
      this._size = 12
      this._address = _address || mod._malloc(this._size)

      this.capacity = init.capacity || 0
      this.count = init.count || 0
      this.paths = init.paths || 0
    }
    
      get capacity () {
        return mod.HEAPU32[this._address + 0]
      }
      set capacity (capacity) {
        mod.HEAPU32[this._address + 0] = capacity
      }

  
      get count () {
        return mod.HEAPU32[this._address + 4]
      }
      set count (count) {
        mod.HEAPU32[this._address + 4] = count
      }

  
      get paths () {
        return mod.getValue(this._address + 8, '*')
      }
      set paths (paths) {
        mod.setValue(this._address + 8, paths, '*')
      }

  }

  // Quaternion, 4 components (Vector4 alias)
  raylib.Quaternion = class Quaternion {
    constructor(init = {}, _address) {
      this._size = 16
      this._address = _address || mod._malloc(this._size)

      this.x = init.x || 0
      this.y = init.y || 0
      this.z = init.z || 0
      this.w = init.w || 0
    }
    
      get x () {
        return mod.getValue(this._address + 0, 'float')
      }
      set x (x) {
        mod.setValue(this._address + 0, x, 'float')
      }

  
      get y () {
        return mod.getValue(this._address + 4, 'float')
      }
      set y (y) {
        mod.setValue(this._address + 4, y, 'float')
      }

  
      get z () {
        return mod.getValue(this._address + 8, 'float')
      }
      set z (z) {
        mod.setValue(this._address + 8, z, 'float')
      }

  
      get w () {
        return mod.getValue(this._address + 12, 'float')
      }
      set w (w) {
        mod.setValue(this._address + 12, w, 'float')
      }

  }

  // Texture2D, same as Texture
  raylib.Texture2D = class Texture2D {
    constructor(init = {}, _address) {
      this._size = 20
      this._address = _address || mod._malloc(this._size)

      this.id = init.id || 0
      this.width = init.width || 0
      this.height = init.height || 0
      this.mipmaps = init.mipmaps || 0
      this.format = init.format || 0
    }
    
      get id () {
        return mod.HEAPU32[this._address + 0]
      }
      set id (id) {
        mod.HEAPU32[this._address + 0] = id
      }

  
      get width () {
        return mod.getValue(this._address + 4, 'i32')
      }
      set width (width) {
        mod.setValue(this._address + 4, width, 'i32')
      }

  
      get height () {
        return mod.getValue(this._address + 8, 'i32')
      }
      set height (height) {
        mod.setValue(this._address + 8, height, 'i32')
      }

  
      get mipmaps () {
        return mod.getValue(this._address + 12, 'i32')
      }
      set mipmaps (mipmaps) {
        mod.setValue(this._address + 12, mipmaps, 'i32')
      }

  
      get format () {
        return mod.getValue(this._address + 16, 'i32')
      }
      set format (format) {
        mod.setValue(this._address + 16, format, 'i32')
      }

  }

  // TextureCubemap, same as Texture
  raylib.TextureCubemap = class TextureCubemap {
    constructor(init = {}, _address) {
      this._size = 20
      this._address = _address || mod._malloc(this._size)

      this.id = init.id || 0
      this.width = init.width || 0
      this.height = init.height || 0
      this.mipmaps = init.mipmaps || 0
      this.format = init.format || 0
    }
    
      get id () {
        return mod.HEAPU32[this._address + 0]
      }
      set id (id) {
        mod.HEAPU32[this._address + 0] = id
      }

  
      get width () {
        return mod.getValue(this._address + 4, 'i32')
      }
      set width (width) {
        mod.setValue(this._address + 4, width, 'i32')
      }

  
      get height () {
        return mod.getValue(this._address + 8, 'i32')
      }
      set height (height) {
        mod.setValue(this._address + 8, height, 'i32')
      }

  
      get mipmaps () {
        return mod.getValue(this._address + 12, 'i32')
      }
      set mipmaps (mipmaps) {
        mod.setValue(this._address + 12, mipmaps, 'i32')
      }

  
      get format () {
        return mod.getValue(this._address + 16, 'i32')
      }
      set format (format) {
        mod.setValue(this._address + 16, format, 'i32')
      }

  }

  // RenderTexture2D, same as RenderTexture
  raylib.RenderTexture2D = class RenderTexture2D {
    constructor(init = {}, _address) {
      this._size = 44
      this._address = _address || mod._malloc(this._size)

      this.id = init.id || 0
      this.texture = new raylib.Texture(init.texture || {}, this._address + 4)
      this.depth = new raylib.Texture(init.depth || {}, this._address + 24)
    }
    
      get id () {
        return mod.HEAPU32[this._address + 0]
      }
      set id (id) {
        mod.HEAPU32[this._address + 0] = id
      }

  
  
  }

  // Camera type fallback, defaults to Camera3D
  raylib.Camera = class Camera {
    constructor(init = {}, _address) {
      this._size = 44
      this._address = _address || mod._malloc(this._size)

      this.position = new raylib.Vector3(init.position || {}, this._address + 0)
      this.target = new raylib.Vector3(init.target || {}, this._address + 12)
      this.up = new raylib.Vector3(init.up || {}, this._address + 24)
      this.fovy = init.fovy || 0
      this.projection = init.projection || 0
    }
    
  
  
  
      get fovy () {
        return mod.getValue(this._address + 36, 'float')
      }
      set fovy (fovy) {
        mod.setValue(this._address + 36, fovy, 'float')
      }

  
      get projection () {
        return mod.getValue(this._address + 40, 'i32')
      }
      set projection (projection) {
        mod.setValue(this._address + 40, projection, 'i32')
      }

  }

  // ENUM ConfigFlags
  // System/Window config flags
  raylib.FLAG_VSYNC_HINT = 64 // Set to try enabling V-Sync on GPU
  raylib.FLAG_FULLSCREEN_MODE = 2 // Set to run program in fullscreen
  raylib.FLAG_WINDOW_RESIZABLE = 4 // Set to allow resizable window
  raylib.FLAG_WINDOW_UNDECORATED = 8 // Set to disable window decoration (frame and buttons)
  raylib.FLAG_WINDOW_HIDDEN = 128 // Set to hide window
  raylib.FLAG_WINDOW_MINIMIZED = 512 // Set to minimize window (iconify)
  raylib.FLAG_WINDOW_MAXIMIZED = 1024 // Set to maximize window (expanded to monitor)
  raylib.FLAG_WINDOW_UNFOCUSED = 2048 // Set to window non focused
  raylib.FLAG_WINDOW_TOPMOST = 4096 // Set to window always on top
  raylib.FLAG_WINDOW_ALWAYS_RUN = 256 // Set to allow windows running while minimized
  raylib.FLAG_WINDOW_TRANSPARENT = 16 // Set to allow transparent framebuffer
  raylib.FLAG_WINDOW_HIGHDPI = 8192 // Set to support HighDPI
  raylib.FLAG_WINDOW_MOUSE_PASSTHROUGH = 16384 // Set to support mouse passthrough, only supported when FLAG_WINDOW_UNDECORATED
  raylib.FLAG_MSAA_4X_HINT = 32 // Set to try enabling MSAA 4X
  raylib.FLAG_INTERLACED_HINT = 65536 // Set to try enabling interlaced video format (for V3D)

  // ENUM TraceLogLevel
  // Trace log level
  raylib.LOG_ALL = 0 // Display all logs
  raylib.LOG_TRACE = 1 // Trace logging, intended for internal use only
  raylib.LOG_DEBUG = 2 // Debug logging, used for internal debugging, it should be disabled on release builds
  raylib.LOG_INFO = 3 // Info logging, used for program execution info
  raylib.LOG_WARNING = 4 // Warning logging, used on recoverable failures
  raylib.LOG_ERROR = 5 // Error logging, used on unrecoverable failures
  raylib.LOG_FATAL = 6 // Fatal logging, used to abort program: exit(EXIT_FAILURE)
  raylib.LOG_NONE = 7 // Disable logging

  // ENUM KeyboardKey
  // Keyboard keys (US keyboard layout)
  raylib.KEY_NULL = 0 // Key: NULL, used for no key pressed
  raylib.KEY_APOSTROPHE = 39 // Key: '
  raylib.KEY_COMMA = 44 // Key: ,
  raylib.KEY_MINUS = 45 // Key: -
  raylib.KEY_PERIOD = 46 // Key: .
  raylib.KEY_SLASH = 47 // Key: /
  raylib.KEY_ZERO = 48 // Key: 0
  raylib.KEY_ONE = 49 // Key: 1
  raylib.KEY_TWO = 50 // Key: 2
  raylib.KEY_THREE = 51 // Key: 3
  raylib.KEY_FOUR = 52 // Key: 4
  raylib.KEY_FIVE = 53 // Key: 5
  raylib.KEY_SIX = 54 // Key: 6
  raylib.KEY_SEVEN = 55 // Key: 7
  raylib.KEY_EIGHT = 56 // Key: 8
  raylib.KEY_NINE = 57 // Key: 9
  raylib.KEY_SEMICOLON = 59 // Key: ;
  raylib.KEY_EQUAL = 61 // Key: =
  raylib.KEY_A = 65 // Key: A | a
  raylib.KEY_B = 66 // Key: B | b
  raylib.KEY_C = 67 // Key: C | c
  raylib.KEY_D = 68 // Key: D | d
  raylib.KEY_E = 69 // Key: E | e
  raylib.KEY_F = 70 // Key: F | f
  raylib.KEY_G = 71 // Key: G | g
  raylib.KEY_H = 72 // Key: H | h
  raylib.KEY_I = 73 // Key: I | i
  raylib.KEY_J = 74 // Key: J | j
  raylib.KEY_K = 75 // Key: K | k
  raylib.KEY_L = 76 // Key: L | l
  raylib.KEY_M = 77 // Key: M | m
  raylib.KEY_N = 78 // Key: N | n
  raylib.KEY_O = 79 // Key: O | o
  raylib.KEY_P = 80 // Key: P | p
  raylib.KEY_Q = 81 // Key: Q | q
  raylib.KEY_R = 82 // Key: R | r
  raylib.KEY_S = 83 // Key: S | s
  raylib.KEY_T = 84 // Key: T | t
  raylib.KEY_U = 85 // Key: U | u
  raylib.KEY_V = 86 // Key: V | v
  raylib.KEY_W = 87 // Key: W | w
  raylib.KEY_X = 88 // Key: X | x
  raylib.KEY_Y = 89 // Key: Y | y
  raylib.KEY_Z = 90 // Key: Z | z
  raylib.KEY_LEFT_BRACKET = 91 // Key: [
  raylib.KEY_BACKSLASH = 92 // Key: '\'
  raylib.KEY_RIGHT_BRACKET = 93 // Key: ]
  raylib.KEY_GRAVE = 96 // Key: `
  raylib.KEY_SPACE = 32 // Key: Space
  raylib.KEY_ESCAPE = 256 // Key: Esc
  raylib.KEY_ENTER = 257 // Key: Enter
  raylib.KEY_TAB = 258 // Key: Tab
  raylib.KEY_BACKSPACE = 259 // Key: Backspace
  raylib.KEY_INSERT = 260 // Key: Ins
  raylib.KEY_DELETE = 261 // Key: Del
  raylib.KEY_RIGHT = 262 // Key: Cursor right
  raylib.KEY_LEFT = 263 // Key: Cursor left
  raylib.KEY_DOWN = 264 // Key: Cursor down
  raylib.KEY_UP = 265 // Key: Cursor up
  raylib.KEY_PAGE_UP = 266 // Key: Page up
  raylib.KEY_PAGE_DOWN = 267 // Key: Page down
  raylib.KEY_HOME = 268 // Key: Home
  raylib.KEY_END = 269 // Key: End
  raylib.KEY_CAPS_LOCK = 280 // Key: Caps lock
  raylib.KEY_SCROLL_LOCK = 281 // Key: Scroll down
  raylib.KEY_NUM_LOCK = 282 // Key: Num lock
  raylib.KEY_PRINT_SCREEN = 283 // Key: Print screen
  raylib.KEY_PAUSE = 284 // Key: Pause
  raylib.KEY_F1 = 290 // Key: F1
  raylib.KEY_F2 = 291 // Key: F2
  raylib.KEY_F3 = 292 // Key: F3
  raylib.KEY_F4 = 293 // Key: F4
  raylib.KEY_F5 = 294 // Key: F5
  raylib.KEY_F6 = 295 // Key: F6
  raylib.KEY_F7 = 296 // Key: F7
  raylib.KEY_F8 = 297 // Key: F8
  raylib.KEY_F9 = 298 // Key: F9
  raylib.KEY_F10 = 299 // Key: F10
  raylib.KEY_F11 = 300 // Key: F11
  raylib.KEY_F12 = 301 // Key: F12
  raylib.KEY_LEFT_SHIFT = 340 // Key: Shift left
  raylib.KEY_LEFT_CONTROL = 341 // Key: Control left
  raylib.KEY_LEFT_ALT = 342 // Key: Alt left
  raylib.KEY_LEFT_SUPER = 343 // Key: Super left
  raylib.KEY_RIGHT_SHIFT = 344 // Key: Shift right
  raylib.KEY_RIGHT_CONTROL = 345 // Key: Control right
  raylib.KEY_RIGHT_ALT = 346 // Key: Alt right
  raylib.KEY_RIGHT_SUPER = 347 // Key: Super right
  raylib.KEY_KB_MENU = 348 // Key: KB menu
  raylib.KEY_KP_0 = 320 // Key: Keypad 0
  raylib.KEY_KP_1 = 321 // Key: Keypad 1
  raylib.KEY_KP_2 = 322 // Key: Keypad 2
  raylib.KEY_KP_3 = 323 // Key: Keypad 3
  raylib.KEY_KP_4 = 324 // Key: Keypad 4
  raylib.KEY_KP_5 = 325 // Key: Keypad 5
  raylib.KEY_KP_6 = 326 // Key: Keypad 6
  raylib.KEY_KP_7 = 327 // Key: Keypad 7
  raylib.KEY_KP_8 = 328 // Key: Keypad 8
  raylib.KEY_KP_9 = 329 // Key: Keypad 9
  raylib.KEY_KP_DECIMAL = 330 // Key: Keypad .
  raylib.KEY_KP_DIVIDE = 331 // Key: Keypad /
  raylib.KEY_KP_MULTIPLY = 332 // Key: Keypad *
  raylib.KEY_KP_SUBTRACT = 333 // Key: Keypad -
  raylib.KEY_KP_ADD = 334 // Key: Keypad +
  raylib.KEY_KP_ENTER = 335 // Key: Keypad Enter
  raylib.KEY_KP_EQUAL = 336 // Key: Keypad =
  raylib.KEY_BACK = 4 // Key: Android back button
  raylib.KEY_MENU = 82 // Key: Android menu button
  raylib.KEY_VOLUME_UP = 24 // Key: Android volume up button
  raylib.KEY_VOLUME_DOWN = 25 // Key: Android volume down button

  // ENUM MouseButton
  // Mouse buttons
  raylib.MOUSE_BUTTON_LEFT = 0 // Mouse button left
  raylib.MOUSE_BUTTON_RIGHT = 1 // Mouse button right
  raylib.MOUSE_BUTTON_MIDDLE = 2 // Mouse button middle (pressed wheel)
  raylib.MOUSE_BUTTON_SIDE = 3 // Mouse button side (advanced mouse device)
  raylib.MOUSE_BUTTON_EXTRA = 4 // Mouse button extra (advanced mouse device)
  raylib.MOUSE_BUTTON_FORWARD = 5 // Mouse button forward (advanced mouse device)
  raylib.MOUSE_BUTTON_BACK = 6 // Mouse button back (advanced mouse device)

  // ENUM MouseCursor
  // Mouse cursor
  raylib.MOUSE_CURSOR_DEFAULT = 0 // Default pointer shape
  raylib.MOUSE_CURSOR_ARROW = 1 // Arrow shape
  raylib.MOUSE_CURSOR_IBEAM = 2 // Text writing cursor shape
  raylib.MOUSE_CURSOR_CROSSHAIR = 3 // Cross shape
  raylib.MOUSE_CURSOR_POINTING_HAND = 4 // Pointing hand cursor
  raylib.MOUSE_CURSOR_RESIZE_EW = 5 // Horizontal resize/move arrow shape
  raylib.MOUSE_CURSOR_RESIZE_NS = 6 // Vertical resize/move arrow shape
  raylib.MOUSE_CURSOR_RESIZE_NWSE = 7 // Top-left to bottom-right diagonal resize/move arrow shape
  raylib.MOUSE_CURSOR_RESIZE_NESW = 8 // The top-right to bottom-left diagonal resize/move arrow shape
  raylib.MOUSE_CURSOR_RESIZE_ALL = 9 // The omnidirectional resize/move cursor shape
  raylib.MOUSE_CURSOR_NOT_ALLOWED = 10 // The operation-not-allowed shape

  // ENUM GamepadButton
  // Gamepad buttons
  raylib.GAMEPAD_BUTTON_UNKNOWN = 0 // Unknown button, just for error checking
  raylib.GAMEPAD_BUTTON_LEFT_FACE_UP = 1 // Gamepad left DPAD up button
  raylib.GAMEPAD_BUTTON_LEFT_FACE_RIGHT = 2 // Gamepad left DPAD right button
  raylib.GAMEPAD_BUTTON_LEFT_FACE_DOWN = 3 // Gamepad left DPAD down button
  raylib.GAMEPAD_BUTTON_LEFT_FACE_LEFT = 4 // Gamepad left DPAD left button
  raylib.GAMEPAD_BUTTON_RIGHT_FACE_UP = 5 // Gamepad right button up (i.e. PS3: Triangle, Xbox: Y)
  raylib.GAMEPAD_BUTTON_RIGHT_FACE_RIGHT = 6 // Gamepad right button right (i.e. PS3: Square, Xbox: X)
  raylib.GAMEPAD_BUTTON_RIGHT_FACE_DOWN = 7 // Gamepad right button down (i.e. PS3: Cross, Xbox: A)
  raylib.GAMEPAD_BUTTON_RIGHT_FACE_LEFT = 8 // Gamepad right button left (i.e. PS3: Circle, Xbox: B)
  raylib.GAMEPAD_BUTTON_LEFT_TRIGGER_1 = 9 // Gamepad top/back trigger left (first), it could be a trailing button
  raylib.GAMEPAD_BUTTON_LEFT_TRIGGER_2 = 10 // Gamepad top/back trigger left (second), it could be a trailing button
  raylib.GAMEPAD_BUTTON_RIGHT_TRIGGER_1 = 11 // Gamepad top/back trigger right (one), it could be a trailing button
  raylib.GAMEPAD_BUTTON_RIGHT_TRIGGER_2 = 12 // Gamepad top/back trigger right (second), it could be a trailing button
  raylib.GAMEPAD_BUTTON_MIDDLE_LEFT = 13 // Gamepad center buttons, left one (i.e. PS3: Select)
  raylib.GAMEPAD_BUTTON_MIDDLE = 14 // Gamepad center buttons, middle one (i.e. PS3: PS, Xbox: XBOX)
  raylib.GAMEPAD_BUTTON_MIDDLE_RIGHT = 15 // Gamepad center buttons, right one (i.e. PS3: Start)
  raylib.GAMEPAD_BUTTON_LEFT_THUMB = 16 // Gamepad joystick pressed button left
  raylib.GAMEPAD_BUTTON_RIGHT_THUMB = 17 // Gamepad joystick pressed button right

  // ENUM GamepadAxis
  // Gamepad axis
  raylib.GAMEPAD_AXIS_LEFT_X = 0 // Gamepad left stick X axis
  raylib.GAMEPAD_AXIS_LEFT_Y = 1 // Gamepad left stick Y axis
  raylib.GAMEPAD_AXIS_RIGHT_X = 2 // Gamepad right stick X axis
  raylib.GAMEPAD_AXIS_RIGHT_Y = 3 // Gamepad right stick Y axis
  raylib.GAMEPAD_AXIS_LEFT_TRIGGER = 4 // Gamepad back trigger left, pressure level: [1..-1]
  raylib.GAMEPAD_AXIS_RIGHT_TRIGGER = 5 // Gamepad back trigger right, pressure level: [1..-1]

  // ENUM MaterialMapIndex
  // Material map index
  raylib.MATERIAL_MAP_ALBEDO = 0 // Albedo material (same as: MATERIAL_MAP_DIFFUSE)
  raylib.MATERIAL_MAP_METALNESS = 1 // Metalness material (same as: MATERIAL_MAP_SPECULAR)
  raylib.MATERIAL_MAP_NORMAL = 2 // Normal material
  raylib.MATERIAL_MAP_ROUGHNESS = 3 // Roughness material
  raylib.MATERIAL_MAP_OCCLUSION = 4 // Ambient occlusion material
  raylib.MATERIAL_MAP_EMISSION = 5 // Emission material
  raylib.MATERIAL_MAP_HEIGHT = 6 // Heightmap material
  raylib.MATERIAL_MAP_CUBEMAP = 7 // Cubemap material (NOTE: Uses GL_TEXTURE_CUBE_MAP)
  raylib.MATERIAL_MAP_IRRADIANCE = 8 // Irradiance material (NOTE: Uses GL_TEXTURE_CUBE_MAP)
  raylib.MATERIAL_MAP_PREFILTER = 9 // Prefilter material (NOTE: Uses GL_TEXTURE_CUBE_MAP)
  raylib.MATERIAL_MAP_BRDF = 10 // Brdf material

  // ENUM ShaderLocationIndex
  // Shader location index
  raylib.SHADER_LOC_VERTEX_POSITION = 0 // Shader location: vertex attribute: position
  raylib.SHADER_LOC_VERTEX_TEXCOORD01 = 1 // Shader location: vertex attribute: texcoord01
  raylib.SHADER_LOC_VERTEX_TEXCOORD02 = 2 // Shader location: vertex attribute: texcoord02
  raylib.SHADER_LOC_VERTEX_NORMAL = 3 // Shader location: vertex attribute: normal
  raylib.SHADER_LOC_VERTEX_TANGENT = 4 // Shader location: vertex attribute: tangent
  raylib.SHADER_LOC_VERTEX_COLOR = 5 // Shader location: vertex attribute: color
  raylib.SHADER_LOC_MATRIX_MVP = 6 // Shader location: matrix uniform: model-view-projection
  raylib.SHADER_LOC_MATRIX_VIEW = 7 // Shader location: matrix uniform: view (camera transform)
  raylib.SHADER_LOC_MATRIX_PROJECTION = 8 // Shader location: matrix uniform: projection
  raylib.SHADER_LOC_MATRIX_MODEL = 9 // Shader location: matrix uniform: model (transform)
  raylib.SHADER_LOC_MATRIX_NORMAL = 10 // Shader location: matrix uniform: normal
  raylib.SHADER_LOC_VECTOR_VIEW = 11 // Shader location: vector uniform: view
  raylib.SHADER_LOC_COLOR_DIFFUSE = 12 // Shader location: vector uniform: diffuse color
  raylib.SHADER_LOC_COLOR_SPECULAR = 13 // Shader location: vector uniform: specular color
  raylib.SHADER_LOC_COLOR_AMBIENT = 14 // Shader location: vector uniform: ambient color
  raylib.SHADER_LOC_MAP_ALBEDO = 15 // Shader location: sampler2d texture: albedo (same as: SHADER_LOC_MAP_DIFFUSE)
  raylib.SHADER_LOC_MAP_METALNESS = 16 // Shader location: sampler2d texture: metalness (same as: SHADER_LOC_MAP_SPECULAR)
  raylib.SHADER_LOC_MAP_NORMAL = 17 // Shader location: sampler2d texture: normal
  raylib.SHADER_LOC_MAP_ROUGHNESS = 18 // Shader location: sampler2d texture: roughness
  raylib.SHADER_LOC_MAP_OCCLUSION = 19 // Shader location: sampler2d texture: occlusion
  raylib.SHADER_LOC_MAP_EMISSION = 20 // Shader location: sampler2d texture: emission
  raylib.SHADER_LOC_MAP_HEIGHT = 21 // Shader location: sampler2d texture: height
  raylib.SHADER_LOC_MAP_CUBEMAP = 22 // Shader location: samplerCube texture: cubemap
  raylib.SHADER_LOC_MAP_IRRADIANCE = 23 // Shader location: samplerCube texture: irradiance
  raylib.SHADER_LOC_MAP_PREFILTER = 24 // Shader location: samplerCube texture: prefilter
  raylib.SHADER_LOC_MAP_BRDF = 25 // Shader location: sampler2d texture: brdf

  // ENUM ShaderUniformDataType
  // Shader uniform data type
  raylib.SHADER_UNIFORM_FLOAT = 0 // Shader uniform type: float
  raylib.SHADER_UNIFORM_VEC2 = 1 // Shader uniform type: vec2 (2 float)
  raylib.SHADER_UNIFORM_VEC3 = 2 // Shader uniform type: vec3 (3 float)
  raylib.SHADER_UNIFORM_VEC4 = 3 // Shader uniform type: vec4 (4 float)
  raylib.SHADER_UNIFORM_INT = 4 // Shader uniform type: int
  raylib.SHADER_UNIFORM_IVEC2 = 5 // Shader uniform type: ivec2 (2 int)
  raylib.SHADER_UNIFORM_IVEC3 = 6 // Shader uniform type: ivec3 (3 int)
  raylib.SHADER_UNIFORM_IVEC4 = 7 // Shader uniform type: ivec4 (4 int)
  raylib.SHADER_UNIFORM_SAMPLER2D = 8 // Shader uniform type: sampler2d

  // ENUM ShaderAttributeDataType
  // Shader attribute data types
  raylib.SHADER_ATTRIB_FLOAT = 0 // Shader attribute type: float
  raylib.SHADER_ATTRIB_VEC2 = 1 // Shader attribute type: vec2 (2 float)
  raylib.SHADER_ATTRIB_VEC3 = 2 // Shader attribute type: vec3 (3 float)
  raylib.SHADER_ATTRIB_VEC4 = 3 // Shader attribute type: vec4 (4 float)

  // ENUM PixelFormat
  // Pixel formats
  raylib.PIXELFORMAT_UNCOMPRESSED_GRAYSCALE = 1 // 8 bit per pixel (no alpha)
  raylib.PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA = 2 // 8*2 bpp (2 channels)
  raylib.PIXELFORMAT_UNCOMPRESSED_R5G6B5 = 3 // 16 bpp
  raylib.PIXELFORMAT_UNCOMPRESSED_R8G8B8 = 4 // 24 bpp
  raylib.PIXELFORMAT_UNCOMPRESSED_R5G5B5A1 = 5 // 16 bpp (1 bit alpha)
  raylib.PIXELFORMAT_UNCOMPRESSED_R4G4B4A4 = 6 // 16 bpp (4 bit alpha)
  raylib.PIXELFORMAT_UNCOMPRESSED_R8G8B8A8 = 7 // 32 bpp
  raylib.PIXELFORMAT_UNCOMPRESSED_R32 = 8 // 32 bpp (1 channel - float)
  raylib.PIXELFORMAT_UNCOMPRESSED_R32G32B32 = 9 // 32*3 bpp (3 channels - float)
  raylib.PIXELFORMAT_UNCOMPRESSED_R32G32B32A32 = 10 // 32*4 bpp (4 channels - float)
  raylib.PIXELFORMAT_COMPRESSED_DXT1_RGB = 11 // 4 bpp (no alpha)
  raylib.PIXELFORMAT_COMPRESSED_DXT1_RGBA = 12 // 4 bpp (1 bit alpha)
  raylib.PIXELFORMAT_COMPRESSED_DXT3_RGBA = 13 // 8 bpp
  raylib.PIXELFORMAT_COMPRESSED_DXT5_RGBA = 14 // 8 bpp
  raylib.PIXELFORMAT_COMPRESSED_ETC1_RGB = 15 // 4 bpp
  raylib.PIXELFORMAT_COMPRESSED_ETC2_RGB = 16 // 4 bpp
  raylib.PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA = 17 // 8 bpp
  raylib.PIXELFORMAT_COMPRESSED_PVRT_RGB = 18 // 4 bpp
  raylib.PIXELFORMAT_COMPRESSED_PVRT_RGBA = 19 // 4 bpp
  raylib.PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA = 20 // 8 bpp
  raylib.PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA = 21 // 2 bpp

  // ENUM TextureFilter
  // Texture parameters: filter mode
  raylib.TEXTURE_FILTER_POINT = 0 // No filter, just pixel approximation
  raylib.TEXTURE_FILTER_BILINEAR = 1 // Linear filtering
  raylib.TEXTURE_FILTER_TRILINEAR = 2 // Trilinear filtering (linear with mipmaps)
  raylib.TEXTURE_FILTER_ANISOTROPIC_4X = 3 // Anisotropic filtering 4x
  raylib.TEXTURE_FILTER_ANISOTROPIC_8X = 4 // Anisotropic filtering 8x
  raylib.TEXTURE_FILTER_ANISOTROPIC_16X = 5 // Anisotropic filtering 16x

  // ENUM TextureWrap
  // Texture parameters: wrap mode
  raylib.TEXTURE_WRAP_REPEAT = 0 // Repeats texture in tiled mode
  raylib.TEXTURE_WRAP_CLAMP = 1 // Clamps texture to edge pixel in tiled mode
  raylib.TEXTURE_WRAP_MIRROR_REPEAT = 2 // Mirrors and repeats the texture in tiled mode
  raylib.TEXTURE_WRAP_MIRROR_CLAMP = 3 // Mirrors and clamps to border the texture in tiled mode

  // ENUM CubemapLayout
  // Cubemap layouts
  raylib.CUBEMAP_LAYOUT_AUTO_DETECT = 0 // Automatically detect layout type
  raylib.CUBEMAP_LAYOUT_LINE_VERTICAL = 1 // Layout is defined by a vertical line with faces
  raylib.CUBEMAP_LAYOUT_LINE_HORIZONTAL = 2 // Layout is defined by a horizontal line with faces
  raylib.CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR = 3 // Layout is defined by a 3x4 cross with cubemap faces
  raylib.CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE = 4 // Layout is defined by a 4x3 cross with cubemap faces
  raylib.CUBEMAP_LAYOUT_PANORAMA = 5 // Layout is defined by a panorama image (equirrectangular map)

  // ENUM FontType
  // Font type, defines generation method
  raylib.FONT_DEFAULT = 0 // Default font generation, anti-aliased
  raylib.FONT_BITMAP = 1 // Bitmap font generation, no anti-aliasing
  raylib.FONT_SDF = 2 // SDF font generation, requires external shader

  // ENUM BlendMode
  // Color blending modes (pre-defined)
  raylib.BLEND_ALPHA = 0 // Blend textures considering alpha (default)
  raylib.BLEND_ADDITIVE = 1 // Blend textures adding colors
  raylib.BLEND_MULTIPLIED = 2 // Blend textures multiplying colors
  raylib.BLEND_ADD_COLORS = 3 // Blend textures adding colors (alternative)
  raylib.BLEND_SUBTRACT_COLORS = 4 // Blend textures subtracting colors (alternative)
  raylib.BLEND_ALPHA_PREMULTIPLY = 5 // Blend premultiplied textures considering alpha
  raylib.BLEND_CUSTOM = 6 // Blend textures using custom src/dst factors (use rlSetBlendFactors())
  raylib.BLEND_CUSTOM_SEPARATE = 7 // Blend textures using custom rgb/alpha separate src/dst factors (use rlSetBlendFactorsSeparate())

  // ENUM Gesture
  // Gesture
  raylib.GESTURE_NONE = 0 // No gesture
  raylib.GESTURE_TAP = 1 // Tap gesture
  raylib.GESTURE_DOUBLETAP = 2 // Double tap gesture
  raylib.GESTURE_HOLD = 4 // Hold gesture
  raylib.GESTURE_DRAG = 8 // Drag gesture
  raylib.GESTURE_SWIPE_RIGHT = 16 // Swipe right gesture
  raylib.GESTURE_SWIPE_LEFT = 32 // Swipe left gesture
  raylib.GESTURE_SWIPE_UP = 64 // Swipe up gesture
  raylib.GESTURE_SWIPE_DOWN = 128 // Swipe down gesture
  raylib.GESTURE_PINCH_IN = 256 // Pinch in gesture
  raylib.GESTURE_PINCH_OUT = 512 // Pinch out gesture

  // ENUM CameraMode
  // Camera system modes
  raylib.CAMERA_CUSTOM = 0 // Custom camera
  raylib.CAMERA_FREE = 1 // Free camera
  raylib.CAMERA_ORBITAL = 2 // Orbital camera
  raylib.CAMERA_FIRST_PERSON = 3 // First person camera
  raylib.CAMERA_THIRD_PERSON = 4 // Third person camera

  // ENUM CameraProjection
  // Camera projection
  raylib.CAMERA_PERSPECTIVE = 0 // Perspective projection
  raylib.CAMERA_ORTHOGRAPHIC = 1 // Orthographic projection

  // ENUM NPatchLayout
  // N-patch layout
  raylib.NPATCH_NINE_PATCH = 0 // Npatch layout: 3x3 tiles
  raylib.NPATCH_THREE_PATCH_VERTICAL = 1 // Npatch layout: 1x3 tiles
  raylib.NPATCH_THREE_PATCH_HORIZONTAL = 2 // Npatch layout: 3x1 tiles


  raylib.LIGHTGRAY = new raylib.Color({r: 200, g: 200, b: 200, a: 255}) // Light Gray
  raylib.GRAY = new raylib.Color({r: 130, g: 130, b: 130, a: 255}) // Gray
  raylib.DARKGRAY = new raylib.Color({r: 80, g: 80, b: 80, a: 255}) // Dark Gray
  raylib.YELLOW = new raylib.Color({r: 253, g: 249, b: 0, a: 255}) // Yellow
  raylib.GOLD = new raylib.Color({r: 255, g: 203, b: 0, a: 255}) // Gold
  raylib.ORANGE = new raylib.Color({r: 255, g: 161, b: 0, a: 255}) // Orange
  raylib.PINK = new raylib.Color({r: 255, g: 109, b: 194, a: 255}) // Pink
  raylib.RED = new raylib.Color({r: 230, g: 41, b: 55, a: 255}) // Red
  raylib.MAROON = new raylib.Color({r: 190, g: 33, b: 55, a: 255}) // Maroon
  raylib.GREEN = new raylib.Color({r: 0, g: 228, b: 48, a: 255}) // Green
  raylib.LIME = new raylib.Color({r: 0, g: 158, b: 47, a: 255}) // Lime
  raylib.DARKGREEN = new raylib.Color({r: 0, g: 117, b: 44, a: 255}) // Dark Green
  raylib.SKYBLUE = new raylib.Color({r: 102, g: 191, b: 255, a: 255}) // Sky Blue
  raylib.BLUE = new raylib.Color({r: 0, g: 121, b: 241, a: 255}) // Blue
  raylib.DARKBLUE = new raylib.Color({r: 0, g: 82, b: 172, a: 255}) // Dark Blue
  raylib.PURPLE = new raylib.Color({r: 200, g: 122, b: 255, a: 255}) // Purple
  raylib.VIOLET = new raylib.Color({r: 135, g: 60, b: 190, a: 255}) // Violet
  raylib.DARKPURPLE = new raylib.Color({r: 112, g: 31, b: 126, a: 255}) // Dark Purple
  raylib.BEIGE = new raylib.Color({r: 211, g: 176, b: 131, a: 255}) // Beige
  raylib.BROWN = new raylib.Color({r: 127, g: 106, b: 79, a: 255}) // Brown
  raylib.DARKBROWN = new raylib.Color({r: 76, g: 63, b: 47, a: 255}) // Dark Brown
  raylib.WHITE = new raylib.Color({r: 255, g: 255, b: 255, a: 255}) // White
  raylib.BLACK = new raylib.Color({r: 0, g: 0, b: 0, a: 255}) // Black
  raylib.BLANK = new raylib.Color({r: 0, g: 0, b: 0, a: 0}) // Blank (Transparent)
  raylib.MAGENTA = new raylib.Color({r: 255, g: 0, b: 255, a: 255}) // Magenta
  raylib.RAYWHITE = new raylib.Color({r: 245, g: 245, b: 245, a: 255}) // My own White (raylib logo)

  // Initialize window and OpenGL context: InitWindow(int, int, const char *) => void
  const _InitWindow = mod.cwrap('InitWindow', 'void', ['number', 'number', 'string'])
  raylib.InitWindow = (width, height, title) => _InitWindow(width, height, title)

  // Check if KEY_ESCAPE pressed or Close icon pressed: WindowShouldClose() => bool
  const _WindowShouldClose = mod.cwrap('WindowShouldClose', 'void', [])
  raylib.WindowShouldClose = () => _WindowShouldClose()

  // Close window and unload OpenGL context: CloseWindow() => void
  const _CloseWindow = mod.cwrap('CloseWindow', 'void', [])
  raylib.CloseWindow = () => _CloseWindow()

  // Check if window has been initialized successfully: IsWindowReady() => bool
  const _IsWindowReady = mod.cwrap('IsWindowReady', 'void', [])
  raylib.IsWindowReady = () => _IsWindowReady()

  // Check if window is currently fullscreen: IsWindowFullscreen() => bool
  const _IsWindowFullscreen = mod.cwrap('IsWindowFullscreen', 'void', [])
  raylib.IsWindowFullscreen = () => _IsWindowFullscreen()

  // Check if window has been resized last frame: IsWindowResized() => bool
  const _IsWindowResized = mod.cwrap('IsWindowResized', 'void', [])
  raylib.IsWindowResized = () => _IsWindowResized()

  // Check if one specific window flag is enabled: IsWindowState(unsigned int) => bool
  const _IsWindowState = mod.cwrap('IsWindowState', 'void', ['number'])
  raylib.IsWindowState = (flag) => _IsWindowState(flag)

  // Clear window configuration state flags: ClearWindowState(unsigned int) => void
  const _ClearWindowState = mod.cwrap('ClearWindowState', 'void', ['number'])
  raylib.ClearWindowState = (flags) => _ClearWindowState(flags)

  // Set monitor for the current window (fullscreen mode): SetWindowMonitor(int) => void
  const _SetWindowMonitor = mod.cwrap('SetWindowMonitor', 'void', ['number'])
  raylib.SetWindowMonitor = (monitor) => _SetWindowMonitor(monitor)

  // Set window minimum dimensions (for FLAG_WINDOW_RESIZABLE): SetWindowMinSize(int, int) => void
  const _SetWindowMinSize = mod.cwrap('SetWindowMinSize', 'void', ['number', 'number'])
  raylib.SetWindowMinSize = (width, height) => _SetWindowMinSize(width, height)

  // Set window dimensions: SetWindowSize(int, int) => void
  const _SetWindowSize = mod.cwrap('SetWindowSize', 'void', ['number', 'number'])
  raylib.SetWindowSize = (width, height) => _SetWindowSize(width, height)

  // Get native window handle: GetWindowHandle() => void *
  const _GetWindowHandle = mod.cwrap('GetWindowHandle', 'void', [])
  raylib.GetWindowHandle = () => _GetWindowHandle()

  // Get current screen width: GetScreenWidth() => int
  const _GetScreenWidth = mod.cwrap('GetScreenWidth', 'void', [])
  raylib.GetScreenWidth = () => _GetScreenWidth()

  // Get current screen height: GetScreenHeight() => int
  const _GetScreenHeight = mod.cwrap('GetScreenHeight', 'void', [])
  raylib.GetScreenHeight = () => _GetScreenHeight()

  // Get current render width (it considers HiDPI): GetRenderWidth() => int
  const _GetRenderWidth = mod.cwrap('GetRenderWidth', 'void', [])
  raylib.GetRenderWidth = () => _GetRenderWidth()

  // Get current render height (it considers HiDPI): GetRenderHeight() => int
  const _GetRenderHeight = mod.cwrap('GetRenderHeight', 'void', [])
  raylib.GetRenderHeight = () => _GetRenderHeight()

  // Get number of connected monitors: GetMonitorCount() => int
  const _GetMonitorCount = mod.cwrap('GetMonitorCount', 'void', [])
  raylib.GetMonitorCount = () => _GetMonitorCount()

  // Get current connected monitor: GetCurrentMonitor() => int
  const _GetCurrentMonitor = mod.cwrap('GetCurrentMonitor', 'void', [])
  raylib.GetCurrentMonitor = () => _GetCurrentMonitor()

  // Get specified monitor position: GetMonitorPosition(int) => Vector2
  const _GetMonitorPosition = mod.cwrap('GetMonitorPosition', 'void', ['pointer', 'number'])
  raylib.GetMonitorPosition = (monitor) => {
    const _ret = new raylib.Vector2()
    _GetMonitorPosition(_ret._address, monitor)
    return _ret
  }

  // Get specified monitor width (current video mode used by monitor): GetMonitorWidth(int) => int
  const _GetMonitorWidth = mod.cwrap('GetMonitorWidth', 'void', ['number'])
  raylib.GetMonitorWidth = (monitor) => _GetMonitorWidth(monitor)

  // Get specified monitor height (current video mode used by monitor): GetMonitorHeight(int) => int
  const _GetMonitorHeight = mod.cwrap('GetMonitorHeight', 'void', ['number'])
  raylib.GetMonitorHeight = (monitor) => _GetMonitorHeight(monitor)

  // Get specified monitor physical width in millimetres: GetMonitorPhysicalWidth(int) => int
  const _GetMonitorPhysicalWidth = mod.cwrap('GetMonitorPhysicalWidth', 'void', ['number'])
  raylib.GetMonitorPhysicalWidth = (monitor) => _GetMonitorPhysicalWidth(monitor)

  // Get specified monitor physical height in millimetres: GetMonitorPhysicalHeight(int) => int
  const _GetMonitorPhysicalHeight = mod.cwrap('GetMonitorPhysicalHeight', 'void', ['number'])
  raylib.GetMonitorPhysicalHeight = (monitor) => _GetMonitorPhysicalHeight(monitor)

  // Get specified monitor refresh rate: GetMonitorRefreshRate(int) => int
  const _GetMonitorRefreshRate = mod.cwrap('GetMonitorRefreshRate', 'void', ['number'])
  raylib.GetMonitorRefreshRate = (monitor) => _GetMonitorRefreshRate(monitor)

  // Get window position XY on monitor: GetWindowPosition() => Vector2
  const _GetWindowPosition = mod.cwrap('GetWindowPosition', 'void', ['pointer'])
  raylib.GetWindowPosition = () => {
    const _ret = new raylib.Vector2()
    _GetWindowPosition(_ret._address)
    return _ret
  }

  // Get window scale DPI factor: GetWindowScaleDPI() => Vector2
  const _GetWindowScaleDPI = mod.cwrap('GetWindowScaleDPI', 'void', ['pointer'])
  raylib.GetWindowScaleDPI = () => {
    const _ret = new raylib.Vector2()
    _GetWindowScaleDPI(_ret._address)
    return _ret
  }

  // Get the human-readable, UTF-8 encoded name of the primary monitor: GetMonitorName(int) => const char *
  const _GetMonitorName = mod.cwrap('GetMonitorName', 'void', ['number'])
  raylib.GetMonitorName = (monitor) => _GetMonitorName(monitor)

  // Set clipboard text content: SetClipboardText(const char *) => void
  const _SetClipboardText = mod.cwrap('SetClipboardText', 'void', ['string'])
  raylib.SetClipboardText = (text) => _SetClipboardText(text)

  // Get clipboard text content: GetClipboardText() => const char *
  const _GetClipboardText = mod.cwrap('GetClipboardText', 'void', [])
  raylib.GetClipboardText = () => _GetClipboardText()

  // Enable waiting for events on EndDrawing(), no automatic event polling: EnableEventWaiting() => void
  const _EnableEventWaiting = mod.cwrap('EnableEventWaiting', 'void', [])
  raylib.EnableEventWaiting = () => _EnableEventWaiting()

  // Disable waiting for events on EndDrawing(), automatic events polling: DisableEventWaiting() => void
  const _DisableEventWaiting = mod.cwrap('DisableEventWaiting', 'void', [])
  raylib.DisableEventWaiting = () => _DisableEventWaiting()

  // Swap back buffer with front buffer (screen drawing): SwapScreenBuffer() => void
  const _SwapScreenBuffer = mod.cwrap('SwapScreenBuffer', 'void', [])
  raylib.SwapScreenBuffer = () => _SwapScreenBuffer()

  // Register all input events: PollInputEvents() => void
  const _PollInputEvents = mod.cwrap('PollInputEvents', 'void', [])
  raylib.PollInputEvents = () => _PollInputEvents()

  // Wait for some time (halt program execution): WaitTime(double) => void
  const _WaitTime = mod.cwrap('WaitTime', 'void', ['number'])
  raylib.WaitTime = (seconds) => _WaitTime(seconds)

  // Shows cursor: ShowCursor() => void
  const _ShowCursor = mod.cwrap('ShowCursor', 'void', [])
  raylib.ShowCursor = () => _ShowCursor()

  // Hides cursor: HideCursor() => void
  const _HideCursor = mod.cwrap('HideCursor', 'void', [])
  raylib.HideCursor = () => _HideCursor()

  // Check if cursor is not visible: IsCursorHidden() => bool
  const _IsCursorHidden = mod.cwrap('IsCursorHidden', 'void', [])
  raylib.IsCursorHidden = () => _IsCursorHidden()

  // Enables cursor (unlock cursor): EnableCursor() => void
  const _EnableCursor = mod.cwrap('EnableCursor', 'void', [])
  raylib.EnableCursor = () => _EnableCursor()

  // Disables cursor (lock cursor): DisableCursor() => void
  const _DisableCursor = mod.cwrap('DisableCursor', 'void', [])
  raylib.DisableCursor = () => _DisableCursor()

  // Check if cursor is on the screen: IsCursorOnScreen() => bool
  const _IsCursorOnScreen = mod.cwrap('IsCursorOnScreen', 'void', [])
  raylib.IsCursorOnScreen = () => _IsCursorOnScreen()

  // Set background color (framebuffer clear color): ClearBackground(Color) => void
  const _ClearBackground = mod.cwrap('ClearBackground', 'void', ['pointer'])
  raylib.ClearBackground = (color) => _ClearBackground(color._address)

  // Setup canvas (framebuffer) to start drawing: BeginDrawing() => void
  const _BeginDrawing = mod.cwrap('BeginDrawing', 'void', [])
  raylib.BeginDrawing = () => _BeginDrawing()

  // End canvas drawing and swap buffers (double buffering): EndDrawing() => void
  const _EndDrawing = mod.cwrap('EndDrawing', 'void', [])
  raylib.EndDrawing = () => _EndDrawing()

  // Begin 2D mode with custom camera (2D): BeginMode2D(Camera2D) => void
  const _BeginMode2D = mod.cwrap('BeginMode2D', 'void', ['pointer'])
  raylib.BeginMode2D = (camera) => _BeginMode2D(camera._address)

  // Ends 2D mode with custom camera: EndMode2D() => void
  const _EndMode2D = mod.cwrap('EndMode2D', 'void', [])
  raylib.EndMode2D = () => _EndMode2D()

  // Begin 3D mode with custom camera (3D): BeginMode3D(Camera3D) => void
  const _BeginMode3D = mod.cwrap('BeginMode3D', 'void', ['pointer'])
  raylib.BeginMode3D = (camera) => _BeginMode3D(camera._address)

  // Ends 3D mode and returns to default 2D orthographic mode: EndMode3D() => void
  const _EndMode3D = mod.cwrap('EndMode3D', 'void', [])
  raylib.EndMode3D = () => _EndMode3D()

  // Begin drawing to render texture: BeginTextureMode(RenderTexture2D) => void
  const _BeginTextureMode = mod.cwrap('BeginTextureMode', 'void', ['pointer'])
  raylib.BeginTextureMode = (target) => _BeginTextureMode(target._address)

  // Ends drawing to render texture: EndTextureMode() => void
  const _EndTextureMode = mod.cwrap('EndTextureMode', 'void', [])
  raylib.EndTextureMode = () => _EndTextureMode()

  // Begin custom shader drawing: BeginShaderMode(Shader) => void
  const _BeginShaderMode = mod.cwrap('BeginShaderMode', 'void', ['pointer'])
  raylib.BeginShaderMode = (shader) => _BeginShaderMode(shader._address)

  // End custom shader drawing (use default shader): EndShaderMode() => void
  const _EndShaderMode = mod.cwrap('EndShaderMode', 'void', [])
  raylib.EndShaderMode = () => _EndShaderMode()

  // Begin blending mode (alpha, additive, multiplied, subtract, custom): BeginBlendMode(int) => void
  const _BeginBlendMode = mod.cwrap('BeginBlendMode', 'void', ['number'])
  raylib.BeginBlendMode = (mode) => _BeginBlendMode(mode)

  // End blending mode (reset to default: alpha blending): EndBlendMode() => void
  const _EndBlendMode = mod.cwrap('EndBlendMode', 'void', [])
  raylib.EndBlendMode = () => _EndBlendMode()

  // Begin scissor mode (define screen area for following drawing): BeginScissorMode(int, int, int, int) => void
  const _BeginScissorMode = mod.cwrap('BeginScissorMode', 'void', ['number', 'number', 'number', 'number'])
  raylib.BeginScissorMode = (x, y, width, height) => _BeginScissorMode(x, y, width, height)

  // End scissor mode: EndScissorMode() => void
  const _EndScissorMode = mod.cwrap('EndScissorMode', 'void', [])
  raylib.EndScissorMode = () => _EndScissorMode()

  // Begin stereo rendering (requires VR simulator): BeginVrStereoMode(VrStereoConfig) => void
  const _BeginVrStereoMode = mod.cwrap('BeginVrStereoMode', 'void', ['pointer'])
  raylib.BeginVrStereoMode = (config) => _BeginVrStereoMode(config._address)

  // End stereo rendering (requires VR simulator): EndVrStereoMode() => void
  const _EndVrStereoMode = mod.cwrap('EndVrStereoMode', 'void', [])
  raylib.EndVrStereoMode = () => _EndVrStereoMode()

  // Load VR stereo config for VR simulator device parameters: LoadVrStereoConfig(VrDeviceInfo) => VrStereoConfig
  const _LoadVrStereoConfig = mod.cwrap('LoadVrStereoConfig', 'void', ['pointer', 'pointer'])
  raylib.LoadVrStereoConfig = (device) => {
    const _ret = new raylib.VrStereoConfig()
    _LoadVrStereoConfig(_ret._address, device._address)
    return _ret
  }

  // Unload VR stereo config: UnloadVrStereoConfig(VrStereoConfig) => void
  const _UnloadVrStereoConfig = mod.cwrap('UnloadVrStereoConfig', 'void', ['pointer'])
  raylib.UnloadVrStereoConfig = (config) => _UnloadVrStereoConfig(config._address)

  // Load shader from files and bind default locations: LoadShader(const char *, const char *) => Shader
  const _LoadShader = mod.cwrap('LoadShader', 'void', ['pointer', 'string', 'string'])
  raylib.LoadShader = (vsFileName, fsFileName) => {
    const _ret = new raylib.Shader()
    _LoadShader(_ret._address, vsFileName, fsFileName)
    return _ret
  }

  // Load shader from code strings and bind default locations: LoadShaderFromMemory(const char *, const char *) => Shader
  const _LoadShaderFromMemory = mod.cwrap('LoadShaderFromMemory', 'void', ['pointer', 'string', 'string'])
  raylib.LoadShaderFromMemory = (vsCode, fsCode) => {
    const _ret = new raylib.Shader()
    _LoadShaderFromMemory(_ret._address, vsCode, fsCode)
    return _ret
  }

  // Check if a shader is ready: IsShaderReady(Shader) => bool
  const _IsShaderReady = mod.cwrap('IsShaderReady', 'void', ['pointer'])
  raylib.IsShaderReady = (shader) => _IsShaderReady(shader._address)

  // Get shader uniform location: GetShaderLocation(Shader, const char *) => int
  const _GetShaderLocation = mod.cwrap('GetShaderLocation', 'void', ['pointer', 'string'])
  raylib.GetShaderLocation = (shader, uniformName) => _GetShaderLocation(shader._address, uniformName)

  // Get shader attribute location: GetShaderLocationAttrib(Shader, const char *) => int
  const _GetShaderLocationAttrib = mod.cwrap('GetShaderLocationAttrib', 'void', ['pointer', 'string'])
  raylib.GetShaderLocationAttrib = (shader, attribName) => _GetShaderLocationAttrib(shader._address, attribName)

  // Set shader uniform value: SetShaderValue(Shader, int, const void *, int) => void
  const _SetShaderValue = mod.cwrap('SetShaderValue', 'void', ['pointer', 'number', 'pointer', 'number'])
  raylib.SetShaderValue = (shader, locIndex, value, uniformType) => _SetShaderValue(shader._address, locIndex, value._address, uniformType)

  // Set shader uniform value vector: SetShaderValueV(Shader, int, const void *, int, int) => void
  const _SetShaderValueV = mod.cwrap('SetShaderValueV', 'void', ['pointer', 'number', 'pointer', 'number', 'number'])
  raylib.SetShaderValueV = (shader, locIndex, value, uniformType, count) => _SetShaderValueV(shader._address, locIndex, value._address, uniformType, count)

  // Set shader uniform value (matrix 4x4): SetShaderValueMatrix(Shader, int, Matrix) => void
  const _SetShaderValueMatrix = mod.cwrap('SetShaderValueMatrix', 'void', ['pointer', 'number', 'pointer'])
  raylib.SetShaderValueMatrix = (shader, locIndex, mat) => _SetShaderValueMatrix(shader._address, locIndex, mat._address)

  // Set shader uniform value for texture (sampler2d): SetShaderValueTexture(Shader, int, Texture2D) => void
  const _SetShaderValueTexture = mod.cwrap('SetShaderValueTexture', 'void', ['pointer', 'number', 'pointer'])
  raylib.SetShaderValueTexture = (shader, locIndex, texture) => _SetShaderValueTexture(shader._address, locIndex, texture._address)

  // Unload shader from GPU memory (VRAM): UnloadShader(Shader) => void
  const _UnloadShader = mod.cwrap('UnloadShader', 'void', ['pointer'])
  raylib.UnloadShader = (shader) => _UnloadShader(shader._address)

  // Get a ray trace from mouse position: GetMouseRay(Vector2, Camera) => Ray
  const _GetMouseRay = mod.cwrap('GetMouseRay', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GetMouseRay = (mousePosition, camera) => {
    const _ret = new raylib.Ray()
    _GetMouseRay(_ret._address, mousePosition._address, camera._address)
    return _ret
  }

  // Get camera transform matrix (view matrix): GetCameraMatrix(Camera) => Matrix
  const _GetCameraMatrix = mod.cwrap('GetCameraMatrix', 'void', ['pointer', 'pointer'])
  raylib.GetCameraMatrix = (camera) => {
    const _ret = new raylib.Matrix()
    _GetCameraMatrix(_ret._address, camera._address)
    return _ret
  }

  // Get camera 2d transform matrix: GetCameraMatrix2D(Camera2D) => Matrix
  const _GetCameraMatrix2D = mod.cwrap('GetCameraMatrix2D', 'void', ['pointer', 'pointer'])
  raylib.GetCameraMatrix2D = (camera) => {
    const _ret = new raylib.Matrix()
    _GetCameraMatrix2D(_ret._address, camera._address)
    return _ret
  }

  // Get the screen space position for a 3d world space position: GetWorldToScreen(Vector3, Camera) => Vector2
  const _GetWorldToScreen = mod.cwrap('GetWorldToScreen', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GetWorldToScreen = (position, camera) => {
    const _ret = new raylib.Vector2()
    _GetWorldToScreen(_ret._address, position._address, camera._address)
    return _ret
  }

  // Get the world space position for a 2d camera screen space position: GetScreenToWorld2D(Vector2, Camera2D) => Vector2
  const _GetScreenToWorld2D = mod.cwrap('GetScreenToWorld2D', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GetScreenToWorld2D = (position, camera) => {
    const _ret = new raylib.Vector2()
    _GetScreenToWorld2D(_ret._address, position._address, camera._address)
    return _ret
  }

  // Get size position for a 3d world space position: GetWorldToScreenEx(Vector3, Camera, int, int) => Vector2
  const _GetWorldToScreenEx = mod.cwrap('GetWorldToScreenEx', 'void', ['pointer', 'pointer', 'pointer', 'number', 'number'])
  raylib.GetWorldToScreenEx = (position, camera, width, height) => {
    const _ret = new raylib.Vector2()
    _GetWorldToScreenEx(_ret._address, position._address, camera._address, width, height)
    return _ret
  }

  // Get the screen space position for a 2d camera world space position: GetWorldToScreen2D(Vector2, Camera2D) => Vector2
  const _GetWorldToScreen2D = mod.cwrap('GetWorldToScreen2D', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GetWorldToScreen2D = (position, camera) => {
    const _ret = new raylib.Vector2()
    _GetWorldToScreen2D(_ret._address, position._address, camera._address)
    return _ret
  }

  // Set target FPS (maximum): SetTargetFPS(int) => void
  const _SetTargetFPS = mod.cwrap('SetTargetFPS', 'void', ['number'])
  raylib.SetTargetFPS = (fps) => _SetTargetFPS(fps)

  // Get current FPS: GetFPS() => int
  const _GetFPS = mod.cwrap('GetFPS', 'void', [])
  raylib.GetFPS = () => _GetFPS()

  // Get time in seconds for last frame drawn (delta time): GetFrameTime() => float
  const _GetFrameTime = mod.cwrap('GetFrameTime', 'void', [])
  raylib.GetFrameTime = () => _GetFrameTime()

  // Get elapsed time in seconds since InitWindow(): GetTime() => double
  const _GetTime = mod.cwrap('GetTime', 'void', [])
  raylib.GetTime = () => _GetTime()

  // Get a random value between min and max (both included): GetRandomValue(int, int) => int
  const _GetRandomValue = mod.cwrap('GetRandomValue', 'void', ['number', 'number'])
  raylib.GetRandomValue = (min, max) => _GetRandomValue(min, max)

  // Set the seed for the random number generator: SetRandomSeed(unsigned int) => void
  const _SetRandomSeed = mod.cwrap('SetRandomSeed', 'void', ['number'])
  raylib.SetRandomSeed = (seed) => _SetRandomSeed(seed)

  // Takes a screenshot of current screen (filename extension defines format): TakeScreenshot(const char *) => void
  const _TakeScreenshot = mod.cwrap('TakeScreenshot', 'void', ['string'])
  raylib.TakeScreenshot = (fileName) => _TakeScreenshot(fileName)

  // Setup init configuration flags (view FLAGS): SetConfigFlags(unsigned int) => void
  const _SetConfigFlags = mod.cwrap('SetConfigFlags', 'void', ['number'])
  raylib.SetConfigFlags = (flags) => _SetConfigFlags(flags)

  // Show trace log messages (LOG_DEBUG, LOG_INFO, LOG_WARNING, LOG_ERROR...): TraceLog(int, const char *, ...) => void
  const _TraceLog = mod.cwrap('TraceLog', 'void', ['number', 'string', 'pointer'])
  raylib.TraceLog = (logLevel, text, args) => _TraceLog(logLevel, text, args._address)

  // Set the current threshold (minimum) log level: SetTraceLogLevel(int) => void
  const _SetTraceLogLevel = mod.cwrap('SetTraceLogLevel', 'void', ['number'])
  raylib.SetTraceLogLevel = (logLevel) => _SetTraceLogLevel(logLevel)

  // Internal memory allocator: MemAlloc(unsigned int) => void *
  const _MemAlloc = mod.cwrap('MemAlloc', 'void', ['number'])
  raylib.MemAlloc = (size) => _MemAlloc(size)

  // Internal memory reallocator: MemRealloc(void *, unsigned int) => void *
  const _MemRealloc = mod.cwrap('MemRealloc', 'void', ['pointer', 'number'])
  raylib.MemRealloc = (ptr, size) => _MemRealloc(ptr._address, size)

  // Internal memory free: MemFree(void *) => void
  const _MemFree = mod.cwrap('MemFree', 'void', ['pointer'])
  raylib.MemFree = (ptr) => _MemFree(ptr._address)

  // Open URL with default system browser (if available): OpenURL(const char *) => void
  const _OpenURL = mod.cwrap('OpenURL', 'void', ['string'])
  raylib.OpenURL = (url) => _OpenURL(url)

  // Set custom trace log: SetTraceLogCallback(TraceLogCallback) => void
  const _SetTraceLogCallback = mod.cwrap('SetTraceLogCallback', 'void', ['pointer'])
  raylib.SetTraceLogCallback = (callback) => _SetTraceLogCallback(callback._address)

  // Set custom file binary data loader: SetLoadFileDataCallback(LoadFileDataCallback) => void
  const _SetLoadFileDataCallback = mod.cwrap('SetLoadFileDataCallback', 'void', ['pointer'])
  raylib.SetLoadFileDataCallback = (callback) => _SetLoadFileDataCallback(callback._address)

  // Set custom file binary data saver: SetSaveFileDataCallback(SaveFileDataCallback) => void
  const _SetSaveFileDataCallback = mod.cwrap('SetSaveFileDataCallback', 'void', ['pointer'])
  raylib.SetSaveFileDataCallback = (callback) => _SetSaveFileDataCallback(callback._address)

  // Set custom file text data loader: SetLoadFileTextCallback(LoadFileTextCallback) => void
  const _SetLoadFileTextCallback = mod.cwrap('SetLoadFileTextCallback', 'void', ['pointer'])
  raylib.SetLoadFileTextCallback = (callback) => _SetLoadFileTextCallback(callback._address)

  // Set custom file text data saver: SetSaveFileTextCallback(SaveFileTextCallback) => void
  const _SetSaveFileTextCallback = mod.cwrap('SetSaveFileTextCallback', 'void', ['pointer'])
  raylib.SetSaveFileTextCallback = (callback) => _SetSaveFileTextCallback(callback._address)

  // Load file data as byte array (read): LoadFileData(const char *, unsigned int *) => unsigned char *
  const _LoadFileData = mod.cwrap('LoadFileData', 'void', ['string', 'pointer'])
  raylib.LoadFileData = async (fileName, bytesRead) => {
    await raylib.addFile(fileName)
  return _LoadFileData(fileName, bytesRead._address)
  }

  // Unload file data allocated by LoadFileData(): UnloadFileData(unsigned char *) => void
  const _UnloadFileData = mod.cwrap('UnloadFileData', 'void', ['pointer'])
  raylib.UnloadFileData = (data) => _UnloadFileData(data._address)

  // Save data to file from byte array (write), returns true on success: SaveFileData(const char *, void *, unsigned int) => bool
  const _SaveFileData = mod.cwrap('SaveFileData', 'void', ['string', 'pointer', 'number'])
  raylib.SaveFileData = (fileName, data, bytesToWrite) => _SaveFileData(fileName, data._address, bytesToWrite)

  // Export data to code (.h), returns true on success: ExportDataAsCode(const unsigned char *, unsigned int, const char *) => bool
  const _ExportDataAsCode = mod.cwrap('ExportDataAsCode', 'void', ['pointer', 'number', 'string'])
  raylib.ExportDataAsCode = (data, size, fileName) => _ExportDataAsCode(data._address, size, fileName)

  // Load text data from file (read), returns a '\0' terminated string: LoadFileText(const char *) => char *
  const _LoadFileText = mod.cwrap('LoadFileText', 'void', ['string'])
  raylib.LoadFileText = async (fileName) => {
    await raylib.addFile(fileName)
  return _LoadFileText(fileName)
  }

  // Unload file text data allocated by LoadFileText(): UnloadFileText(char *) => void
  const _UnloadFileText = mod.cwrap('UnloadFileText', 'void', ['pointer'])
  raylib.UnloadFileText = (text) => _UnloadFileText(text._address)

  // Save text data to file (write), string must be '\0' terminated, returns true on success: SaveFileText(const char *, char *) => bool
  const _SaveFileText = mod.cwrap('SaveFileText', 'void', ['string', 'pointer'])
  raylib.SaveFileText = (fileName, text) => _SaveFileText(fileName, text._address)

  // Check if file exists: FileExists(const char *) => bool
  const _FileExists = mod.cwrap('FileExists', 'void', ['string'])
  raylib.FileExists = (fileName) => _FileExists(fileName)

  // Check if a directory path exists: DirectoryExists(const char *) => bool
  const _DirectoryExists = mod.cwrap('DirectoryExists', 'void', ['string'])
  raylib.DirectoryExists = (dirPath) => _DirectoryExists(dirPath)

  // Check file extension (including point: .png, .wav): IsFileExtension(const char *, const char *) => bool
  const _IsFileExtension = mod.cwrap('IsFileExtension', 'void', ['string', 'string'])
  raylib.IsFileExtension = (fileName, ext) => _IsFileExtension(fileName, ext)

  // Get file length in bytes (NOTE: GetFileSize() conflicts with windows.h): GetFileLength(const char *) => int
  const _GetFileLength = mod.cwrap('GetFileLength', 'void', ['string'])
  raylib.GetFileLength = (fileName) => _GetFileLength(fileName)

  // Get pointer to extension for a filename string (includes dot: '.png'): GetFileExtension(const char *) => const char *
  const _GetFileExtension = mod.cwrap('GetFileExtension', 'void', ['string'])
  raylib.GetFileExtension = (fileName) => _GetFileExtension(fileName)

  // Get pointer to filename for a path string: GetFileName(const char *) => const char *
  const _GetFileName = mod.cwrap('GetFileName', 'void', ['string'])
  raylib.GetFileName = (filePath) => _GetFileName(filePath)

  // Get filename string without extension (uses static string): GetFileNameWithoutExt(const char *) => const char *
  const _GetFileNameWithoutExt = mod.cwrap('GetFileNameWithoutExt', 'void', ['string'])
  raylib.GetFileNameWithoutExt = (filePath) => _GetFileNameWithoutExt(filePath)

  // Get full path for a given fileName with path (uses static string): GetDirectoryPath(const char *) => const char *
  const _GetDirectoryPath = mod.cwrap('GetDirectoryPath', 'void', ['string'])
  raylib.GetDirectoryPath = (filePath) => _GetDirectoryPath(filePath)

  // Get previous directory path for a given path (uses static string): GetPrevDirectoryPath(const char *) => const char *
  const _GetPrevDirectoryPath = mod.cwrap('GetPrevDirectoryPath', 'void', ['string'])
  raylib.GetPrevDirectoryPath = (dirPath) => _GetPrevDirectoryPath(dirPath)

  // Get current working directory (uses static string): GetWorkingDirectory() => const char *
  const _GetWorkingDirectory = mod.cwrap('GetWorkingDirectory', 'void', [])
  raylib.GetWorkingDirectory = () => _GetWorkingDirectory()

  // Get the directory if the running application (uses static string): GetApplicationDirectory() => const char *
  const _GetApplicationDirectory = mod.cwrap('GetApplicationDirectory', 'void', [])
  raylib.GetApplicationDirectory = () => _GetApplicationDirectory()

  // Change working directory, return true on success: ChangeDirectory(const char *) => bool
  const _ChangeDirectory = mod.cwrap('ChangeDirectory', 'void', ['string'])
  raylib.ChangeDirectory = (dir) => _ChangeDirectory(dir)

  // Check if a given path is a file or a directory: IsPathFile(const char *) => bool
  const _IsPathFile = mod.cwrap('IsPathFile', 'void', ['string'])
  raylib.IsPathFile = (path) => _IsPathFile(path)

  // Load directory filepaths: LoadDirectoryFiles(const char *) => FilePathList
  const _LoadDirectoryFiles = mod.cwrap('LoadDirectoryFiles', 'void', ['pointer', 'string'])
  raylib.LoadDirectoryFiles = (dirPath) => {
    const _ret = new raylib.FilePathList()
    _LoadDirectoryFiles(_ret._address, dirPath)
    return _ret
  }

  // Load directory filepaths with extension filtering and recursive directory scan: LoadDirectoryFilesEx(const char *, const char *, bool) => FilePathList
  const _LoadDirectoryFilesEx = mod.cwrap('LoadDirectoryFilesEx', 'void', ['pointer', 'string', 'string', 'boolean'])
  raylib.LoadDirectoryFilesEx = (basePath, filter, scanSubdirs) => {
    const _ret = new raylib.FilePathList()
    _LoadDirectoryFilesEx(_ret._address, basePath, filter, scanSubdirs)
    return _ret
  }

  // Unload filepaths: UnloadDirectoryFiles(FilePathList) => void
  const _UnloadDirectoryFiles = mod.cwrap('UnloadDirectoryFiles', 'void', ['pointer'])
  raylib.UnloadDirectoryFiles = (files) => _UnloadDirectoryFiles(files._address)

  // Check if a file has been dropped into window: IsFileDropped() => bool
  const _IsFileDropped = mod.cwrap('IsFileDropped', 'void', [])
  raylib.IsFileDropped = () => _IsFileDropped()

  // Load dropped filepaths: LoadDroppedFiles() => FilePathList
  const _LoadDroppedFiles = mod.cwrap('LoadDroppedFiles', 'void', ['pointer'])
  raylib.LoadDroppedFiles = () => {
    const _ret = new raylib.FilePathList()
    _LoadDroppedFiles(_ret._address)
    return _ret
  }

  // Unload dropped filepaths: UnloadDroppedFiles(FilePathList) => void
  const _UnloadDroppedFiles = mod.cwrap('UnloadDroppedFiles', 'void', ['pointer'])
  raylib.UnloadDroppedFiles = (files) => _UnloadDroppedFiles(files._address)

  // Get file modification time (last write time): GetFileModTime(const char *) => long
  const _GetFileModTime = mod.cwrap('GetFileModTime', 'void', ['string'])
  raylib.GetFileModTime = (fileName) => _GetFileModTime(fileName)

  // Compress data (DEFLATE algorithm), memory must be MemFree(): CompressData(const unsigned char *, int, int *) => unsigned char *
  const _CompressData = mod.cwrap('CompressData', 'void', ['pointer', 'number', 'pointer'])
  raylib.CompressData = (data, dataSize, compDataSize) => _CompressData(data._address, dataSize, compDataSize._address)

  // Decompress data (DEFLATE algorithm), memory must be MemFree(): DecompressData(const unsigned char *, int, int *) => unsigned char *
  const _DecompressData = mod.cwrap('DecompressData', 'void', ['pointer', 'number', 'pointer'])
  raylib.DecompressData = (compData, compDataSize, dataSize) => _DecompressData(compData._address, compDataSize, dataSize._address)

  // Encode data to Base64 string, memory must be MemFree(): EncodeDataBase64(const unsigned char *, int, int *) => char *
  const _EncodeDataBase64 = mod.cwrap('EncodeDataBase64', 'void', ['pointer', 'number', 'pointer'])
  raylib.EncodeDataBase64 = (data, dataSize, outputSize) => _EncodeDataBase64(data._address, dataSize, outputSize._address)

  // Decode Base64 string data, memory must be MemFree(): DecodeDataBase64(const unsigned char *, int *) => unsigned char *
  const _DecodeDataBase64 = mod.cwrap('DecodeDataBase64', 'void', ['pointer', 'pointer'])
  raylib.DecodeDataBase64 = (data, outputSize) => _DecodeDataBase64(data._address, outputSize._address)

  // Check if a key has been pressed once: IsKeyPressed(int) => bool
  const _IsKeyPressed = mod.cwrap('IsKeyPressed', 'void', ['number'])
  raylib.IsKeyPressed = (key) => _IsKeyPressed(key)

  // Check if a key is being pressed: IsKeyDown(int) => bool
  const _IsKeyDown = mod.cwrap('IsKeyDown', 'void', ['number'])
  raylib.IsKeyDown = (key) => _IsKeyDown(key)

  // Check if a key has been released once: IsKeyReleased(int) => bool
  const _IsKeyReleased = mod.cwrap('IsKeyReleased', 'void', ['number'])
  raylib.IsKeyReleased = (key) => _IsKeyReleased(key)

  // Check if a key is NOT being pressed: IsKeyUp(int) => bool
  const _IsKeyUp = mod.cwrap('IsKeyUp', 'void', ['number'])
  raylib.IsKeyUp = (key) => _IsKeyUp(key)

  // Set a custom key to exit program (default is ESC): SetExitKey(int) => void
  const _SetExitKey = mod.cwrap('SetExitKey', 'void', ['number'])
  raylib.SetExitKey = (key) => _SetExitKey(key)

  // Get key pressed (keycode), call it multiple times for keys queued, returns 0 when the queue is empty: GetKeyPressed() => int
  const _GetKeyPressed = mod.cwrap('GetKeyPressed', 'void', [])
  raylib.GetKeyPressed = () => _GetKeyPressed()

  // Get char pressed (unicode), call it multiple times for chars queued, returns 0 when the queue is empty: GetCharPressed() => int
  const _GetCharPressed = mod.cwrap('GetCharPressed', 'void', [])
  raylib.GetCharPressed = () => _GetCharPressed()

  // Check if a gamepad is available: IsGamepadAvailable(int) => bool
  const _IsGamepadAvailable = mod.cwrap('IsGamepadAvailable', 'void', ['number'])
  raylib.IsGamepadAvailable = (gamepad) => _IsGamepadAvailable(gamepad)

  // Get gamepad internal name id: GetGamepadName(int) => const char *
  const _GetGamepadName = mod.cwrap('GetGamepadName', 'void', ['number'])
  raylib.GetGamepadName = (gamepad) => _GetGamepadName(gamepad)

  // Check if a gamepad button has been pressed once: IsGamepadButtonPressed(int, int) => bool
  const _IsGamepadButtonPressed = mod.cwrap('IsGamepadButtonPressed', 'void', ['number', 'number'])
  raylib.IsGamepadButtonPressed = (gamepad, button) => _IsGamepadButtonPressed(gamepad, button)

  // Check if a gamepad button is being pressed: IsGamepadButtonDown(int, int) => bool
  const _IsGamepadButtonDown = mod.cwrap('IsGamepadButtonDown', 'void', ['number', 'number'])
  raylib.IsGamepadButtonDown = (gamepad, button) => _IsGamepadButtonDown(gamepad, button)

  // Check if a gamepad button has been released once: IsGamepadButtonReleased(int, int) => bool
  const _IsGamepadButtonReleased = mod.cwrap('IsGamepadButtonReleased', 'void', ['number', 'number'])
  raylib.IsGamepadButtonReleased = (gamepad, button) => _IsGamepadButtonReleased(gamepad, button)

  // Check if a gamepad button is NOT being pressed: IsGamepadButtonUp(int, int) => bool
  const _IsGamepadButtonUp = mod.cwrap('IsGamepadButtonUp', 'void', ['number', 'number'])
  raylib.IsGamepadButtonUp = (gamepad, button) => _IsGamepadButtonUp(gamepad, button)

  // Get the last gamepad button pressed: GetGamepadButtonPressed() => int
  const _GetGamepadButtonPressed = mod.cwrap('GetGamepadButtonPressed', 'void', [])
  raylib.GetGamepadButtonPressed = () => _GetGamepadButtonPressed()

  // Get gamepad axis count for a gamepad: GetGamepadAxisCount(int) => int
  const _GetGamepadAxisCount = mod.cwrap('GetGamepadAxisCount', 'void', ['number'])
  raylib.GetGamepadAxisCount = (gamepad) => _GetGamepadAxisCount(gamepad)

  // Get axis movement value for a gamepad axis: GetGamepadAxisMovement(int, int) => float
  const _GetGamepadAxisMovement = mod.cwrap('GetGamepadAxisMovement', 'void', ['number', 'number'])
  raylib.GetGamepadAxisMovement = (gamepad, axis) => _GetGamepadAxisMovement(gamepad, axis)

  // Set internal gamepad mappings (SDL_GameControllerDB): SetGamepadMappings(const char *) => int
  const _SetGamepadMappings = mod.cwrap('SetGamepadMappings', 'void', ['string'])
  raylib.SetGamepadMappings = (mappings) => _SetGamepadMappings(mappings)

  // Check if a mouse button has been pressed once: IsMouseButtonPressed(int) => bool
  const _IsMouseButtonPressed = mod.cwrap('IsMouseButtonPressed', 'void', ['number'])
  raylib.IsMouseButtonPressed = (button) => _IsMouseButtonPressed(button)

  // Check if a mouse button is being pressed: IsMouseButtonDown(int) => bool
  const _IsMouseButtonDown = mod.cwrap('IsMouseButtonDown', 'void', ['number'])
  raylib.IsMouseButtonDown = (button) => _IsMouseButtonDown(button)

  // Check if a mouse button has been released once: IsMouseButtonReleased(int) => bool
  const _IsMouseButtonReleased = mod.cwrap('IsMouseButtonReleased', 'void', ['number'])
  raylib.IsMouseButtonReleased = (button) => _IsMouseButtonReleased(button)

  // Check if a mouse button is NOT being pressed: IsMouseButtonUp(int) => bool
  const _IsMouseButtonUp = mod.cwrap('IsMouseButtonUp', 'void', ['number'])
  raylib.IsMouseButtonUp = (button) => _IsMouseButtonUp(button)

  // Get mouse position X: GetMouseX() => int
  const _GetMouseX = mod.cwrap('GetMouseX', 'void', [])
  raylib.GetMouseX = () => _GetMouseX()

  // Get mouse position Y: GetMouseY() => int
  const _GetMouseY = mod.cwrap('GetMouseY', 'void', [])
  raylib.GetMouseY = () => _GetMouseY()

  // Get mouse position XY: GetMousePosition() => Vector2
  const _GetMousePosition = mod.cwrap('GetMousePosition', 'void', ['pointer'])
  raylib.GetMousePosition = () => {
    const _ret = new raylib.Vector2()
    _GetMousePosition(_ret._address)
    return _ret
  }

  // Get mouse delta between frames: GetMouseDelta() => Vector2
  const _GetMouseDelta = mod.cwrap('GetMouseDelta', 'void', ['pointer'])
  raylib.GetMouseDelta = () => {
    const _ret = new raylib.Vector2()
    _GetMouseDelta(_ret._address)
    return _ret
  }

  // Set mouse position XY: SetMousePosition(int, int) => void
  const _SetMousePosition = mod.cwrap('SetMousePosition', 'void', ['number', 'number'])
  raylib.SetMousePosition = (x, y) => _SetMousePosition(x, y)

  // Set mouse offset: SetMouseOffset(int, int) => void
  const _SetMouseOffset = mod.cwrap('SetMouseOffset', 'void', ['number', 'number'])
  raylib.SetMouseOffset = (offsetX, offsetY) => _SetMouseOffset(offsetX, offsetY)

  // Set mouse scaling: SetMouseScale(float, float) => void
  const _SetMouseScale = mod.cwrap('SetMouseScale', 'void', ['number', 'number'])
  raylib.SetMouseScale = (scaleX, scaleY) => _SetMouseScale(scaleX, scaleY)

  // Get mouse wheel movement for X or Y, whichever is larger: GetMouseWheelMove() => float
  const _GetMouseWheelMove = mod.cwrap('GetMouseWheelMove', 'void', [])
  raylib.GetMouseWheelMove = () => _GetMouseWheelMove()

  // Get mouse wheel movement for both X and Y: GetMouseWheelMoveV() => Vector2
  const _GetMouseWheelMoveV = mod.cwrap('GetMouseWheelMoveV', 'void', ['pointer'])
  raylib.GetMouseWheelMoveV = () => {
    const _ret = new raylib.Vector2()
    _GetMouseWheelMoveV(_ret._address)
    return _ret
  }

  // Set mouse cursor: SetMouseCursor(int) => void
  const _SetMouseCursor = mod.cwrap('SetMouseCursor', 'void', ['number'])
  raylib.SetMouseCursor = (cursor) => _SetMouseCursor(cursor)

  // Get touch position X for touch point 0 (relative to screen size): GetTouchX() => int
  const _GetTouchX = mod.cwrap('GetTouchX', 'void', [])
  raylib.GetTouchX = () => _GetTouchX()

  // Get touch position Y for touch point 0 (relative to screen size): GetTouchY() => int
  const _GetTouchY = mod.cwrap('GetTouchY', 'void', [])
  raylib.GetTouchY = () => _GetTouchY()

  // Get touch position XY for a touch point index (relative to screen size): GetTouchPosition(int) => Vector2
  const _GetTouchPosition = mod.cwrap('GetTouchPosition', 'void', ['pointer', 'number'])
  raylib.GetTouchPosition = (index) => {
    const _ret = new raylib.Vector2()
    _GetTouchPosition(_ret._address, index)
    return _ret
  }

  // Get touch point identifier for given index: GetTouchPointId(int) => int
  const _GetTouchPointId = mod.cwrap('GetTouchPointId', 'void', ['number'])
  raylib.GetTouchPointId = (index) => _GetTouchPointId(index)

  // Get number of touch points: GetTouchPointCount() => int
  const _GetTouchPointCount = mod.cwrap('GetTouchPointCount', 'void', [])
  raylib.GetTouchPointCount = () => _GetTouchPointCount()

  // Enable a set of gestures using flags: SetGesturesEnabled(unsigned int) => void
  const _SetGesturesEnabled = mod.cwrap('SetGesturesEnabled', 'void', ['number'])
  raylib.SetGesturesEnabled = (flags) => _SetGesturesEnabled(flags)

  // Check if a gesture have been detected: IsGestureDetected(int) => bool
  const _IsGestureDetected = mod.cwrap('IsGestureDetected', 'void', ['number'])
  raylib.IsGestureDetected = (gesture) => _IsGestureDetected(gesture)

  // Get latest detected gesture: GetGestureDetected() => int
  const _GetGestureDetected = mod.cwrap('GetGestureDetected', 'void', [])
  raylib.GetGestureDetected = () => _GetGestureDetected()

  // Get gesture hold time in milliseconds: GetGestureHoldDuration() => float
  const _GetGestureHoldDuration = mod.cwrap('GetGestureHoldDuration', 'void', [])
  raylib.GetGestureHoldDuration = () => _GetGestureHoldDuration()

  // Get gesture drag vector: GetGestureDragVector() => Vector2
  const _GetGestureDragVector = mod.cwrap('GetGestureDragVector', 'void', ['pointer'])
  raylib.GetGestureDragVector = () => {
    const _ret = new raylib.Vector2()
    _GetGestureDragVector(_ret._address)
    return _ret
  }

  // Get gesture drag angle: GetGestureDragAngle() => float
  const _GetGestureDragAngle = mod.cwrap('GetGestureDragAngle', 'void', [])
  raylib.GetGestureDragAngle = () => _GetGestureDragAngle()

  // Get gesture pinch delta: GetGesturePinchVector() => Vector2
  const _GetGesturePinchVector = mod.cwrap('GetGesturePinchVector', 'void', ['pointer'])
  raylib.GetGesturePinchVector = () => {
    const _ret = new raylib.Vector2()
    _GetGesturePinchVector(_ret._address)
    return _ret
  }

  // Get gesture pinch angle: GetGesturePinchAngle() => float
  const _GetGesturePinchAngle = mod.cwrap('GetGesturePinchAngle', 'void', [])
  raylib.GetGesturePinchAngle = () => _GetGesturePinchAngle()

  // Update camera position for selected mode: UpdateCamera(Camera *, int) => void
  const _UpdateCamera = mod.cwrap('UpdateCamera', 'void', ['pointer', 'number'])
  raylib.UpdateCamera = (camera, mode) => _UpdateCamera(camera._address, mode)

  // Update camera movement/rotation: UpdateCameraPro(Camera *, Vector3, Vector3, float) => void
  const _UpdateCameraPro = mod.cwrap('UpdateCameraPro', 'void', ['pointer', 'pointer', 'pointer', 'number'])
  raylib.UpdateCameraPro = (camera, movement, rotation, zoom) => _UpdateCameraPro(camera._address, movement._address, rotation._address, zoom)

  // Set texture and rectangle to be used on shapes drawing: SetShapesTexture(Texture2D, Rectangle) => void
  const _SetShapesTexture = mod.cwrap('SetShapesTexture', 'void', ['pointer', 'pointer'])
  raylib.SetShapesTexture = (texture, source) => _SetShapesTexture(texture._address, source._address)

  // Draw a pixel: DrawPixel(int, int, Color) => void
  const _DrawPixel = mod.cwrap('DrawPixel', 'void', ['number', 'number', 'pointer'])
  raylib.DrawPixel = (posX, posY, color) => _DrawPixel(posX, posY, color._address)

  // Draw a pixel (Vector version): DrawPixelV(Vector2, Color) => void
  const _DrawPixelV = mod.cwrap('DrawPixelV', 'void', ['pointer', 'pointer'])
  raylib.DrawPixelV = (position, color) => _DrawPixelV(position._address, color._address)

  // Draw a line: DrawLine(int, int, int, int, Color) => void
  const _DrawLine = mod.cwrap('DrawLine', 'void', ['number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawLine = (startPosX, startPosY, endPosX, endPosY, color) => _DrawLine(startPosX, startPosY, endPosX, endPosY, color._address)

  // Draw a line (Vector version): DrawLineV(Vector2, Vector2, Color) => void
  const _DrawLineV = mod.cwrap('DrawLineV', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.DrawLineV = (startPos, endPos, color) => _DrawLineV(startPos._address, endPos._address, color._address)

  // Draw a line defining thickness: DrawLineEx(Vector2, Vector2, float, Color) => void
  const _DrawLineEx = mod.cwrap('DrawLineEx', 'void', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawLineEx = (startPos, endPos, thick, color) => _DrawLineEx(startPos._address, endPos._address, thick, color._address)

  // Draw a line using cubic-bezier curves in-out: DrawLineBezier(Vector2, Vector2, float, Color) => void
  const _DrawLineBezier = mod.cwrap('DrawLineBezier', 'void', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawLineBezier = (startPos, endPos, thick, color) => _DrawLineBezier(startPos._address, endPos._address, thick, color._address)

  // Draw line using quadratic bezier curves with a control point: DrawLineBezierQuad(Vector2, Vector2, Vector2, float, Color) => void
  const _DrawLineBezierQuad = mod.cwrap('DrawLineBezierQuad', 'void', ['pointer', 'pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawLineBezierQuad = (startPos, endPos, controlPos, thick, color) => _DrawLineBezierQuad(startPos._address, endPos._address, controlPos._address, thick, color._address)

  // Draw line using cubic bezier curves with 2 control points: DrawLineBezierCubic(Vector2, Vector2, Vector2, Vector2, float, Color) => void
  const _DrawLineBezierCubic = mod.cwrap('DrawLineBezierCubic', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawLineBezierCubic = (startPos, endPos, startControlPos, endControlPos, thick, color) => _DrawLineBezierCubic(startPos._address, endPos._address, startControlPos._address, endControlPos._address, thick, color._address)

  // Draw lines sequence: DrawLineStrip(Vector2 *, int, Color) => void
  const _DrawLineStrip = mod.cwrap('DrawLineStrip', 'void', ['pointer', 'number', 'pointer'])
  raylib.DrawLineStrip = (points, pointCount, color) => _DrawLineStrip(points._address, pointCount, color._address)

  // Draw a color-filled circle: DrawCircle(int, int, float, Color) => void
  const _DrawCircle = mod.cwrap('DrawCircle', 'void', ['number', 'number', 'number', 'pointer'])
  raylib.DrawCircle = (centerX, centerY, radius, color) => _DrawCircle(centerX, centerY, radius, color._address)

  // Draw a piece of a circle: DrawCircleSector(Vector2, float, float, float, int, Color) => void
  const _DrawCircleSector = mod.cwrap('DrawCircleSector', 'void', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCircleSector = (center, radius, startAngle, endAngle, segments, color) => _DrawCircleSector(center._address, radius, startAngle, endAngle, segments, color._address)

  // Draw circle sector outline: DrawCircleSectorLines(Vector2, float, float, float, int, Color) => void
  const _DrawCircleSectorLines = mod.cwrap('DrawCircleSectorLines', 'void', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCircleSectorLines = (center, radius, startAngle, endAngle, segments, color) => _DrawCircleSectorLines(center._address, radius, startAngle, endAngle, segments, color._address)

  // Draw a gradient-filled circle: DrawCircleGradient(int, int, float, Color, Color) => void
  const _DrawCircleGradient = mod.cwrap('DrawCircleGradient', 'void', ['number', 'number', 'number', 'pointer', 'pointer'])
  raylib.DrawCircleGradient = (centerX, centerY, radius, color1, color2) => _DrawCircleGradient(centerX, centerY, radius, color1._address, color2._address)

  // Draw a color-filled circle (Vector version): DrawCircleV(Vector2, float, Color) => void
  const _DrawCircleV = mod.cwrap('DrawCircleV', 'void', ['pointer', 'number', 'pointer'])
  raylib.DrawCircleV = (center, radius, color) => _DrawCircleV(center._address, radius, color._address)

  // Draw circle outline: DrawCircleLines(int, int, float, Color) => void
  const _DrawCircleLines = mod.cwrap('DrawCircleLines', 'void', ['number', 'number', 'number', 'pointer'])
  raylib.DrawCircleLines = (centerX, centerY, radius, color) => _DrawCircleLines(centerX, centerY, radius, color._address)

  // Draw ellipse: DrawEllipse(int, int, float, float, Color) => void
  const _DrawEllipse = mod.cwrap('DrawEllipse', 'void', ['number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawEllipse = (centerX, centerY, radiusH, radiusV, color) => _DrawEllipse(centerX, centerY, radiusH, radiusV, color._address)

  // Draw ellipse outline: DrawEllipseLines(int, int, float, float, Color) => void
  const _DrawEllipseLines = mod.cwrap('DrawEllipseLines', 'void', ['number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawEllipseLines = (centerX, centerY, radiusH, radiusV, color) => _DrawEllipseLines(centerX, centerY, radiusH, radiusV, color._address)

  // Draw ring: DrawRing(Vector2, float, float, float, float, int, Color) => void
  const _DrawRing = mod.cwrap('DrawRing', 'void', ['pointer', 'number', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawRing = (center, innerRadius, outerRadius, startAngle, endAngle, segments, color) => _DrawRing(center._address, innerRadius, outerRadius, startAngle, endAngle, segments, color._address)

  // Draw ring outline: DrawRingLines(Vector2, float, float, float, float, int, Color) => void
  const _DrawRingLines = mod.cwrap('DrawRingLines', 'void', ['pointer', 'number', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawRingLines = (center, innerRadius, outerRadius, startAngle, endAngle, segments, color) => _DrawRingLines(center._address, innerRadius, outerRadius, startAngle, endAngle, segments, color._address)

  // Draw a color-filled rectangle: DrawRectangle(int, int, int, int, Color) => void
  const _DrawRectangle = mod.cwrap('DrawRectangle', 'void', ['number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawRectangle = (posX, posY, width, height, color) => _DrawRectangle(posX, posY, width, height, color._address)

  // Draw a color-filled rectangle (Vector version): DrawRectangleV(Vector2, Vector2, Color) => void
  const _DrawRectangleV = mod.cwrap('DrawRectangleV', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.DrawRectangleV = (position, size, color) => _DrawRectangleV(position._address, size._address, color._address)

  // Draw a color-filled rectangle: DrawRectangleRec(Rectangle, Color) => void
  const _DrawRectangleRec = mod.cwrap('DrawRectangleRec', 'void', ['pointer', 'pointer'])
  raylib.DrawRectangleRec = (rec, color) => _DrawRectangleRec(rec._address, color._address)

  // Draw a color-filled rectangle with pro parameters: DrawRectanglePro(Rectangle, Vector2, float, Color) => void
  const _DrawRectanglePro = mod.cwrap('DrawRectanglePro', 'void', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawRectanglePro = (rec, origin, rotation, color) => _DrawRectanglePro(rec._address, origin._address, rotation, color._address)

  // Draw a vertical-gradient-filled rectangle: DrawRectangleGradientV(int, int, int, int, Color, Color) => void
  const _DrawRectangleGradientV = mod.cwrap('DrawRectangleGradientV', 'void', ['number', 'number', 'number', 'number', 'pointer', 'pointer'])
  raylib.DrawRectangleGradientV = (posX, posY, width, height, color1, color2) => _DrawRectangleGradientV(posX, posY, width, height, color1._address, color2._address)

  // Draw a horizontal-gradient-filled rectangle: DrawRectangleGradientH(int, int, int, int, Color, Color) => void
  const _DrawRectangleGradientH = mod.cwrap('DrawRectangleGradientH', 'void', ['number', 'number', 'number', 'number', 'pointer', 'pointer'])
  raylib.DrawRectangleGradientH = (posX, posY, width, height, color1, color2) => _DrawRectangleGradientH(posX, posY, width, height, color1._address, color2._address)

  // Draw a gradient-filled rectangle with custom vertex colors: DrawRectangleGradientEx(Rectangle, Color, Color, Color, Color) => void
  const _DrawRectangleGradientEx = mod.cwrap('DrawRectangleGradientEx', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer'])
  raylib.DrawRectangleGradientEx = (rec, col1, col2, col3, col4) => _DrawRectangleGradientEx(rec._address, col1._address, col2._address, col3._address, col4._address)

  // Draw rectangle outline: DrawRectangleLines(int, int, int, int, Color) => void
  const _DrawRectangleLines = mod.cwrap('DrawRectangleLines', 'void', ['number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawRectangleLines = (posX, posY, width, height, color) => _DrawRectangleLines(posX, posY, width, height, color._address)

  // Draw rectangle outline with extended parameters: DrawRectangleLinesEx(Rectangle, float, Color) => void
  const _DrawRectangleLinesEx = mod.cwrap('DrawRectangleLinesEx', 'void', ['pointer', 'number', 'pointer'])
  raylib.DrawRectangleLinesEx = (rec, lineThick, color) => _DrawRectangleLinesEx(rec._address, lineThick, color._address)

  // Draw rectangle with rounded edges: DrawRectangleRounded(Rectangle, float, int, Color) => void
  const _DrawRectangleRounded = mod.cwrap('DrawRectangleRounded', 'void', ['pointer', 'number', 'number', 'pointer'])
  raylib.DrawRectangleRounded = (rec, roundness, segments, color) => _DrawRectangleRounded(rec._address, roundness, segments, color._address)

  // Draw rectangle with rounded edges outline: DrawRectangleRoundedLines(Rectangle, float, int, float, Color) => void
  const _DrawRectangleRoundedLines = mod.cwrap('DrawRectangleRoundedLines', 'void', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawRectangleRoundedLines = (rec, roundness, segments, lineThick, color) => _DrawRectangleRoundedLines(rec._address, roundness, segments, lineThick, color._address)

  // Draw a color-filled triangle (vertex in counter-clockwise order!): DrawTriangle(Vector2, Vector2, Vector2, Color) => void
  const _DrawTriangle = mod.cwrap('DrawTriangle', 'void', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.DrawTriangle = (v1, v2, v3, color) => _DrawTriangle(v1._address, v2._address, v3._address, color._address)

  // Draw triangle outline (vertex in counter-clockwise order!): DrawTriangleLines(Vector2, Vector2, Vector2, Color) => void
  const _DrawTriangleLines = mod.cwrap('DrawTriangleLines', 'void', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.DrawTriangleLines = (v1, v2, v3, color) => _DrawTriangleLines(v1._address, v2._address, v3._address, color._address)

  // Draw a triangle fan defined by points (first vertex is the center): DrawTriangleFan(Vector2 *, int, Color) => void
  const _DrawTriangleFan = mod.cwrap('DrawTriangleFan', 'void', ['pointer', 'number', 'pointer'])
  raylib.DrawTriangleFan = (points, pointCount, color) => _DrawTriangleFan(points._address, pointCount, color._address)

  // Draw a triangle strip defined by points: DrawTriangleStrip(Vector2 *, int, Color) => void
  const _DrawTriangleStrip = mod.cwrap('DrawTriangleStrip', 'void', ['pointer', 'number', 'pointer'])
  raylib.DrawTriangleStrip = (points, pointCount, color) => _DrawTriangleStrip(points._address, pointCount, color._address)

  // Draw a regular polygon (Vector version): DrawPoly(Vector2, int, float, float, Color) => void
  const _DrawPoly = mod.cwrap('DrawPoly', 'void', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawPoly = (center, sides, radius, rotation, color) => _DrawPoly(center._address, sides, radius, rotation, color._address)

  // Draw a polygon outline of n sides: DrawPolyLines(Vector2, int, float, float, Color) => void
  const _DrawPolyLines = mod.cwrap('DrawPolyLines', 'void', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawPolyLines = (center, sides, radius, rotation, color) => _DrawPolyLines(center._address, sides, radius, rotation, color._address)

  // Draw a polygon outline of n sides with extended parameters: DrawPolyLinesEx(Vector2, int, float, float, float, Color) => void
  const _DrawPolyLinesEx = mod.cwrap('DrawPolyLinesEx', 'void', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawPolyLinesEx = (center, sides, radius, rotation, lineThick, color) => _DrawPolyLinesEx(center._address, sides, radius, rotation, lineThick, color._address)

  // Check collision between two rectangles: CheckCollisionRecs(Rectangle, Rectangle) => bool
  const _CheckCollisionRecs = mod.cwrap('CheckCollisionRecs', 'void', ['pointer', 'pointer'])
  raylib.CheckCollisionRecs = (rec1, rec2) => _CheckCollisionRecs(rec1._address, rec2._address)

  // Check collision between two circles: CheckCollisionCircles(Vector2, float, Vector2, float) => bool
  const _CheckCollisionCircles = mod.cwrap('CheckCollisionCircles', 'void', ['pointer', 'number', 'pointer', 'number'])
  raylib.CheckCollisionCircles = (center1, radius1, center2, radius2) => _CheckCollisionCircles(center1._address, radius1, center2._address, radius2)

  // Check collision between circle and rectangle: CheckCollisionCircleRec(Vector2, float, Rectangle) => bool
  const _CheckCollisionCircleRec = mod.cwrap('CheckCollisionCircleRec', 'void', ['pointer', 'number', 'pointer'])
  raylib.CheckCollisionCircleRec = (center, radius, rec) => _CheckCollisionCircleRec(center._address, radius, rec._address)

  // Check if point is inside rectangle: CheckCollisionPointRec(Vector2, Rectangle) => bool
  const _CheckCollisionPointRec = mod.cwrap('CheckCollisionPointRec', 'void', ['pointer', 'pointer'])
  raylib.CheckCollisionPointRec = (point, rec) => _CheckCollisionPointRec(point._address, rec._address)

  // Check if point is inside circle: CheckCollisionPointCircle(Vector2, Vector2, float) => bool
  const _CheckCollisionPointCircle = mod.cwrap('CheckCollisionPointCircle', 'void', ['pointer', 'pointer', 'number'])
  raylib.CheckCollisionPointCircle = (point, center, radius) => _CheckCollisionPointCircle(point._address, center._address, radius)

  // Check if point is inside a triangle: CheckCollisionPointTriangle(Vector2, Vector2, Vector2, Vector2) => bool
  const _CheckCollisionPointTriangle = mod.cwrap('CheckCollisionPointTriangle', 'void', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.CheckCollisionPointTriangle = (point, p1, p2, p3) => _CheckCollisionPointTriangle(point._address, p1._address, p2._address, p3._address)

  // Check if point is within a polygon described by array of vertices: CheckCollisionPointPoly(Vector2, Vector2 *, int) => bool
  const _CheckCollisionPointPoly = mod.cwrap('CheckCollisionPointPoly', 'void', ['pointer', 'pointer', 'number'])
  raylib.CheckCollisionPointPoly = (point, points, pointCount) => _CheckCollisionPointPoly(point._address, points._address, pointCount)

  // Check the collision between two lines defined by two points each, returns collision point by reference: CheckCollisionLines(Vector2, Vector2, Vector2, Vector2, Vector2 *) => bool
  const _CheckCollisionLines = mod.cwrap('CheckCollisionLines', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer'])
  raylib.CheckCollisionLines = (startPos1, endPos1, startPos2, endPos2, collisionPoint) => _CheckCollisionLines(startPos1._address, endPos1._address, startPos2._address, endPos2._address, collisionPoint._address)

  // Check if point belongs to line created between two points [p1] and [p2] with defined margin in pixels [threshold]: CheckCollisionPointLine(Vector2, Vector2, Vector2, int) => bool
  const _CheckCollisionPointLine = mod.cwrap('CheckCollisionPointLine', 'void', ['pointer', 'pointer', 'pointer', 'number'])
  raylib.CheckCollisionPointLine = (point, p1, p2, threshold) => _CheckCollisionPointLine(point._address, p1._address, p2._address, threshold)

  // Get collision rectangle for two rectangles collision: GetCollisionRec(Rectangle, Rectangle) => Rectangle
  const _GetCollisionRec = mod.cwrap('GetCollisionRec', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GetCollisionRec = (rec1, rec2) => {
    const _ret = new raylib.Rectangle()
    _GetCollisionRec(_ret._address, rec1._address, rec2._address)
    return _ret
  }

  // Load image from file into CPU memory (RAM): LoadImage(const char *) => Image
  const _LoadImage = mod.cwrap('LoadImage', 'void', ['pointer', 'string'])
  raylib.LoadImage = async (fileName, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Image()
    _LoadImage(_ret._address, fileName)
    return _ret
  }

  // Load image from RAW file data: LoadImageRaw(const char *, int, int, int, int) => Image
  const _LoadImageRaw = mod.cwrap('LoadImageRaw', 'void', ['pointer', 'string', 'number', 'number', 'number', 'number'])
  raylib.LoadImageRaw = async (fileName, width, height, format, headerSize, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Image()
    _LoadImageRaw(_ret._address, fileName, width, height, format, headerSize)
    return _ret
  }

  // Load image sequence from file (frames appended to image.data): LoadImageAnim(const char *, int *) => Image
  const _LoadImageAnim = mod.cwrap('LoadImageAnim', 'void', ['pointer', 'string', 'pointer'])
  raylib.LoadImageAnim = async (fileName, frames, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Image()
    _LoadImageAnim(_ret._address, fileName, frames._address)
    return _ret
  }

  // Load image from memory buffer, fileType refers to extension: i.e. '.png': LoadImageFromMemory(const char *, const unsigned char *, int) => Image
  const _LoadImageFromMemory = mod.cwrap('LoadImageFromMemory', 'void', ['pointer', 'string', 'pointer', 'number'])
  raylib.LoadImageFromMemory = (fileType, fileData, dataSize) => {
    const _ret = new raylib.Image()
    _LoadImageFromMemory(_ret._address, fileType, fileData._address, dataSize)
    return _ret
  }

  // Load image from GPU texture data: LoadImageFromTexture(Texture2D) => Image
  const _LoadImageFromTexture = mod.cwrap('LoadImageFromTexture', 'void', ['pointer', 'pointer'])
  raylib.LoadImageFromTexture = (texture) => {
    const _ret = new raylib.Image()
    _LoadImageFromTexture(_ret._address, texture._address)
    return _ret
  }

  // Load image from screen buffer and (screenshot): LoadImageFromScreen() => Image
  const _LoadImageFromScreen = mod.cwrap('LoadImageFromScreen', 'void', ['pointer'])
  raylib.LoadImageFromScreen = () => {
    const _ret = new raylib.Image()
    _LoadImageFromScreen(_ret._address)
    return _ret
  }

  // Check if an image is ready: IsImageReady(Image) => bool
  const _IsImageReady = mod.cwrap('IsImageReady', 'void', ['pointer'])
  raylib.IsImageReady = (image) => _IsImageReady(image._address)

  // Unload image from CPU memory (RAM): UnloadImage(Image) => void
  const _UnloadImage = mod.cwrap('UnloadImage', 'void', ['pointer'])
  raylib.UnloadImage = (image) => _UnloadImage(image._address)

  // Export image data to file, returns true on success: ExportImage(Image, const char *) => bool
  const _ExportImage = mod.cwrap('ExportImage', 'void', ['pointer', 'string'])
  raylib.ExportImage = (image, fileName) => _ExportImage(image._address, fileName)

  // Export image as code file defining an array of bytes, returns true on success: ExportImageAsCode(Image, const char *) => bool
  const _ExportImageAsCode = mod.cwrap('ExportImageAsCode', 'void', ['pointer', 'string'])
  raylib.ExportImageAsCode = (image, fileName) => _ExportImageAsCode(image._address, fileName)

  // Generate image: plain color: GenImageColor(int, int, Color) => Image
  const _GenImageColor = mod.cwrap('GenImageColor', 'void', ['pointer', 'number', 'number', 'pointer'])
  raylib.GenImageColor = (width, height, color) => {
    const _ret = new raylib.Image()
    _GenImageColor(_ret._address, width, height, color._address)
    return _ret
  }

  // Generate image: linear gradient, direction in degrees [0..360], 0=Vertical gradient: GenImageGradientLinear(int, int, int, Color, Color) => Image
  const _GenImageGradientLinear = mod.cwrap('GenImageGradientLinear', 'void', ['pointer', 'number', 'number', 'number', 'pointer', 'pointer'])
  raylib.GenImageGradientLinear = (width, height, direction, start, end) => {
    const _ret = new raylib.Image()
    _GenImageGradientLinear(_ret._address, width, height, direction, start._address, end._address)
    return _ret
  }

  // Generate image: radial gradient: GenImageGradientRadial(int, int, float, Color, Color) => Image
  const _GenImageGradientRadial = mod.cwrap('GenImageGradientRadial', 'void', ['pointer', 'number', 'number', 'number', 'pointer', 'pointer'])
  raylib.GenImageGradientRadial = (width, height, density, inner, outer) => {
    const _ret = new raylib.Image()
    _GenImageGradientRadial(_ret._address, width, height, density, inner._address, outer._address)
    return _ret
  }

  // Generate image: square gradient: GenImageGradientSquare(int, int, float, Color, Color) => Image
  const _GenImageGradientSquare = mod.cwrap('GenImageGradientSquare', 'void', ['pointer', 'number', 'number', 'number', 'pointer', 'pointer'])
  raylib.GenImageGradientSquare = (width, height, density, inner, outer) => {
    const _ret = new raylib.Image()
    _GenImageGradientSquare(_ret._address, width, height, density, inner._address, outer._address)
    return _ret
  }

  // Generate image: checked: GenImageChecked(int, int, int, int, Color, Color) => Image
  const _GenImageChecked = mod.cwrap('GenImageChecked', 'void', ['pointer', 'number', 'number', 'number', 'number', 'pointer', 'pointer'])
  raylib.GenImageChecked = (width, height, checksX, checksY, col1, col2) => {
    const _ret = new raylib.Image()
    _GenImageChecked(_ret._address, width, height, checksX, checksY, col1._address, col2._address)
    return _ret
  }

  // Generate image: white noise: GenImageWhiteNoise(int, int, float) => Image
  const _GenImageWhiteNoise = mod.cwrap('GenImageWhiteNoise', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.GenImageWhiteNoise = (width, height, factor) => {
    const _ret = new raylib.Image()
    _GenImageWhiteNoise(_ret._address, width, height, factor)
    return _ret
  }

  // Generate image: perlin noise: GenImagePerlinNoise(int, int, int, int, float) => Image
  const _GenImagePerlinNoise = mod.cwrap('GenImagePerlinNoise', 'void', ['pointer', 'number', 'number', 'number', 'number', 'number'])
  raylib.GenImagePerlinNoise = (width, height, offsetX, offsetY, scale) => {
    const _ret = new raylib.Image()
    _GenImagePerlinNoise(_ret._address, width, height, offsetX, offsetY, scale)
    return _ret
  }

  // Generate image: cellular algorithm, bigger tileSize means bigger cells: GenImageCellular(int, int, int) => Image
  const _GenImageCellular = mod.cwrap('GenImageCellular', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.GenImageCellular = (width, height, tileSize) => {
    const _ret = new raylib.Image()
    _GenImageCellular(_ret._address, width, height, tileSize)
    return _ret
  }

  // Generate image: grayscale image from text data: GenImageText(int, int, const char *) => Image
  const _GenImageText = mod.cwrap('GenImageText', 'void', ['pointer', 'number', 'number', 'string'])
  raylib.GenImageText = (width, height, text) => {
    const _ret = new raylib.Image()
    _GenImageText(_ret._address, width, height, text)
    return _ret
  }

  // Create an image duplicate (useful for transformations): ImageCopy(Image) => Image
  const _ImageCopy = mod.cwrap('ImageCopy', 'void', ['pointer', 'pointer'])
  raylib.ImageCopy = (image) => {
    const _ret = new raylib.Image()
    _ImageCopy(_ret._address, image._address)
    return _ret
  }

  // Create an image from another image piece: ImageFromImage(Image, Rectangle) => Image
  const _ImageFromImage = mod.cwrap('ImageFromImage', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.ImageFromImage = (image, rec) => {
    const _ret = new raylib.Image()
    _ImageFromImage(_ret._address, image._address, rec._address)
    return _ret
  }

  // Create an image from text (default font): ImageText(const char *, int, Color) => Image
  const _ImageText = mod.cwrap('ImageText', 'void', ['pointer', 'string', 'number', 'pointer'])
  raylib.ImageText = (text, fontSize, color) => {
    const _ret = new raylib.Image()
    _ImageText(_ret._address, text, fontSize, color._address)
    return _ret
  }

  // Create an image from text (custom sprite font): ImageTextEx(Font, const char *, float, float, Color) => Image
  const _ImageTextEx = mod.cwrap('ImageTextEx', 'void', ['pointer', 'pointer', 'string', 'number', 'number', 'pointer'])
  raylib.ImageTextEx = (font, text, fontSize, spacing, tint) => {
    const _ret = new raylib.Image()
    _ImageTextEx(_ret._address, font._address, text, fontSize, spacing, tint._address)
    return _ret
  }

  // Convert image data to desired format: ImageFormat(Image *, int) => void
  const _ImageFormat = mod.cwrap('ImageFormat', 'void', ['pointer', 'number'])
  raylib.ImageFormat = (image, newFormat) => _ImageFormat(image._address, newFormat)

  // Convert image to POT (power-of-two): ImageToPOT(Image *, Color) => void
  const _ImageToPOT = mod.cwrap('ImageToPOT', 'void', ['pointer', 'pointer'])
  raylib.ImageToPOT = (image, fill) => _ImageToPOT(image._address, fill._address)

  // Crop an image to a defined rectangle: ImageCrop(Image *, Rectangle) => void
  const _ImageCrop = mod.cwrap('ImageCrop', 'void', ['pointer', 'pointer'])
  raylib.ImageCrop = (image, crop) => _ImageCrop(image._address, crop._address)

  // Crop image depending on alpha value: ImageAlphaCrop(Image *, float) => void
  const _ImageAlphaCrop = mod.cwrap('ImageAlphaCrop', 'void', ['pointer', 'number'])
  raylib.ImageAlphaCrop = (image, threshold) => _ImageAlphaCrop(image._address, threshold)

  // Clear alpha channel to desired color: ImageAlphaClear(Image *, Color, float) => void
  const _ImageAlphaClear = mod.cwrap('ImageAlphaClear', 'void', ['pointer', 'pointer', 'number'])
  raylib.ImageAlphaClear = (image, color, threshold) => _ImageAlphaClear(image._address, color._address, threshold)

  // Apply alpha mask to image: ImageAlphaMask(Image *, Image) => void
  const _ImageAlphaMask = mod.cwrap('ImageAlphaMask', 'void', ['pointer', 'pointer'])
  raylib.ImageAlphaMask = (image, alphaMask) => _ImageAlphaMask(image._address, alphaMask._address)

  // Premultiply alpha channel: ImageAlphaPremultiply(Image *) => void
  const _ImageAlphaPremultiply = mod.cwrap('ImageAlphaPremultiply', 'void', ['pointer'])
  raylib.ImageAlphaPremultiply = (image) => _ImageAlphaPremultiply(image._address)

  // Apply Gaussian blur using a box blur approximation: ImageBlurGaussian(Image *, int) => void
  const _ImageBlurGaussian = mod.cwrap('ImageBlurGaussian', 'void', ['pointer', 'number'])
  raylib.ImageBlurGaussian = (image, blurSize) => _ImageBlurGaussian(image._address, blurSize)

  // Resize image (Bicubic scaling algorithm): ImageResize(Image *, int, int) => void
  const _ImageResize = mod.cwrap('ImageResize', 'void', ['pointer', 'number', 'number'])
  raylib.ImageResize = (image, newWidth, newHeight) => _ImageResize(image._address, newWidth, newHeight)

  // Resize image (Nearest-Neighbor scaling algorithm): ImageResizeNN(Image *, int, int) => void
  const _ImageResizeNN = mod.cwrap('ImageResizeNN', 'void', ['pointer', 'number', 'number'])
  raylib.ImageResizeNN = (image, newWidth, newHeight) => _ImageResizeNN(image._address, newWidth, newHeight)

  // Resize canvas and fill with color: ImageResizeCanvas(Image *, int, int, int, int, Color) => void
  const _ImageResizeCanvas = mod.cwrap('ImageResizeCanvas', 'void', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.ImageResizeCanvas = (image, newWidth, newHeight, offsetX, offsetY, fill) => _ImageResizeCanvas(image._address, newWidth, newHeight, offsetX, offsetY, fill._address)

  // Compute all mipmap levels for a provided image: ImageMipmaps(Image *) => void
  const _ImageMipmaps = mod.cwrap('ImageMipmaps', 'void', ['pointer'])
  raylib.ImageMipmaps = (image) => _ImageMipmaps(image._address)

  // Dither image data to 16bpp or lower (Floyd-Steinberg dithering): ImageDither(Image *, int, int, int, int) => void
  const _ImageDither = mod.cwrap('ImageDither', 'void', ['pointer', 'number', 'number', 'number', 'number'])
  raylib.ImageDither = (image, rBpp, gBpp, bBpp, aBpp) => _ImageDither(image._address, rBpp, gBpp, bBpp, aBpp)

  // Flip image vertically: ImageFlipVertical(Image *) => void
  const _ImageFlipVertical = mod.cwrap('ImageFlipVertical', 'void', ['pointer'])
  raylib.ImageFlipVertical = (image) => _ImageFlipVertical(image._address)

  // Flip image horizontally: ImageFlipHorizontal(Image *) => void
  const _ImageFlipHorizontal = mod.cwrap('ImageFlipHorizontal', 'void', ['pointer'])
  raylib.ImageFlipHorizontal = (image) => _ImageFlipHorizontal(image._address)

  // Rotate image by input angle in degrees (-359 to 359) : ImageRotate(Image *, int) => void
  const _ImageRotate = mod.cwrap('ImageRotate', 'void', ['pointer', 'number'])
  raylib.ImageRotate = (image, degrees) => _ImageRotate(image._address, degrees)

  // Rotate image clockwise 90deg: ImageRotateCW(Image *) => void
  const _ImageRotateCW = mod.cwrap('ImageRotateCW', 'void', ['pointer'])
  raylib.ImageRotateCW = (image) => _ImageRotateCW(image._address)

  // Rotate image counter-clockwise 90deg: ImageRotateCCW(Image *) => void
  const _ImageRotateCCW = mod.cwrap('ImageRotateCCW', 'void', ['pointer'])
  raylib.ImageRotateCCW = (image) => _ImageRotateCCW(image._address)

  // Modify image color: tint: ImageColorTint(Image *, Color) => void
  const _ImageColorTint = mod.cwrap('ImageColorTint', 'void', ['pointer', 'pointer'])
  raylib.ImageColorTint = (image, color) => _ImageColorTint(image._address, color._address)

  // Modify image color: invert: ImageColorInvert(Image *) => void
  const _ImageColorInvert = mod.cwrap('ImageColorInvert', 'void', ['pointer'])
  raylib.ImageColorInvert = (image) => _ImageColorInvert(image._address)

  // Modify image color: grayscale: ImageColorGrayscale(Image *) => void
  const _ImageColorGrayscale = mod.cwrap('ImageColorGrayscale', 'void', ['pointer'])
  raylib.ImageColorGrayscale = (image) => _ImageColorGrayscale(image._address)

  // Modify image color: contrast (-100 to 100): ImageColorContrast(Image *, float) => void
  const _ImageColorContrast = mod.cwrap('ImageColorContrast', 'void', ['pointer', 'number'])
  raylib.ImageColorContrast = (image, contrast) => _ImageColorContrast(image._address, contrast)

  // Modify image color: brightness (-255 to 255): ImageColorBrightness(Image *, int) => void
  const _ImageColorBrightness = mod.cwrap('ImageColorBrightness', 'void', ['pointer', 'number'])
  raylib.ImageColorBrightness = (image, brightness) => _ImageColorBrightness(image._address, brightness)

  // Modify image color: replace color: ImageColorReplace(Image *, Color, Color) => void
  const _ImageColorReplace = mod.cwrap('ImageColorReplace', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.ImageColorReplace = (image, color, replace) => _ImageColorReplace(image._address, color._address, replace._address)

  // Load color data from image as a Color array (RGBA - 32bit): LoadImageColors(Image) => Color *
  const _LoadImageColors = mod.cwrap('LoadImageColors', 'void', ['pointer', 'pointer'])
  raylib.LoadImageColors = (image) => {
    const _ret = new raylib.Color()
    _LoadImageColors(_ret._address, image._address)
    return _ret
  }

  // Load colors palette from image as a Color array (RGBA - 32bit): LoadImagePalette(Image, int, int *) => Color *
  const _LoadImagePalette = mod.cwrap('LoadImagePalette', 'void', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.LoadImagePalette = (image, maxPaletteSize, colorCount) => {
    const _ret = new raylib.Color()
    _LoadImagePalette(_ret._address, image._address, maxPaletteSize, colorCount._address)
    return _ret
  }

  // Unload color data loaded with LoadImageColors(): UnloadImageColors(Color *) => void
  const _UnloadImageColors = mod.cwrap('UnloadImageColors', 'void', ['pointer'])
  raylib.UnloadImageColors = (colors) => _UnloadImageColors(colors._address)

  // Unload colors palette loaded with LoadImagePalette(): UnloadImagePalette(Color *) => void
  const _UnloadImagePalette = mod.cwrap('UnloadImagePalette', 'void', ['pointer'])
  raylib.UnloadImagePalette = (colors) => _UnloadImagePalette(colors._address)

  // Get image alpha border rectangle: GetImageAlphaBorder(Image, float) => Rectangle
  const _GetImageAlphaBorder = mod.cwrap('GetImageAlphaBorder', 'void', ['pointer', 'pointer', 'number'])
  raylib.GetImageAlphaBorder = (image, threshold) => {
    const _ret = new raylib.Rectangle()
    _GetImageAlphaBorder(_ret._address, image._address, threshold)
    return _ret
  }

  // Get image pixel color at (x, y) position: GetImageColor(Image, int, int) => Color
  const _GetImageColor = mod.cwrap('GetImageColor', 'void', ['pointer', 'pointer', 'number', 'number'])
  raylib.GetImageColor = (image, x, y) => {
    const _ret = new raylib.Color()
    _GetImageColor(_ret._address, image._address, x, y)
    return _ret
  }

  // Clear image background with given color: ImageClearBackground(Image *, Color) => void
  const _ImageClearBackground = mod.cwrap('ImageClearBackground', 'void', ['pointer', 'pointer'])
  raylib.ImageClearBackground = (dst, color) => _ImageClearBackground(dst._address, color._address)

  // Draw pixel within an image: ImageDrawPixel(Image *, int, int, Color) => void
  const _ImageDrawPixel = mod.cwrap('ImageDrawPixel', 'void', ['pointer', 'number', 'number', 'pointer'])
  raylib.ImageDrawPixel = (dst, posX, posY, color) => _ImageDrawPixel(dst._address, posX, posY, color._address)

  // Draw pixel within an image (Vector version): ImageDrawPixelV(Image *, Vector2, Color) => void
  const _ImageDrawPixelV = mod.cwrap('ImageDrawPixelV', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.ImageDrawPixelV = (dst, position, color) => _ImageDrawPixelV(dst._address, position._address, color._address)

  // Draw line within an image: ImageDrawLine(Image *, int, int, int, int, Color) => void
  const _ImageDrawLine = mod.cwrap('ImageDrawLine', 'void', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.ImageDrawLine = (dst, startPosX, startPosY, endPosX, endPosY, color) => _ImageDrawLine(dst._address, startPosX, startPosY, endPosX, endPosY, color._address)

  // Draw line within an image (Vector version): ImageDrawLineV(Image *, Vector2, Vector2, Color) => void
  const _ImageDrawLineV = mod.cwrap('ImageDrawLineV', 'void', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.ImageDrawLineV = (dst, start, end, color) => _ImageDrawLineV(dst._address, start._address, end._address, color._address)

  // Draw a filled circle within an image: ImageDrawCircle(Image *, int, int, int, Color) => void
  const _ImageDrawCircle = mod.cwrap('ImageDrawCircle', 'void', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.ImageDrawCircle = (dst, centerX, centerY, radius, color) => _ImageDrawCircle(dst._address, centerX, centerY, radius, color._address)

  // Draw a filled circle within an image (Vector version): ImageDrawCircleV(Image *, Vector2, int, Color) => void
  const _ImageDrawCircleV = mod.cwrap('ImageDrawCircleV', 'void', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.ImageDrawCircleV = (dst, center, radius, color) => _ImageDrawCircleV(dst._address, center._address, radius, color._address)

  // Draw circle outline within an image: ImageDrawCircleLines(Image *, int, int, int, Color) => void
  const _ImageDrawCircleLines = mod.cwrap('ImageDrawCircleLines', 'void', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.ImageDrawCircleLines = (dst, centerX, centerY, radius, color) => _ImageDrawCircleLines(dst._address, centerX, centerY, radius, color._address)

  // Draw circle outline within an image (Vector version): ImageDrawCircleLinesV(Image *, Vector2, int, Color) => void
  const _ImageDrawCircleLinesV = mod.cwrap('ImageDrawCircleLinesV', 'void', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.ImageDrawCircleLinesV = (dst, center, radius, color) => _ImageDrawCircleLinesV(dst._address, center._address, radius, color._address)

  // Draw rectangle within an image: ImageDrawRectangle(Image *, int, int, int, int, Color) => void
  const _ImageDrawRectangle = mod.cwrap('ImageDrawRectangle', 'void', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.ImageDrawRectangle = (dst, posX, posY, width, height, color) => _ImageDrawRectangle(dst._address, posX, posY, width, height, color._address)

  // Draw rectangle within an image (Vector version): ImageDrawRectangleV(Image *, Vector2, Vector2, Color) => void
  const _ImageDrawRectangleV = mod.cwrap('ImageDrawRectangleV', 'void', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.ImageDrawRectangleV = (dst, position, size, color) => _ImageDrawRectangleV(dst._address, position._address, size._address, color._address)

  // Draw rectangle within an image: ImageDrawRectangleRec(Image *, Rectangle, Color) => void
  const _ImageDrawRectangleRec = mod.cwrap('ImageDrawRectangleRec', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.ImageDrawRectangleRec = (dst, rec, color) => _ImageDrawRectangleRec(dst._address, rec._address, color._address)

  // Draw rectangle lines within an image: ImageDrawRectangleLines(Image *, Rectangle, int, Color) => void
  const _ImageDrawRectangleLines = mod.cwrap('ImageDrawRectangleLines', 'void', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.ImageDrawRectangleLines = (dst, rec, thick, color) => _ImageDrawRectangleLines(dst._address, rec._address, thick, color._address)

  // Draw a source image within a destination image (tint applied to source): ImageDraw(Image *, Image, Rectangle, Rectangle, Color) => void
  const _ImageDraw = mod.cwrap('ImageDraw', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer'])
  raylib.ImageDraw = (dst, src, srcRec, dstRec, tint) => _ImageDraw(dst._address, src._address, srcRec._address, dstRec._address, tint._address)

  // Draw text (using default font) within an image (destination): ImageDrawText(Image *, const char *, int, int, int, Color) => void
  const _ImageDrawText = mod.cwrap('ImageDrawText', 'void', ['pointer', 'string', 'number', 'number', 'number', 'pointer'])
  raylib.ImageDrawText = (dst, text, posX, posY, fontSize, color) => _ImageDrawText(dst._address, text, posX, posY, fontSize, color._address)

  // Draw text (custom sprite font) within an image (destination): ImageDrawTextEx(Image *, Font, const char *, Vector2, float, float, Color) => void
  const _ImageDrawTextEx = mod.cwrap('ImageDrawTextEx', 'void', ['pointer', 'pointer', 'string', 'pointer', 'number', 'number', 'pointer'])
  raylib.ImageDrawTextEx = (dst, font, text, position, fontSize, spacing, tint) => _ImageDrawTextEx(dst._address, font._address, text, position._address, fontSize, spacing, tint._address)

  // Load texture from file into GPU memory (VRAM): LoadTexture(const char *) => Texture2D
  const _LoadTexture = mod.cwrap('LoadTexture', 'void', ['pointer', 'string'])
  raylib.LoadTexture = async (fileName, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Texture2D()
    _LoadTexture(_ret._address, fileName)
    return _ret
  }

  // Load texture from image data: LoadTextureFromImage(Image) => Texture2D
  const _LoadTextureFromImage = mod.cwrap('LoadTextureFromImage', 'void', ['pointer', 'pointer'])
  raylib.LoadTextureFromImage = (image) => {
    const _ret = new raylib.Texture2D()
    _LoadTextureFromImage(_ret._address, image._address)
    return _ret
  }

  // Load cubemap from image, multiple image cubemap layouts supported: LoadTextureCubemap(Image, int) => TextureCubemap
  const _LoadTextureCubemap = mod.cwrap('LoadTextureCubemap', 'void', ['pointer', 'pointer', 'number'])
  raylib.LoadTextureCubemap = (image, layout) => {
    const _ret = new raylib.TextureCubemap()
    _LoadTextureCubemap(_ret._address, image._address, layout)
    return _ret
  }

  // Load texture for rendering (framebuffer): LoadRenderTexture(int, int) => RenderTexture2D
  const _LoadRenderTexture = mod.cwrap('LoadRenderTexture', 'void', ['pointer', 'number', 'number'])
  raylib.LoadRenderTexture = (width, height) => {
    const _ret = new raylib.RenderTexture2D()
    _LoadRenderTexture(_ret._address, width, height)
    return _ret
  }

  // Check if a texture is ready: IsTextureReady(Texture2D) => bool
  const _IsTextureReady = mod.cwrap('IsTextureReady', 'void', ['pointer'])
  raylib.IsTextureReady = (texture) => _IsTextureReady(texture._address)

  // Unload texture from GPU memory (VRAM): UnloadTexture(Texture2D) => void
  const _UnloadTexture = mod.cwrap('UnloadTexture', 'void', ['pointer'])
  raylib.UnloadTexture = (texture) => _UnloadTexture(texture._address)

  // Check if a render texture is ready: IsRenderTextureReady(RenderTexture2D) => bool
  const _IsRenderTextureReady = mod.cwrap('IsRenderTextureReady', 'void', ['pointer'])
  raylib.IsRenderTextureReady = (target) => _IsRenderTextureReady(target._address)

  // Unload render texture from GPU memory (VRAM): UnloadRenderTexture(RenderTexture2D) => void
  const _UnloadRenderTexture = mod.cwrap('UnloadRenderTexture', 'void', ['pointer'])
  raylib.UnloadRenderTexture = (target) => _UnloadRenderTexture(target._address)

  // Update GPU texture with new data: UpdateTexture(Texture2D, const void *) => void
  const _UpdateTexture = mod.cwrap('UpdateTexture', 'void', ['pointer', 'pointer'])
  raylib.UpdateTexture = (texture, pixels) => _UpdateTexture(texture._address, pixels._address)

  // Update GPU texture rectangle with new data: UpdateTextureRec(Texture2D, Rectangle, const void *) => void
  const _UpdateTextureRec = mod.cwrap('UpdateTextureRec', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.UpdateTextureRec = (texture, rec, pixels) => _UpdateTextureRec(texture._address, rec._address, pixels._address)

  // Generate GPU mipmaps for a texture: GenTextureMipmaps(Texture2D *) => void
  const _GenTextureMipmaps = mod.cwrap('GenTextureMipmaps', 'void', ['pointer'])
  raylib.GenTextureMipmaps = (texture) => _GenTextureMipmaps(texture._address)

  // Set texture scaling filter mode: SetTextureFilter(Texture2D, int) => void
  const _SetTextureFilter = mod.cwrap('SetTextureFilter', 'void', ['pointer', 'number'])
  raylib.SetTextureFilter = (texture, filter) => _SetTextureFilter(texture._address, filter)

  // Set texture wrapping mode: SetTextureWrap(Texture2D, int) => void
  const _SetTextureWrap = mod.cwrap('SetTextureWrap', 'void', ['pointer', 'number'])
  raylib.SetTextureWrap = (texture, wrap) => _SetTextureWrap(texture._address, wrap)

  // Draw a Texture2D: DrawTexture(Texture2D, int, int, Color) => void
  const _DrawTexture = mod.cwrap('DrawTexture', 'void', ['pointer', 'number', 'number', 'pointer'])
  raylib.DrawTexture = (texture, posX, posY, tint) => _DrawTexture(texture._address, posX, posY, tint._address)

  // Draw a Texture2D with position defined as Vector2: DrawTextureV(Texture2D, Vector2, Color) => void
  const _DrawTextureV = mod.cwrap('DrawTextureV', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.DrawTextureV = (texture, position, tint) => _DrawTextureV(texture._address, position._address, tint._address)

  // Draw a Texture2D with extended parameters: DrawTextureEx(Texture2D, Vector2, float, float, Color) => void
  const _DrawTextureEx = mod.cwrap('DrawTextureEx', 'void', ['pointer', 'pointer', 'number', 'number', 'pointer'])
  raylib.DrawTextureEx = (texture, position, rotation, scale, tint) => _DrawTextureEx(texture._address, position._address, rotation, scale, tint._address)

  // Draw a part of a texture defined by a rectangle: DrawTextureRec(Texture2D, Rectangle, Vector2, Color) => void
  const _DrawTextureRec = mod.cwrap('DrawTextureRec', 'void', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.DrawTextureRec = (texture, source, position, tint) => _DrawTextureRec(texture._address, source._address, position._address, tint._address)

  // Draw a part of a texture defined by a rectangle with 'pro' parameters: DrawTexturePro(Texture2D, Rectangle, Rectangle, Vector2, float, Color) => void
  const _DrawTexturePro = mod.cwrap('DrawTexturePro', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawTexturePro = (texture, source, dest, origin, rotation, tint) => _DrawTexturePro(texture._address, source._address, dest._address, origin._address, rotation, tint._address)

  // Draws a texture (or part of it) that stretches or shrinks nicely: DrawTextureNPatch(Texture2D, NPatchInfo, Rectangle, Vector2, float, Color) => void
  const _DrawTextureNPatch = mod.cwrap('DrawTextureNPatch', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawTextureNPatch = (texture, nPatchInfo, dest, origin, rotation, tint) => _DrawTextureNPatch(texture._address, nPatchInfo._address, dest._address, origin._address, rotation, tint._address)

  // Get color with alpha applied, alpha goes from 0.0f to 1.0f: Fade(Color, float) => Color
  const _Fade = mod.cwrap('Fade', 'void', ['pointer', 'pointer', 'number'])
  raylib.Fade = (color, alpha) => {
    const _ret = new raylib.Color()
    _Fade(_ret._address, color._address, alpha)
    return _ret
  }

  // Get hexadecimal value for a Color: ColorToInt(Color) => int
  const _ColorToInt = mod.cwrap('ColorToInt', 'void', ['pointer'])
  raylib.ColorToInt = (color) => _ColorToInt(color._address)

  // Get Color normalized as float [0..1]: ColorNormalize(Color) => Vector4
  const _ColorNormalize = mod.cwrap('ColorNormalize', 'void', ['pointer', 'pointer'])
  raylib.ColorNormalize = (color) => {
    const _ret = new raylib.Vector4()
    _ColorNormalize(_ret._address, color._address)
    return _ret
  }

  // Get Color from normalized values [0..1]: ColorFromNormalized(Vector4) => Color
  const _ColorFromNormalized = mod.cwrap('ColorFromNormalized', 'void', ['pointer', 'pointer'])
  raylib.ColorFromNormalized = (normalized) => {
    const _ret = new raylib.Color()
    _ColorFromNormalized(_ret._address, normalized._address)
    return _ret
  }

  // Get HSV values for a Color, hue [0..360], saturation/value [0..1]: ColorToHSV(Color) => Vector3
  const _ColorToHSV = mod.cwrap('ColorToHSV', 'void', ['pointer', 'pointer'])
  raylib.ColorToHSV = (color) => {
    const _ret = new raylib.Vector3()
    _ColorToHSV(_ret._address, color._address)
    return _ret
  }

  // Get a Color from HSV values, hue [0..360], saturation/value [0..1]: ColorFromHSV(float, float, float) => Color
  const _ColorFromHSV = mod.cwrap('ColorFromHSV', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.ColorFromHSV = (hue, saturation, value) => {
    const _ret = new raylib.Color()
    _ColorFromHSV(_ret._address, hue, saturation, value)
    return _ret
  }

  // Get color multiplied with another color: ColorTint(Color, Color) => Color
  const _ColorTint = mod.cwrap('ColorTint', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.ColorTint = (color, tint) => {
    const _ret = new raylib.Color()
    _ColorTint(_ret._address, color._address, tint._address)
    return _ret
  }

  // Get color with brightness correction, brightness factor goes from -1.0f to 1.0f: ColorBrightness(Color, float) => Color
  const _ColorBrightness = mod.cwrap('ColorBrightness', 'void', ['pointer', 'pointer', 'number'])
  raylib.ColorBrightness = (color, factor) => {
    const _ret = new raylib.Color()
    _ColorBrightness(_ret._address, color._address, factor)
    return _ret
  }

  // Get color with contrast correction, contrast values between -1.0f and 1.0f: ColorContrast(Color, float) => Color
  const _ColorContrast = mod.cwrap('ColorContrast', 'void', ['pointer', 'pointer', 'number'])
  raylib.ColorContrast = (color, contrast) => {
    const _ret = new raylib.Color()
    _ColorContrast(_ret._address, color._address, contrast)
    return _ret
  }

  // Get color with alpha applied, alpha goes from 0.0f to 1.0f: ColorAlpha(Color, float) => Color
  const _ColorAlpha = mod.cwrap('ColorAlpha', 'void', ['pointer', 'pointer', 'number'])
  raylib.ColorAlpha = (color, alpha) => {
    const _ret = new raylib.Color()
    _ColorAlpha(_ret._address, color._address, alpha)
    return _ret
  }

  // Get src alpha-blended into dst color with tint: ColorAlphaBlend(Color, Color, Color) => Color
  const _ColorAlphaBlend = mod.cwrap('ColorAlphaBlend', 'void', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.ColorAlphaBlend = (dst, src, tint) => {
    const _ret = new raylib.Color()
    _ColorAlphaBlend(_ret._address, dst._address, src._address, tint._address)
    return _ret
  }

  // Get Color structure from hexadecimal value: GetColor(unsigned int) => Color
  const _GetColor = mod.cwrap('GetColor', 'void', ['pointer', 'number'])
  raylib.GetColor = (hexValue) => {
    const _ret = new raylib.Color()
    _GetColor(_ret._address, hexValue)
    return _ret
  }

  // Get Color from a source pixel pointer of certain format: GetPixelColor(void *, int) => Color
  const _GetPixelColor = mod.cwrap('GetPixelColor', 'void', ['pointer', 'pointer', 'number'])
  raylib.GetPixelColor = (srcPtr, format) => {
    const _ret = new raylib.Color()
    _GetPixelColor(_ret._address, srcPtr._address, format)
    return _ret
  }

  // Set color formatted into destination pixel pointer: SetPixelColor(void *, Color, int) => void
  const _SetPixelColor = mod.cwrap('SetPixelColor', 'void', ['pointer', 'pointer', 'number'])
  raylib.SetPixelColor = (dstPtr, color, format) => _SetPixelColor(dstPtr._address, color._address, format)

  // Get pixel data size in bytes for certain format: GetPixelDataSize(int, int, int) => int
  const _GetPixelDataSize = mod.cwrap('GetPixelDataSize', 'void', ['number', 'number', 'number'])
  raylib.GetPixelDataSize = (width, height, format) => _GetPixelDataSize(width, height, format)

  // Get the default Font: GetFontDefault() => Font
  const _GetFontDefault = mod.cwrap('GetFontDefault', 'void', ['pointer'])
  raylib.GetFontDefault = () => {
    const _ret = new raylib.Font()
    _GetFontDefault(_ret._address)
    return _ret
  }

  // Load font from file into GPU memory (VRAM): LoadFont(const char *) => Font
  const _LoadFont = mod.cwrap('LoadFont', 'void', ['pointer', 'string'])
  raylib.LoadFont = async (fileName, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Font()
    _LoadFont(_ret._address, fileName)
    return _ret
  }

  // Load font from file with extended parameters, use NULL for fontChars and 0 for glyphCount to load the default character set: LoadFontEx(const char *, int, int *, int) => Font
  const _LoadFontEx = mod.cwrap('LoadFontEx', 'void', ['pointer', 'string', 'number', 'pointer', 'number'])
  raylib.LoadFontEx = async (fileName, fontSize, fontChars, glyphCount, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Font()
    _LoadFontEx(_ret._address, fileName, fontSize, fontChars._address, glyphCount)
    return _ret
  }

  // Load font from Image (XNA style): LoadFontFromImage(Image, Color, int) => Font
  const _LoadFontFromImage = mod.cwrap('LoadFontFromImage', 'void', ['pointer', 'pointer', 'pointer', 'number'])
  raylib.LoadFontFromImage = (image, key, firstChar) => {
    const _ret = new raylib.Font()
    _LoadFontFromImage(_ret._address, image._address, key._address, firstChar)
    return _ret
  }

  // Load font from memory buffer, fileType refers to extension: i.e. '.ttf': LoadFontFromMemory(const char *, const unsigned char *, int, int, int *, int) => Font
  const _LoadFontFromMemory = mod.cwrap('LoadFontFromMemory', 'void', ['pointer', 'string', 'pointer', 'number', 'number', 'pointer', 'number'])
  raylib.LoadFontFromMemory = (fileType, fileData, dataSize, fontSize, fontChars, glyphCount) => {
    const _ret = new raylib.Font()
    _LoadFontFromMemory(_ret._address, fileType, fileData._address, dataSize, fontSize, fontChars._address, glyphCount)
    return _ret
  }

  // Check if a font is ready: IsFontReady(Font) => bool
  const _IsFontReady = mod.cwrap('IsFontReady', 'void', ['pointer'])
  raylib.IsFontReady = (font) => _IsFontReady(font._address)

  // Load font data for further use: LoadFontData(const unsigned char *, int, int, int *, int, int) => GlyphInfo *
  const _LoadFontData = mod.cwrap('LoadFontData', 'void', ['pointer', 'pointer', 'number', 'number', 'pointer', 'number', 'number'])
  raylib.LoadFontData = (fileData, dataSize, fontSize, fontChars, glyphCount, type) => {
    const _ret = new raylib.GlyphInfo()
    _LoadFontData(_ret._address, fileData._address, dataSize, fontSize, fontChars._address, glyphCount, type)
    return _ret
  }

  // Generate image font atlas using chars info: GenImageFontAtlas(const GlyphInfo *, Rectangle **, int, int, int, int) => Image
  const _GenImageFontAtlas = mod.cwrap('GenImageFontAtlas', 'void', ['pointer', 'pointer', 'pointer', 'number', 'number', 'number', 'number'])
  raylib.GenImageFontAtlas = (chars, recs, glyphCount, fontSize, padding, packMethod) => {
    const _ret = new raylib.Image()
    _GenImageFontAtlas(_ret._address, chars._address, recs._address, glyphCount, fontSize, padding, packMethod)
    return _ret
  }

  // Unload font chars info data (RAM): UnloadFontData(GlyphInfo *, int) => void
  const _UnloadFontData = mod.cwrap('UnloadFontData', 'void', ['pointer', 'number'])
  raylib.UnloadFontData = (chars, glyphCount) => _UnloadFontData(chars._address, glyphCount)

  // Unload font from GPU memory (VRAM): UnloadFont(Font) => void
  const _UnloadFont = mod.cwrap('UnloadFont', 'void', ['pointer'])
  raylib.UnloadFont = (font) => _UnloadFont(font._address)

  // Export font as code file, returns true on success: ExportFontAsCode(Font, const char *) => bool
  const _ExportFontAsCode = mod.cwrap('ExportFontAsCode', 'void', ['pointer', 'string'])
  raylib.ExportFontAsCode = (font, fileName) => _ExportFontAsCode(font._address, fileName)

  // Draw current FPS: DrawFPS(int, int) => void
  const _DrawFPS = mod.cwrap('DrawFPS', 'void', ['number', 'number'])
  raylib.DrawFPS = (posX, posY) => _DrawFPS(posX, posY)

  // Draw text (using default font): DrawText(const char *, int, int, int, Color) => void
  const _DrawText = mod.cwrap('DrawText', 'void', ['string', 'number', 'number', 'number', 'pointer'])
  raylib.DrawText = (text, posX, posY, fontSize, color) => _DrawText(text, posX, posY, fontSize, color._address)

  // Draw text using font and additional parameters: DrawTextEx(Font, const char *, Vector2, float, float, Color) => void
  const _DrawTextEx = mod.cwrap('DrawTextEx', 'void', ['pointer', 'string', 'pointer', 'number', 'number', 'pointer'])
  raylib.DrawTextEx = (font, text, position, fontSize, spacing, tint) => _DrawTextEx(font._address, text, position._address, fontSize, spacing, tint._address)

  // Draw text using Font and pro parameters (rotation): DrawTextPro(Font, const char *, Vector2, Vector2, float, float, float, Color) => void
  const _DrawTextPro = mod.cwrap('DrawTextPro', 'void', ['pointer', 'string', 'pointer', 'pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawTextPro = (font, text, position, origin, rotation, fontSize, spacing, tint) => _DrawTextPro(font._address, text, position._address, origin._address, rotation, fontSize, spacing, tint._address)

  // Draw one character (codepoint): DrawTextCodepoint(Font, int, Vector2, float, Color) => void
  const _DrawTextCodepoint = mod.cwrap('DrawTextCodepoint', 'void', ['pointer', 'number', 'pointer', 'number', 'pointer'])
  raylib.DrawTextCodepoint = (font, codepoint, position, fontSize, tint) => _DrawTextCodepoint(font._address, codepoint, position._address, fontSize, tint._address)

  // Draw multiple character (codepoint): DrawTextCodepoints(Font, const int *, int, Vector2, float, float, Color) => void
  const _DrawTextCodepoints = mod.cwrap('DrawTextCodepoints', 'void', ['pointer', 'pointer', 'number', 'pointer', 'number', 'number', 'pointer'])
  raylib.DrawTextCodepoints = (font, codepoints, count, position, fontSize, spacing, tint) => _DrawTextCodepoints(font._address, codepoints._address, count, position._address, fontSize, spacing, tint._address)

  // Measure string width for default font: MeasureText(const char *, int) => int
  const _MeasureText = mod.cwrap('MeasureText', 'void', ['string', 'number'])
  raylib.MeasureText = (text, fontSize) => _MeasureText(text, fontSize)

  // Measure string size for Font: MeasureTextEx(Font, const char *, float, float) => Vector2
  const _MeasureTextEx = mod.cwrap('MeasureTextEx', 'void', ['pointer', 'pointer', 'string', 'number', 'number'])
  raylib.MeasureTextEx = (font, text, fontSize, spacing) => {
    const _ret = new raylib.Vector2()
    _MeasureTextEx(_ret._address, font._address, text, fontSize, spacing)
    return _ret
  }

  // Get glyph index position in font for a codepoint (unicode character), fallback to '?' if not found: GetGlyphIndex(Font, int) => int
  const _GetGlyphIndex = mod.cwrap('GetGlyphIndex', 'void', ['pointer', 'number'])
  raylib.GetGlyphIndex = (font, codepoint) => _GetGlyphIndex(font._address, codepoint)

  // Get glyph font info data for a codepoint (unicode character), fallback to '?' if not found: GetGlyphInfo(Font, int) => GlyphInfo
  const _GetGlyphInfo = mod.cwrap('GetGlyphInfo', 'void', ['pointer', 'pointer', 'number'])
  raylib.GetGlyphInfo = (font, codepoint) => {
    const _ret = new raylib.GlyphInfo()
    _GetGlyphInfo(_ret._address, font._address, codepoint)
    return _ret
  }

  // Get glyph rectangle in font atlas for a codepoint (unicode character), fallback to '?' if not found: GetGlyphAtlasRec(Font, int) => Rectangle
  const _GetGlyphAtlasRec = mod.cwrap('GetGlyphAtlasRec', 'void', ['pointer', 'pointer', 'number'])
  raylib.GetGlyphAtlasRec = (font, codepoint) => {
    const _ret = new raylib.Rectangle()
    _GetGlyphAtlasRec(_ret._address, font._address, codepoint)
    return _ret
  }

  // Load UTF-8 text encoded from codepoints array: LoadUTF8(const int *, int) => char *
  const _LoadUTF8 = mod.cwrap('LoadUTF8', 'void', ['pointer', 'number'])
  raylib.LoadUTF8 = (codepoints, length) => _LoadUTF8(codepoints._address, length)

  // Unload UTF-8 text encoded from codepoints array: UnloadUTF8(char *) => void
  const _UnloadUTF8 = mod.cwrap('UnloadUTF8', 'void', ['pointer'])
  raylib.UnloadUTF8 = (text) => _UnloadUTF8(text._address)

  // Load all codepoints from a UTF-8 text string, codepoints count returned by parameter: LoadCodepoints(const char *, int *) => int *
  const _LoadCodepoints = mod.cwrap('LoadCodepoints', 'void', ['string', 'pointer'])
  raylib.LoadCodepoints = (text, count) => _LoadCodepoints(text, count._address)

  // Unload codepoints data from memory: UnloadCodepoints(int *) => void
  const _UnloadCodepoints = mod.cwrap('UnloadCodepoints', 'void', ['pointer'])
  raylib.UnloadCodepoints = (codepoints) => _UnloadCodepoints(codepoints._address)

  // Get total number of codepoints in a UTF-8 encoded string: GetCodepointCount(const char *) => int
  const _GetCodepointCount = mod.cwrap('GetCodepointCount', 'void', ['string'])
  raylib.GetCodepointCount = (text) => _GetCodepointCount(text)

  // Get next codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure: GetCodepoint(const char *, int *) => int
  const _GetCodepoint = mod.cwrap('GetCodepoint', 'void', ['string', 'pointer'])
  raylib.GetCodepoint = (text, codepointSize) => _GetCodepoint(text, codepointSize._address)

  // Get next codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure: GetCodepointNext(const char *, int *) => int
  const _GetCodepointNext = mod.cwrap('GetCodepointNext', 'void', ['string', 'pointer'])
  raylib.GetCodepointNext = (text, codepointSize) => _GetCodepointNext(text, codepointSize._address)

  // Get previous codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure: GetCodepointPrevious(const char *, int *) => int
  const _GetCodepointPrevious = mod.cwrap('GetCodepointPrevious', 'void', ['string', 'pointer'])
  raylib.GetCodepointPrevious = (text, codepointSize) => _GetCodepointPrevious(text, codepointSize._address)

  // Encode one codepoint into UTF-8 byte array (array length returned as parameter): CodepointToUTF8(int, int *) => const char *
  const _CodepointToUTF8 = mod.cwrap('CodepointToUTF8', 'void', ['number', 'pointer'])
  raylib.CodepointToUTF8 = (codepoint, utf8Size) => _CodepointToUTF8(codepoint, utf8Size._address)

  // Copy one string to another, returns bytes copied: TextCopy(char *, const char *) => int
  const _TextCopy = mod.cwrap('TextCopy', 'void', ['pointer', 'string'])
  raylib.TextCopy = (dst, src) => _TextCopy(dst._address, src)

  // Check if two text string are equal: TextIsEqual(const char *, const char *) => bool
  const _TextIsEqual = mod.cwrap('TextIsEqual', 'void', ['string', 'string'])
  raylib.TextIsEqual = (text1, text2) => _TextIsEqual(text1, text2)

  // Get text length, checks for '\0' ending: TextLength(const char *) => unsigned int
  const _TextLength = mod.cwrap('TextLength', 'void', ['string'])
  raylib.TextLength = (text) => _TextLength(text)

  // Text formatting with variables (sprintf() style): TextFormat(const char *, ...) => const char *
  const _TextFormat = mod.cwrap('TextFormat', 'void', ['string', 'pointer'])
  raylib.TextFormat = (text, args) => _TextFormat(text, args._address)

  // Get a piece of a text string: TextSubtext(const char *, int, int) => const char *
  const _TextSubtext = mod.cwrap('TextSubtext', 'void', ['string', 'number', 'number'])
  raylib.TextSubtext = (text, position, length) => _TextSubtext(text, position, length)

  // Replace text string (WARNING: memory must be freed!): TextReplace(char *, const char *, const char *) => char *
  const _TextReplace = mod.cwrap('TextReplace', 'void', ['pointer', 'string', 'string'])
  raylib.TextReplace = (text, replace, by) => _TextReplace(text._address, replace, by)

  // Insert text in a position (WARNING: memory must be freed!): TextInsert(const char *, const char *, int) => char *
  const _TextInsert = mod.cwrap('TextInsert', 'void', ['string', 'string', 'number'])
  raylib.TextInsert = (text, insert, position) => _TextInsert(text, insert, position)

  // Join text strings with delimiter: TextJoin(const char **, int, const char *) => const char *
  const _TextJoin = mod.cwrap('TextJoin', 'void', ['pointer', 'number', 'string'])
  raylib.TextJoin = (textList, count, delimiter) => _TextJoin(textList._address, count, delimiter)

  // Split text into multiple strings: TextSplit(const char *, char, int *) => const char **
  const _TextSplit = mod.cwrap('TextSplit', 'void', ['string', 'number', 'pointer'])
  raylib.TextSplit = (text, delimiter, count) => _TextSplit(text, delimiter, count._address)

  // Append text at specific position and move cursor!: TextAppend(char *, const char *, int *) => void
  const _TextAppend = mod.cwrap('TextAppend', 'void', ['pointer', 'string', 'pointer'])
  raylib.TextAppend = (text, append, position) => _TextAppend(text._address, append, position._address)

  // Find first text occurrence within a string: TextFindIndex(const char *, const char *) => int
  const _TextFindIndex = mod.cwrap('TextFindIndex', 'void', ['string', 'string'])
  raylib.TextFindIndex = (text, find) => _TextFindIndex(text, find)

  // Get upper case version of provided string: TextToUpper(const char *) => const char *
  const _TextToUpper = mod.cwrap('TextToUpper', 'void', ['string'])
  raylib.TextToUpper = (text) => _TextToUpper(text)

  // Get lower case version of provided string: TextToLower(const char *) => const char *
  const _TextToLower = mod.cwrap('TextToLower', 'void', ['string'])
  raylib.TextToLower = (text) => _TextToLower(text)

  // Get Pascal case notation version of provided string: TextToPascal(const char *) => const char *
  const _TextToPascal = mod.cwrap('TextToPascal', 'void', ['string'])
  raylib.TextToPascal = (text) => _TextToPascal(text)

  // Get integer value from text (negative values not supported): TextToInteger(const char *) => int
  const _TextToInteger = mod.cwrap('TextToInteger', 'void', ['string'])
  raylib.TextToInteger = (text) => _TextToInteger(text)

  // Draw a line in 3D world space: DrawLine3D(Vector3, Vector3, Color) => void
  const _DrawLine3D = mod.cwrap('DrawLine3D', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.DrawLine3D = (startPos, endPos, color) => _DrawLine3D(startPos._address, endPos._address, color._address)

  // Draw a point in 3D space, actually a small line: DrawPoint3D(Vector3, Color) => void
  const _DrawPoint3D = mod.cwrap('DrawPoint3D', 'void', ['pointer', 'pointer'])
  raylib.DrawPoint3D = (position, color) => _DrawPoint3D(position._address, color._address)

  // Draw a circle in 3D world space: DrawCircle3D(Vector3, float, Vector3, float, Color) => void
  const _DrawCircle3D = mod.cwrap('DrawCircle3D', 'void', ['pointer', 'number', 'pointer', 'number', 'pointer'])
  raylib.DrawCircle3D = (center, radius, rotationAxis, rotationAngle, color) => _DrawCircle3D(center._address, radius, rotationAxis._address, rotationAngle, color._address)

  // Draw a color-filled triangle (vertex in counter-clockwise order!): DrawTriangle3D(Vector3, Vector3, Vector3, Color) => void
  const _DrawTriangle3D = mod.cwrap('DrawTriangle3D', 'void', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.DrawTriangle3D = (v1, v2, v3, color) => _DrawTriangle3D(v1._address, v2._address, v3._address, color._address)

  // Draw a triangle strip defined by points: DrawTriangleStrip3D(Vector3 *, int, Color) => void
  const _DrawTriangleStrip3D = mod.cwrap('DrawTriangleStrip3D', 'void', ['pointer', 'number', 'pointer'])
  raylib.DrawTriangleStrip3D = (points, pointCount, color) => _DrawTriangleStrip3D(points._address, pointCount, color._address)

  // Draw cube: DrawCube(Vector3, float, float, float, Color) => void
  const _DrawCube = mod.cwrap('DrawCube', 'void', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCube = (position, width, height, length, color) => _DrawCube(position._address, width, height, length, color._address)

  // Draw cube (Vector version): DrawCubeV(Vector3, Vector3, Color) => void
  const _DrawCubeV = mod.cwrap('DrawCubeV', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.DrawCubeV = (position, size, color) => _DrawCubeV(position._address, size._address, color._address)

  // Draw cube wires: DrawCubeWires(Vector3, float, float, float, Color) => void
  const _DrawCubeWires = mod.cwrap('DrawCubeWires', 'void', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCubeWires = (position, width, height, length, color) => _DrawCubeWires(position._address, width, height, length, color._address)

  // Draw cube wires (Vector version): DrawCubeWiresV(Vector3, Vector3, Color) => void
  const _DrawCubeWiresV = mod.cwrap('DrawCubeWiresV', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.DrawCubeWiresV = (position, size, color) => _DrawCubeWiresV(position._address, size._address, color._address)

  // Draw sphere: DrawSphere(Vector3, float, Color) => void
  const _DrawSphere = mod.cwrap('DrawSphere', 'void', ['pointer', 'number', 'pointer'])
  raylib.DrawSphere = (centerPos, radius, color) => _DrawSphere(centerPos._address, radius, color._address)

  // Draw sphere with extended parameters: DrawSphereEx(Vector3, float, int, int, Color) => void
  const _DrawSphereEx = mod.cwrap('DrawSphereEx', 'void', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawSphereEx = (centerPos, radius, rings, slices, color) => _DrawSphereEx(centerPos._address, radius, rings, slices, color._address)

  // Draw sphere wires: DrawSphereWires(Vector3, float, int, int, Color) => void
  const _DrawSphereWires = mod.cwrap('DrawSphereWires', 'void', ['pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawSphereWires = (centerPos, radius, rings, slices, color) => _DrawSphereWires(centerPos._address, radius, rings, slices, color._address)

  // Draw a cylinder/cone: DrawCylinder(Vector3, float, float, float, int, Color) => void
  const _DrawCylinder = mod.cwrap('DrawCylinder', 'void', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCylinder = (position, radiusTop, radiusBottom, height, slices, color) => _DrawCylinder(position._address, radiusTop, radiusBottom, height, slices, color._address)

  // Draw a cylinder with base at startPos and top at endPos: DrawCylinderEx(Vector3, Vector3, float, float, int, Color) => void
  const _DrawCylinderEx = mod.cwrap('DrawCylinderEx', 'void', ['pointer', 'pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCylinderEx = (startPos, endPos, startRadius, endRadius, sides, color) => _DrawCylinderEx(startPos._address, endPos._address, startRadius, endRadius, sides, color._address)

  // Draw a cylinder/cone wires: DrawCylinderWires(Vector3, float, float, float, int, Color) => void
  const _DrawCylinderWires = mod.cwrap('DrawCylinderWires', 'void', ['pointer', 'number', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCylinderWires = (position, radiusTop, radiusBottom, height, slices, color) => _DrawCylinderWires(position._address, radiusTop, radiusBottom, height, slices, color._address)

  // Draw a cylinder wires with base at startPos and top at endPos: DrawCylinderWiresEx(Vector3, Vector3, float, float, int, Color) => void
  const _DrawCylinderWiresEx = mod.cwrap('DrawCylinderWiresEx', 'void', ['pointer', 'pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCylinderWiresEx = (startPos, endPos, startRadius, endRadius, sides, color) => _DrawCylinderWiresEx(startPos._address, endPos._address, startRadius, endRadius, sides, color._address)

  // Draw a capsule with the center of its sphere caps at startPos and endPos: DrawCapsule(Vector3, Vector3, float, int, int, Color) => void
  const _DrawCapsule = mod.cwrap('DrawCapsule', 'void', ['pointer', 'pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCapsule = (startPos, endPos, radius, slices, rings, color) => _DrawCapsule(startPos._address, endPos._address, radius, slices, rings, color._address)

  // Draw capsule wireframe with the center of its sphere caps at startPos and endPos: DrawCapsuleWires(Vector3, Vector3, float, int, int, Color) => void
  const _DrawCapsuleWires = mod.cwrap('DrawCapsuleWires', 'void', ['pointer', 'pointer', 'number', 'number', 'number', 'pointer'])
  raylib.DrawCapsuleWires = (startPos, endPos, radius, slices, rings, color) => _DrawCapsuleWires(startPos._address, endPos._address, radius, slices, rings, color._address)

  // Draw a plane XZ: DrawPlane(Vector3, Vector2, Color) => void
  const _DrawPlane = mod.cwrap('DrawPlane', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.DrawPlane = (centerPos, size, color) => _DrawPlane(centerPos._address, size._address, color._address)

  // Draw a ray line: DrawRay(Ray, Color) => void
  const _DrawRay = mod.cwrap('DrawRay', 'void', ['pointer', 'pointer'])
  raylib.DrawRay = (ray, color) => _DrawRay(ray._address, color._address)

  // Draw a grid (centered at (0, 0, 0)): DrawGrid(int, float) => void
  const _DrawGrid = mod.cwrap('DrawGrid', 'void', ['number', 'number'])
  raylib.DrawGrid = (slices, spacing) => _DrawGrid(slices, spacing)

  // Load model from files (meshes and materials): LoadModel(const char *) => Model
  const _LoadModel = mod.cwrap('LoadModel', 'void', ['pointer', 'string'])
  raylib.LoadModel = async (fileName, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Model()
    _LoadModel(_ret._address, fileName)
    return _ret
  }

  // Load model from generated mesh (default material): LoadModelFromMesh(Mesh) => Model
  const _LoadModelFromMesh = mod.cwrap('LoadModelFromMesh', 'void', ['pointer', 'pointer'])
  raylib.LoadModelFromMesh = (mesh) => {
    const _ret = new raylib.Model()
    _LoadModelFromMesh(_ret._address, mesh._address)
    return _ret
  }

  // Check if a model is ready: IsModelReady(Model) => bool
  const _IsModelReady = mod.cwrap('IsModelReady', 'void', ['pointer'])
  raylib.IsModelReady = (model) => _IsModelReady(model._address)

  // Unload model (including meshes) from memory (RAM and/or VRAM): UnloadModel(Model) => void
  const _UnloadModel = mod.cwrap('UnloadModel', 'void', ['pointer'])
  raylib.UnloadModel = (model) => _UnloadModel(model._address)

  // Compute model bounding box limits (considers all meshes): GetModelBoundingBox(Model) => BoundingBox
  const _GetModelBoundingBox = mod.cwrap('GetModelBoundingBox', 'void', ['pointer', 'pointer'])
  raylib.GetModelBoundingBox = (model) => {
    const _ret = new raylib.BoundingBox()
    _GetModelBoundingBox(_ret._address, model._address)
    return _ret
  }

  // Draw a model (with texture if set): DrawModel(Model, Vector3, float, Color) => void
  const _DrawModel = mod.cwrap('DrawModel', 'void', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawModel = (model, position, scale, tint) => _DrawModel(model._address, position._address, scale, tint._address)

  // Draw a model with extended parameters: DrawModelEx(Model, Vector3, Vector3, float, Vector3, Color) => void
  const _DrawModelEx = mod.cwrap('DrawModelEx', 'void', ['pointer', 'pointer', 'pointer', 'number', 'pointer', 'pointer'])
  raylib.DrawModelEx = (model, position, rotationAxis, rotationAngle, scale, tint) => _DrawModelEx(model._address, position._address, rotationAxis._address, rotationAngle, scale._address, tint._address)

  // Draw a model wires (with texture if set): DrawModelWires(Model, Vector3, float, Color) => void
  const _DrawModelWires = mod.cwrap('DrawModelWires', 'void', ['pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawModelWires = (model, position, scale, tint) => _DrawModelWires(model._address, position._address, scale, tint._address)

  // Draw a model wires (with texture if set) with extended parameters: DrawModelWiresEx(Model, Vector3, Vector3, float, Vector3, Color) => void
  const _DrawModelWiresEx = mod.cwrap('DrawModelWiresEx', 'void', ['pointer', 'pointer', 'pointer', 'number', 'pointer', 'pointer'])
  raylib.DrawModelWiresEx = (model, position, rotationAxis, rotationAngle, scale, tint) => _DrawModelWiresEx(model._address, position._address, rotationAxis._address, rotationAngle, scale._address, tint._address)

  // Draw bounding box (wires): DrawBoundingBox(BoundingBox, Color) => void
  const _DrawBoundingBox = mod.cwrap('DrawBoundingBox', 'void', ['pointer', 'pointer'])
  raylib.DrawBoundingBox = (box, color) => _DrawBoundingBox(box._address, color._address)

  // Draw a billboard texture: DrawBillboard(Camera, Texture2D, Vector3, float, Color) => void
  const _DrawBillboard = mod.cwrap('DrawBillboard', 'void', ['pointer', 'pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawBillboard = (camera, texture, position, size, tint) => _DrawBillboard(camera._address, texture._address, position._address, size, tint._address)

  // Draw a billboard texture defined by source: DrawBillboardRec(Camera, Texture2D, Rectangle, Vector3, Vector2, Color) => void
  const _DrawBillboardRec = mod.cwrap('DrawBillboardRec', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'pointer'])
  raylib.DrawBillboardRec = (camera, texture, source, position, size, tint) => _DrawBillboardRec(camera._address, texture._address, source._address, position._address, size._address, tint._address)

  // Draw a billboard texture defined by source and rotation: DrawBillboardPro(Camera, Texture2D, Rectangle, Vector3, Vector3, Vector2, Vector2, float, Color) => void
  const _DrawBillboardPro = mod.cwrap('DrawBillboardPro', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'number', 'pointer'])
  raylib.DrawBillboardPro = (camera, texture, source, position, up, size, origin, rotation, tint) => _DrawBillboardPro(camera._address, texture._address, source._address, position._address, up._address, size._address, origin._address, rotation, tint._address)

  // Upload mesh vertex data in GPU and provide VAO/VBO ids: UploadMesh(Mesh *, bool) => void
  const _UploadMesh = mod.cwrap('UploadMesh', 'void', ['pointer', 'boolean'])
  raylib.UploadMesh = (mesh, dynamic) => _UploadMesh(mesh._address, dynamic)

  // Update mesh vertex data in GPU for a specific buffer index: UpdateMeshBuffer(Mesh, int, const void *, int, int) => void
  const _UpdateMeshBuffer = mod.cwrap('UpdateMeshBuffer', 'void', ['pointer', 'number', 'pointer', 'number', 'number'])
  raylib.UpdateMeshBuffer = (mesh, index, data, dataSize, offset) => _UpdateMeshBuffer(mesh._address, index, data._address, dataSize, offset)

  // Unload mesh data from CPU and GPU: UnloadMesh(Mesh) => void
  const _UnloadMesh = mod.cwrap('UnloadMesh', 'void', ['pointer'])
  raylib.UnloadMesh = (mesh) => _UnloadMesh(mesh._address)

  // Draw a 3d mesh with material and transform: DrawMesh(Mesh, Material, Matrix) => void
  const _DrawMesh = mod.cwrap('DrawMesh', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.DrawMesh = (mesh, material, transform) => _DrawMesh(mesh._address, material._address, transform._address)

  // Draw multiple mesh instances with material and different transforms: DrawMeshInstanced(Mesh, Material, const Matrix *, int) => void
  const _DrawMeshInstanced = mod.cwrap('DrawMeshInstanced', 'void', ['pointer', 'pointer', 'pointer', 'number'])
  raylib.DrawMeshInstanced = (mesh, material, transforms, instances) => _DrawMeshInstanced(mesh._address, material._address, transforms._address, instances)

  // Export mesh data to file, returns true on success: ExportMesh(Mesh, const char *) => bool
  const _ExportMesh = mod.cwrap('ExportMesh', 'void', ['pointer', 'string'])
  raylib.ExportMesh = (mesh, fileName) => _ExportMesh(mesh._address, fileName)

  // Compute mesh bounding box limits: GetMeshBoundingBox(Mesh) => BoundingBox
  const _GetMeshBoundingBox = mod.cwrap('GetMeshBoundingBox', 'void', ['pointer', 'pointer'])
  raylib.GetMeshBoundingBox = (mesh) => {
    const _ret = new raylib.BoundingBox()
    _GetMeshBoundingBox(_ret._address, mesh._address)
    return _ret
  }

  // Compute mesh tangents: GenMeshTangents(Mesh *) => void
  const _GenMeshTangents = mod.cwrap('GenMeshTangents', 'void', ['pointer'])
  raylib.GenMeshTangents = (mesh) => _GenMeshTangents(mesh._address)

  // Generate polygonal mesh: GenMeshPoly(int, float) => Mesh
  const _GenMeshPoly = mod.cwrap('GenMeshPoly', 'void', ['pointer', 'number', 'number'])
  raylib.GenMeshPoly = (sides, radius) => {
    const _ret = new raylib.Mesh()
    _GenMeshPoly(_ret._address, sides, radius)
    return _ret
  }

  // Generate plane mesh (with subdivisions): GenMeshPlane(float, float, int, int) => Mesh
  const _GenMeshPlane = mod.cwrap('GenMeshPlane', 'void', ['pointer', 'number', 'number', 'number', 'number'])
  raylib.GenMeshPlane = (width, length, resX, resZ) => {
    const _ret = new raylib.Mesh()
    _GenMeshPlane(_ret._address, width, length, resX, resZ)
    return _ret
  }

  // Generate cuboid mesh: GenMeshCube(float, float, float) => Mesh
  const _GenMeshCube = mod.cwrap('GenMeshCube', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.GenMeshCube = (width, height, length) => {
    const _ret = new raylib.Mesh()
    _GenMeshCube(_ret._address, width, height, length)
    return _ret
  }

  // Generate sphere mesh (standard sphere): GenMeshSphere(float, int, int) => Mesh
  const _GenMeshSphere = mod.cwrap('GenMeshSphere', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.GenMeshSphere = (radius, rings, slices) => {
    const _ret = new raylib.Mesh()
    _GenMeshSphere(_ret._address, radius, rings, slices)
    return _ret
  }

  // Generate half-sphere mesh (no bottom cap): GenMeshHemiSphere(float, int, int) => Mesh
  const _GenMeshHemiSphere = mod.cwrap('GenMeshHemiSphere', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.GenMeshHemiSphere = (radius, rings, slices) => {
    const _ret = new raylib.Mesh()
    _GenMeshHemiSphere(_ret._address, radius, rings, slices)
    return _ret
  }

  // Generate cylinder mesh: GenMeshCylinder(float, float, int) => Mesh
  const _GenMeshCylinder = mod.cwrap('GenMeshCylinder', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.GenMeshCylinder = (radius, height, slices) => {
    const _ret = new raylib.Mesh()
    _GenMeshCylinder(_ret._address, radius, height, slices)
    return _ret
  }

  // Generate cone/pyramid mesh: GenMeshCone(float, float, int) => Mesh
  const _GenMeshCone = mod.cwrap('GenMeshCone', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.GenMeshCone = (radius, height, slices) => {
    const _ret = new raylib.Mesh()
    _GenMeshCone(_ret._address, radius, height, slices)
    return _ret
  }

  // Generate torus mesh: GenMeshTorus(float, float, int, int) => Mesh
  const _GenMeshTorus = mod.cwrap('GenMeshTorus', 'void', ['pointer', 'number', 'number', 'number', 'number'])
  raylib.GenMeshTorus = (radius, size, radSeg, sides) => {
    const _ret = new raylib.Mesh()
    _GenMeshTorus(_ret._address, radius, size, radSeg, sides)
    return _ret
  }

  // Generate trefoil knot mesh: GenMeshKnot(float, float, int, int) => Mesh
  const _GenMeshKnot = mod.cwrap('GenMeshKnot', 'void', ['pointer', 'number', 'number', 'number', 'number'])
  raylib.GenMeshKnot = (radius, size, radSeg, sides) => {
    const _ret = new raylib.Mesh()
    _GenMeshKnot(_ret._address, radius, size, radSeg, sides)
    return _ret
  }

  // Generate heightmap mesh from image data: GenMeshHeightmap(Image, Vector3) => Mesh
  const _GenMeshHeightmap = mod.cwrap('GenMeshHeightmap', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GenMeshHeightmap = (heightmap, size) => {
    const _ret = new raylib.Mesh()
    _GenMeshHeightmap(_ret._address, heightmap._address, size._address)
    return _ret
  }

  // Generate cubes-based map mesh from image data: GenMeshCubicmap(Image, Vector3) => Mesh
  const _GenMeshCubicmap = mod.cwrap('GenMeshCubicmap', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GenMeshCubicmap = (cubicmap, cubeSize) => {
    const _ret = new raylib.Mesh()
    _GenMeshCubicmap(_ret._address, cubicmap._address, cubeSize._address)
    return _ret
  }

  // Load materials from model file: LoadMaterials(const char *, int *) => Material *
  const _LoadMaterials = mod.cwrap('LoadMaterials', 'void', ['pointer', 'string', 'pointer'])
  raylib.LoadMaterials = async (fileName, materialCount, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Material()
    _LoadMaterials(_ret._address, fileName, materialCount._address)
    return _ret
  }

  // Load default material (Supports: DIFFUSE, SPECULAR, NORMAL maps): LoadMaterialDefault() => Material
  const _LoadMaterialDefault = mod.cwrap('LoadMaterialDefault', 'void', ['pointer'])
  raylib.LoadMaterialDefault = () => {
    const _ret = new raylib.Material()
    _LoadMaterialDefault(_ret._address)
    return _ret
  }

  // Check if a material is ready: IsMaterialReady(Material) => bool
  const _IsMaterialReady = mod.cwrap('IsMaterialReady', 'void', ['pointer'])
  raylib.IsMaterialReady = (material) => _IsMaterialReady(material._address)

  // Unload material from GPU memory (VRAM): UnloadMaterial(Material) => void
  const _UnloadMaterial = mod.cwrap('UnloadMaterial', 'void', ['pointer'])
  raylib.UnloadMaterial = (material) => _UnloadMaterial(material._address)

  // Set texture for a material map type (MATERIAL_MAP_DIFFUSE, MATERIAL_MAP_SPECULAR...): SetMaterialTexture(Material *, int, Texture2D) => void
  const _SetMaterialTexture = mod.cwrap('SetMaterialTexture', 'void', ['pointer', 'number', 'pointer'])
  raylib.SetMaterialTexture = (material, mapType, texture) => _SetMaterialTexture(material._address, mapType, texture._address)

  // Set material for a mesh: SetModelMeshMaterial(Model *, int, int) => void
  const _SetModelMeshMaterial = mod.cwrap('SetModelMeshMaterial', 'void', ['pointer', 'number', 'number'])
  raylib.SetModelMeshMaterial = (model, meshId, materialId) => _SetModelMeshMaterial(model._address, meshId, materialId)

  // Load model animations from file: LoadModelAnimations(const char *, unsigned int *) => ModelAnimation *
  const _LoadModelAnimations = mod.cwrap('LoadModelAnimations', 'void', ['pointer', 'string', 'pointer'])
  raylib.LoadModelAnimations = async (fileName, animCount, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.ModelAnimation()
    _LoadModelAnimations(_ret._address, fileName, animCount._address)
    return _ret
  }

  // Update model animation pose: UpdateModelAnimation(Model, ModelAnimation, int) => void
  const _UpdateModelAnimation = mod.cwrap('UpdateModelAnimation', 'void', ['pointer', 'pointer', 'number'])
  raylib.UpdateModelAnimation = (model, anim, frame) => _UpdateModelAnimation(model._address, anim._address, frame)

  // Unload animation data: UnloadModelAnimation(ModelAnimation) => void
  const _UnloadModelAnimation = mod.cwrap('UnloadModelAnimation', 'void', ['pointer'])
  raylib.UnloadModelAnimation = (anim) => _UnloadModelAnimation(anim._address)

  // Unload animation array data: UnloadModelAnimations(ModelAnimation *, unsigned int) => void
  const _UnloadModelAnimations = mod.cwrap('UnloadModelAnimations', 'void', ['pointer', 'number'])
  raylib.UnloadModelAnimations = (animations, count) => _UnloadModelAnimations(animations._address, count)

  // Check model animation skeleton match: IsModelAnimationValid(Model, ModelAnimation) => bool
  const _IsModelAnimationValid = mod.cwrap('IsModelAnimationValid', 'void', ['pointer', 'pointer'])
  raylib.IsModelAnimationValid = (model, anim) => _IsModelAnimationValid(model._address, anim._address)

  // Check collision between two spheres: CheckCollisionSpheres(Vector3, float, Vector3, float) => bool
  const _CheckCollisionSpheres = mod.cwrap('CheckCollisionSpheres', 'void', ['pointer', 'number', 'pointer', 'number'])
  raylib.CheckCollisionSpheres = (center1, radius1, center2, radius2) => _CheckCollisionSpheres(center1._address, radius1, center2._address, radius2)

  // Check collision between two bounding boxes: CheckCollisionBoxes(BoundingBox, BoundingBox) => bool
  const _CheckCollisionBoxes = mod.cwrap('CheckCollisionBoxes', 'void', ['pointer', 'pointer'])
  raylib.CheckCollisionBoxes = (box1, box2) => _CheckCollisionBoxes(box1._address, box2._address)

  // Check collision between box and sphere: CheckCollisionBoxSphere(BoundingBox, Vector3, float) => bool
  const _CheckCollisionBoxSphere = mod.cwrap('CheckCollisionBoxSphere', 'void', ['pointer', 'pointer', 'number'])
  raylib.CheckCollisionBoxSphere = (box, center, radius) => _CheckCollisionBoxSphere(box._address, center._address, radius)

  // Get collision info between ray and sphere: GetRayCollisionSphere(Ray, Vector3, float) => RayCollision
  const _GetRayCollisionSphere = mod.cwrap('GetRayCollisionSphere', 'void', ['pointer', 'pointer', 'pointer', 'number'])
  raylib.GetRayCollisionSphere = (ray, center, radius) => {
    const _ret = new raylib.RayCollision()
    _GetRayCollisionSphere(_ret._address, ray._address, center._address, radius)
    return _ret
  }

  // Get collision info between ray and box: GetRayCollisionBox(Ray, BoundingBox) => RayCollision
  const _GetRayCollisionBox = mod.cwrap('GetRayCollisionBox', 'void', ['pointer', 'pointer', 'pointer'])
  raylib.GetRayCollisionBox = (ray, box) => {
    const _ret = new raylib.RayCollision()
    _GetRayCollisionBox(_ret._address, ray._address, box._address)
    return _ret
  }

  // Get collision info between ray and mesh: GetRayCollisionMesh(Ray, Mesh, Matrix) => RayCollision
  const _GetRayCollisionMesh = mod.cwrap('GetRayCollisionMesh', 'void', ['pointer', 'pointer', 'pointer', 'pointer'])
  raylib.GetRayCollisionMesh = (ray, mesh, transform) => {
    const _ret = new raylib.RayCollision()
    _GetRayCollisionMesh(_ret._address, ray._address, mesh._address, transform._address)
    return _ret
  }

  // Get collision info between ray and triangle: GetRayCollisionTriangle(Ray, Vector3, Vector3, Vector3) => RayCollision
  const _GetRayCollisionTriangle = mod.cwrap('GetRayCollisionTriangle', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer'])
  raylib.GetRayCollisionTriangle = (ray, p1, p2, p3) => {
    const _ret = new raylib.RayCollision()
    _GetRayCollisionTriangle(_ret._address, ray._address, p1._address, p2._address, p3._address)
    return _ret
  }

  // Get collision info between ray and quad: GetRayCollisionQuad(Ray, Vector3, Vector3, Vector3, Vector3) => RayCollision
  const _GetRayCollisionQuad = mod.cwrap('GetRayCollisionQuad', 'void', ['pointer', 'pointer', 'pointer', 'pointer', 'pointer', 'pointer'])
  raylib.GetRayCollisionQuad = (ray, p1, p2, p3, p4) => {
    const _ret = new raylib.RayCollision()
    _GetRayCollisionQuad(_ret._address, ray._address, p1._address, p2._address, p3._address, p4._address)
    return _ret
  }

  // Initialize audio device and context: InitAudioDevice() => void
  const _InitAudioDevice = mod.cwrap('InitAudioDevice', 'void', [])
  raylib.InitAudioDevice = () => _InitAudioDevice()

  // Close the audio device and context: CloseAudioDevice() => void
  const _CloseAudioDevice = mod.cwrap('CloseAudioDevice', 'void', [])
  raylib.CloseAudioDevice = () => _CloseAudioDevice()

  // Check if audio device has been initialized successfully: IsAudioDeviceReady() => bool
  const _IsAudioDeviceReady = mod.cwrap('IsAudioDeviceReady', 'void', [])
  raylib.IsAudioDeviceReady = () => _IsAudioDeviceReady()

  // Set master volume (listener): SetMasterVolume(float) => void
  const _SetMasterVolume = mod.cwrap('SetMasterVolume', 'void', ['number'])
  raylib.SetMasterVolume = (volume) => _SetMasterVolume(volume)

  // Load wave data from file: LoadWave(const char *) => Wave
  const _LoadWave = mod.cwrap('LoadWave', 'void', ['pointer', 'string'])
  raylib.LoadWave = async (fileName, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Wave()
    _LoadWave(_ret._address, fileName)
    return _ret
  }

  // Load wave from memory buffer, fileType refers to extension: i.e. '.wav': LoadWaveFromMemory(const char *, const unsigned char *, int) => Wave
  const _LoadWaveFromMemory = mod.cwrap('LoadWaveFromMemory', 'void', ['pointer', 'string', 'pointer', 'number'])
  raylib.LoadWaveFromMemory = (fileType, fileData, dataSize) => {
    const _ret = new raylib.Wave()
    _LoadWaveFromMemory(_ret._address, fileType, fileData._address, dataSize)
    return _ret
  }

  // Checks if wave data is ready: IsWaveReady(Wave) => bool
  const _IsWaveReady = mod.cwrap('IsWaveReady', 'void', ['pointer'])
  raylib.IsWaveReady = (wave) => _IsWaveReady(wave._address)

  // Load sound from file: LoadSound(const char *) => Sound
  const _LoadSound = mod.cwrap('LoadSound', 'void', ['pointer', 'string'])
  raylib.LoadSound = async (fileName, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Sound()
    _LoadSound(_ret._address, fileName)
    return _ret
  }

  // Load sound from wave data: LoadSoundFromWave(Wave) => Sound
  const _LoadSoundFromWave = mod.cwrap('LoadSoundFromWave', 'void', ['pointer', 'pointer'])
  raylib.LoadSoundFromWave = (wave) => {
    const _ret = new raylib.Sound()
    _LoadSoundFromWave(_ret._address, wave._address)
    return _ret
  }

  // Checks if a sound is ready: IsSoundReady(Sound) => bool
  const _IsSoundReady = mod.cwrap('IsSoundReady', 'void', ['pointer'])
  raylib.IsSoundReady = (sound) => _IsSoundReady(sound._address)

  // Update sound buffer with new data: UpdateSound(Sound, const void *, int) => void
  const _UpdateSound = mod.cwrap('UpdateSound', 'void', ['pointer', 'pointer', 'number'])
  raylib.UpdateSound = (sound, data, sampleCount) => _UpdateSound(sound._address, data._address, sampleCount)

  // Unload wave data: UnloadWave(Wave) => void
  const _UnloadWave = mod.cwrap('UnloadWave', 'void', ['pointer'])
  raylib.UnloadWave = (wave) => _UnloadWave(wave._address)

  // Unload sound: UnloadSound(Sound) => void
  const _UnloadSound = mod.cwrap('UnloadSound', 'void', ['pointer'])
  raylib.UnloadSound = (sound) => _UnloadSound(sound._address)

  // Export wave data to file, returns true on success: ExportWave(Wave, const char *) => bool
  const _ExportWave = mod.cwrap('ExportWave', 'void', ['pointer', 'string'])
  raylib.ExportWave = (wave, fileName) => _ExportWave(wave._address, fileName)

  // Export wave sample data to code (.h), returns true on success: ExportWaveAsCode(Wave, const char *) => bool
  const _ExportWaveAsCode = mod.cwrap('ExportWaveAsCode', 'void', ['pointer', 'string'])
  raylib.ExportWaveAsCode = (wave, fileName) => _ExportWaveAsCode(wave._address, fileName)

  // Play a sound: PlaySound(Sound) => void
  const _PlaySound = mod.cwrap('PlaySound', 'void', ['pointer'])
  raylib.PlaySound = (sound) => _PlaySound(sound._address)

  // Stop playing a sound: StopSound(Sound) => void
  const _StopSound = mod.cwrap('StopSound', 'void', ['pointer'])
  raylib.StopSound = (sound) => _StopSound(sound._address)

  // Pause a sound: PauseSound(Sound) => void
  const _PauseSound = mod.cwrap('PauseSound', 'void', ['pointer'])
  raylib.PauseSound = (sound) => _PauseSound(sound._address)

  // Resume a paused sound: ResumeSound(Sound) => void
  const _ResumeSound = mod.cwrap('ResumeSound', 'void', ['pointer'])
  raylib.ResumeSound = (sound) => _ResumeSound(sound._address)

  // Check if a sound is currently playing: IsSoundPlaying(Sound) => bool
  const _IsSoundPlaying = mod.cwrap('IsSoundPlaying', 'void', ['pointer'])
  raylib.IsSoundPlaying = (sound) => _IsSoundPlaying(sound._address)

  // Set volume for a sound (1.0 is max level): SetSoundVolume(Sound, float) => void
  const _SetSoundVolume = mod.cwrap('SetSoundVolume', 'void', ['pointer', 'number'])
  raylib.SetSoundVolume = (sound, volume) => _SetSoundVolume(sound._address, volume)

  // Set pitch for a sound (1.0 is base level): SetSoundPitch(Sound, float) => void
  const _SetSoundPitch = mod.cwrap('SetSoundPitch', 'void', ['pointer', 'number'])
  raylib.SetSoundPitch = (sound, pitch) => _SetSoundPitch(sound._address, pitch)

  // Set pan for a sound (0.5 is center): SetSoundPan(Sound, float) => void
  const _SetSoundPan = mod.cwrap('SetSoundPan', 'void', ['pointer', 'number'])
  raylib.SetSoundPan = (sound, pan) => _SetSoundPan(sound._address, pan)

  // Copy a wave to a new wave: WaveCopy(Wave) => Wave
  const _WaveCopy = mod.cwrap('WaveCopy', 'void', ['pointer', 'pointer'])
  raylib.WaveCopy = (wave) => {
    const _ret = new raylib.Wave()
    _WaveCopy(_ret._address, wave._address)
    return _ret
  }

  // Crop a wave to defined samples range: WaveCrop(Wave *, int, int) => void
  const _WaveCrop = mod.cwrap('WaveCrop', 'void', ['pointer', 'number', 'number'])
  raylib.WaveCrop = (wave, initSample, finalSample) => _WaveCrop(wave._address, initSample, finalSample)

  // Convert wave data to desired format: WaveFormat(Wave *, int, int, int) => void
  const _WaveFormat = mod.cwrap('WaveFormat', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.WaveFormat = (wave, sampleRate, sampleSize, channels) => _WaveFormat(wave._address, sampleRate, sampleSize, channels)

  // Load samples data from wave as a 32bit float data array: LoadWaveSamples(Wave) => float *
  const _LoadWaveSamples = mod.cwrap('LoadWaveSamples', 'void', ['pointer'])
  raylib.LoadWaveSamples = (wave) => _LoadWaveSamples(wave._address)

  // Unload samples data loaded with LoadWaveSamples(): UnloadWaveSamples(float *) => void
  const _UnloadWaveSamples = mod.cwrap('UnloadWaveSamples', 'void', ['pointer'])
  raylib.UnloadWaveSamples = (samples) => _UnloadWaveSamples(samples._address)

  // Load music stream from file: LoadMusicStream(const char *) => Music
  const _LoadMusicStream = mod.cwrap('LoadMusicStream', 'void', ['pointer', 'string'])
  raylib.LoadMusicStream = async (fileName, skipLoad) => {
    !skipLoad && await raylib.addFile(fileName)
    const _ret = new raylib.Music()
    _LoadMusicStream(_ret._address, fileName)
    return _ret
  }

  // Load music stream from data: LoadMusicStreamFromMemory(const char *, const unsigned char *, int) => Music
  const _LoadMusicStreamFromMemory = mod.cwrap('LoadMusicStreamFromMemory', 'void', ['pointer', 'string', 'pointer', 'number'])
  raylib.LoadMusicStreamFromMemory = (fileType, data, dataSize) => {
    const _ret = new raylib.Music()
    _LoadMusicStreamFromMemory(_ret._address, fileType, data._address, dataSize)
    return _ret
  }

  // Checks if a music stream is ready: IsMusicReady(Music) => bool
  const _IsMusicReady = mod.cwrap('IsMusicReady', 'void', ['pointer'])
  raylib.IsMusicReady = (music) => _IsMusicReady(music._address)

  // Unload music stream: UnloadMusicStream(Music) => void
  const _UnloadMusicStream = mod.cwrap('UnloadMusicStream', 'void', ['pointer'])
  raylib.UnloadMusicStream = (music) => _UnloadMusicStream(music._address)

  // Start music playing: PlayMusicStream(Music) => void
  const _PlayMusicStream = mod.cwrap('PlayMusicStream', 'void', ['pointer'])
  raylib.PlayMusicStream = (music) => _PlayMusicStream(music._address)

  // Check if music is playing: IsMusicStreamPlaying(Music) => bool
  const _IsMusicStreamPlaying = mod.cwrap('IsMusicStreamPlaying', 'void', ['pointer'])
  raylib.IsMusicStreamPlaying = (music) => _IsMusicStreamPlaying(music._address)

  // Updates buffers for music streaming: UpdateMusicStream(Music) => void
  const _UpdateMusicStream = mod.cwrap('UpdateMusicStream', 'void', ['pointer'])
  raylib.UpdateMusicStream = (music) => _UpdateMusicStream(music._address)

  // Stop music playing: StopMusicStream(Music) => void
  const _StopMusicStream = mod.cwrap('StopMusicStream', 'void', ['pointer'])
  raylib.StopMusicStream = (music) => _StopMusicStream(music._address)

  // Pause music playing: PauseMusicStream(Music) => void
  const _PauseMusicStream = mod.cwrap('PauseMusicStream', 'void', ['pointer'])
  raylib.PauseMusicStream = (music) => _PauseMusicStream(music._address)

  // Resume playing paused music: ResumeMusicStream(Music) => void
  const _ResumeMusicStream = mod.cwrap('ResumeMusicStream', 'void', ['pointer'])
  raylib.ResumeMusicStream = (music) => _ResumeMusicStream(music._address)

  // Seek music to a position (in seconds): SeekMusicStream(Music, float) => void
  const _SeekMusicStream = mod.cwrap('SeekMusicStream', 'void', ['pointer', 'number'])
  raylib.SeekMusicStream = (music, position) => _SeekMusicStream(music._address, position)

  // Set volume for music (1.0 is max level): SetMusicVolume(Music, float) => void
  const _SetMusicVolume = mod.cwrap('SetMusicVolume', 'void', ['pointer', 'number'])
  raylib.SetMusicVolume = (music, volume) => _SetMusicVolume(music._address, volume)

  // Set pitch for a music (1.0 is base level): SetMusicPitch(Music, float) => void
  const _SetMusicPitch = mod.cwrap('SetMusicPitch', 'void', ['pointer', 'number'])
  raylib.SetMusicPitch = (music, pitch) => _SetMusicPitch(music._address, pitch)

  // Set pan for a music (0.5 is center): SetMusicPan(Music, float) => void
  const _SetMusicPan = mod.cwrap('SetMusicPan', 'void', ['pointer', 'number'])
  raylib.SetMusicPan = (music, pan) => _SetMusicPan(music._address, pan)

  // Get music time length (in seconds): GetMusicTimeLength(Music) => float
  const _GetMusicTimeLength = mod.cwrap('GetMusicTimeLength', 'void', ['pointer'])
  raylib.GetMusicTimeLength = (music) => _GetMusicTimeLength(music._address)

  // Get current music time played (in seconds): GetMusicTimePlayed(Music) => float
  const _GetMusicTimePlayed = mod.cwrap('GetMusicTimePlayed', 'void', ['pointer'])
  raylib.GetMusicTimePlayed = (music) => _GetMusicTimePlayed(music._address)

  // Load audio stream (to stream raw audio pcm data): LoadAudioStream(unsigned int, unsigned int, unsigned int) => AudioStream
  const _LoadAudioStream = mod.cwrap('LoadAudioStream', 'void', ['pointer', 'number', 'number', 'number'])
  raylib.LoadAudioStream = (sampleRate, sampleSize, channels) => {
    const _ret = new raylib.AudioStream()
    _LoadAudioStream(_ret._address, sampleRate, sampleSize, channels)
    return _ret
  }

  // Checks if an audio stream is ready: IsAudioStreamReady(AudioStream) => bool
  const _IsAudioStreamReady = mod.cwrap('IsAudioStreamReady', 'void', ['pointer'])
  raylib.IsAudioStreamReady = (stream) => _IsAudioStreamReady(stream._address)

  // Unload audio stream and free memory: UnloadAudioStream(AudioStream) => void
  const _UnloadAudioStream = mod.cwrap('UnloadAudioStream', 'void', ['pointer'])
  raylib.UnloadAudioStream = (stream) => _UnloadAudioStream(stream._address)

  // Update audio stream buffers with data: UpdateAudioStream(AudioStream, const void *, int) => void
  const _UpdateAudioStream = mod.cwrap('UpdateAudioStream', 'void', ['pointer', 'pointer', 'number'])
  raylib.UpdateAudioStream = (stream, data, frameCount) => _UpdateAudioStream(stream._address, data._address, frameCount)

  // Check if any audio stream buffers requires refill: IsAudioStreamProcessed(AudioStream) => bool
  const _IsAudioStreamProcessed = mod.cwrap('IsAudioStreamProcessed', 'void', ['pointer'])
  raylib.IsAudioStreamProcessed = (stream) => _IsAudioStreamProcessed(stream._address)

  // Play audio stream: PlayAudioStream(AudioStream) => void
  const _PlayAudioStream = mod.cwrap('PlayAudioStream', 'void', ['pointer'])
  raylib.PlayAudioStream = (stream) => _PlayAudioStream(stream._address)

  // Pause audio stream: PauseAudioStream(AudioStream) => void
  const _PauseAudioStream = mod.cwrap('PauseAudioStream', 'void', ['pointer'])
  raylib.PauseAudioStream = (stream) => _PauseAudioStream(stream._address)

  // Resume audio stream: ResumeAudioStream(AudioStream) => void
  const _ResumeAudioStream = mod.cwrap('ResumeAudioStream', 'void', ['pointer'])
  raylib.ResumeAudioStream = (stream) => _ResumeAudioStream(stream._address)

  // Check if audio stream is playing: IsAudioStreamPlaying(AudioStream) => bool
  const _IsAudioStreamPlaying = mod.cwrap('IsAudioStreamPlaying', 'void', ['pointer'])
  raylib.IsAudioStreamPlaying = (stream) => _IsAudioStreamPlaying(stream._address)

  // Stop audio stream: StopAudioStream(AudioStream) => void
  const _StopAudioStream = mod.cwrap('StopAudioStream', 'void', ['pointer'])
  raylib.StopAudioStream = (stream) => _StopAudioStream(stream._address)

  // Set volume for audio stream (1.0 is max level): SetAudioStreamVolume(AudioStream, float) => void
  const _SetAudioStreamVolume = mod.cwrap('SetAudioStreamVolume', 'void', ['pointer', 'number'])
  raylib.SetAudioStreamVolume = (stream, volume) => _SetAudioStreamVolume(stream._address, volume)

  // Set pitch for audio stream (1.0 is base level): SetAudioStreamPitch(AudioStream, float) => void
  const _SetAudioStreamPitch = mod.cwrap('SetAudioStreamPitch', 'void', ['pointer', 'number'])
  raylib.SetAudioStreamPitch = (stream, pitch) => _SetAudioStreamPitch(stream._address, pitch)

  // Set pan for audio stream (0.5 is centered): SetAudioStreamPan(AudioStream, float) => void
  const _SetAudioStreamPan = mod.cwrap('SetAudioStreamPan', 'void', ['pointer', 'number'])
  raylib.SetAudioStreamPan = (stream, pan) => _SetAudioStreamPan(stream._address, pan)

  // Default size for new audio streams: SetAudioStreamBufferSizeDefault(int) => void
  const _SetAudioStreamBufferSizeDefault = mod.cwrap('SetAudioStreamBufferSizeDefault', 'void', ['number'])
  raylib.SetAudioStreamBufferSizeDefault = (size) => _SetAudioStreamBufferSizeDefault(size)

  // Audio thread callback to request new data: SetAudioStreamCallback(AudioStream, AudioCallback) => void
  const _SetAudioStreamCallback = mod.cwrap('SetAudioStreamCallback', 'void', ['pointer', 'pointer'])
  raylib.SetAudioStreamCallback = (stream, callback) => _SetAudioStreamCallback(stream._address, callback._address)

  // Attach audio stream processor to stream: AttachAudioStreamProcessor(AudioStream, AudioCallback) => void
  const _AttachAudioStreamProcessor = mod.cwrap('AttachAudioStreamProcessor', 'void', ['pointer', 'pointer'])
  raylib.AttachAudioStreamProcessor = (stream, processor) => _AttachAudioStreamProcessor(stream._address, processor._address)

  // Detach audio stream processor from stream: DetachAudioStreamProcessor(AudioStream, AudioCallback) => void
  const _DetachAudioStreamProcessor = mod.cwrap('DetachAudioStreamProcessor', 'void', ['pointer', 'pointer'])
  raylib.DetachAudioStreamProcessor = (stream, processor) => _DetachAudioStreamProcessor(stream._address, processor._address)

  // Attach audio stream processor to the entire audio pipeline: AttachAudioMixedProcessor(AudioCallback) => void
  const _AttachAudioMixedProcessor = mod.cwrap('AttachAudioMixedProcessor', 'void', ['pointer'])
  raylib.AttachAudioMixedProcessor = (processor) => _AttachAudioMixedProcessor(processor._address)

  // Detach audio stream processor from the entire audio pipeline: DetachAudioMixedProcessor(AudioCallback) => void
  const _DetachAudioMixedProcessor = mod.cwrap('DetachAudioMixedProcessor', 'void', ['pointer'])
  raylib.DetachAudioMixedProcessor = (processor) => _DetachAudioMixedProcessor(processor._address)


  // insert remote file in WASM filesystem
  raylib.addFile = async (filename, target) => {
    if (!target) {
      target = filename
    }
    const p = target.split('/').slice(0,-1)
    let dir = ''
    for (const d of p) {
      dir = dir + '/' + d
      try{
        mod.FS.mkdir(dir)
      }catch(e){}
    }
    mod.FS.writeFile(target, new Uint8Array(await fetch(filename).then(r => r.arrayBuffer())))
  }

  // more convenient free() for structs
  raylib.free = ptr => ptr._address ? mod._free(ptr._address) : mod._free(ptr)

  // we use raylib to namespace operations to a single wasm runtime instance
  // this is sort of like importing all the stuff from raylib object, if you only have 1 on page
  raylib.globalize = () => {
    for (const k of Object.keys(raylib)) {
      window[k] = raylib[k]
    }
  }

  // process user-functions, make raylib look like it's global

  if (userInit) {
    await userInit(raylib)
  }

  if (userUpdate) {
    const updateLoop = (timeStamp) => {
      userUpdate(timeStamp, raylib)
      requestAnimationFrame(updateLoop)
    }
    updateLoop()
  }

  return raylib
}

class RaylibComponent extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.canvas = document.createElement('canvas')
    this.style.display = 'none'
    window.addEventListener('resize', this.onResize.bind(this))
    this.shadow.innerHTML = `
<style>
canvas.landscape {
  height: 100vh;
  max-width: 100vw;
}
canvas.portrait {
  width: 100vw;
  max-height: 100vh;
}
canvas {
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  object-fit: contain;
}
</style>
`
    this.shadow.appendChild(this.canvas)
  }
  
  onResize() {
    if (this.fill){
      const { clientWidth, clientHeight } = document.body
      this.canvas.className = clientWidth > clientHeight ? 'landscape' : 'portrait'
    }
  }
  
  static get observedAttributes() {
    return ['src', 'fill']
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'fill') {
      this.fill = typeof newValue !== 'undefined'
      this.onResize()
    }
    if (name ==='src') {
      this.start(newValue)
    }
  }

  async start(src) {
    let userCode = this.textContent
    if (src) {
      userCode = await fetch(src).then(r => r.text())
    }
    const f = new Function(['runGame', 'canvas'], userCode + '\n' + `
      if (typeof InitGame === 'undefined') {
        console.error('Make sure to add InitGame() to your raylib-game.')
        return
      }
      if (typeof UpdateGame === 'undefined') {
        console.error('Make sure to add UpdateGame() to your raylib-game.')
        return
      }

      let free,addFile,globalize,Vector2,Vector3,Vector4,Matrix,Color,Rectangle,Image,Texture,RenderTexture,NPatchInfo,GlyphInfo,Font,Camera3D,Camera2D,Mesh,Shader,MaterialMap,Material,Transform,BoneInfo,Model,ModelAnimation,Ray,RayCollision,BoundingBox,Wave,AudioStream,Sound,Music,VrDeviceInfo,VrStereoConfig,FilePathList,Quaternion,Texture2D,TextureCubemap,RenderTexture2D,Camera,FLAG_VSYNC_HINT,FLAG_FULLSCREEN_MODE,FLAG_WINDOW_RESIZABLE,FLAG_WINDOW_UNDECORATED,FLAG_WINDOW_HIDDEN,FLAG_WINDOW_MINIMIZED,FLAG_WINDOW_MAXIMIZED,FLAG_WINDOW_UNFOCUSED,FLAG_WINDOW_TOPMOST,FLAG_WINDOW_ALWAYS_RUN,FLAG_WINDOW_TRANSPARENT,FLAG_WINDOW_HIGHDPI,FLAG_WINDOW_MOUSE_PASSTHROUGH,FLAG_MSAA_4X_HINT,FLAG_INTERLACED_HINT,LOG_ALL,LOG_TRACE,LOG_DEBUG,LOG_INFO,LOG_WARNING,LOG_ERROR,LOG_FATAL,LOG_NONE,KEY_NULL,KEY_APOSTROPHE,KEY_COMMA,KEY_MINUS,KEY_PERIOD,KEY_SLASH,KEY_ZERO,KEY_ONE,KEY_TWO,KEY_THREE,KEY_FOUR,KEY_FIVE,KEY_SIX,KEY_SEVEN,KEY_EIGHT,KEY_NINE,KEY_SEMICOLON,KEY_EQUAL,KEY_A,KEY_B,KEY_C,KEY_D,KEY_E,KEY_F,KEY_G,KEY_H,KEY_I,KEY_J,KEY_K,KEY_L,KEY_M,KEY_N,KEY_O,KEY_P,KEY_Q,KEY_R,KEY_S,KEY_T,KEY_U,KEY_V,KEY_W,KEY_X,KEY_Y,KEY_Z,KEY_LEFT_BRACKET,KEY_BACKSLASH,KEY_RIGHT_BRACKET,KEY_GRAVE,KEY_SPACE,KEY_ESCAPE,KEY_ENTER,KEY_TAB,KEY_BACKSPACE,KEY_INSERT,KEY_DELETE,KEY_RIGHT,KEY_LEFT,KEY_DOWN,KEY_UP,KEY_PAGE_UP,KEY_PAGE_DOWN,KEY_HOME,KEY_END,KEY_CAPS_LOCK,KEY_SCROLL_LOCK,KEY_NUM_LOCK,KEY_PRINT_SCREEN,KEY_PAUSE,KEY_F1,KEY_F2,KEY_F3,KEY_F4,KEY_F5,KEY_F6,KEY_F7,KEY_F8,KEY_F9,KEY_F10,KEY_F11,KEY_F12,KEY_LEFT_SHIFT,KEY_LEFT_CONTROL,KEY_LEFT_ALT,KEY_LEFT_SUPER,KEY_RIGHT_SHIFT,KEY_RIGHT_CONTROL,KEY_RIGHT_ALT,KEY_RIGHT_SUPER,KEY_KB_MENU,KEY_KP_0,KEY_KP_1,KEY_KP_2,KEY_KP_3,KEY_KP_4,KEY_KP_5,KEY_KP_6,KEY_KP_7,KEY_KP_8,KEY_KP_9,KEY_KP_DECIMAL,KEY_KP_DIVIDE,KEY_KP_MULTIPLY,KEY_KP_SUBTRACT,KEY_KP_ADD,KEY_KP_ENTER,KEY_KP_EQUAL,KEY_BACK,KEY_MENU,KEY_VOLUME_UP,KEY_VOLUME_DOWN,MOUSE_BUTTON_LEFT,MOUSE_BUTTON_RIGHT,MOUSE_BUTTON_MIDDLE,MOUSE_BUTTON_SIDE,MOUSE_BUTTON_EXTRA,MOUSE_BUTTON_FORWARD,MOUSE_BUTTON_BACK,MOUSE_CURSOR_DEFAULT,MOUSE_CURSOR_ARROW,MOUSE_CURSOR_IBEAM,MOUSE_CURSOR_CROSSHAIR,MOUSE_CURSOR_POINTING_HAND,MOUSE_CURSOR_RESIZE_EW,MOUSE_CURSOR_RESIZE_NS,MOUSE_CURSOR_RESIZE_NWSE,MOUSE_CURSOR_RESIZE_NESW,MOUSE_CURSOR_RESIZE_ALL,MOUSE_CURSOR_NOT_ALLOWED,GAMEPAD_BUTTON_UNKNOWN,GAMEPAD_BUTTON_LEFT_FACE_UP,GAMEPAD_BUTTON_LEFT_FACE_RIGHT,GAMEPAD_BUTTON_LEFT_FACE_DOWN,GAMEPAD_BUTTON_LEFT_FACE_LEFT,GAMEPAD_BUTTON_RIGHT_FACE_UP,GAMEPAD_BUTTON_RIGHT_FACE_RIGHT,GAMEPAD_BUTTON_RIGHT_FACE_DOWN,GAMEPAD_BUTTON_RIGHT_FACE_LEFT,GAMEPAD_BUTTON_LEFT_TRIGGER_1,GAMEPAD_BUTTON_LEFT_TRIGGER_2,GAMEPAD_BUTTON_RIGHT_TRIGGER_1,GAMEPAD_BUTTON_RIGHT_TRIGGER_2,GAMEPAD_BUTTON_MIDDLE_LEFT,GAMEPAD_BUTTON_MIDDLE,GAMEPAD_BUTTON_MIDDLE_RIGHT,GAMEPAD_BUTTON_LEFT_THUMB,GAMEPAD_BUTTON_RIGHT_THUMB,GAMEPAD_AXIS_LEFT_X,GAMEPAD_AXIS_LEFT_Y,GAMEPAD_AXIS_RIGHT_X,GAMEPAD_AXIS_RIGHT_Y,GAMEPAD_AXIS_LEFT_TRIGGER,GAMEPAD_AXIS_RIGHT_TRIGGER,MATERIAL_MAP_ALBEDO,MATERIAL_MAP_METALNESS,MATERIAL_MAP_NORMAL,MATERIAL_MAP_ROUGHNESS,MATERIAL_MAP_OCCLUSION,MATERIAL_MAP_EMISSION,MATERIAL_MAP_HEIGHT,MATERIAL_MAP_CUBEMAP,MATERIAL_MAP_IRRADIANCE,MATERIAL_MAP_PREFILTER,MATERIAL_MAP_BRDF,SHADER_LOC_VERTEX_POSITION,SHADER_LOC_VERTEX_TEXCOORD01,SHADER_LOC_VERTEX_TEXCOORD02,SHADER_LOC_VERTEX_NORMAL,SHADER_LOC_VERTEX_TANGENT,SHADER_LOC_VERTEX_COLOR,SHADER_LOC_MATRIX_MVP,SHADER_LOC_MATRIX_VIEW,SHADER_LOC_MATRIX_PROJECTION,SHADER_LOC_MATRIX_MODEL,SHADER_LOC_MATRIX_NORMAL,SHADER_LOC_VECTOR_VIEW,SHADER_LOC_COLOR_DIFFUSE,SHADER_LOC_COLOR_SPECULAR,SHADER_LOC_COLOR_AMBIENT,SHADER_LOC_MAP_ALBEDO,SHADER_LOC_MAP_METALNESS,SHADER_LOC_MAP_NORMAL,SHADER_LOC_MAP_ROUGHNESS,SHADER_LOC_MAP_OCCLUSION,SHADER_LOC_MAP_EMISSION,SHADER_LOC_MAP_HEIGHT,SHADER_LOC_MAP_CUBEMAP,SHADER_LOC_MAP_IRRADIANCE,SHADER_LOC_MAP_PREFILTER,SHADER_LOC_MAP_BRDF,SHADER_UNIFORM_FLOAT,SHADER_UNIFORM_VEC2,SHADER_UNIFORM_VEC3,SHADER_UNIFORM_VEC4,SHADER_UNIFORM_INT,SHADER_UNIFORM_IVEC2,SHADER_UNIFORM_IVEC3,SHADER_UNIFORM_IVEC4,SHADER_UNIFORM_SAMPLER2D,SHADER_ATTRIB_FLOAT,SHADER_ATTRIB_VEC2,SHADER_ATTRIB_VEC3,SHADER_ATTRIB_VEC4,PIXELFORMAT_UNCOMPRESSED_GRAYSCALE,PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA,PIXELFORMAT_UNCOMPRESSED_R5G6B5,PIXELFORMAT_UNCOMPRESSED_R8G8B8,PIXELFORMAT_UNCOMPRESSED_R5G5B5A1,PIXELFORMAT_UNCOMPRESSED_R4G4B4A4,PIXELFORMAT_UNCOMPRESSED_R8G8B8A8,PIXELFORMAT_UNCOMPRESSED_R32,PIXELFORMAT_UNCOMPRESSED_R32G32B32,PIXELFORMAT_UNCOMPRESSED_R32G32B32A32,PIXELFORMAT_COMPRESSED_DXT1_RGB,PIXELFORMAT_COMPRESSED_DXT1_RGBA,PIXELFORMAT_COMPRESSED_DXT3_RGBA,PIXELFORMAT_COMPRESSED_DXT5_RGBA,PIXELFORMAT_COMPRESSED_ETC1_RGB,PIXELFORMAT_COMPRESSED_ETC2_RGB,PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA,PIXELFORMAT_COMPRESSED_PVRT_RGB,PIXELFORMAT_COMPRESSED_PVRT_RGBA,PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA,PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA,TEXTURE_FILTER_POINT,TEXTURE_FILTER_BILINEAR,TEXTURE_FILTER_TRILINEAR,TEXTURE_FILTER_ANISOTROPIC_4X,TEXTURE_FILTER_ANISOTROPIC_8X,TEXTURE_FILTER_ANISOTROPIC_16X,TEXTURE_WRAP_REPEAT,TEXTURE_WRAP_CLAMP,TEXTURE_WRAP_MIRROR_REPEAT,TEXTURE_WRAP_MIRROR_CLAMP,CUBEMAP_LAYOUT_AUTO_DETECT,CUBEMAP_LAYOUT_LINE_VERTICAL,CUBEMAP_LAYOUT_LINE_HORIZONTAL,CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR,CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE,CUBEMAP_LAYOUT_PANORAMA,FONT_DEFAULT,FONT_BITMAP,FONT_SDF,BLEND_ALPHA,BLEND_ADDITIVE,BLEND_MULTIPLIED,BLEND_ADD_COLORS,BLEND_SUBTRACT_COLORS,BLEND_ALPHA_PREMULTIPLY,BLEND_CUSTOM,BLEND_CUSTOM_SEPARATE,GESTURE_NONE,GESTURE_TAP,GESTURE_DOUBLETAP,GESTURE_HOLD,GESTURE_DRAG,GESTURE_SWIPE_RIGHT,GESTURE_SWIPE_LEFT,GESTURE_SWIPE_UP,GESTURE_SWIPE_DOWN,GESTURE_PINCH_IN,GESTURE_PINCH_OUT,CAMERA_CUSTOM,CAMERA_FREE,CAMERA_ORBITAL,CAMERA_FIRST_PERSON,CAMERA_THIRD_PERSON,CAMERA_PERSPECTIVE,CAMERA_ORTHOGRAPHIC,NPATCH_NINE_PATCH,NPATCH_THREE_PATCH_VERTICAL,NPATCH_THREE_PATCH_HORIZONTAL,LIGHTGRAY,GRAY,DARKGRAY,YELLOW,GOLD,ORANGE,PINK,RED,MAROON,GREEN,LIME,DARKGREEN,SKYBLUE,BLUE,DARKBLUE,PURPLE,VIOLET,DARKPURPLE,BEIGE,BROWN,DARKBROWN,WHITE,BLACK,BLANK,MAGENTA,RAYWHITE,InitWindow,WindowShouldClose,CloseWindow,IsWindowReady,IsWindowFullscreen,IsWindowResized,IsWindowState,ClearWindowState,SetWindowMonitor,SetWindowMinSize,SetWindowSize,GetWindowHandle,GetScreenWidth,GetScreenHeight,GetRenderWidth,GetRenderHeight,GetMonitorCount,GetCurrentMonitor,GetMonitorPosition,GetMonitorWidth,GetMonitorHeight,GetMonitorPhysicalWidth,GetMonitorPhysicalHeight,GetMonitorRefreshRate,GetWindowPosition,GetWindowScaleDPI,GetMonitorName,SetClipboardText,GetClipboardText,EnableEventWaiting,DisableEventWaiting,SwapScreenBuffer,PollInputEvents,WaitTime,ShowCursor,HideCursor,IsCursorHidden,EnableCursor,DisableCursor,IsCursorOnScreen,ClearBackground,BeginDrawing,EndDrawing,BeginMode2D,EndMode2D,BeginMode3D,EndMode3D,BeginTextureMode,EndTextureMode,BeginShaderMode,EndShaderMode,BeginBlendMode,EndBlendMode,BeginScissorMode,EndScissorMode,BeginVrStereoMode,EndVrStereoMode,LoadVrStereoConfig,UnloadVrStereoConfig,LoadShader,LoadShaderFromMemory,IsShaderReady,GetShaderLocation,GetShaderLocationAttrib,SetShaderValue,SetShaderValueV,SetShaderValueMatrix,SetShaderValueTexture,UnloadShader,GetMouseRay,GetCameraMatrix,GetCameraMatrix2D,GetWorldToScreen,GetScreenToWorld2D,GetWorldToScreenEx,GetWorldToScreen2D,SetTargetFPS,GetFPS,GetFrameTime,GetTime,GetRandomValue,SetRandomSeed,TakeScreenshot,SetConfigFlags,TraceLog,SetTraceLogLevel,MemAlloc,MemRealloc,MemFree,OpenURL,SetTraceLogCallback,SetLoadFileDataCallback,SetSaveFileDataCallback,SetLoadFileTextCallback,SetSaveFileTextCallback,LoadFileData,UnloadFileData,SaveFileData,ExportDataAsCode,LoadFileText,UnloadFileText,SaveFileText,FileExists,DirectoryExists,IsFileExtension,GetFileLength,GetFileExtension,GetFileName,GetFileNameWithoutExt,GetDirectoryPath,GetPrevDirectoryPath,GetWorkingDirectory,GetApplicationDirectory,ChangeDirectory,IsPathFile,LoadDirectoryFiles,LoadDirectoryFilesEx,UnloadDirectoryFiles,IsFileDropped,LoadDroppedFiles,UnloadDroppedFiles,GetFileModTime,CompressData,DecompressData,EncodeDataBase64,DecodeDataBase64,IsKeyPressed,IsKeyDown,IsKeyReleased,IsKeyUp,SetExitKey,GetKeyPressed,GetCharPressed,IsGamepadAvailable,GetGamepadName,IsGamepadButtonPressed,IsGamepadButtonDown,IsGamepadButtonReleased,IsGamepadButtonUp,GetGamepadButtonPressed,GetGamepadAxisCount,GetGamepadAxisMovement,SetGamepadMappings,IsMouseButtonPressed,IsMouseButtonDown,IsMouseButtonReleased,IsMouseButtonUp,GetMouseX,GetMouseY,GetMousePosition,GetMouseDelta,SetMousePosition,SetMouseOffset,SetMouseScale,GetMouseWheelMove,GetMouseWheelMoveV,SetMouseCursor,GetTouchX,GetTouchY,GetTouchPosition,GetTouchPointId,GetTouchPointCount,SetGesturesEnabled,IsGestureDetected,GetGestureDetected,GetGestureHoldDuration,GetGestureDragVector,GetGestureDragAngle,GetGesturePinchVector,GetGesturePinchAngle,UpdateCamera,UpdateCameraPro,SetShapesTexture,DrawPixel,DrawPixelV,DrawLine,DrawLineV,DrawLineEx,DrawLineBezier,DrawLineBezierQuad,DrawLineBezierCubic,DrawLineStrip,DrawCircle,DrawCircleSector,DrawCircleSectorLines,DrawCircleGradient,DrawCircleV,DrawCircleLines,DrawEllipse,DrawEllipseLines,DrawRing,DrawRingLines,DrawRectangle,DrawRectangleV,DrawRectangleRec,DrawRectanglePro,DrawRectangleGradientV,DrawRectangleGradientH,DrawRectangleGradientEx,DrawRectangleLines,DrawRectangleLinesEx,DrawRectangleRounded,DrawRectangleRoundedLines,DrawTriangle,DrawTriangleLines,DrawTriangleFan,DrawTriangleStrip,DrawPoly,DrawPolyLines,DrawPolyLinesEx,CheckCollisionRecs,CheckCollisionCircles,CheckCollisionCircleRec,CheckCollisionPointRec,CheckCollisionPointCircle,CheckCollisionPointTriangle,CheckCollisionPointPoly,CheckCollisionLines,CheckCollisionPointLine,GetCollisionRec,LoadImage,LoadImageRaw,LoadImageAnim,LoadImageFromMemory,LoadImageFromTexture,LoadImageFromScreen,IsImageReady,UnloadImage,ExportImage,ExportImageAsCode,GenImageColor,GenImageGradientLinear,GenImageGradientRadial,GenImageGradientSquare,GenImageChecked,GenImageWhiteNoise,GenImagePerlinNoise,GenImageCellular,GenImageText,ImageCopy,ImageFromImage,ImageText,ImageTextEx,ImageFormat,ImageToPOT,ImageCrop,ImageAlphaCrop,ImageAlphaClear,ImageAlphaMask,ImageAlphaPremultiply,ImageBlurGaussian,ImageResize,ImageResizeNN,ImageResizeCanvas,ImageMipmaps,ImageDither,ImageFlipVertical,ImageFlipHorizontal,ImageRotate,ImageRotateCW,ImageRotateCCW,ImageColorTint,ImageColorInvert,ImageColorGrayscale,ImageColorContrast,ImageColorBrightness,ImageColorReplace,LoadImageColors,LoadImagePalette,UnloadImageColors,UnloadImagePalette,GetImageAlphaBorder,GetImageColor,ImageClearBackground,ImageDrawPixel,ImageDrawPixelV,ImageDrawLine,ImageDrawLineV,ImageDrawCircle,ImageDrawCircleV,ImageDrawCircleLines,ImageDrawCircleLinesV,ImageDrawRectangle,ImageDrawRectangleV,ImageDrawRectangleRec,ImageDrawRectangleLines,ImageDraw,ImageDrawText,ImageDrawTextEx,LoadTexture,LoadTextureFromImage,LoadTextureCubemap,LoadRenderTexture,IsTextureReady,UnloadTexture,IsRenderTextureReady,UnloadRenderTexture,UpdateTexture,UpdateTextureRec,GenTextureMipmaps,SetTextureFilter,SetTextureWrap,DrawTexture,DrawTextureV,DrawTextureEx,DrawTextureRec,DrawTexturePro,DrawTextureNPatch,Fade,ColorToInt,ColorNormalize,ColorFromNormalized,ColorToHSV,ColorFromHSV,ColorTint,ColorBrightness,ColorContrast,ColorAlpha,ColorAlphaBlend,GetColor,GetPixelColor,SetPixelColor,GetPixelDataSize,GetFontDefault,LoadFont,LoadFontEx,LoadFontFromImage,LoadFontFromMemory,IsFontReady,LoadFontData,GenImageFontAtlas,UnloadFontData,UnloadFont,ExportFontAsCode,DrawFPS,DrawText,DrawTextEx,DrawTextPro,DrawTextCodepoint,DrawTextCodepoints,MeasureText,MeasureTextEx,GetGlyphIndex,GetGlyphInfo,GetGlyphAtlasRec,LoadUTF8,UnloadUTF8,LoadCodepoints,UnloadCodepoints,GetCodepointCount,GetCodepoint,GetCodepointNext,GetCodepointPrevious,CodepointToUTF8,TextCopy,TextIsEqual,TextLength,TextFormat,TextSubtext,TextReplace,TextInsert,TextJoin,TextSplit,TextAppend,TextFindIndex,TextToUpper,TextToLower,TextToPascal,TextToInteger,DrawLine3D,DrawPoint3D,DrawCircle3D,DrawTriangle3D,DrawTriangleStrip3D,DrawCube,DrawCubeV,DrawCubeWires,DrawCubeWiresV,DrawSphere,DrawSphereEx,DrawSphereWires,DrawCylinder,DrawCylinderEx,DrawCylinderWires,DrawCylinderWiresEx,DrawCapsule,DrawCapsuleWires,DrawPlane,DrawRay,DrawGrid,LoadModel,LoadModelFromMesh,IsModelReady,UnloadModel,GetModelBoundingBox,DrawModel,DrawModelEx,DrawModelWires,DrawModelWiresEx,DrawBoundingBox,DrawBillboard,DrawBillboardRec,DrawBillboardPro,UploadMesh,UpdateMeshBuffer,UnloadMesh,DrawMesh,DrawMeshInstanced,ExportMesh,GetMeshBoundingBox,GenMeshTangents,GenMeshPoly,GenMeshPlane,GenMeshCube,GenMeshSphere,GenMeshHemiSphere,GenMeshCylinder,GenMeshCone,GenMeshTorus,GenMeshKnot,GenMeshHeightmap,GenMeshCubicmap,LoadMaterials,LoadMaterialDefault,IsMaterialReady,UnloadMaterial,SetMaterialTexture,SetModelMeshMaterial,LoadModelAnimations,UpdateModelAnimation,UnloadModelAnimation,UnloadModelAnimations,IsModelAnimationValid,CheckCollisionSpheres,CheckCollisionBoxes,CheckCollisionBoxSphere,GetRayCollisionSphere,GetRayCollisionBox,GetRayCollisionMesh,GetRayCollisionTriangle,GetRayCollisionQuad,InitAudioDevice,CloseAudioDevice,IsAudioDeviceReady,SetMasterVolume,LoadWave,LoadWaveFromMemory,IsWaveReady,LoadSound,LoadSoundFromWave,IsSoundReady,UpdateSound,UnloadWave,UnloadSound,ExportWave,ExportWaveAsCode,PlaySound,StopSound,PauseSound,ResumeSound,IsSoundPlaying,SetSoundVolume,SetSoundPitch,SetSoundPan,WaveCopy,WaveCrop,WaveFormat,LoadWaveSamples,UnloadWaveSamples,LoadMusicStream,LoadMusicStreamFromMemory,IsMusicReady,UnloadMusicStream,PlayMusicStream,IsMusicStreamPlaying,UpdateMusicStream,StopMusicStream,PauseMusicStream,ResumeMusicStream,SeekMusicStream,SetMusicVolume,SetMusicPitch,SetMusicPan,GetMusicTimeLength,GetMusicTimePlayed,LoadAudioStream,IsAudioStreamReady,UnloadAudioStream,UpdateAudioStream,IsAudioStreamProcessed,PlayAudioStream,PauseAudioStream,ResumeAudioStream,IsAudioStreamPlaying,StopAudioStream,SetAudioStreamVolume,SetAudioStreamPitch,SetAudioStreamPan,SetAudioStreamBufferSizeDefault,SetAudioStreamCallback,AttachAudioStreamProcessor,DetachAudioStreamProcessor,AttachAudioMixedProcessor,DetachAudioMixedProcessor

      runGame(canvas, async raylib => {
        free = raylib.free
  addFile = raylib.addFile
  globalize = raylib.globalize
  Vector2 = raylib.Vector2
  Vector3 = raylib.Vector3
  Vector4 = raylib.Vector4
  Matrix = raylib.Matrix
  Color = raylib.Color
  Rectangle = raylib.Rectangle
  Image = raylib.Image
  Texture = raylib.Texture
  RenderTexture = raylib.RenderTexture
  NPatchInfo = raylib.NPatchInfo
  GlyphInfo = raylib.GlyphInfo
  Font = raylib.Font
  Camera3D = raylib.Camera3D
  Camera2D = raylib.Camera2D
  Mesh = raylib.Mesh
  Shader = raylib.Shader
  MaterialMap = raylib.MaterialMap
  Material = raylib.Material
  Transform = raylib.Transform
  BoneInfo = raylib.BoneInfo
  Model = raylib.Model
  ModelAnimation = raylib.ModelAnimation
  Ray = raylib.Ray
  RayCollision = raylib.RayCollision
  BoundingBox = raylib.BoundingBox
  Wave = raylib.Wave
  AudioStream = raylib.AudioStream
  Sound = raylib.Sound
  Music = raylib.Music
  VrDeviceInfo = raylib.VrDeviceInfo
  VrStereoConfig = raylib.VrStereoConfig
  FilePathList = raylib.FilePathList
  Quaternion = raylib.Quaternion
  Texture2D = raylib.Texture2D
  TextureCubemap = raylib.TextureCubemap
  RenderTexture2D = raylib.RenderTexture2D
  Camera = raylib.Camera
  FLAG_VSYNC_HINT = raylib.FLAG_VSYNC_HINT
  FLAG_FULLSCREEN_MODE = raylib.FLAG_FULLSCREEN_MODE
  FLAG_WINDOW_RESIZABLE = raylib.FLAG_WINDOW_RESIZABLE
  FLAG_WINDOW_UNDECORATED = raylib.FLAG_WINDOW_UNDECORATED
  FLAG_WINDOW_HIDDEN = raylib.FLAG_WINDOW_HIDDEN
  FLAG_WINDOW_MINIMIZED = raylib.FLAG_WINDOW_MINIMIZED
  FLAG_WINDOW_MAXIMIZED = raylib.FLAG_WINDOW_MAXIMIZED
  FLAG_WINDOW_UNFOCUSED = raylib.FLAG_WINDOW_UNFOCUSED
  FLAG_WINDOW_TOPMOST = raylib.FLAG_WINDOW_TOPMOST
  FLAG_WINDOW_ALWAYS_RUN = raylib.FLAG_WINDOW_ALWAYS_RUN
  FLAG_WINDOW_TRANSPARENT = raylib.FLAG_WINDOW_TRANSPARENT
  FLAG_WINDOW_HIGHDPI = raylib.FLAG_WINDOW_HIGHDPI
  FLAG_WINDOW_MOUSE_PASSTHROUGH = raylib.FLAG_WINDOW_MOUSE_PASSTHROUGH
  FLAG_MSAA_4X_HINT = raylib.FLAG_MSAA_4X_HINT
  FLAG_INTERLACED_HINT = raylib.FLAG_INTERLACED_HINT
  LOG_ALL = raylib.LOG_ALL
  LOG_TRACE = raylib.LOG_TRACE
  LOG_DEBUG = raylib.LOG_DEBUG
  LOG_INFO = raylib.LOG_INFO
  LOG_WARNING = raylib.LOG_WARNING
  LOG_ERROR = raylib.LOG_ERROR
  LOG_FATAL = raylib.LOG_FATAL
  LOG_NONE = raylib.LOG_NONE
  KEY_NULL = raylib.KEY_NULL
  KEY_APOSTROPHE = raylib.KEY_APOSTROPHE
  KEY_COMMA = raylib.KEY_COMMA
  KEY_MINUS = raylib.KEY_MINUS
  KEY_PERIOD = raylib.KEY_PERIOD
  KEY_SLASH = raylib.KEY_SLASH
  KEY_ZERO = raylib.KEY_ZERO
  KEY_ONE = raylib.KEY_ONE
  KEY_TWO = raylib.KEY_TWO
  KEY_THREE = raylib.KEY_THREE
  KEY_FOUR = raylib.KEY_FOUR
  KEY_FIVE = raylib.KEY_FIVE
  KEY_SIX = raylib.KEY_SIX
  KEY_SEVEN = raylib.KEY_SEVEN
  KEY_EIGHT = raylib.KEY_EIGHT
  KEY_NINE = raylib.KEY_NINE
  KEY_SEMICOLON = raylib.KEY_SEMICOLON
  KEY_EQUAL = raylib.KEY_EQUAL
  KEY_A = raylib.KEY_A
  KEY_B = raylib.KEY_B
  KEY_C = raylib.KEY_C
  KEY_D = raylib.KEY_D
  KEY_E = raylib.KEY_E
  KEY_F = raylib.KEY_F
  KEY_G = raylib.KEY_G
  KEY_H = raylib.KEY_H
  KEY_I = raylib.KEY_I
  KEY_J = raylib.KEY_J
  KEY_K = raylib.KEY_K
  KEY_L = raylib.KEY_L
  KEY_M = raylib.KEY_M
  KEY_N = raylib.KEY_N
  KEY_O = raylib.KEY_O
  KEY_P = raylib.KEY_P
  KEY_Q = raylib.KEY_Q
  KEY_R = raylib.KEY_R
  KEY_S = raylib.KEY_S
  KEY_T = raylib.KEY_T
  KEY_U = raylib.KEY_U
  KEY_V = raylib.KEY_V
  KEY_W = raylib.KEY_W
  KEY_X = raylib.KEY_X
  KEY_Y = raylib.KEY_Y
  KEY_Z = raylib.KEY_Z
  KEY_LEFT_BRACKET = raylib.KEY_LEFT_BRACKET
  KEY_BACKSLASH = raylib.KEY_BACKSLASH
  KEY_RIGHT_BRACKET = raylib.KEY_RIGHT_BRACKET
  KEY_GRAVE = raylib.KEY_GRAVE
  KEY_SPACE = raylib.KEY_SPACE
  KEY_ESCAPE = raylib.KEY_ESCAPE
  KEY_ENTER = raylib.KEY_ENTER
  KEY_TAB = raylib.KEY_TAB
  KEY_BACKSPACE = raylib.KEY_BACKSPACE
  KEY_INSERT = raylib.KEY_INSERT
  KEY_DELETE = raylib.KEY_DELETE
  KEY_RIGHT = raylib.KEY_RIGHT
  KEY_LEFT = raylib.KEY_LEFT
  KEY_DOWN = raylib.KEY_DOWN
  KEY_UP = raylib.KEY_UP
  KEY_PAGE_UP = raylib.KEY_PAGE_UP
  KEY_PAGE_DOWN = raylib.KEY_PAGE_DOWN
  KEY_HOME = raylib.KEY_HOME
  KEY_END = raylib.KEY_END
  KEY_CAPS_LOCK = raylib.KEY_CAPS_LOCK
  KEY_SCROLL_LOCK = raylib.KEY_SCROLL_LOCK
  KEY_NUM_LOCK = raylib.KEY_NUM_LOCK
  KEY_PRINT_SCREEN = raylib.KEY_PRINT_SCREEN
  KEY_PAUSE = raylib.KEY_PAUSE
  KEY_F1 = raylib.KEY_F1
  KEY_F2 = raylib.KEY_F2
  KEY_F3 = raylib.KEY_F3
  KEY_F4 = raylib.KEY_F4
  KEY_F5 = raylib.KEY_F5
  KEY_F6 = raylib.KEY_F6
  KEY_F7 = raylib.KEY_F7
  KEY_F8 = raylib.KEY_F8
  KEY_F9 = raylib.KEY_F9
  KEY_F10 = raylib.KEY_F10
  KEY_F11 = raylib.KEY_F11
  KEY_F12 = raylib.KEY_F12
  KEY_LEFT_SHIFT = raylib.KEY_LEFT_SHIFT
  KEY_LEFT_CONTROL = raylib.KEY_LEFT_CONTROL
  KEY_LEFT_ALT = raylib.KEY_LEFT_ALT
  KEY_LEFT_SUPER = raylib.KEY_LEFT_SUPER
  KEY_RIGHT_SHIFT = raylib.KEY_RIGHT_SHIFT
  KEY_RIGHT_CONTROL = raylib.KEY_RIGHT_CONTROL
  KEY_RIGHT_ALT = raylib.KEY_RIGHT_ALT
  KEY_RIGHT_SUPER = raylib.KEY_RIGHT_SUPER
  KEY_KB_MENU = raylib.KEY_KB_MENU
  KEY_KP_0 = raylib.KEY_KP_0
  KEY_KP_1 = raylib.KEY_KP_1
  KEY_KP_2 = raylib.KEY_KP_2
  KEY_KP_3 = raylib.KEY_KP_3
  KEY_KP_4 = raylib.KEY_KP_4
  KEY_KP_5 = raylib.KEY_KP_5
  KEY_KP_6 = raylib.KEY_KP_6
  KEY_KP_7 = raylib.KEY_KP_7
  KEY_KP_8 = raylib.KEY_KP_8
  KEY_KP_9 = raylib.KEY_KP_9
  KEY_KP_DECIMAL = raylib.KEY_KP_DECIMAL
  KEY_KP_DIVIDE = raylib.KEY_KP_DIVIDE
  KEY_KP_MULTIPLY = raylib.KEY_KP_MULTIPLY
  KEY_KP_SUBTRACT = raylib.KEY_KP_SUBTRACT
  KEY_KP_ADD = raylib.KEY_KP_ADD
  KEY_KP_ENTER = raylib.KEY_KP_ENTER
  KEY_KP_EQUAL = raylib.KEY_KP_EQUAL
  KEY_BACK = raylib.KEY_BACK
  KEY_MENU = raylib.KEY_MENU
  KEY_VOLUME_UP = raylib.KEY_VOLUME_UP
  KEY_VOLUME_DOWN = raylib.KEY_VOLUME_DOWN
  MOUSE_BUTTON_LEFT = raylib.MOUSE_BUTTON_LEFT
  MOUSE_BUTTON_RIGHT = raylib.MOUSE_BUTTON_RIGHT
  MOUSE_BUTTON_MIDDLE = raylib.MOUSE_BUTTON_MIDDLE
  MOUSE_BUTTON_SIDE = raylib.MOUSE_BUTTON_SIDE
  MOUSE_BUTTON_EXTRA = raylib.MOUSE_BUTTON_EXTRA
  MOUSE_BUTTON_FORWARD = raylib.MOUSE_BUTTON_FORWARD
  MOUSE_BUTTON_BACK = raylib.MOUSE_BUTTON_BACK
  MOUSE_CURSOR_DEFAULT = raylib.MOUSE_CURSOR_DEFAULT
  MOUSE_CURSOR_ARROW = raylib.MOUSE_CURSOR_ARROW
  MOUSE_CURSOR_IBEAM = raylib.MOUSE_CURSOR_IBEAM
  MOUSE_CURSOR_CROSSHAIR = raylib.MOUSE_CURSOR_CROSSHAIR
  MOUSE_CURSOR_POINTING_HAND = raylib.MOUSE_CURSOR_POINTING_HAND
  MOUSE_CURSOR_RESIZE_EW = raylib.MOUSE_CURSOR_RESIZE_EW
  MOUSE_CURSOR_RESIZE_NS = raylib.MOUSE_CURSOR_RESIZE_NS
  MOUSE_CURSOR_RESIZE_NWSE = raylib.MOUSE_CURSOR_RESIZE_NWSE
  MOUSE_CURSOR_RESIZE_NESW = raylib.MOUSE_CURSOR_RESIZE_NESW
  MOUSE_CURSOR_RESIZE_ALL = raylib.MOUSE_CURSOR_RESIZE_ALL
  MOUSE_CURSOR_NOT_ALLOWED = raylib.MOUSE_CURSOR_NOT_ALLOWED
  GAMEPAD_BUTTON_UNKNOWN = raylib.GAMEPAD_BUTTON_UNKNOWN
  GAMEPAD_BUTTON_LEFT_FACE_UP = raylib.GAMEPAD_BUTTON_LEFT_FACE_UP
  GAMEPAD_BUTTON_LEFT_FACE_RIGHT = raylib.GAMEPAD_BUTTON_LEFT_FACE_RIGHT
  GAMEPAD_BUTTON_LEFT_FACE_DOWN = raylib.GAMEPAD_BUTTON_LEFT_FACE_DOWN
  GAMEPAD_BUTTON_LEFT_FACE_LEFT = raylib.GAMEPAD_BUTTON_LEFT_FACE_LEFT
  GAMEPAD_BUTTON_RIGHT_FACE_UP = raylib.GAMEPAD_BUTTON_RIGHT_FACE_UP
  GAMEPAD_BUTTON_RIGHT_FACE_RIGHT = raylib.GAMEPAD_BUTTON_RIGHT_FACE_RIGHT
  GAMEPAD_BUTTON_RIGHT_FACE_DOWN = raylib.GAMEPAD_BUTTON_RIGHT_FACE_DOWN
  GAMEPAD_BUTTON_RIGHT_FACE_LEFT = raylib.GAMEPAD_BUTTON_RIGHT_FACE_LEFT
  GAMEPAD_BUTTON_LEFT_TRIGGER_1 = raylib.GAMEPAD_BUTTON_LEFT_TRIGGER_1
  GAMEPAD_BUTTON_LEFT_TRIGGER_2 = raylib.GAMEPAD_BUTTON_LEFT_TRIGGER_2
  GAMEPAD_BUTTON_RIGHT_TRIGGER_1 = raylib.GAMEPAD_BUTTON_RIGHT_TRIGGER_1
  GAMEPAD_BUTTON_RIGHT_TRIGGER_2 = raylib.GAMEPAD_BUTTON_RIGHT_TRIGGER_2
  GAMEPAD_BUTTON_MIDDLE_LEFT = raylib.GAMEPAD_BUTTON_MIDDLE_LEFT
  GAMEPAD_BUTTON_MIDDLE = raylib.GAMEPAD_BUTTON_MIDDLE
  GAMEPAD_BUTTON_MIDDLE_RIGHT = raylib.GAMEPAD_BUTTON_MIDDLE_RIGHT
  GAMEPAD_BUTTON_LEFT_THUMB = raylib.GAMEPAD_BUTTON_LEFT_THUMB
  GAMEPAD_BUTTON_RIGHT_THUMB = raylib.GAMEPAD_BUTTON_RIGHT_THUMB
  GAMEPAD_AXIS_LEFT_X = raylib.GAMEPAD_AXIS_LEFT_X
  GAMEPAD_AXIS_LEFT_Y = raylib.GAMEPAD_AXIS_LEFT_Y
  GAMEPAD_AXIS_RIGHT_X = raylib.GAMEPAD_AXIS_RIGHT_X
  GAMEPAD_AXIS_RIGHT_Y = raylib.GAMEPAD_AXIS_RIGHT_Y
  GAMEPAD_AXIS_LEFT_TRIGGER = raylib.GAMEPAD_AXIS_LEFT_TRIGGER
  GAMEPAD_AXIS_RIGHT_TRIGGER = raylib.GAMEPAD_AXIS_RIGHT_TRIGGER
  MATERIAL_MAP_ALBEDO = raylib.MATERIAL_MAP_ALBEDO
  MATERIAL_MAP_METALNESS = raylib.MATERIAL_MAP_METALNESS
  MATERIAL_MAP_NORMAL = raylib.MATERIAL_MAP_NORMAL
  MATERIAL_MAP_ROUGHNESS = raylib.MATERIAL_MAP_ROUGHNESS
  MATERIAL_MAP_OCCLUSION = raylib.MATERIAL_MAP_OCCLUSION
  MATERIAL_MAP_EMISSION = raylib.MATERIAL_MAP_EMISSION
  MATERIAL_MAP_HEIGHT = raylib.MATERIAL_MAP_HEIGHT
  MATERIAL_MAP_CUBEMAP = raylib.MATERIAL_MAP_CUBEMAP
  MATERIAL_MAP_IRRADIANCE = raylib.MATERIAL_MAP_IRRADIANCE
  MATERIAL_MAP_PREFILTER = raylib.MATERIAL_MAP_PREFILTER
  MATERIAL_MAP_BRDF = raylib.MATERIAL_MAP_BRDF
  SHADER_LOC_VERTEX_POSITION = raylib.SHADER_LOC_VERTEX_POSITION
  SHADER_LOC_VERTEX_TEXCOORD01 = raylib.SHADER_LOC_VERTEX_TEXCOORD01
  SHADER_LOC_VERTEX_TEXCOORD02 = raylib.SHADER_LOC_VERTEX_TEXCOORD02
  SHADER_LOC_VERTEX_NORMAL = raylib.SHADER_LOC_VERTEX_NORMAL
  SHADER_LOC_VERTEX_TANGENT = raylib.SHADER_LOC_VERTEX_TANGENT
  SHADER_LOC_VERTEX_COLOR = raylib.SHADER_LOC_VERTEX_COLOR
  SHADER_LOC_MATRIX_MVP = raylib.SHADER_LOC_MATRIX_MVP
  SHADER_LOC_MATRIX_VIEW = raylib.SHADER_LOC_MATRIX_VIEW
  SHADER_LOC_MATRIX_PROJECTION = raylib.SHADER_LOC_MATRIX_PROJECTION
  SHADER_LOC_MATRIX_MODEL = raylib.SHADER_LOC_MATRIX_MODEL
  SHADER_LOC_MATRIX_NORMAL = raylib.SHADER_LOC_MATRIX_NORMAL
  SHADER_LOC_VECTOR_VIEW = raylib.SHADER_LOC_VECTOR_VIEW
  SHADER_LOC_COLOR_DIFFUSE = raylib.SHADER_LOC_COLOR_DIFFUSE
  SHADER_LOC_COLOR_SPECULAR = raylib.SHADER_LOC_COLOR_SPECULAR
  SHADER_LOC_COLOR_AMBIENT = raylib.SHADER_LOC_COLOR_AMBIENT
  SHADER_LOC_MAP_ALBEDO = raylib.SHADER_LOC_MAP_ALBEDO
  SHADER_LOC_MAP_METALNESS = raylib.SHADER_LOC_MAP_METALNESS
  SHADER_LOC_MAP_NORMAL = raylib.SHADER_LOC_MAP_NORMAL
  SHADER_LOC_MAP_ROUGHNESS = raylib.SHADER_LOC_MAP_ROUGHNESS
  SHADER_LOC_MAP_OCCLUSION = raylib.SHADER_LOC_MAP_OCCLUSION
  SHADER_LOC_MAP_EMISSION = raylib.SHADER_LOC_MAP_EMISSION
  SHADER_LOC_MAP_HEIGHT = raylib.SHADER_LOC_MAP_HEIGHT
  SHADER_LOC_MAP_CUBEMAP = raylib.SHADER_LOC_MAP_CUBEMAP
  SHADER_LOC_MAP_IRRADIANCE = raylib.SHADER_LOC_MAP_IRRADIANCE
  SHADER_LOC_MAP_PREFILTER = raylib.SHADER_LOC_MAP_PREFILTER
  SHADER_LOC_MAP_BRDF = raylib.SHADER_LOC_MAP_BRDF
  SHADER_UNIFORM_FLOAT = raylib.SHADER_UNIFORM_FLOAT
  SHADER_UNIFORM_VEC2 = raylib.SHADER_UNIFORM_VEC2
  SHADER_UNIFORM_VEC3 = raylib.SHADER_UNIFORM_VEC3
  SHADER_UNIFORM_VEC4 = raylib.SHADER_UNIFORM_VEC4
  SHADER_UNIFORM_INT = raylib.SHADER_UNIFORM_INT
  SHADER_UNIFORM_IVEC2 = raylib.SHADER_UNIFORM_IVEC2
  SHADER_UNIFORM_IVEC3 = raylib.SHADER_UNIFORM_IVEC3
  SHADER_UNIFORM_IVEC4 = raylib.SHADER_UNIFORM_IVEC4
  SHADER_UNIFORM_SAMPLER2D = raylib.SHADER_UNIFORM_SAMPLER2D
  SHADER_ATTRIB_FLOAT = raylib.SHADER_ATTRIB_FLOAT
  SHADER_ATTRIB_VEC2 = raylib.SHADER_ATTRIB_VEC2
  SHADER_ATTRIB_VEC3 = raylib.SHADER_ATTRIB_VEC3
  SHADER_ATTRIB_VEC4 = raylib.SHADER_ATTRIB_VEC4
  PIXELFORMAT_UNCOMPRESSED_GRAYSCALE = raylib.PIXELFORMAT_UNCOMPRESSED_GRAYSCALE
  PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA = raylib.PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA
  PIXELFORMAT_UNCOMPRESSED_R5G6B5 = raylib.PIXELFORMAT_UNCOMPRESSED_R5G6B5
  PIXELFORMAT_UNCOMPRESSED_R8G8B8 = raylib.PIXELFORMAT_UNCOMPRESSED_R8G8B8
  PIXELFORMAT_UNCOMPRESSED_R5G5B5A1 = raylib.PIXELFORMAT_UNCOMPRESSED_R5G5B5A1
  PIXELFORMAT_UNCOMPRESSED_R4G4B4A4 = raylib.PIXELFORMAT_UNCOMPRESSED_R4G4B4A4
  PIXELFORMAT_UNCOMPRESSED_R8G8B8A8 = raylib.PIXELFORMAT_UNCOMPRESSED_R8G8B8A8
  PIXELFORMAT_UNCOMPRESSED_R32 = raylib.PIXELFORMAT_UNCOMPRESSED_R32
  PIXELFORMAT_UNCOMPRESSED_R32G32B32 = raylib.PIXELFORMAT_UNCOMPRESSED_R32G32B32
  PIXELFORMAT_UNCOMPRESSED_R32G32B32A32 = raylib.PIXELFORMAT_UNCOMPRESSED_R32G32B32A32
  PIXELFORMAT_COMPRESSED_DXT1_RGB = raylib.PIXELFORMAT_COMPRESSED_DXT1_RGB
  PIXELFORMAT_COMPRESSED_DXT1_RGBA = raylib.PIXELFORMAT_COMPRESSED_DXT1_RGBA
  PIXELFORMAT_COMPRESSED_DXT3_RGBA = raylib.PIXELFORMAT_COMPRESSED_DXT3_RGBA
  PIXELFORMAT_COMPRESSED_DXT5_RGBA = raylib.PIXELFORMAT_COMPRESSED_DXT5_RGBA
  PIXELFORMAT_COMPRESSED_ETC1_RGB = raylib.PIXELFORMAT_COMPRESSED_ETC1_RGB
  PIXELFORMAT_COMPRESSED_ETC2_RGB = raylib.PIXELFORMAT_COMPRESSED_ETC2_RGB
  PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA = raylib.PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA
  PIXELFORMAT_COMPRESSED_PVRT_RGB = raylib.PIXELFORMAT_COMPRESSED_PVRT_RGB
  PIXELFORMAT_COMPRESSED_PVRT_RGBA = raylib.PIXELFORMAT_COMPRESSED_PVRT_RGBA
  PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA = raylib.PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA
  PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA = raylib.PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA
  TEXTURE_FILTER_POINT = raylib.TEXTURE_FILTER_POINT
  TEXTURE_FILTER_BILINEAR = raylib.TEXTURE_FILTER_BILINEAR
  TEXTURE_FILTER_TRILINEAR = raylib.TEXTURE_FILTER_TRILINEAR
  TEXTURE_FILTER_ANISOTROPIC_4X = raylib.TEXTURE_FILTER_ANISOTROPIC_4X
  TEXTURE_FILTER_ANISOTROPIC_8X = raylib.TEXTURE_FILTER_ANISOTROPIC_8X
  TEXTURE_FILTER_ANISOTROPIC_16X = raylib.TEXTURE_FILTER_ANISOTROPIC_16X
  TEXTURE_WRAP_REPEAT = raylib.TEXTURE_WRAP_REPEAT
  TEXTURE_WRAP_CLAMP = raylib.TEXTURE_WRAP_CLAMP
  TEXTURE_WRAP_MIRROR_REPEAT = raylib.TEXTURE_WRAP_MIRROR_REPEAT
  TEXTURE_WRAP_MIRROR_CLAMP = raylib.TEXTURE_WRAP_MIRROR_CLAMP
  CUBEMAP_LAYOUT_AUTO_DETECT = raylib.CUBEMAP_LAYOUT_AUTO_DETECT
  CUBEMAP_LAYOUT_LINE_VERTICAL = raylib.CUBEMAP_LAYOUT_LINE_VERTICAL
  CUBEMAP_LAYOUT_LINE_HORIZONTAL = raylib.CUBEMAP_LAYOUT_LINE_HORIZONTAL
  CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR = raylib.CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR
  CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE = raylib.CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE
  CUBEMAP_LAYOUT_PANORAMA = raylib.CUBEMAP_LAYOUT_PANORAMA
  FONT_DEFAULT = raylib.FONT_DEFAULT
  FONT_BITMAP = raylib.FONT_BITMAP
  FONT_SDF = raylib.FONT_SDF
  BLEND_ALPHA = raylib.BLEND_ALPHA
  BLEND_ADDITIVE = raylib.BLEND_ADDITIVE
  BLEND_MULTIPLIED = raylib.BLEND_MULTIPLIED
  BLEND_ADD_COLORS = raylib.BLEND_ADD_COLORS
  BLEND_SUBTRACT_COLORS = raylib.BLEND_SUBTRACT_COLORS
  BLEND_ALPHA_PREMULTIPLY = raylib.BLEND_ALPHA_PREMULTIPLY
  BLEND_CUSTOM = raylib.BLEND_CUSTOM
  BLEND_CUSTOM_SEPARATE = raylib.BLEND_CUSTOM_SEPARATE
  GESTURE_NONE = raylib.GESTURE_NONE
  GESTURE_TAP = raylib.GESTURE_TAP
  GESTURE_DOUBLETAP = raylib.GESTURE_DOUBLETAP
  GESTURE_HOLD = raylib.GESTURE_HOLD
  GESTURE_DRAG = raylib.GESTURE_DRAG
  GESTURE_SWIPE_RIGHT = raylib.GESTURE_SWIPE_RIGHT
  GESTURE_SWIPE_LEFT = raylib.GESTURE_SWIPE_LEFT
  GESTURE_SWIPE_UP = raylib.GESTURE_SWIPE_UP
  GESTURE_SWIPE_DOWN = raylib.GESTURE_SWIPE_DOWN
  GESTURE_PINCH_IN = raylib.GESTURE_PINCH_IN
  GESTURE_PINCH_OUT = raylib.GESTURE_PINCH_OUT
  CAMERA_CUSTOM = raylib.CAMERA_CUSTOM
  CAMERA_FREE = raylib.CAMERA_FREE
  CAMERA_ORBITAL = raylib.CAMERA_ORBITAL
  CAMERA_FIRST_PERSON = raylib.CAMERA_FIRST_PERSON
  CAMERA_THIRD_PERSON = raylib.CAMERA_THIRD_PERSON
  CAMERA_PERSPECTIVE = raylib.CAMERA_PERSPECTIVE
  CAMERA_ORTHOGRAPHIC = raylib.CAMERA_ORTHOGRAPHIC
  NPATCH_NINE_PATCH = raylib.NPATCH_NINE_PATCH
  NPATCH_THREE_PATCH_VERTICAL = raylib.NPATCH_THREE_PATCH_VERTICAL
  NPATCH_THREE_PATCH_HORIZONTAL = raylib.NPATCH_THREE_PATCH_HORIZONTAL
  LIGHTGRAY = raylib.LIGHTGRAY
  GRAY = raylib.GRAY
  DARKGRAY = raylib.DARKGRAY
  YELLOW = raylib.YELLOW
  GOLD = raylib.GOLD
  ORANGE = raylib.ORANGE
  PINK = raylib.PINK
  RED = raylib.RED
  MAROON = raylib.MAROON
  GREEN = raylib.GREEN
  LIME = raylib.LIME
  DARKGREEN = raylib.DARKGREEN
  SKYBLUE = raylib.SKYBLUE
  BLUE = raylib.BLUE
  DARKBLUE = raylib.DARKBLUE
  PURPLE = raylib.PURPLE
  VIOLET = raylib.VIOLET
  DARKPURPLE = raylib.DARKPURPLE
  BEIGE = raylib.BEIGE
  BROWN = raylib.BROWN
  DARKBROWN = raylib.DARKBROWN
  WHITE = raylib.WHITE
  BLACK = raylib.BLACK
  BLANK = raylib.BLANK
  MAGENTA = raylib.MAGENTA
  RAYWHITE = raylib.RAYWHITE
  InitWindow = raylib.InitWindow
  WindowShouldClose = raylib.WindowShouldClose
  CloseWindow = raylib.CloseWindow
  IsWindowReady = raylib.IsWindowReady
  IsWindowFullscreen = raylib.IsWindowFullscreen
  IsWindowResized = raylib.IsWindowResized
  IsWindowState = raylib.IsWindowState
  ClearWindowState = raylib.ClearWindowState
  SetWindowMonitor = raylib.SetWindowMonitor
  SetWindowMinSize = raylib.SetWindowMinSize
  SetWindowSize = raylib.SetWindowSize
  GetWindowHandle = raylib.GetWindowHandle
  GetScreenWidth = raylib.GetScreenWidth
  GetScreenHeight = raylib.GetScreenHeight
  GetRenderWidth = raylib.GetRenderWidth
  GetRenderHeight = raylib.GetRenderHeight
  GetMonitorCount = raylib.GetMonitorCount
  GetCurrentMonitor = raylib.GetCurrentMonitor
  GetMonitorPosition = raylib.GetMonitorPosition
  GetMonitorWidth = raylib.GetMonitorWidth
  GetMonitorHeight = raylib.GetMonitorHeight
  GetMonitorPhysicalWidth = raylib.GetMonitorPhysicalWidth
  GetMonitorPhysicalHeight = raylib.GetMonitorPhysicalHeight
  GetMonitorRefreshRate = raylib.GetMonitorRefreshRate
  GetWindowPosition = raylib.GetWindowPosition
  GetWindowScaleDPI = raylib.GetWindowScaleDPI
  GetMonitorName = raylib.GetMonitorName
  SetClipboardText = raylib.SetClipboardText
  GetClipboardText = raylib.GetClipboardText
  EnableEventWaiting = raylib.EnableEventWaiting
  DisableEventWaiting = raylib.DisableEventWaiting
  SwapScreenBuffer = raylib.SwapScreenBuffer
  PollInputEvents = raylib.PollInputEvents
  WaitTime = raylib.WaitTime
  ShowCursor = raylib.ShowCursor
  HideCursor = raylib.HideCursor
  IsCursorHidden = raylib.IsCursorHidden
  EnableCursor = raylib.EnableCursor
  DisableCursor = raylib.DisableCursor
  IsCursorOnScreen = raylib.IsCursorOnScreen
  ClearBackground = raylib.ClearBackground
  BeginDrawing = raylib.BeginDrawing
  EndDrawing = raylib.EndDrawing
  BeginMode2D = raylib.BeginMode2D
  EndMode2D = raylib.EndMode2D
  BeginMode3D = raylib.BeginMode3D
  EndMode3D = raylib.EndMode3D
  BeginTextureMode = raylib.BeginTextureMode
  EndTextureMode = raylib.EndTextureMode
  BeginShaderMode = raylib.BeginShaderMode
  EndShaderMode = raylib.EndShaderMode
  BeginBlendMode = raylib.BeginBlendMode
  EndBlendMode = raylib.EndBlendMode
  BeginScissorMode = raylib.BeginScissorMode
  EndScissorMode = raylib.EndScissorMode
  BeginVrStereoMode = raylib.BeginVrStereoMode
  EndVrStereoMode = raylib.EndVrStereoMode
  LoadVrStereoConfig = raylib.LoadVrStereoConfig
  UnloadVrStereoConfig = raylib.UnloadVrStereoConfig
  LoadShader = raylib.LoadShader
  LoadShaderFromMemory = raylib.LoadShaderFromMemory
  IsShaderReady = raylib.IsShaderReady
  GetShaderLocation = raylib.GetShaderLocation
  GetShaderLocationAttrib = raylib.GetShaderLocationAttrib
  SetShaderValue = raylib.SetShaderValue
  SetShaderValueV = raylib.SetShaderValueV
  SetShaderValueMatrix = raylib.SetShaderValueMatrix
  SetShaderValueTexture = raylib.SetShaderValueTexture
  UnloadShader = raylib.UnloadShader
  GetMouseRay = raylib.GetMouseRay
  GetCameraMatrix = raylib.GetCameraMatrix
  GetCameraMatrix2D = raylib.GetCameraMatrix2D
  GetWorldToScreen = raylib.GetWorldToScreen
  GetScreenToWorld2D = raylib.GetScreenToWorld2D
  GetWorldToScreenEx = raylib.GetWorldToScreenEx
  GetWorldToScreen2D = raylib.GetWorldToScreen2D
  SetTargetFPS = raylib.SetTargetFPS
  GetFPS = raylib.GetFPS
  GetFrameTime = raylib.GetFrameTime
  GetTime = raylib.GetTime
  GetRandomValue = raylib.GetRandomValue
  SetRandomSeed = raylib.SetRandomSeed
  TakeScreenshot = raylib.TakeScreenshot
  SetConfigFlags = raylib.SetConfigFlags
  TraceLog = raylib.TraceLog
  SetTraceLogLevel = raylib.SetTraceLogLevel
  MemAlloc = raylib.MemAlloc
  MemRealloc = raylib.MemRealloc
  MemFree = raylib.MemFree
  OpenURL = raylib.OpenURL
  SetTraceLogCallback = raylib.SetTraceLogCallback
  SetLoadFileDataCallback = raylib.SetLoadFileDataCallback
  SetSaveFileDataCallback = raylib.SetSaveFileDataCallback
  SetLoadFileTextCallback = raylib.SetLoadFileTextCallback
  SetSaveFileTextCallback = raylib.SetSaveFileTextCallback
  LoadFileData = raylib.LoadFileData
  UnloadFileData = raylib.UnloadFileData
  SaveFileData = raylib.SaveFileData
  ExportDataAsCode = raylib.ExportDataAsCode
  LoadFileText = raylib.LoadFileText
  UnloadFileText = raylib.UnloadFileText
  SaveFileText = raylib.SaveFileText
  FileExists = raylib.FileExists
  DirectoryExists = raylib.DirectoryExists
  IsFileExtension = raylib.IsFileExtension
  GetFileLength = raylib.GetFileLength
  GetFileExtension = raylib.GetFileExtension
  GetFileName = raylib.GetFileName
  GetFileNameWithoutExt = raylib.GetFileNameWithoutExt
  GetDirectoryPath = raylib.GetDirectoryPath
  GetPrevDirectoryPath = raylib.GetPrevDirectoryPath
  GetWorkingDirectory = raylib.GetWorkingDirectory
  GetApplicationDirectory = raylib.GetApplicationDirectory
  ChangeDirectory = raylib.ChangeDirectory
  IsPathFile = raylib.IsPathFile
  LoadDirectoryFiles = raylib.LoadDirectoryFiles
  LoadDirectoryFilesEx = raylib.LoadDirectoryFilesEx
  UnloadDirectoryFiles = raylib.UnloadDirectoryFiles
  IsFileDropped = raylib.IsFileDropped
  LoadDroppedFiles = raylib.LoadDroppedFiles
  UnloadDroppedFiles = raylib.UnloadDroppedFiles
  GetFileModTime = raylib.GetFileModTime
  CompressData = raylib.CompressData
  DecompressData = raylib.DecompressData
  EncodeDataBase64 = raylib.EncodeDataBase64
  DecodeDataBase64 = raylib.DecodeDataBase64
  IsKeyPressed = raylib.IsKeyPressed
  IsKeyDown = raylib.IsKeyDown
  IsKeyReleased = raylib.IsKeyReleased
  IsKeyUp = raylib.IsKeyUp
  SetExitKey = raylib.SetExitKey
  GetKeyPressed = raylib.GetKeyPressed
  GetCharPressed = raylib.GetCharPressed
  IsGamepadAvailable = raylib.IsGamepadAvailable
  GetGamepadName = raylib.GetGamepadName
  IsGamepadButtonPressed = raylib.IsGamepadButtonPressed
  IsGamepadButtonDown = raylib.IsGamepadButtonDown
  IsGamepadButtonReleased = raylib.IsGamepadButtonReleased
  IsGamepadButtonUp = raylib.IsGamepadButtonUp
  GetGamepadButtonPressed = raylib.GetGamepadButtonPressed
  GetGamepadAxisCount = raylib.GetGamepadAxisCount
  GetGamepadAxisMovement = raylib.GetGamepadAxisMovement
  SetGamepadMappings = raylib.SetGamepadMappings
  IsMouseButtonPressed = raylib.IsMouseButtonPressed
  IsMouseButtonDown = raylib.IsMouseButtonDown
  IsMouseButtonReleased = raylib.IsMouseButtonReleased
  IsMouseButtonUp = raylib.IsMouseButtonUp
  GetMouseX = raylib.GetMouseX
  GetMouseY = raylib.GetMouseY
  GetMousePosition = raylib.GetMousePosition
  GetMouseDelta = raylib.GetMouseDelta
  SetMousePosition = raylib.SetMousePosition
  SetMouseOffset = raylib.SetMouseOffset
  SetMouseScale = raylib.SetMouseScale
  GetMouseWheelMove = raylib.GetMouseWheelMove
  GetMouseWheelMoveV = raylib.GetMouseWheelMoveV
  SetMouseCursor = raylib.SetMouseCursor
  GetTouchX = raylib.GetTouchX
  GetTouchY = raylib.GetTouchY
  GetTouchPosition = raylib.GetTouchPosition
  GetTouchPointId = raylib.GetTouchPointId
  GetTouchPointCount = raylib.GetTouchPointCount
  SetGesturesEnabled = raylib.SetGesturesEnabled
  IsGestureDetected = raylib.IsGestureDetected
  GetGestureDetected = raylib.GetGestureDetected
  GetGestureHoldDuration = raylib.GetGestureHoldDuration
  GetGestureDragVector = raylib.GetGestureDragVector
  GetGestureDragAngle = raylib.GetGestureDragAngle
  GetGesturePinchVector = raylib.GetGesturePinchVector
  GetGesturePinchAngle = raylib.GetGesturePinchAngle
  UpdateCamera = raylib.UpdateCamera
  UpdateCameraPro = raylib.UpdateCameraPro
  SetShapesTexture = raylib.SetShapesTexture
  DrawPixel = raylib.DrawPixel
  DrawPixelV = raylib.DrawPixelV
  DrawLine = raylib.DrawLine
  DrawLineV = raylib.DrawLineV
  DrawLineEx = raylib.DrawLineEx
  DrawLineBezier = raylib.DrawLineBezier
  DrawLineBezierQuad = raylib.DrawLineBezierQuad
  DrawLineBezierCubic = raylib.DrawLineBezierCubic
  DrawLineStrip = raylib.DrawLineStrip
  DrawCircle = raylib.DrawCircle
  DrawCircleSector = raylib.DrawCircleSector
  DrawCircleSectorLines = raylib.DrawCircleSectorLines
  DrawCircleGradient = raylib.DrawCircleGradient
  DrawCircleV = raylib.DrawCircleV
  DrawCircleLines = raylib.DrawCircleLines
  DrawEllipse = raylib.DrawEllipse
  DrawEllipseLines = raylib.DrawEllipseLines
  DrawRing = raylib.DrawRing
  DrawRingLines = raylib.DrawRingLines
  DrawRectangle = raylib.DrawRectangle
  DrawRectangleV = raylib.DrawRectangleV
  DrawRectangleRec = raylib.DrawRectangleRec
  DrawRectanglePro = raylib.DrawRectanglePro
  DrawRectangleGradientV = raylib.DrawRectangleGradientV
  DrawRectangleGradientH = raylib.DrawRectangleGradientH
  DrawRectangleGradientEx = raylib.DrawRectangleGradientEx
  DrawRectangleLines = raylib.DrawRectangleLines
  DrawRectangleLinesEx = raylib.DrawRectangleLinesEx
  DrawRectangleRounded = raylib.DrawRectangleRounded
  DrawRectangleRoundedLines = raylib.DrawRectangleRoundedLines
  DrawTriangle = raylib.DrawTriangle
  DrawTriangleLines = raylib.DrawTriangleLines
  DrawTriangleFan = raylib.DrawTriangleFan
  DrawTriangleStrip = raylib.DrawTriangleStrip
  DrawPoly = raylib.DrawPoly
  DrawPolyLines = raylib.DrawPolyLines
  DrawPolyLinesEx = raylib.DrawPolyLinesEx
  CheckCollisionRecs = raylib.CheckCollisionRecs
  CheckCollisionCircles = raylib.CheckCollisionCircles
  CheckCollisionCircleRec = raylib.CheckCollisionCircleRec
  CheckCollisionPointRec = raylib.CheckCollisionPointRec
  CheckCollisionPointCircle = raylib.CheckCollisionPointCircle
  CheckCollisionPointTriangle = raylib.CheckCollisionPointTriangle
  CheckCollisionPointPoly = raylib.CheckCollisionPointPoly
  CheckCollisionLines = raylib.CheckCollisionLines
  CheckCollisionPointLine = raylib.CheckCollisionPointLine
  GetCollisionRec = raylib.GetCollisionRec
  LoadImage = raylib.LoadImage
  LoadImageRaw = raylib.LoadImageRaw
  LoadImageAnim = raylib.LoadImageAnim
  LoadImageFromMemory = raylib.LoadImageFromMemory
  LoadImageFromTexture = raylib.LoadImageFromTexture
  LoadImageFromScreen = raylib.LoadImageFromScreen
  IsImageReady = raylib.IsImageReady
  UnloadImage = raylib.UnloadImage
  ExportImage = raylib.ExportImage
  ExportImageAsCode = raylib.ExportImageAsCode
  GenImageColor = raylib.GenImageColor
  GenImageGradientLinear = raylib.GenImageGradientLinear
  GenImageGradientRadial = raylib.GenImageGradientRadial
  GenImageGradientSquare = raylib.GenImageGradientSquare
  GenImageChecked = raylib.GenImageChecked
  GenImageWhiteNoise = raylib.GenImageWhiteNoise
  GenImagePerlinNoise = raylib.GenImagePerlinNoise
  GenImageCellular = raylib.GenImageCellular
  GenImageText = raylib.GenImageText
  ImageCopy = raylib.ImageCopy
  ImageFromImage = raylib.ImageFromImage
  ImageText = raylib.ImageText
  ImageTextEx = raylib.ImageTextEx
  ImageFormat = raylib.ImageFormat
  ImageToPOT = raylib.ImageToPOT
  ImageCrop = raylib.ImageCrop
  ImageAlphaCrop = raylib.ImageAlphaCrop
  ImageAlphaClear = raylib.ImageAlphaClear
  ImageAlphaMask = raylib.ImageAlphaMask
  ImageAlphaPremultiply = raylib.ImageAlphaPremultiply
  ImageBlurGaussian = raylib.ImageBlurGaussian
  ImageResize = raylib.ImageResize
  ImageResizeNN = raylib.ImageResizeNN
  ImageResizeCanvas = raylib.ImageResizeCanvas
  ImageMipmaps = raylib.ImageMipmaps
  ImageDither = raylib.ImageDither
  ImageFlipVertical = raylib.ImageFlipVertical
  ImageFlipHorizontal = raylib.ImageFlipHorizontal
  ImageRotate = raylib.ImageRotate
  ImageRotateCW = raylib.ImageRotateCW
  ImageRotateCCW = raylib.ImageRotateCCW
  ImageColorTint = raylib.ImageColorTint
  ImageColorInvert = raylib.ImageColorInvert
  ImageColorGrayscale = raylib.ImageColorGrayscale
  ImageColorContrast = raylib.ImageColorContrast
  ImageColorBrightness = raylib.ImageColorBrightness
  ImageColorReplace = raylib.ImageColorReplace
  LoadImageColors = raylib.LoadImageColors
  LoadImagePalette = raylib.LoadImagePalette
  UnloadImageColors = raylib.UnloadImageColors
  UnloadImagePalette = raylib.UnloadImagePalette
  GetImageAlphaBorder = raylib.GetImageAlphaBorder
  GetImageColor = raylib.GetImageColor
  ImageClearBackground = raylib.ImageClearBackground
  ImageDrawPixel = raylib.ImageDrawPixel
  ImageDrawPixelV = raylib.ImageDrawPixelV
  ImageDrawLine = raylib.ImageDrawLine
  ImageDrawLineV = raylib.ImageDrawLineV
  ImageDrawCircle = raylib.ImageDrawCircle
  ImageDrawCircleV = raylib.ImageDrawCircleV
  ImageDrawCircleLines = raylib.ImageDrawCircleLines
  ImageDrawCircleLinesV = raylib.ImageDrawCircleLinesV
  ImageDrawRectangle = raylib.ImageDrawRectangle
  ImageDrawRectangleV = raylib.ImageDrawRectangleV
  ImageDrawRectangleRec = raylib.ImageDrawRectangleRec
  ImageDrawRectangleLines = raylib.ImageDrawRectangleLines
  ImageDraw = raylib.ImageDraw
  ImageDrawText = raylib.ImageDrawText
  ImageDrawTextEx = raylib.ImageDrawTextEx
  LoadTexture = raylib.LoadTexture
  LoadTextureFromImage = raylib.LoadTextureFromImage
  LoadTextureCubemap = raylib.LoadTextureCubemap
  LoadRenderTexture = raylib.LoadRenderTexture
  IsTextureReady = raylib.IsTextureReady
  UnloadTexture = raylib.UnloadTexture
  IsRenderTextureReady = raylib.IsRenderTextureReady
  UnloadRenderTexture = raylib.UnloadRenderTexture
  UpdateTexture = raylib.UpdateTexture
  UpdateTextureRec = raylib.UpdateTextureRec
  GenTextureMipmaps = raylib.GenTextureMipmaps
  SetTextureFilter = raylib.SetTextureFilter
  SetTextureWrap = raylib.SetTextureWrap
  DrawTexture = raylib.DrawTexture
  DrawTextureV = raylib.DrawTextureV
  DrawTextureEx = raylib.DrawTextureEx
  DrawTextureRec = raylib.DrawTextureRec
  DrawTexturePro = raylib.DrawTexturePro
  DrawTextureNPatch = raylib.DrawTextureNPatch
  Fade = raylib.Fade
  ColorToInt = raylib.ColorToInt
  ColorNormalize = raylib.ColorNormalize
  ColorFromNormalized = raylib.ColorFromNormalized
  ColorToHSV = raylib.ColorToHSV
  ColorFromHSV = raylib.ColorFromHSV
  ColorTint = raylib.ColorTint
  ColorBrightness = raylib.ColorBrightness
  ColorContrast = raylib.ColorContrast
  ColorAlpha = raylib.ColorAlpha
  ColorAlphaBlend = raylib.ColorAlphaBlend
  GetColor = raylib.GetColor
  GetPixelColor = raylib.GetPixelColor
  SetPixelColor = raylib.SetPixelColor
  GetPixelDataSize = raylib.GetPixelDataSize
  GetFontDefault = raylib.GetFontDefault
  LoadFont = raylib.LoadFont
  LoadFontEx = raylib.LoadFontEx
  LoadFontFromImage = raylib.LoadFontFromImage
  LoadFontFromMemory = raylib.LoadFontFromMemory
  IsFontReady = raylib.IsFontReady
  LoadFontData = raylib.LoadFontData
  GenImageFontAtlas = raylib.GenImageFontAtlas
  UnloadFontData = raylib.UnloadFontData
  UnloadFont = raylib.UnloadFont
  ExportFontAsCode = raylib.ExportFontAsCode
  DrawFPS = raylib.DrawFPS
  DrawText = raylib.DrawText
  DrawTextEx = raylib.DrawTextEx
  DrawTextPro = raylib.DrawTextPro
  DrawTextCodepoint = raylib.DrawTextCodepoint
  DrawTextCodepoints = raylib.DrawTextCodepoints
  MeasureText = raylib.MeasureText
  MeasureTextEx = raylib.MeasureTextEx
  GetGlyphIndex = raylib.GetGlyphIndex
  GetGlyphInfo = raylib.GetGlyphInfo
  GetGlyphAtlasRec = raylib.GetGlyphAtlasRec
  LoadUTF8 = raylib.LoadUTF8
  UnloadUTF8 = raylib.UnloadUTF8
  LoadCodepoints = raylib.LoadCodepoints
  UnloadCodepoints = raylib.UnloadCodepoints
  GetCodepointCount = raylib.GetCodepointCount
  GetCodepoint = raylib.GetCodepoint
  GetCodepointNext = raylib.GetCodepointNext
  GetCodepointPrevious = raylib.GetCodepointPrevious
  CodepointToUTF8 = raylib.CodepointToUTF8
  TextCopy = raylib.TextCopy
  TextIsEqual = raylib.TextIsEqual
  TextLength = raylib.TextLength
  TextFormat = raylib.TextFormat
  TextSubtext = raylib.TextSubtext
  TextReplace = raylib.TextReplace
  TextInsert = raylib.TextInsert
  TextJoin = raylib.TextJoin
  TextSplit = raylib.TextSplit
  TextAppend = raylib.TextAppend
  TextFindIndex = raylib.TextFindIndex
  TextToUpper = raylib.TextToUpper
  TextToLower = raylib.TextToLower
  TextToPascal = raylib.TextToPascal
  TextToInteger = raylib.TextToInteger
  DrawLine3D = raylib.DrawLine3D
  DrawPoint3D = raylib.DrawPoint3D
  DrawCircle3D = raylib.DrawCircle3D
  DrawTriangle3D = raylib.DrawTriangle3D
  DrawTriangleStrip3D = raylib.DrawTriangleStrip3D
  DrawCube = raylib.DrawCube
  DrawCubeV = raylib.DrawCubeV
  DrawCubeWires = raylib.DrawCubeWires
  DrawCubeWiresV = raylib.DrawCubeWiresV
  DrawSphere = raylib.DrawSphere
  DrawSphereEx = raylib.DrawSphereEx
  DrawSphereWires = raylib.DrawSphereWires
  DrawCylinder = raylib.DrawCylinder
  DrawCylinderEx = raylib.DrawCylinderEx
  DrawCylinderWires = raylib.DrawCylinderWires
  DrawCylinderWiresEx = raylib.DrawCylinderWiresEx
  DrawCapsule = raylib.DrawCapsule
  DrawCapsuleWires = raylib.DrawCapsuleWires
  DrawPlane = raylib.DrawPlane
  DrawRay = raylib.DrawRay
  DrawGrid = raylib.DrawGrid
  LoadModel = raylib.LoadModel
  LoadModelFromMesh = raylib.LoadModelFromMesh
  IsModelReady = raylib.IsModelReady
  UnloadModel = raylib.UnloadModel
  GetModelBoundingBox = raylib.GetModelBoundingBox
  DrawModel = raylib.DrawModel
  DrawModelEx = raylib.DrawModelEx
  DrawModelWires = raylib.DrawModelWires
  DrawModelWiresEx = raylib.DrawModelWiresEx
  DrawBoundingBox = raylib.DrawBoundingBox
  DrawBillboard = raylib.DrawBillboard
  DrawBillboardRec = raylib.DrawBillboardRec
  DrawBillboardPro = raylib.DrawBillboardPro
  UploadMesh = raylib.UploadMesh
  UpdateMeshBuffer = raylib.UpdateMeshBuffer
  UnloadMesh = raylib.UnloadMesh
  DrawMesh = raylib.DrawMesh
  DrawMeshInstanced = raylib.DrawMeshInstanced
  ExportMesh = raylib.ExportMesh
  GetMeshBoundingBox = raylib.GetMeshBoundingBox
  GenMeshTangents = raylib.GenMeshTangents
  GenMeshPoly = raylib.GenMeshPoly
  GenMeshPlane = raylib.GenMeshPlane
  GenMeshCube = raylib.GenMeshCube
  GenMeshSphere = raylib.GenMeshSphere
  GenMeshHemiSphere = raylib.GenMeshHemiSphere
  GenMeshCylinder = raylib.GenMeshCylinder
  GenMeshCone = raylib.GenMeshCone
  GenMeshTorus = raylib.GenMeshTorus
  GenMeshKnot = raylib.GenMeshKnot
  GenMeshHeightmap = raylib.GenMeshHeightmap
  GenMeshCubicmap = raylib.GenMeshCubicmap
  LoadMaterials = raylib.LoadMaterials
  LoadMaterialDefault = raylib.LoadMaterialDefault
  IsMaterialReady = raylib.IsMaterialReady
  UnloadMaterial = raylib.UnloadMaterial
  SetMaterialTexture = raylib.SetMaterialTexture
  SetModelMeshMaterial = raylib.SetModelMeshMaterial
  LoadModelAnimations = raylib.LoadModelAnimations
  UpdateModelAnimation = raylib.UpdateModelAnimation
  UnloadModelAnimation = raylib.UnloadModelAnimation
  UnloadModelAnimations = raylib.UnloadModelAnimations
  IsModelAnimationValid = raylib.IsModelAnimationValid
  CheckCollisionSpheres = raylib.CheckCollisionSpheres
  CheckCollisionBoxes = raylib.CheckCollisionBoxes
  CheckCollisionBoxSphere = raylib.CheckCollisionBoxSphere
  GetRayCollisionSphere = raylib.GetRayCollisionSphere
  GetRayCollisionBox = raylib.GetRayCollisionBox
  GetRayCollisionMesh = raylib.GetRayCollisionMesh
  GetRayCollisionTriangle = raylib.GetRayCollisionTriangle
  GetRayCollisionQuad = raylib.GetRayCollisionQuad
  InitAudioDevice = raylib.InitAudioDevice
  CloseAudioDevice = raylib.CloseAudioDevice
  IsAudioDeviceReady = raylib.IsAudioDeviceReady
  SetMasterVolume = raylib.SetMasterVolume
  LoadWave = raylib.LoadWave
  LoadWaveFromMemory = raylib.LoadWaveFromMemory
  IsWaveReady = raylib.IsWaveReady
  LoadSound = raylib.LoadSound
  LoadSoundFromWave = raylib.LoadSoundFromWave
  IsSoundReady = raylib.IsSoundReady
  UpdateSound = raylib.UpdateSound
  UnloadWave = raylib.UnloadWave
  UnloadSound = raylib.UnloadSound
  ExportWave = raylib.ExportWave
  ExportWaveAsCode = raylib.ExportWaveAsCode
  PlaySound = raylib.PlaySound
  StopSound = raylib.StopSound
  PauseSound = raylib.PauseSound
  ResumeSound = raylib.ResumeSound
  IsSoundPlaying = raylib.IsSoundPlaying
  SetSoundVolume = raylib.SetSoundVolume
  SetSoundPitch = raylib.SetSoundPitch
  SetSoundPan = raylib.SetSoundPan
  WaveCopy = raylib.WaveCopy
  WaveCrop = raylib.WaveCrop
  WaveFormat = raylib.WaveFormat
  LoadWaveSamples = raylib.LoadWaveSamples
  UnloadWaveSamples = raylib.UnloadWaveSamples
  LoadMusicStream = raylib.LoadMusicStream
  LoadMusicStreamFromMemory = raylib.LoadMusicStreamFromMemory
  IsMusicReady = raylib.IsMusicReady
  UnloadMusicStream = raylib.UnloadMusicStream
  PlayMusicStream = raylib.PlayMusicStream
  IsMusicStreamPlaying = raylib.IsMusicStreamPlaying
  UpdateMusicStream = raylib.UpdateMusicStream
  StopMusicStream = raylib.StopMusicStream
  PauseMusicStream = raylib.PauseMusicStream
  ResumeMusicStream = raylib.ResumeMusicStream
  SeekMusicStream = raylib.SeekMusicStream
  SetMusicVolume = raylib.SetMusicVolume
  SetMusicPitch = raylib.SetMusicPitch
  SetMusicPan = raylib.SetMusicPan
  GetMusicTimeLength = raylib.GetMusicTimeLength
  GetMusicTimePlayed = raylib.GetMusicTimePlayed
  LoadAudioStream = raylib.LoadAudioStream
  IsAudioStreamReady = raylib.IsAudioStreamReady
  UnloadAudioStream = raylib.UnloadAudioStream
  UpdateAudioStream = raylib.UpdateAudioStream
  IsAudioStreamProcessed = raylib.IsAudioStreamProcessed
  PlayAudioStream = raylib.PlayAudioStream
  PauseAudioStream = raylib.PauseAudioStream
  ResumeAudioStream = raylib.ResumeAudioStream
  IsAudioStreamPlaying = raylib.IsAudioStreamPlaying
  StopAudioStream = raylib.StopAudioStream
  SetAudioStreamVolume = raylib.SetAudioStreamVolume
  SetAudioStreamPitch = raylib.SetAudioStreamPitch
  SetAudioStreamPan = raylib.SetAudioStreamPan
  SetAudioStreamBufferSizeDefault = raylib.SetAudioStreamBufferSizeDefault
  SetAudioStreamCallback = raylib.SetAudioStreamCallback
  AttachAudioStreamProcessor = raylib.AttachAudioStreamProcessor
  DetachAudioStreamProcessor = raylib.DetachAudioStreamProcessor
  AttachAudioMixedProcessor = raylib.AttachAudioMixedProcessor
  DetachAudioMixedProcessor = raylib.DetachAudioMixedProcessor
        await InitGame(raylib)
      }, UpdateGame)
    `)
    f(raylib_run, this.canvas)
    this.style.display = 'block'
  }
  
  connectedCallback() {
    var observer = new MutationObserver((mutations) => {
      this.start(this.src)
    })
    observer.observe(this, { childList: true })
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    window.customElements.define('raylib-game', RaylibComponent)
  })
}



export { raylib_run, RaylibComponent, Module, wasmBinary }
export default raylib_run
