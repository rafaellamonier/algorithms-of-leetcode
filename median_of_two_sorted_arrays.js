const findMediaSortedArrays = (nums1, nums2) => {
    let concatedArray = new Array(nums1.length + nums2.length)
    let n = concatedArray.length
    let key, j

    let media = 0
    let mid

    for(let i = 0; i < nums1.length; i++) {
        concatedArray[i] = nums1[i]
    }

    for(let i = 0; i < nums2.length; i++) {
        concatedArray[i + nums1.length] = nums2[i]
    }

    let arrayOrdenaded = concatedArray
        .sort(function (a, b) {
            return a - b
        })

    mid = arrayOrdenaded.length / 2

    if(arrayOrdenaded.length % 2 !== 0) {
        media = arrayOrdenaded[parseInt(mid)].toFixed(4)
    } else {
        media = (arrayOrdenaded[mid] + arrayOrdenaded[mid - 1]) / 2
        media = media.toFixed(4)
    }

    return media
}

// teste 1
let nums1 = [1, 3]
let nums2 = [2]
console.log(findMediaSortedArrays(nums1, nums2))

// teste 2
let nums2_1 = [1, 2]
let nums2_2 = [3, 4]
console.log(findMediaSortedArrays(nums2_1, nums2_2))

// teste 3
let nums3_1 = [3]
let nums3_2 = [-1, -2]
console.log(findMediaSortedArrays(nums3_1, nums3_2))
