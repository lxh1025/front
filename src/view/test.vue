<template>
<button @click="get">get</button>
</template>

<script>
export default {
  methods:{
    get(){
      fetch('http://43.138.247.56:5000/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "question": "成都多大",
          "user_id": 1
        })
      })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }

            // 确保响应体是可读的
            if (!response.body) {
              throw new Error('Response body is not readable');
            }

            // 获取可读流
            const reader = response.body.getReader();

            // 读取流数据的函数
            function readStream() {
              return reader.read().then(({done, value}) => {
                if (done) {
                  console.log('Stream has ended');
                  return;
                }

                // value 是一个 Uint8Array，包含流中的数据块
                console.log('Received data chunk:', value);

                // 处理数据块...

                // 继续读取流数据
                readStream();
              });
            }

            // 开始读取流数据
            readStream();
          })
          .catch(error => {
            console.error('Fetch error:', error);
          });
    }
  }
}
</script>
<style scoped>

</style>