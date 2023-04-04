module.exports = {
    default: {
      parallel: 2,
      format: ['html:cucumber-report.html'],
      paths: [
        './test/features/**/*.feature'
      ],
      requireModule:[ 
        'ts-node/register'
      ] ,
     require:[
      './test/steps/**/*.steps.ts',
      './test/hooks/**/*.hooks.ts'
      ] ,
    }
  }