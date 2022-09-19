# Sets default envs varaibles and reset test storage_folder

export NODE_ENV='testing'
export NODE_PATH='.'
rm -r test/storage_folder
mkdir test/storage_folder
mocha 'test/**/*.test.js' --exit