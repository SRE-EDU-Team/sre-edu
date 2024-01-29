import { type ReactElement } from 'react'

import { RevealSlides, type RevealSlidesProps } from '../components/reveal'

export function MonitoringSlides ({ embedded }: RevealSlidesProps): ReactElement {
    return <RevealSlides embedded={embedded}>
        <section>
            <h1>Основы мониторинга</h1>
            <p>
                <i className='fa-regular fa-copyright'></i>
                    Дмитрий Масленников, «Тинькофф»
            </p>
        </section>
        <section>
            <h1>Задачи мониторинга</h1>
            <ol>
                <li className='fragment'>Детектирование сбоев</li>
                <li className='fragment'>Поиск причин сбоев при устранении</li>
                <li className='fragment'>Сбор информации для отладки</li>
                <li className='fragment'>Выявление трендов</li>
            </ol>
        </section>
        <section>
            <section>
                <h1>Метрики</h1>
            </section>
            <section>
                <h1>Серия значений во времени</h1>
                <pre>
                    <code>
                        {`
                         t0     t0+1m   t0+2m
filesystem_avail_bytes   149G   148G    149G
`}
                    </code>
                </pre>
            </section>
            <section>
                <h1>Именование метрик</h1>
                <p>
                    <ul>
                        <li>
                            <code>{'filesystem_avail_bytes{dc = "MSK", type = "hw", node = "hw3457"}'}</code>
                        </li>
                        <li>
                            <code>msk.hw.hw3457.filesystem_avail_bytes</code>
                        </li>
                    </ul>
                </p>
            </section>
            <section>
                <h2>Пример отдачи метрик node_exporter</h2>
                <div>(OpenMetrics)</div>
                <p>
                    <pre>
                        <code>
                            {`
# HELP go_gc_duration_seconds A summary of the GC invocation durations.
# TYPE go_gc_duration_seconds summary
go_gc_duration_seconds{quantile="0"} 7.0906e-05
go_gc_duration_seconds{quantile="0.25"} 8.5628e-05
go_gc_duration_seconds{quantile="0.5"} 8.998e-05
go_gc_duration_seconds{quantile="0.75"} 9.7221e-05
go_gc_duration_seconds{quantile="1"} 0.000375568
go_gc_duration_seconds_sum 0.104208159
go_gc_duration_seconds_count 981
# HELP go_goroutines Number of goroutines that currently exist.
# TYPE go_goroutines gauge
go_goroutines 7
# HELP go_info Information about the Go environment.
# TYPE go_info gauge
go_info{version="go1.12.5"} 1
# HELP go_memstats_alloc_bytes Number of bytes allocated and still in use.
# TYPE go_memstats_alloc_bytes gauge
go_memstats_alloc_bytes 1.404848e+06
# HELP go_memstats_alloc_bytes_total Total number of bytes allocated, even if freed.
# TYPE go_memstats_alloc_bytes_total counter
go_memstats_alloc_bytes_total 2.187752992e+09
# HELP go_memstats_buck_hash_sys_bytes Number of bytes used by the profiling bucket hash table.
# TYPE go_memstats_buck_hash_sys_bytes gauge
go_memstats_buck_hash_sys_bytes 797481
# HELP go_memstats_frees_total Total number of frees.
# TYPE go_memstats_frees_total counter
go_memstats_frees_total 2.2084118e+07
# HELP go_memstats_gc_cpu_fraction The fraction of this program's available CPU time used by the GC since the program started.
# TYPE go_memstats_gc_cpu_fraction gauge
go_memstats_gc_cpu_fraction 0.0002286755360773309
# HELP go_memstats_gc_sys_bytes Number of bytes used for garbage collection system metadata.
# TYPE go_memstats_gc_sys_bytes gauge
go_memstats_gc_sys_bytes 739328
# HELP go_memstats_heap_alloc_bytes Number of heap bytes allocated and still in use.
# TYPE go_memstats_heap_alloc_bytes gauge
go_memstats_heap_alloc_bytes 1.404848e+06
# HELP go_memstats_heap_idle_bytes Number of heap bytes waiting to be used.
# TYPE go_memstats_heap_idle_bytes gauge
go_memstats_heap_idle_bytes 4.571136e+06
# HELP go_memstats_heap_inuse_bytes Number of heap bytes that are in use.
# TYPE go_memstats_heap_inuse_bytes gauge
go_memstats_heap_inuse_bytes 2.834432e+06
# HELP go_memstats_heap_objects Number of allocated objects.
# TYPE go_memstats_heap_objects gauge
go_memstats_heap_objects 9534
# HELP go_memstats_heap_released_bytes Number of heap bytes released to OS.
# TYPE go_memstats_heap_released_bytes gauge
go_memstats_heap_released_bytes 0
# HELP go_memstats_heap_sys_bytes Number of heap bytes obtained from system.
# TYPE go_memstats_heap_sys_bytes gauge
go_memstats_heap_sys_bytes 7.405568e+06
# HELP go_memstats_last_gc_time_seconds Number of seconds since 1970 of last garbage collection.
# TYPE go_memstats_last_gc_time_seconds gauge
go_memstats_last_gc_time_seconds 1.5792074022408566e+09
# HELP go_memstats_lookups_total Total number of pointer lookups.
# TYPE go_memstats_lookups_total counter
go_memstats_lookups_total 0
# HELP go_memstats_mallocs_total Total number of mallocs.
# TYPE go_memstats_mallocs_total counter
go_memstats_mallocs_total 2.2093652e+07
# HELP go_memstats_mcache_inuse_bytes Number of bytes in use by mcache structures.
# TYPE go_memstats_mcache_inuse_bytes gauge
go_memstats_mcache_inuse_bytes 3472
# HELP go_memstats_mcache_sys_bytes Number of bytes used for mcache structures obtained from system.
# TYPE go_memstats_mcache_sys_bytes gauge
go_memstats_mcache_sys_bytes 16384
# HELP go_memstats_mspan_inuse_bytes Number of bytes in use by mspan structures.
# TYPE go_memstats_mspan_inuse_bytes gauge
go_memstats_mspan_inuse_bytes 27896
# HELP go_memstats_mspan_sys_bytes Number of bytes used for mspan structures obtained from system.
# TYPE go_memstats_mspan_sys_bytes gauge
go_memstats_mspan_sys_bytes 49152
# HELP go_memstats_next_gc_bytes Number of heap bytes when next garbage collection will take place.
# TYPE go_memstats_next_gc_bytes gauge
go_memstats_next_gc_bytes 4.194304e+06
# HELP go_memstats_other_sys_bytes Number of bytes used for other system allocations.
# TYPE go_memstats_other_sys_bytes gauge
go_memstats_other_sys_bytes 1.218899e+06
# HELP go_memstats_stack_inuse_bytes Number of bytes in use by the stack allocator.
# TYPE go_memstats_stack_inuse_bytes gauge
go_memstats_stack_inuse_bytes 983040
# HELP go_memstats_stack_sys_bytes Number of bytes obtained from system for stack allocator.
# TYPE go_memstats_stack_sys_bytes gauge
go_memstats_stack_sys_bytes 983040
# HELP go_memstats_sys_bytes Number of bytes obtained from system.
# TYPE go_memstats_sys_bytes gauge
go_memstats_sys_bytes 1.1209852e+07
# HELP go_threads Number of OS threads created.
# TYPE go_threads gauge
go_threads 16
# HELP node_arp_entries ARP entries by device
# TYPE node_arp_entries gauge
node_arp_entries{device="eth0"} 2
# HELP node_boot_time_seconds Node boot time, in unixtime.
# TYPE node_boot_time_seconds gauge
node_boot_time_seconds 1.579149814e+09
# HELP node_context_switches_total Total number of context switches.
# TYPE node_context_switches_total counter
node_context_switches_total 3.084039e+06
# HELP node_cpu_frequency_hertz Current cpu thread frequency in hertz.
# TYPE node_cpu_frequency_hertz gauge
node_cpu_frequency_hertz{cpu="0"} 6e+08
node_cpu_frequency_hertz{cpu="1"} 6e+08
node_cpu_frequency_hertz{cpu="2"} 6e+08
node_cpu_frequency_hertz{cpu="3"} 6e+08
# HELP node_cpu_frequency_max_hertz Maximum cpu thread frequency in hertz.
# TYPE node_cpu_frequency_max_hertz gauge
node_cpu_frequency_max_hertz{cpu="0"} 1.5e+09
node_cpu_frequency_max_hertz{cpu="1"} 1.5e+09
node_cpu_frequency_max_hertz{cpu="2"} 1.5e+09
node_cpu_frequency_max_hertz{cpu="3"} 1.5e+09
# HELP node_cpu_frequency_min_hertz Minimum cpu thread frequency in hertz.
# TYPE node_cpu_frequency_min_hertz gauge
node_cpu_frequency_min_hertz{cpu="0"} 6e+08
node_cpu_frequency_min_hertz{cpu="1"} 6e+08
node_cpu_frequency_min_hertz{cpu="2"} 6e+08
node_cpu_frequency_min_hertz{cpu="3"} 6e+08
# HELP node_cpu_guest_seconds_total Seconds the cpus spent in guests (VMs) for each mode.
# TYPE node_cpu_guest_seconds_total counter
node_cpu_guest_seconds_total{cpu="0",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="0",mode="user"} 0
node_cpu_guest_seconds_total{cpu="1",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="1",mode="user"} 0
node_cpu_guest_seconds_total{cpu="2",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="2",mode="user"} 0
node_cpu_guest_seconds_total{cpu="3",mode="nice"} 0
node_cpu_guest_seconds_total{cpu="3",mode="user"} 0
# HELP node_cpu_scaling_frequency_hertz Current scaled cpu thread frequency in hertz.
# TYPE node_cpu_scaling_frequency_hertz gauge
node_cpu_scaling_frequency_hertz{cpu="0"} 6e+08
node_cpu_scaling_frequency_hertz{cpu="1"} 6e+08
node_cpu_scaling_frequency_hertz{cpu="2"} 6e+08
node_cpu_scaling_frequency_hertz{cpu="3"} 6e+08
# HELP node_cpu_scaling_frequency_max_hrts Maximum scaled cpu thread frequency in hertz.
# TYPE node_cpu_scaling_frequency_max_hrts gauge
node_cpu_scaling_frequency_max_hrts{cpu="0"} 1.5e+09
node_cpu_scaling_frequency_max_hrts{cpu="1"} 1.5e+09
node_cpu_scaling_frequency_max_hrts{cpu="2"} 1.5e+09
node_cpu_scaling_frequency_max_hrts{cpu="3"} 1.5e+09
# HELP node_cpu_scaling_frequency_min_hrts Minimum scaled cpu thread frequency in hertz.
# TYPE node_cpu_scaling_frequency_min_hrts gauge
node_cpu_scaling_frequency_min_hrts{cpu="0"} 6e+08
node_cpu_scaling_frequency_min_hrts{cpu="1"} 6e+08
node_cpu_scaling_frequency_min_hrts{cpu="2"} 6e+08
node_cpu_scaling_frequency_min_hrts{cpu="3"} 6e+08
# HELP node_cpu_seconds_total Seconds the cpus spent in each mode.
# TYPE node_cpu_seconds_total counter
node_cpu_seconds_total{cpu="0",mode="idle"} 57464.83
node_cpu_seconds_total{cpu="0",mode="iowait"} 0.87
node_cpu_seconds_total{cpu="0",mode="irq"} 0
node_cpu_seconds_total{cpu="0",mode="nice"} 0.01
node_cpu_seconds_total{cpu="0",mode="softirq"} 0.58
node_cpu_seconds_total{cpu="0",mode="steal"} 0
node_cpu_seconds_total{cpu="0",mode="system"} 30.12
node_cpu_seconds_total{cpu="0",mode="user"} 33.82
node_cpu_seconds_total{cpu="1",mode="idle"} 57518.33
node_cpu_seconds_total{cpu="1",mode="iowait"} 2.02
node_cpu_seconds_total{cpu="1",mode="irq"} 0
node_cpu_seconds_total{cpu="1",mode="nice"} 0.03
node_cpu_seconds_total{cpu="1",mode="softirq"} 0
node_cpu_seconds_total{cpu="1",mode="steal"} 0
node_cpu_seconds_total{cpu="1",mode="system"} 31.97
node_cpu_seconds_total{cpu="1",mode="user"} 34.48
node_cpu_seconds_total{cpu="2",mode="idle"} 57498.79
node_cpu_seconds_total{cpu="2",mode="iowait"} 1.05
node_cpu_seconds_total{cpu="2",mode="irq"} 0
node_cpu_seconds_total{cpu="2",mode="nice"} 0.02
node_cpu_seconds_total{cpu="2",mode="softirq"} 0
node_cpu_seconds_total{cpu="2",mode="steal"} 0
node_cpu_seconds_total{cpu="2",mode="system"} 30.66
node_cpu_seconds_total{cpu="2",mode="user"} 33.51
node_cpu_seconds_total{cpu="3",mode="idle"} 57517.03
node_cpu_seconds_total{cpu="3",mode="iowait"} 2.3
node_cpu_seconds_total{cpu="3",mode="irq"} 0
node_cpu_seconds_total{cpu="3",mode="nice"} 0.21
node_cpu_seconds_total{cpu="3",mode="softirq"} 0
node_cpu_seconds_total{cpu="3",mode="steal"} 0
node_cpu_seconds_total{cpu="3",mode="system"} 37.25
node_cpu_seconds_total{cpu="3",mode="user"} 32.26
# HELP node_disk_discard_time_seconds_total This is the total number of seconds spent by all discards.
# TYPE node_disk_discard_time_seconds_total counter
node_disk_discard_time_seconds_total{device="mmcblk0"} 0
node_disk_discard_time_seconds_total{device="mmcblk0p1"} 0
node_disk_discard_time_seconds_total{device="mmcblk0p2"} 0
# HELP node_disk_discarded_sectors_total The total number of sectors discarded successfully.
# TYPE node_disk_discarded_sectors_total counter
node_disk_discarded_sectors_total{device="mmcblk0"} 0
node_disk_discarded_sectors_total{device="mmcblk0p1"} 0
node_disk_discarded_sectors_total{device="mmcblk0p2"} 0
# HELP node_disk_discards_completed_total The total number of discards completed successfully.
# TYPE node_disk_discards_completed_total counter
node_disk_discards_completed_total{device="mmcblk0"} 0
node_disk_discards_completed_total{device="mmcblk0p1"} 0
node_disk_discards_completed_total{device="mmcblk0p2"} 0
# HELP node_disk_discards_merged_total The total number of discards merged.
# TYPE node_disk_discards_merged_total counter
node_disk_discards_merged_total{device="mmcblk0"} 0
node_disk_discards_merged_total{device="mmcblk0p1"} 0
node_disk_discards_merged_total{device="mmcblk0p2"} 0
# HELP node_disk_io_now The number of I/Os currently in progress.
# TYPE node_disk_io_now gauge
node_disk_io_now{device="mmcblk0"} 0
node_disk_io_now{device="mmcblk0p1"} 0
node_disk_io_now{device="mmcblk0p2"} 0
# HELP node_disk_io_time_seconds_total Total seconds spent doing I/Os.
# TYPE node_disk_io_time_seconds_total counter
node_disk_io_time_seconds_total{device="mmcblk0"} 8.91
node_disk_io_time_seconds_total{device="mmcblk0p1"} 0.42
node_disk_io_time_seconds_total{device="mmcblk0p2"} 8.51
# HELP node_disk_io_time_weighted_seconds_total The weighted # of seconds spent doing I/Os.
# TYPE node_disk_io_time_weighted_seconds_total counter
node_disk_io_time_weighted_seconds_total{device="mmcblk0"} 13.55
node_disk_io_time_weighted_seconds_total{device="mmcblk0p1"} 0.6
node_disk_io_time_weighted_seconds_total{device="mmcblk0p2"} 12.97
# HELP node_disk_read_bytes_total The total number of bytes read successfully.
# TYPE node_disk_read_bytes_total counter
node_disk_read_bytes_total{device="mmcblk0"} 1.28228864e+08
node_disk_read_bytes_total{device="mmcblk0p1"} 1.1442688e+07
node_disk_read_bytes_total{device="mmcblk0p2"} 1.16245504e+08
# HELP node_disk_read_time_seconds_total The total number of seconds spent by all reads.
# TYPE node_disk_read_time_seconds_total counter
node_disk_read_time_seconds_total{device="mmcblk0"} 7.98
node_disk_read_time_seconds_total{device="mmcblk0p1"} 0.685
node_disk_read_time_seconds_total{device="mmcblk0p2"} 7.269
# HELP node_disk_reads_completed_total The total number of reads completed successfully.
# TYPE node_disk_reads_completed_total counter
node_disk_reads_completed_total{device="mmcblk0"} 3576
node_disk_reads_completed_total{device="mmcblk0p1"} 390
node_disk_reads_completed_total{device="mmcblk0p2"} 3166
# HELP node_disk_reads_merged_total The total number of reads merged.
# TYPE node_disk_reads_merged_total counter
node_disk_reads_merged_total{device="mmcblk0"} 5859
node_disk_reads_merged_total{device="mmcblk0p1"} 3623
node_disk_reads_merged_total{device="mmcblk0p2"} 2236
# HELP node_disk_write_time_seconds_total This is the total number of seconds spent by all writes.
# TYPE node_disk_write_time_seconds_total counter
node_disk_write_time_seconds_total{device="mmcblk0"} 40.177
node_disk_write_time_seconds_total{device="mmcblk0p1"} 0.023
node_disk_write_time_seconds_total{device="mmcblk0p2"} 40.154
# HELP node_disk_writes_completed_total The total number of writes completed successfully.
# TYPE node_disk_writes_completed_total counter
node_disk_writes_completed_total{device="mmcblk0"} 2594
node_disk_writes_completed_total{device="mmcblk0p1"} 3
node_disk_writes_completed_total{device="mmcblk0p2"} 2591
# HELP node_disk_writes_merged_total The number of writes merged.
# TYPE node_disk_writes_merged_total counter
node_disk_writes_merged_total{device="mmcblk0"} 2972
node_disk_writes_merged_total{device="mmcblk0p1"} 0
node_disk_writes_merged_total{device="mmcblk0p2"} 2972
# HELP node_disk_written_bytes_total The total number of bytes written successfully.
# TYPE node_disk_written_bytes_total counter
node_disk_written_bytes_total{device="mmcblk0"} 6.1727744e+07
node_disk_written_bytes_total{device="mmcblk0p1"} 5120
node_disk_written_bytes_total{device="mmcblk0p2"} 6.1722624e+07
# HELP node_entropy_available_bits Bits of available entropy.
# TYPE node_entropy_available_bits gauge
node_entropy_available_bits 3535
# HELP node_exporter_build_info A metric with a constant '1' value labeled by version, revision, branch, and goversion from which node_exporter was built.
# TYPE node_exporter_build_info gauge
node_exporter_build_info{branch="HEAD",goversion="go1.12.5",revision="3db77732e925c08f675d7404a8c46466b2ece83e",version="0.18.1"} 1
# HELP node_filefd_allocated File descriptor statistics: allocated.
# TYPE node_filefd_allocated gauge
node_filefd_allocated 960
# HELP node_filefd_maximum File descriptor statistics: maximum.
# TYPE node_filefd_maximum gauge
node_filefd_maximum 373439
# HELP node_filesystem_avail_bytes Filesystem space available to non-root users in bytes.
# TYPE node_filesystem_avail_bytes gauge
node_filesystem_avail_bytes{device="/dev/mmcblk0p1",fstype="vfat",mountpoint="/boot"} 2.09984e+08
node_filesystem_avail_bytes{device="/dev/root",fstype="ext4",mountpoint="/"} 1.1677863936e+10
node_filesystem_avail_bytes{device="tmpfs",fstype="tmpfs",mountpoint="/run"} 2.03063296e+09
node_filesystem_avail_bytes{device="tmpfs",fstype="tmpfs",mountpoint="/run/lock"} 5.238784e+06
node_filesystem_avail_bytes{device="tmpfs",fstype="tmpfs",mountpoint="/run/user/1000"} 4.09575424e+08
# HELP node_filesystem_device_error Whether an error occurred while getting statistics for the given device.
# TYPE node_filesystem_device_error gauge
node_filesystem_device_error{device="/dev/mmcblk0p1",fstype="vfat",mountpoint="/boot"} 0
node_filesystem_device_error{device="/dev/root",fstype="ext4",mountpoint="/"} 0
node_filesystem_device_error{device="tmpfs",fstype="tmpfs",mountpoint="/run"} 0
node_filesystem_device_error{device="tmpfs",fstype="tmpfs",mountpoint="/run/lock"} 0
node_filesystem_device_error{device="tmpfs",fstype="tmpfs",mountpoint="/run/user/1000"} 0
# HELP node_filesystem_files Filesystem total file nodes.
# TYPE node_filesystem_files gauge
node_filesystem_files{device="/dev/mmcblk0p1",fstype="vfat",mountpoint="/boot"} 0
node_filesystem_files{device="/dev/root",fstype="ext4",mountpoint="/"} 941616
node_filesystem_files{device="tmpfs",fstype="tmpfs",mountpoint="/run"} 183818
node_filesystem_files{device="tmpfs",fstype="tmpfs",mountpoint="/run/lock"} 183818
node_filesystem_files{device="tmpfs",fstype="tmpfs",mountpoint="/run/user/1000"} 183818
# HELP node_filesystem_files_free Filesystem total free file nodes.
# TYPE node_filesystem_files_free gauge
node_filesystem_files_free{device="/dev/mmcblk0p1",fstype="vfat",mountpoint="/boot"} 0
node_filesystem_files_free{device="/dev/root",fstype="ext4",mountpoint="/"} 851187
node_filesystem_files_free{device="tmpfs",fstype="tmpfs",mountpoint="/run"} 183279
node_filesystem_files_free{device="tmpfs",fstype="tmpfs",mountpoint="/run/lock"} 183815
node_filesystem_files_free{device="tmpfs",fstype="tmpfs",mountpoint="/run/user/1000"} 183808
# HELP node_filesystem_free_bytes Filesystem free space in bytes.
# TYPE node_filesystem_free_bytes gauge
node_filesystem_free_bytes{device="/dev/mmcblk0p1",fstype="vfat",mountpoint="/boot"} 2.09984e+08
node_filesystem_free_bytes{device="/dev/root",fstype="ext4",mountpoint="/"} 1.2339224576e+10
node_filesystem_free_bytes{device="tmpfs",fstype="tmpfs",mountpoint="/run"} 2.03063296e+09
node_filesystem_free_bytes{device="tmpfs",fstype="tmpfs",mountpoint="/run/lock"} 5.238784e+06
node_filesystem_free_bytes{device="tmpfs",fstype="tmpfs",mountpoint="/run/user/1000"} 4.09575424e+08
# HELP node_filesystem_readonly Filesystem read-only status.
# TYPE node_filesystem_readonly gauge
node_filesystem_readonly{device="/dev/mmcblk0p1",fstype="vfat",mountpoint="/boot"} 0
node_filesystem_readonly{device="/dev/root",fstype="ext4",mountpoint="/"} 0
node_filesystem_readonly{device="tmpfs",fstype="tmpfs",mountpoint="/run"} 0
node_filesystem_readonly{device="tmpfs",fstype="tmpfs",mountpoint="/run/lock"} 0
node_filesystem_readonly{device="tmpfs",fstype="tmpfs",mountpoint="/run/user/1000"} 0
# HELP node_filesystem_size_bytes Filesystem size in bytes.
# TYPE node_filesystem_size_bytes gauge
node_filesystem_size_bytes{device="/dev/mmcblk0p1",fstype="vfat",mountpoint="/boot"} 2.6428928e+08
node_filesystem_size_bytes{device="/dev/root",fstype="ext4",mountpoint="/"} 1.5383261184e+10
node_filesystem_size_bytes{device="tmpfs",fstype="tmpfs",mountpoint="/run"} 2.047889408e+09
node_filesystem_size_bytes{device="tmpfs",fstype="tmpfs",mountpoint="/run/lock"} 5.24288e+06
node_filesystem_size_bytes{device="tmpfs",fstype="tmpfs",mountpoint="/run/user/1000"} 4.09575424e+08
# HELP node_forks_total Total number of forks.
# TYPE node_forks_total counter
node_forks_total 15376
# HELP node_hwmon_chip_names Annotation metric for human-readable chip names
# TYPE node_hwmon_chip_names gauge
node_hwmon_chip_names{chip="soc:firmware_raspberrypi_hwmon",chip_name="rpi_volt"} 1
# HELP node_hwmon_in_lcrit_alarm_volts Hardware monitor for voltage (lcrit_alarm)
# TYPE node_hwmon_in_lcrit_alarm_volts gauge
node_hwmon_in_lcrit_alarm_volts{chip="soc:firmware_raspberrypi_hwmon",sensor="in0"} 0
# HELP node_intr_total Total number of interrupts serviced.
# TYPE node_intr_total counter
node_intr_total 5.818739e+06
# HELP node_load1 1m load average.
# TYPE node_load1 gauge
node_load1 0.24
# HELP node_load15 15m load average.
# TYPE node_load15 gauge
node_load15 0.02
# HELP node_load5 5m load average.
# TYPE node_load5 gauge
node_load5 0.09
# HELP node_memory_Active_anon_bytes Memory information field Active_anon_bytes.
# TYPE node_memory_Active_anon_bytes gauge
node_memory_Active_anon_bytes 5.0782208e+07
# HELP node_memory_Active_bytes Memory information field Active_bytes.
# TYPE node_memory_Active_bytes gauge
node_memory_Active_bytes 1.41758464e+08
# HELP node_memory_Active_file_bytes Memory information field Active_file_bytes.
# TYPE node_memory_Active_file_bytes gauge
node_memory_Active_file_bytes 9.0976256e+07
# HELP node_memory_AnonPages_bytes Memory information field AnonPages_bytes.
# TYPE node_memory_AnonPages_bytes gauge
node_memory_AnonPages_bytes 5.0450432e+07
# HELP node_memory_Bounce_bytes Memory information field Bounce_bytes.
# TYPE node_memory_Bounce_bytes gauge
node_memory_Bounce_bytes 0
# HELP node_memory_Buffers_bytes Memory information field Buffers_bytes.
# TYPE node_memory_Buffers_bytes gauge
node_memory_Buffers_bytes 2.1581824e+07
# HELP node_memory_Cached_bytes Memory information field Cached_bytes.
# TYPE node_memory_Cached_bytes gauge
node_memory_Cached_bytes 1.56778496e+08
# HELP node_memory_CmaFree_bytes Memory information field CmaFree_bytes.
# TYPE node_memory_CmaFree_bytes gauge
node_memory_CmaFree_bytes 2.19979776e+08
# HELP node_memory_CmaTotal_bytes Memory information field CmaTotal_bytes.
# TYPE node_memory_CmaTotal_bytes gauge
node_memory_CmaTotal_bytes 2.68435456e+08
# HELP node_memory_CommitLimit_bytes Memory information field CommitLimit_bytes.
# TYPE node_memory_CommitLimit_bytes gauge
node_memory_CommitLimit_bytes 2.152742912e+09
# HELP node_memory_Committed_AS_bytes Memory information field Committed_AS_bytes.
# TYPE node_memory_Committed_AS_bytes gauge
node_memory_Committed_AS_bytes 2.04275712e+08
# HELP node_memory_Dirty_bytes Memory information field Dirty_bytes.
# TYPE node_memory_Dirty_bytes gauge
node_memory_Dirty_bytes 40960
# HELP node_memory_HighFree_bytes Memory information field HighFree_bytes.
# TYPE node_memory_HighFree_bytes gauge
node_memory_HighFree_bytes 3.123802112e+09
# HELP node_memory_HighTotal_bytes Memory information field HighTotal_bytes.
# TYPE node_memory_HighTotal_bytes gauge
node_memory_HighTotal_bytes 3.342860288e+09
# HELP node_memory_Inactive_anon_bytes Memory information field Inactive_anon_bytes.
# TYPE node_memory_Inactive_anon_bytes gauge
node_memory_Inactive_anon_bytes 1.6912384e+07
# HELP node_memory_Inactive_bytes Memory information field Inactive_bytes.
# TYPE node_memory_Inactive_bytes gauge
node_memory_Inactive_bytes 8.7031808e+07
# HELP node_memory_Inactive_file_bytes Memory information field Inactive_file_bytes.
# TYPE node_memory_Inactive_file_bytes gauge
node_memory_Inactive_file_bytes 7.0119424e+07
# HELP node_memory_KernelStack_bytes Memory information field KernelStack_bytes.
# TYPE node_memory_KernelStack_bytes gauge
node_memory_KernelStack_bytes 1.2288e+06
# HELP node_memory_LowFree_bytes Memory information field LowFree_bytes.
# TYPE node_memory_LowFree_bytes gauge
node_memory_LowFree_bytes 6.19737088e+08
# HELP node_memory_LowTotal_bytes Memory information field LowTotal_bytes.
# TYPE node_memory_LowTotal_bytes gauge
node_memory_LowTotal_bytes 7.52918528e+08
# HELP node_memory_Mapped_bytes Memory information field Mapped_bytes.
# TYPE node_memory_Mapped_bytes gauge
node_memory_Mapped_bytes 3.5479552e+07
# HELP node_memory_MemAvailable_bytes Memory information field MemAvailable_bytes.
# TYPE node_memory_MemAvailable_bytes gauge
node_memory_MemAvailable_bytes 3.799220224e+09
# HELP node_memory_MemFree_bytes Memory information field MemFree_bytes.
# TYPE node_memory_MemFree_bytes gauge
node_memory_MemFree_bytes 3.7435392e+09
# HELP node_memory_MemTotal_bytes Memory information field MemTotal_bytes.
# TYPE node_memory_MemTotal_bytes gauge
node_memory_MemTotal_bytes 4.095778816e+09
# HELP node_memory_Mlocked_bytes Memory information field Mlocked_bytes.
# TYPE node_memory_Mlocked_bytes gauge
node_memory_Mlocked_bytes 16384
# HELP node_memory_NFS_Unstable_bytes Memory information field NFS_Unstable_bytes.
# TYPE node_memory_NFS_Unstable_bytes gauge
node_memory_NFS_Unstable_bytes 0
# HELP node_memory_PageTables_bytes Memory information field PageTables_bytes.
# TYPE node_memory_PageTables_bytes gauge
node_memory_PageTables_bytes 1.306624e+06
# HELP node_memory_Percpu_bytes Memory information field Percpu_bytes.
# TYPE node_memory_Percpu_bytes gauge
node_memory_Percpu_bytes 770048
# HELP node_memory_SReclaimable_bytes Memory information field SReclaimable_bytes.
# TYPE node_memory_SReclaimable_bytes gauge
node_memory_SReclaimable_bytes 2.1508096e+07
# HELP node_memory_SUnreclaim_bytes Memory information field SUnreclaim_bytes.
# TYPE node_memory_SUnreclaim_bytes gauge
node_memory_SUnreclaim_bytes 3.0846976e+07
# HELP node_memory_Shmem_bytes Memory information field Shmem_bytes.
# TYPE node_memory_Shmem_bytes gauge
node_memory_Shmem_bytes 1.7260544e+07
# HELP node_memory_Slab_bytes Memory information field Slab_bytes.
# TYPE node_memory_Slab_bytes gauge
node_memory_Slab_bytes 5.2355072e+07
# HELP node_memory_SwapCached_bytes Memory information field SwapCached_bytes.
# TYPE node_memory_SwapCached_bytes gauge
node_memory_SwapCached_bytes 0
# HELP node_memory_SwapFree_bytes Memory information field SwapFree_bytes.
# TYPE node_memory_SwapFree_bytes gauge
node_memory_SwapFree_bytes 1.04853504e+08
# HELP node_memory_SwapTotal_bytes Memory information field SwapTotal_bytes.
# TYPE node_memory_SwapTotal_bytes gauge
node_memory_SwapTotal_bytes 1.04853504e+08
# HELP node_memory_Unevictable_bytes Memory information field Unevictable_bytes.
# TYPE node_memory_Unevictable_bytes gauge
node_memory_Unevictable_bytes 16384
# HELP node_memory_VmallocChunk_bytes Memory information field VmallocChunk_bytes.
# TYPE node_memory_VmallocChunk_bytes gauge
node_memory_VmallocChunk_bytes 0
# HELP node_memory_VmallocTotal_bytes Memory information field VmallocTotal_bytes.
# TYPE node_memory_VmallocTotal_bytes gauge
node_memory_VmallocTotal_bytes 2.5165824e+08
# HELP node_memory_VmallocUsed_bytes Memory information field VmallocUsed_bytes.
# TYPE node_memory_VmallocUsed_bytes gauge
node_memory_VmallocUsed_bytes 0
# HELP node_memory_WritebackTmp_bytes Memory information field WritebackTmp_bytes.
# TYPE node_memory_WritebackTmp_bytes gauge
node_memory_WritebackTmp_bytes 0
# HELP node_memory_Writeback_bytes Memory information field Writeback_bytes.
# TYPE node_memory_Writeback_bytes gauge
node_memory_Writeback_bytes 0
# HELP node_netstat_Icmp6_InErrors Statistic Icmp6InErrors.
# TYPE node_netstat_Icmp6_InErrors untyped
node_netstat_Icmp6_InErrors 0
# HELP node_netstat_Icmp6_InMsgs Statistic Icmp6InMsgs.
# TYPE node_netstat_Icmp6_InMsgs untyped
node_netstat_Icmp6_InMsgs 0
# HELP node_netstat_Icmp6_OutMsgs Statistic Icmp6OutMsgs.
# TYPE node_netstat_Icmp6_OutMsgs untyped
node_netstat_Icmp6_OutMsgs 32
# HELP node_netstat_Icmp_InErrors Statistic IcmpInErrors.
# TYPE node_netstat_Icmp_InErrors untyped
node_netstat_Icmp_InErrors 0
# HELP node_netstat_Icmp_InMsgs Statistic IcmpInMsgs.
# TYPE node_netstat_Icmp_InMsgs untyped
node_netstat_Icmp_InMsgs 223
# HELP node_netstat_Icmp_OutMsgs Statistic IcmpOutMsgs.
# TYPE node_netstat_Icmp_OutMsgs untyped
node_netstat_Icmp_OutMsgs 1
# HELP node_netstat_Ip6_InOctets Statistic Ip6InOctets.
# TYPE node_netstat_Ip6_InOctets untyped
node_netstat_Ip6_InOctets 208333
# HELP node_netstat_Ip6_OutOctets Statistic Ip6OutOctets.
# TYPE node_netstat_Ip6_OutOctets untyped
node_netstat_Ip6_OutOctets 208793
# HELP node_netstat_IpExt_InOctets Statistic IpExtInOctets.
# TYPE node_netstat_IpExt_InOctets untyped
node_netstat_IpExt_InOctets 1.1631656e+07
# HELP node_netstat_IpExt_OutOctets Statistic IpExtOutOctets.
# TYPE node_netstat_IpExt_OutOctets untyped
node_netstat_IpExt_OutOctets 1.4136418e+07
# HELP node_netstat_Ip_Forwarding Statistic IpForwarding.
# TYPE node_netstat_Ip_Forwarding untyped
node_netstat_Ip_Forwarding 2
# HELP node_netstat_TcpExt_ListenDrops Statistic TcpExtListenDrops.
# TYPE node_netstat_TcpExt_ListenDrops untyped
node_netstat_TcpExt_ListenDrops 0
# HELP node_netstat_TcpExt_ListenOverflows Statistic TcpExtListenOverflows.
# TYPE node_netstat_TcpExt_ListenOverflows untyped
node_netstat_TcpExt_ListenOverflows 0
# HELP node_netstat_TcpExt_SyncookiesFailed Statistic TcpExtSyncookiesFailed.
# TYPE node_netstat_TcpExt_SyncookiesFailed untyped
node_netstat_TcpExt_SyncookiesFailed 0
# HELP node_netstat_TcpExt_SyncookiesRecv Statistic TcpExtSyncookiesRecv.
# TYPE node_netstat_TcpExt_SyncookiesRecv untyped
node_netstat_TcpExt_SyncookiesRecv 0
# HELP node_netstat_TcpExt_SyncookiesSent Statistic TcpExtSyncookiesSent.
# TYPE node_netstat_TcpExt_SyncookiesSent untyped
node_netstat_TcpExt_SyncookiesSent 0
# HELP node_netstat_TcpExt_TCPSynRetrans Statistic TcpExtTCPSynRetrans.
# TYPE node_netstat_TcpExt_TCPSynRetrans untyped
node_netstat_TcpExt_TCPSynRetrans 0
# HELP node_netstat_Tcp_ActiveOpens Statistic TcpActiveOpens.
# TYPE node_netstat_Tcp_ActiveOpens untyped
node_netstat_Tcp_ActiveOpens 9
# HELP node_netstat_Tcp_CurrEstab Statistic TcpCurrEstab.
# TYPE node_netstat_Tcp_CurrEstab untyped
node_netstat_Tcp_CurrEstab 3
# HELP node_netstat_Tcp_InErrs Statistic TcpInErrs.
# TYPE node_netstat_Tcp_InErrs untyped
node_netstat_Tcp_InErrs 0
# HELP node_netstat_Tcp_InSegs Statistic TcpInSegs.
# TYPE node_netstat_Tcp_InSegs untyped
node_netstat_Tcp_InSegs 13723
# HELP node_netstat_Tcp_OutSegs Statistic TcpOutSegs.
# TYPE node_netstat_Tcp_OutSegs untyped
node_netstat_Tcp_OutSegs 16485
# HELP node_netstat_Tcp_PassiveOpens Statistic TcpPassiveOpens.
# TYPE node_netstat_Tcp_PassiveOpens untyped
node_netstat_Tcp_PassiveOpens 7
# HELP node_netstat_Tcp_RetransSegs Statistic TcpRetransSegs.
# TYPE node_netstat_Tcp_RetransSegs untyped
node_netstat_Tcp_RetransSegs 2
# HELP node_netstat_Udp6_InDatagrams Statistic Udp6InDatagrams.
# TYPE node_netstat_Udp6_InDatagrams untyped
node_netstat_Udp6_InDatagrams 22
# HELP node_netstat_Udp6_InErrors Statistic Udp6InErrors.
# TYPE node_netstat_Udp6_InErrors untyped
node_netstat_Udp6_InErrors 0
# HELP node_netstat_Udp6_NoPorts Statistic Udp6NoPorts.
# TYPE node_netstat_Udp6_NoPorts untyped
node_netstat_Udp6_NoPorts 0
# HELP node_netstat_Udp6_OutDatagrams Statistic Udp6OutDatagrams.
# TYPE node_netstat_Udp6_OutDatagrams untyped
node_netstat_Udp6_OutDatagrams 6
# HELP node_netstat_UdpLite6_InErrors Statistic UdpLite6InErrors.
# TYPE node_netstat_UdpLite6_InErrors untyped
node_netstat_UdpLite6_InErrors 0
# HELP node_netstat_UdpLite_InErrors Statistic UdpLiteInErrors.
# TYPE node_netstat_UdpLite_InErrors untyped
node_netstat_UdpLite_InErrors 0
# HELP node_netstat_Udp_InDatagrams Statistic UdpInDatagrams.
# TYPE node_netstat_Udp_InDatagrams untyped
node_netstat_Udp_InDatagrams 101
# HELP node_netstat_Udp_InErrors Statistic UdpInErrors.
# TYPE node_netstat_Udp_InErrors untyped
node_netstat_Udp_InErrors 0
# HELP node_netstat_Udp_NoPorts Statistic UdpNoPorts.
# TYPE node_netstat_Udp_NoPorts untyped
node_netstat_Udp_NoPorts 0
# HELP node_netstat_Udp_OutDatagrams Statistic UdpOutDatagrams.
# TYPE node_netstat_Udp_OutDatagrams untyped
node_netstat_Udp_OutDatagrams 319
# HELP node_network_address_assign_type address_assign_type value of /sys/class/net/<iface>.
# TYPE node_network_address_assign_type gauge
node_network_address_assign_type{device="eth0"} 0
node_network_address_assign_type{device="lo"} 0
node_network_address_assign_type{device="wlan0"} 0
# HELP node_network_carrier carrier value of /sys/class/net/<iface>.
# TYPE node_network_carrier gauge
node_network_carrier{device="eth0"} 1
node_network_carrier{device="lo"} 1
# HELP node_network_carrier_changes_total carrier_changes_total value of /sys/class/net/<iface>.
# TYPE node_network_carrier_changes_total counter
node_network_carrier_changes_total{device="eth0"} 1
node_network_carrier_changes_total{device="lo"} 0
node_network_carrier_changes_total{device="wlan0"} 0
# HELP node_network_carrier_down_changes_total carrier_down_changes_total value of /sys/class/net/<iface>.
# TYPE node_network_carrier_down_changes_total counter
node_network_carrier_down_changes_total{device="eth0"} 0
node_network_carrier_down_changes_total{device="lo"} 0
node_network_carrier_down_changes_total{device="wlan0"} 0
# HELP node_network_carrier_up_changes_total carrier_up_changes_total value of /sys/class/net/<iface>.
# TYPE node_network_carrier_up_changes_total counter
node_network_carrier_up_changes_total{device="eth0"} 1
node_network_carrier_up_changes_total{device="lo"} 0
node_network_carrier_up_changes_total{device="wlan0"} 0
# HELP node_network_device_id device_id value of /sys/class/net/<iface>.
# TYPE node_network_device_id gauge
node_network_device_id{device="eth0"} 0
node_network_device_id{device="lo"} 0
node_network_device_id{device="wlan0"} 0
# HELP node_network_dormant dormant value of /sys/class/net/<iface>.
# TYPE node_network_dormant gauge
node_network_dormant{device="eth0"} 0
node_network_dormant{device="lo"} 0
# HELP node_network_flags flags value of /sys/class/net/<iface>.
# TYPE node_network_flags gauge
node_network_flags{device="eth0"} 4099
node_network_flags{device="lo"} 9
node_network_flags{device="wlan0"} 4098
# HELP node_network_iface_id iface_id value of /sys/class/net/<iface>.
# TYPE node_network_iface_id gauge
node_network_iface_id{device="eth0"} 2
node_network_iface_id{device="lo"} 1
node_network_iface_id{device="wlan0"} 3
# HELP node_network_iface_link iface_link value of /sys/class/net/<iface>.
# TYPE node_network_iface_link gauge
node_network_iface_link{device="eth0"} 2
node_network_iface_link{device="lo"} 1
node_network_iface_link{device="wlan0"} 3
# HELP node_network_iface_link_mode iface_link_mode value of /sys/class/net/<iface>.
# TYPE node_network_iface_link_mode gauge
node_network_iface_link_mode{device="eth0"} 0
node_network_iface_link_mode{device="lo"} 0
node_network_iface_link_mode{device="wlan0"} 0
# HELP node_network_info Non-numeric data from /sys/class/net/<iface>, value is always 1.
# TYPE node_network_info gauge
node_network_info{address="00:00:00:00:00:00",broadcast="00:00:00:00:00:00",device="lo",duplex="",ifalias="",operstate="unknown"} 1
node_network_info{address="dc:a6:32:1c:6a:2a",broadcast="ff:ff:ff:ff:ff:ff",device="eth0",duplex="full",ifalias="",operstate="up"} 1
node_network_info{address="dc:a6:32:1c:6a:2c",broadcast="ff:ff:ff:ff:ff:ff",device="wlan0",duplex="",ifalias="",operstate="down"} 1
# HELP node_network_mtu_bytes mtu_bytes value of /sys/class/net/<iface>.
# TYPE node_network_mtu_bytes gauge
node_network_mtu_bytes{device="eth0"} 1500
node_network_mtu_bytes{device="lo"} 65536
node_network_mtu_bytes{device="wlan0"} 1500
# HELP node_network_net_dev_group net_dev_group value of /sys/class/net/<iface>.
# TYPE node_network_net_dev_group gauge
node_network_net_dev_group{device="eth0"} 0
node_network_net_dev_group{device="lo"} 0
node_network_net_dev_group{device="wlan0"} 0
# HELP node_network_protocol_type protocol_type value of /sys/class/net/<iface>.
# TYPE node_network_protocol_type gauge
node_network_protocol_type{device="eth0"} 1
node_network_protocol_type{device="lo"} 772
node_network_protocol_type{device="wlan0"} 1
# HELP node_network_receive_bytes_total Network device statistic receive_bytes.
# TYPE node_network_receive_bytes_total counter
node_network_receive_bytes_total{device="eth0"} 1.2216771e+07
node_network_receive_bytes_total{device="lo"} 205663
node_network_receive_bytes_total{device="wlan0"} 0
# HELP node_network_receive_compressed_total Network device statistic receive_compressed.
# TYPE node_network_receive_compressed_total counter
node_network_receive_compressed_total{device="eth0"} 0
node_network_receive_compressed_total{device="lo"} 0
node_network_receive_compressed_total{device="wlan0"} 0
# HELP node_network_receive_drop_total Network device statistic receive_drop.
# TYPE node_network_receive_drop_total counter
node_network_receive_drop_total{device="eth0"} 0
node_network_receive_drop_total{device="lo"} 0
node_network_receive_drop_total{device="wlan0"} 0
# HELP node_network_receive_errs_total Network device statistic receive_errs.
# TYPE node_network_receive_errs_total counter
node_network_receive_errs_total{device="eth0"} 0
node_network_receive_errs_total{device="lo"} 0
node_network_receive_errs_total{device="wlan0"} 0
# HELP node_network_receive_fifo_total Network device statistic receive_fifo.
# TYPE node_network_receive_fifo_total counter
node_network_receive_fifo_total{device="eth0"} 0
node_network_receive_fifo_total{device="lo"} 0
node_network_receive_fifo_total{device="wlan0"} 0
# HELP node_network_receive_frame_total Network device statistic receive_frame.
# TYPE node_network_receive_frame_total counter
node_network_receive_frame_total{device="eth0"} 0
node_network_receive_frame_total{device="lo"} 0
node_network_receive_frame_total{device="wlan0"} 0
# HELP node_network_receive_multicast_total Network device statistic receive_multicast.
# TYPE node_network_receive_multicast_total counter
node_network_receive_multicast_total{device="eth0"} 63
node_network_receive_multicast_total{device="lo"} 0
node_network_receive_multicast_total{device="wlan0"} 0
# HELP node_network_receive_packets_total Network device statistic receive_packets.
# TYPE node_network_receive_packets_total counter
node_network_receive_packets_total{device="eth0"} 40675
node_network_receive_packets_total{device="lo"} 122
node_network_receive_packets_total{device="wlan0"} 0
# HELP node_network_speed_bytes speed_bytes value of /sys/class/net/<iface>.
# TYPE node_network_speed_bytes gauge
node_network_speed_bytes{device="eth0"} 1.25e+08
# HELP node_network_transmit_bytes_total Network device statistic transmit_bytes.
# TYPE node_network_transmit_bytes_total counter
node_network_transmit_bytes_total{device="eth0"} 1.4721254e+07
node_network_transmit_bytes_total{device="lo"} 205663
node_network_transmit_bytes_total{device="wlan0"} 0
# HELP node_network_transmit_carrier_total Network device statistic transmit_carrier.
# TYPE node_network_transmit_carrier_total counter
node_network_transmit_carrier_total{device="eth0"} 0
node_network_transmit_carrier_total{device="lo"} 0
node_network_transmit_carrier_total{device="wlan0"} 0
# HELP node_network_transmit_colls_total Network device statistic transmit_colls.
# TYPE node_network_transmit_colls_total counter
node_network_transmit_colls_total{device="eth0"} 0
node_network_transmit_colls_total{device="lo"} 0
node_network_transmit_colls_total{device="wlan0"} 0
# HELP node_network_transmit_compressed_total Network device statistic transmit_compressed.
# TYPE node_network_transmit_compressed_total counter
node_network_transmit_compressed_total{device="eth0"} 0
node_network_transmit_compressed_total{device="lo"} 0
node_network_transmit_compressed_total{device="wlan0"} 0
# HELP node_network_transmit_drop_total Network device statistic transmit_drop.
# TYPE node_network_transmit_drop_total counter
node_network_transmit_drop_total{device="eth0"} 0
node_network_transmit_drop_total{device="lo"} 0
node_network_transmit_drop_total{device="wlan0"} 0
# HELP node_network_transmit_errs_total Network device statistic transmit_errs.
# TYPE node_network_transmit_errs_total counter
node_network_transmit_errs_total{device="eth0"} 0
node_network_transmit_errs_total{device="lo"} 0
node_network_transmit_errs_total{device="wlan0"} 0
# HELP node_network_transmit_fifo_total Network device statistic transmit_fifo.
# TYPE node_network_transmit_fifo_total counter
node_network_transmit_fifo_total{device="eth0"} 0
node_network_transmit_fifo_total{device="lo"} 0
node_network_transmit_fifo_total{device="wlan0"} 0
# HELP node_network_transmit_packets_total Network device statistic transmit_packets.
# TYPE node_network_transmit_packets_total counter
node_network_transmit_packets_total{device="eth0"} 17033
node_network_transmit_packets_total{device="lo"} 122
node_network_transmit_packets_total{device="wlan0"} 0
# HELP node_network_transmit_queue_length transmit_queue_length value of /sys/class/net/<iface>.
# TYPE node_network_transmit_queue_length gauge
node_network_transmit_queue_length{device="eth0"} 1000
node_network_transmit_queue_length{device="lo"} 1000
node_network_transmit_queue_length{device="wlan0"} 1000
# HELP node_network_up Value is 1 if operstate is 'up', 0 otherwise.
# TYPE node_network_up gauge
node_network_up{device="eth0"} 1
node_network_up{device="lo"} 0
node_network_up{device="wlan0"} 0
# HELP node_nfs_connections_total Total number of NFSd TCP connections.
# TYPE node_nfs_connections_total counter
node_nfs_connections_total 0
# HELP node_nfs_packets_total Total NFSd network packets (sent+received) by protocol type.
# TYPE node_nfs_packets_total counter
node_nfs_packets_total{protocol="tcp"} 0
node_nfs_packets_total{protocol="udp"} 0
# HELP node_nfs_requests_total Number of NFS procedures invoked.
# TYPE node_nfs_requests_total counter
node_nfs_requests_total{method="Access",proto="3"} 0
node_nfs_requests_total{method="Access",proto="4"} 0
node_nfs_requests_total{method="Allocate",proto="4"} 0
node_nfs_requests_total{method="BindConnToSession",proto="4"} 0
node_nfs_requests_total{method="Clone",proto="4"} 0
node_nfs_requests_total{method="Close",proto="4"} 0
node_nfs_requests_total{method="Commit",proto="3"} 0
node_nfs_requests_total{method="Commit",proto="4"} 0
node_nfs_requests_total{method="Create",proto="2"} 0
node_nfs_requests_total{method="Create",proto="3"} 0
node_nfs_requests_total{method="Create",proto="4"} 0
node_nfs_requests_total{method="CreateSession",proto="4"} 0
node_nfs_requests_total{method="DeAllocate",proto="4"} 0
node_nfs_requests_total{method="DelegReturn",proto="4"} 0
node_nfs_requests_total{method="DestroyClientID",proto="4"} 0
node_nfs_requests_total{method="DestroySession",proto="4"} 0
node_nfs_requests_total{method="ExchangeID",proto="4"} 0
node_nfs_requests_total{method="FreeStateID",proto="4"} 0
node_nfs_requests_total{method="FsInfo",proto="3"} 0
node_nfs_requests_total{method="FsInfo",proto="4"} 0
node_nfs_requests_total{method="FsLocations",proto="4"} 0
node_nfs_requests_total{method="FsStat",proto="2"} 0
node_nfs_requests_total{method="FsStat",proto="3"} 0
node_nfs_requests_total{method="FsidPresent",proto="4"} 0
node_nfs_requests_total{method="GetACL",proto="4"} 0
node_nfs_requests_total{method="GetAttr",proto="2"} 0
node_nfs_requests_total{method="GetAttr",proto="3"} 0
node_nfs_requests_total{method="GetDeviceInfo",proto="4"} 0
node_nfs_requests_total{method="GetDeviceList",proto="4"} 0
node_nfs_requests_total{method="GetLeaseTime",proto="4"} 0
node_nfs_requests_total{method="Getattr",proto="4"} 0
node_nfs_requests_total{method="LayoutCommit",proto="4"} 0
node_nfs_requests_total{method="LayoutGet",proto="4"} 0
node_nfs_requests_total{method="LayoutReturn",proto="4"} 0
node_nfs_requests_total{method="LayoutStats",proto="4"} 0
node_nfs_requests_total{method="Link",proto="2"} 0
node_nfs_requests_total{method="Link",proto="3"} 0
node_nfs_requests_total{method="Link",proto="4"} 0
node_nfs_requests_total{method="Lock",proto="4"} 0
node_nfs_requests_total{method="Lockt",proto="4"} 0
node_nfs_requests_total{method="Locku",proto="4"} 0
node_nfs_requests_total{method="Lookup",proto="2"} 0
node_nfs_requests_total{method="Lookup",proto="3"} 0
node_nfs_requests_total{method="Lookup",proto="4"} 0
node_nfs_requests_total{method="LookupRoot",proto="4"} 0
node_nfs_requests_total{method="MkDir",proto="2"} 0
node_nfs_requests_total{method="MkDir",proto="3"} 0
node_nfs_requests_total{method="MkNod",proto="3"} 0
node_nfs_requests_total{method="Null",proto="2"} 0
node_nfs_requests_total{method="Null",proto="3"} 0
node_nfs_requests_total{method="Null",proto="4"} 0
node_nfs_requests_total{method="Open",proto="4"} 0
node_nfs_requests_total{method="OpenConfirm",proto="4"} 0
node_nfs_requests_total{method="OpenDowngrade",proto="4"} 0
node_nfs_requests_total{method="OpenNoattr",proto="4"} 0
node_nfs_requests_total{method="PathConf",proto="3"} 0
node_nfs_requests_total{method="Pathconf",proto="4"} 0
node_nfs_requests_total{method="Read",proto="2"} 0
node_nfs_requests_total{method="Read",proto="3"} 0
node_nfs_requests_total{method="Read",proto="4"} 0
node_nfs_requests_total{method="ReadDir",proto="2"} 0
node_nfs_requests_total{method="ReadDir",proto="3"} 0
node_nfs_requests_total{method="ReadDir",proto="4"} 0
node_nfs_requests_total{method="ReadDirPlus",proto="3"} 0
node_nfs_requests_total{method="ReadLink",proto="2"} 0
node_nfs_requests_total{method="ReadLink",proto="3"} 0
node_nfs_requests_total{method="ReadLink",proto="4"} 0
node_nfs_requests_total{method="ReclaimComplete",proto="4"} 0
node_nfs_requests_total{method="ReleaseLockowner",proto="4"} 0
node_nfs_requests_total{method="Remove",proto="2"} 0
node_nfs_requests_total{method="Remove",proto="3"} 0
node_nfs_requests_total{method="Remove",proto="4"} 0
node_nfs_requests_total{method="Rename",proto="2"} 0
node_nfs_requests_total{method="Rename",proto="3"} 0
node_nfs_requests_total{method="Rename",proto="4"} 0
node_nfs_requests_total{method="Renew",proto="4"} 0
node_nfs_requests_total{method="RmDir",proto="2"} 0
node_nfs_requests_total{method="RmDir",proto="3"} 0
node_nfs_requests_total{method="Root",proto="2"} 0
node_nfs_requests_total{method="Secinfo",proto="4"} 0
node_nfs_requests_total{method="SecinfoNoName",proto="4"} 0
node_nfs_requests_total{method="Seek",proto="4"} 0
node_nfs_requests_total{method="Sequence",proto="4"} 0
node_nfs_requests_total{method="ServerCaps",proto="4"} 0
node_nfs_requests_total{method="SetACL",proto="4"} 0
node_nfs_requests_total{method="SetAttr",proto="2"} 0
node_nfs_requests_total{method="SetAttr",proto="3"} 0
node_nfs_requests_total{method="SetClientID",proto="4"} 0
node_nfs_requests_total{method="SetClientIDConfirm",proto="4"} 0
node_nfs_requests_total{method="Setattr",proto="4"} 0
node_nfs_requests_total{method="StatFs",proto="4"} 0
node_nfs_requests_total{method="SymLink",proto="2"} 0
node_nfs_requests_total{method="SymLink",proto="3"} 0
node_nfs_requests_total{method="Symlink",proto="4"} 0
node_nfs_requests_total{method="TestStateID",proto="4"} 0
node_nfs_requests_total{method="WrCache",proto="2"} 0
node_nfs_requests_total{method="Write",proto="2"} 0
node_nfs_requests_total{method="Write",proto="3"} 0
node_nfs_requests_total{method="Write",proto="4"} 0
# HELP node_nfs_rpc_authentication_refreshes_total Number of RPC authentication refreshes performed.
# TYPE node_nfs_rpc_authentication_refreshes_total counter
node_nfs_rpc_authentication_refreshes_total 0
# HELP node_nfs_rpc_retransmissions_total Number of RPC transmissions performed.
# TYPE node_nfs_rpc_retransmissions_total counter
node_nfs_rpc_retransmissions_total 0
# HELP node_nfs_rpcs_total Total number of RPCs performed.
# TYPE node_nfs_rpcs_total counter
node_nfs_rpcs_total 0
# HELP node_nfsd_connections_total Total number of NFSd TCP connections.
# TYPE node_nfsd_connections_total counter
node_nfsd_connections_total 0
# HELP node_nfsd_disk_bytes_read_total Total NFSd bytes read.
# TYPE node_nfsd_disk_bytes_read_total counter
node_nfsd_disk_bytes_read_total 0
# HELP node_nfsd_disk_bytes_written_total Total NFSd bytes written.
# TYPE node_nfsd_disk_bytes_written_total counter
node_nfsd_disk_bytes_written_total 0
# HELP node_nfsd_file_handles_stale_total Total number of NFSd stale file handles
# TYPE node_nfsd_file_handles_stale_total counter
node_nfsd_file_handles_stale_total 0
# HELP node_nfsd_packets_total Total NFSd network packets (sent+received) by protocol type.
# TYPE node_nfsd_packets_total counter
node_nfsd_packets_total{proto="tcp"} 0
node_nfsd_packets_total{proto="udp"} 0
# HELP node_nfsd_read_ahead_cache_not_found_total Total number of NFSd read ahead cache not found.
# TYPE node_nfsd_read_ahead_cache_not_found_total counter
node_nfsd_read_ahead_cache_not_found_total 0
# HELP node_nfsd_read_ahead_cache_size_blocks How large the read ahead cache is in blocks.
# TYPE node_nfsd_read_ahead_cache_size_blocks gauge
node_nfsd_read_ahead_cache_size_blocks 32
# HELP node_nfsd_reply_cache_hits_total Total number of NFSd Reply Cache hits (client lost server response).
# TYPE node_nfsd_reply_cache_hits_total counter
node_nfsd_reply_cache_hits_total 0
# HELP node_nfsd_reply_cache_misses_total Total number of NFSd Reply Cache an operation that requires caching (idempotent).
# TYPE node_nfsd_reply_cache_misses_total counter
node_nfsd_reply_cache_misses_total 0
# HELP node_nfsd_reply_cache_nocache_total Total number of NFSd Reply Cache non-idempotent operations (rename/delete/…).
# TYPE node_nfsd_reply_cache_nocache_total counter
node_nfsd_reply_cache_nocache_total 0
# HELP node_nfsd_requests_total Total number NFSd Requests by method and protocol.
# TYPE node_nfsd_requests_total counter
node_nfsd_requests_total{method="Access",proto="3"} 0
node_nfsd_requests_total{method="Access",proto="4"} 0
node_nfsd_requests_total{method="Close",proto="4"} 0
node_nfsd_requests_total{method="Commit",proto="3"} 0
node_nfsd_requests_total{method="Commit",proto="4"} 0
node_nfsd_requests_total{method="Create",proto="2"} 0
node_nfsd_requests_total{method="Create",proto="3"} 0
node_nfsd_requests_total{method="Create",proto="4"} 0
node_nfsd_requests_total{method="DelegPurge",proto="4"} 0
node_nfsd_requests_total{method="DelegReturn",proto="4"} 0
node_nfsd_requests_total{method="FsInfo",proto="3"} 0
node_nfsd_requests_total{method="FsStat",proto="2"} 0
node_nfsd_requests_total{method="FsStat",proto="3"} 0
node_nfsd_requests_total{method="GetAttr",proto="2"} 0
node_nfsd_requests_total{method="GetAttr",proto="3"} 0
node_nfsd_requests_total{method="GetAttr",proto="4"} 0
node_nfsd_requests_total{method="GetFH",proto="4"} 0
node_nfsd_requests_total{method="Link",proto="2"} 0
node_nfsd_requests_total{method="Link",proto="3"} 0
node_nfsd_requests_total{method="Link",proto="4"} 0
node_nfsd_requests_total{method="Lock",proto="4"} 0
node_nfsd_requests_total{method="Lockt",proto="4"} 0
node_nfsd_requests_total{method="Locku",proto="4"} 0
node_nfsd_requests_total{method="Lookup",proto="2"} 0
node_nfsd_requests_total{method="Lookup",proto="3"} 0
node_nfsd_requests_total{method="Lookup",proto="4"} 0
node_nfsd_requests_total{method="LookupRoot",proto="4"} 0
node_nfsd_requests_total{method="MkDir",proto="2"} 0
node_nfsd_requests_total{method="MkDir",proto="3"} 0
node_nfsd_requests_total{method="MkNod",proto="3"} 0
node_nfsd_requests_total{method="Nverify",proto="4"} 0
node_nfsd_requests_total{method="Open",proto="4"} 0
node_nfsd_requests_total{method="OpenAttr",proto="4"} 0
node_nfsd_requests_total{method="OpenConfirm",proto="4"} 0
node_nfsd_requests_total{method="OpenDgrd",proto="4"} 0
node_nfsd_requests_total{method="PathConf",proto="3"} 0
node_nfsd_requests_total{method="PutFH",proto="4"} 0
node_nfsd_requests_total{method="Read",proto="2"} 0
node_nfsd_requests_total{method="Read",proto="3"} 0
node_nfsd_requests_total{method="Read",proto="4"} 0
node_nfsd_requests_total{method="ReadDir",proto="2"} 0
node_nfsd_requests_total{method="ReadDir",proto="3"} 0
node_nfsd_requests_total{method="ReadDir",proto="4"} 0
node_nfsd_requests_total{method="ReadDirPlus",proto="3"} 0
node_nfsd_requests_total{method="ReadLink",proto="2"} 0
node_nfsd_requests_total{method="ReadLink",proto="3"} 0
node_nfsd_requests_total{method="ReadLink",proto="4"} 0
node_nfsd_requests_total{method="RelLockOwner",proto="4"} 0
node_nfsd_requests_total{method="Remove",proto="2"} 0
node_nfsd_requests_total{method="Remove",proto="3"} 0
node_nfsd_requests_total{method="Remove",proto="4"} 0
node_nfsd_requests_total{method="Rename",proto="2"} 0
node_nfsd_requests_total{method="Rename",proto="3"} 0
node_nfsd_requests_total{method="Rename",proto="4"} 0
node_nfsd_requests_total{method="Renew",proto="4"} 0
node_nfsd_requests_total{method="RestoreFH",proto="4"} 0
node_nfsd_requests_total{method="RmDir",proto="2"} 0
node_nfsd_requests_total{method="RmDir",proto="3"} 0
node_nfsd_requests_total{method="Root",proto="2"} 0
node_nfsd_requests_total{method="SaveFH",proto="4"} 0
node_nfsd_requests_total{method="SecInfo",proto="4"} 0
node_nfsd_requests_total{method="SetAttr",proto="2"} 0
node_nfsd_requests_total{method="SetAttr",proto="3"} 0
node_nfsd_requests_total{method="SetAttr",proto="4"} 0
node_nfsd_requests_total{method="SymLink",proto="2"} 0
node_nfsd_requests_total{method="SymLink",proto="3"} 0
node_nfsd_requests_total{method="Verify",proto="4"} 0
node_nfsd_requests_total{method="WrCache",proto="2"} 0
node_nfsd_requests_total{method="Write",proto="2"} 0
node_nfsd_requests_total{method="Write",proto="3"} 0
node_nfsd_requests_total{method="Write",proto="4"} 0
# HELP node_nfsd_rpc_errors_total Total number of NFSd RPC errors by error type.
# TYPE node_nfsd_rpc_errors_total counter
node_nfsd_rpc_errors_total{error="auth"} 0
node_nfsd_rpc_errors_total{error="cInt"} 0
node_nfsd_rpc_errors_total{error="fmt"} 0
# HELP node_nfsd_server_rpcs_total Total number of NFSd RPCs.
# TYPE node_nfsd_server_rpcs_total counter
node_nfsd_server_rpcs_total 0
# HELP node_nfsd_server_threads Total number of NFSd kernel threads that are running.
# TYPE node_nfsd_server_threads gauge
node_nfsd_server_threads 8
# HELP node_procs_blocked Number of processes blocked waiting for I/O to complete.
# TYPE node_procs_blocked gauge
node_procs_blocked 0
# HELP node_procs_running Number of processes in runnable state.
# TYPE node_procs_running gauge
node_procs_running 6
# HELP node_scrape_collector_duration_seconds node_exporter: Duration of a collector scrape.
# TYPE node_scrape_collector_duration_seconds gauge
node_scrape_collector_duration_seconds{collector="arp"} 0.000393567
node_scrape_collector_duration_seconds{collector="bcache"} 9.7628e-05
node_scrape_collector_duration_seconds{collector="bonding"} 0.000164164
node_scrape_collector_duration_seconds{collector="conntrack"} 6.8166e-05
node_scrape_collector_duration_seconds{collector="cpu"} 0.005163546
node_scrape_collector_duration_seconds{collector="cpufreq"} 0.008886911
node_scrape_collector_duration_seconds{collector="diskstats"} 0.004172821
node_scrape_collector_duration_seconds{collector="edac"} 0.000124998
node_scrape_collector_duration_seconds{collector="entropy"} 0.000218182
node_scrape_collector_duration_seconds{collector="filefd"} 0.000218108
node_scrape_collector_duration_seconds{collector="filesystem"} 0.007779892
node_scrape_collector_duration_seconds{collector="hwmon"} 0.00245659
node_scrape_collector_duration_seconds{collector="infiniband"} 0.000109313
node_scrape_collector_duration_seconds{collector="ipvs"} 0.000138016
node_scrape_collector_duration_seconds{collector="loadavg"} 0.000236292
node_scrape_collector_duration_seconds{collector="mdadm"} 0.000157053
node_scrape_collector_duration_seconds{collector="meminfo"} 0.002357073
node_scrape_collector_duration_seconds{collector="netclass"} 0.013116805
node_scrape_collector_duration_seconds{collector="netdev"} 0.001210017
node_scrape_collector_duration_seconds{collector="netstat"} 0.014490338
node_scrape_collector_duration_seconds{collector="nfs"} 0.001159129
node_scrape_collector_duration_seconds{collector="nfsd"} 0.001100223
node_scrape_collector_duration_seconds{collector="pressure"} 0.000134646
node_scrape_collector_duration_seconds{collector="sockstat"} 0.000536825
node_scrape_collector_duration_seconds{collector="stat"} 0.000816468
node_scrape_collector_duration_seconds{collector="textfile"} 0.001063798
node_scrape_collector_duration_seconds{collector="time"} 2.9962e-05
node_scrape_collector_duration_seconds{collector="timex"} 0.000111165
node_scrape_collector_duration_seconds{collector="uname"} 7.8073e-05
node_scrape_collector_duration_seconds{collector="vmstat"} 0.001047002
node_scrape_collector_duration_seconds{collector="xfs"} 8.1109e-05
node_scrape_collector_duration_seconds{collector="zfs"} 0.006234529
# HELP node_scrape_collector_success node_exporter: Whether a collector succeeded.
# TYPE node_scrape_collector_success gauge
node_scrape_collector_success{collector="arp"} 1
node_scrape_collector_success{collector="bcache"} 1
node_scrape_collector_success{collector="bonding"} 1
node_scrape_collector_success{collector="conntrack"} 1
node_scrape_collector_success{collector="cpu"} 1
node_scrape_collector_success{collector="cpufreq"} 1
node_scrape_collector_success{collector="diskstats"} 1
node_scrape_collector_success{collector="edac"} 1
node_scrape_collector_success{collector="entropy"} 1
node_scrape_collector_success{collector="filefd"} 1
node_scrape_collector_success{collector="filesystem"} 1
node_scrape_collector_success{collector="hwmon"} 1
node_scrape_collector_success{collector="infiniband"} 1
node_scrape_collector_success{collector="ipvs"} 1
node_scrape_collector_success{collector="loadavg"} 1
node_scrape_collector_success{collector="mdadm"} 1
node_scrape_collector_success{collector="meminfo"} 1
node_scrape_collector_success{collector="netclass"} 1
node_scrape_collector_success{collector="netdev"} 1
node_scrape_collector_success{collector="netstat"} 1
node_scrape_collector_success{collector="nfs"} 1
node_scrape_collector_success{collector="nfsd"} 1
node_scrape_collector_success{collector="pressure"} 1
node_scrape_collector_success{collector="sockstat"} 1
node_scrape_collector_success{collector="stat"} 1
node_scrape_collector_success{collector="textfile"} 1
node_scrape_collector_success{collector="time"} 1
node_scrape_collector_success{collector="timex"} 1
node_scrape_collector_success{collector="uname"} 1
node_scrape_collector_success{collector="vmstat"} 1
node_scrape_collector_success{collector="xfs"} 1
node_scrape_collector_success{collector="zfs"} 1
# HELP node_sockstat_FRAG_inuse Number of FRAG sockets in state inuse.
# TYPE node_sockstat_FRAG_inuse gauge
node_sockstat_FRAG_inuse 0
# HELP node_sockstat_FRAG_memory Number of FRAG sockets in state memory.
# TYPE node_sockstat_FRAG_memory gauge
node_sockstat_FRAG_memory 0
# HELP node_sockstat_RAW_inuse Number of RAW sockets in state inuse.
# TYPE node_sockstat_RAW_inuse gauge
node_sockstat_RAW_inuse 0
# HELP node_sockstat_TCP_alloc Number of TCP sockets in state alloc.
# TYPE node_sockstat_TCP_alloc gauge
node_sockstat_TCP_alloc 18
# HELP node_sockstat_TCP_inuse Number of TCP sockets in state inuse.
# TYPE node_sockstat_TCP_inuse gauge
node_sockstat_TCP_inuse 8
# HELP node_sockstat_TCP_mem Number of TCP sockets in state mem.
# TYPE node_sockstat_TCP_mem gauge
node_sockstat_TCP_mem 1
# HELP node_sockstat_TCP_mem_bytes Number of TCP sockets in state mem_bytes.
# TYPE node_sockstat_TCP_mem_bytes gauge
node_sockstat_TCP_mem_bytes 4096
# HELP node_sockstat_TCP_orphan Number of TCP sockets in state orphan.
# TYPE node_sockstat_TCP_orphan gauge
node_sockstat_TCP_orphan 0
# HELP node_sockstat_TCP_tw Number of TCP sockets in state tw.
# TYPE node_sockstat_TCP_tw gauge
node_sockstat_TCP_tw 0
# HELP node_sockstat_UDPLITE_inuse Number of UDPLITE sockets in state inuse.
# TYPE node_sockstat_UDPLITE_inuse gauge
node_sockstat_UDPLITE_inuse 0
# HELP node_sockstat_UDP_inuse Number of UDP sockets in state inuse.
# TYPE node_sockstat_UDP_inuse gauge
node_sockstat_UDP_inuse 8
# HELP node_sockstat_UDP_mem Number of UDP sockets in state mem.
# TYPE node_sockstat_UDP_mem gauge
node_sockstat_UDP_mem 3
# HELP node_sockstat_UDP_mem_bytes Number of UDP sockets in state mem_bytes.
# TYPE node_sockstat_UDP_mem_bytes gauge
node_sockstat_UDP_mem_bytes 12288
# HELP node_sockstat_sockets_used Number of sockets sockets in state used.
# TYPE node_sockstat_sockets_used gauge
node_sockstat_sockets_used 166
# HELP node_textfile_mtime_seconds Unixtime mtime of textfiles successfully read.
# TYPE node_textfile_mtime_seconds gauge
node_textfile_mtime_seconds{file="raspberrypi-metrics.prom"} 1.579207394e+09
# HELP node_textfile_scrape_error 1 if there was an error opening or reading a file, 0 otherwise
# TYPE node_textfile_scrape_error gauge
node_textfile_scrape_error 0
# HELP node_time_seconds System time in seconds since epoch (1970).
# TYPE node_time_seconds gauge
node_time_seconds 1.5792074062937045e+09
# HELP node_timex_estimated_error_seconds Estimated error in seconds.
# TYPE node_timex_estimated_error_seconds gauge
node_timex_estimated_error_seconds 0
# HELP node_timex_frequency_adjustment_ratio Local clock frequency adjustment.
# TYPE node_timex_frequency_adjustment_ratio gauge
node_timex_frequency_adjustment_ratio 0.999983786529541
# HELP node_timex_loop_time_constant Phase-locked loop time constant.
# TYPE node_timex_loop_time_constant gauge
node_timex_loop_time_constant 7
# HELP node_timex_maxerror_seconds Maximum error in seconds.
# TYPE node_timex_maxerror_seconds gauge
node_timex_maxerror_seconds 0.6355
# HELP node_timex_offset_seconds Time offset in between local system and reference clock.
# TYPE node_timex_offset_seconds gauge
node_timex_offset_seconds -3.9559e-05
# HELP node_timex_pps_calibration_total Pulse per second count of calibration intervals.
# TYPE node_timex_pps_calibration_total counter
node_timex_pps_calibration_total 0
# HELP node_timex_pps_error_total Pulse per second count of calibration errors.
# TYPE node_timex_pps_error_total counter
node_timex_pps_error_total 0
# HELP node_timex_pps_frequency_hertz Pulse per second frequency.
# TYPE node_timex_pps_frequency_hertz gauge
node_timex_pps_frequency_hertz 0
# HELP node_timex_pps_jitter_seconds Pulse per second jitter.
# TYPE node_timex_pps_jitter_seconds gauge
node_timex_pps_jitter_seconds 0
# HELP node_timex_pps_jitter_total Pulse per second count of jitter limit exceeded events.
# TYPE node_timex_pps_jitter_total counter
node_timex_pps_jitter_total 0
# HELP node_timex_pps_shift_seconds Pulse per second interval duration.
# TYPE node_timex_pps_shift_seconds gauge
node_timex_pps_shift_seconds 0
# HELP node_timex_pps_stability_exceeded_total Pulse per second count of stability limit exceeded events.
# TYPE node_timex_pps_stability_exceeded_total counter
node_timex_pps_stability_exceeded_total 0
# HELP node_timex_pps_stability_hertz Pulse per second stability, average of recent frequency changes.
# TYPE node_timex_pps_stability_hertz gauge
node_timex_pps_stability_hertz 0
# HELP node_timex_status Value of the status array bits.
# TYPE node_timex_status gauge
node_timex_status 24577
# HELP node_timex_sync_status Is clock synchronized to a reliable server (1 = yes, 0 = no).
# TYPE node_timex_sync_status gauge
node_timex_sync_status 1
# HELP node_timex_tai_offset_seconds International Atomic Time (TAI) offset.
# TYPE node_timex_tai_offset_seconds gauge
node_timex_tai_offset_seconds 0
# HELP node_timex_tick_seconds Seconds between clock ticks.
# TYPE node_timex_tick_seconds gauge
node_timex_tick_seconds 0.01
# HELP node_uname_info Labeled system information as provided by the uname system call.
# TYPE node_uname_info gauge
node_uname_info{domainname="(none)",machine="armv7l",nodename="raspberrypi",release="4.19.75-v7l+",sysname="Linux",version="#1270 SMP Tue Sep 24 18:51:41 BST 2019"} 1
# HELP node_vmstat_oom_kill /proc/vmstat information field oom_kill.
# TYPE node_vmstat_oom_kill untyped
node_vmstat_oom_kill 0
# HELP node_vmstat_pgfault /proc/vmstat information field pgfault.
# TYPE node_vmstat_pgfault untyped
node_vmstat_pgfault 2.058414e+06
# HELP node_vmstat_pgmajfault /proc/vmstat information field pgmajfault.
# TYPE node_vmstat_pgmajfault untyped
node_vmstat_pgmajfault 524
# HELP node_vmstat_pgpgin /proc/vmstat information field pgpgin.
# TYPE node_vmstat_pgpgin untyped
node_vmstat_pgpgin 125287
# HELP node_vmstat_pgpgout /proc/vmstat information field pgpgout.
# TYPE node_vmstat_pgpgout untyped
node_vmstat_pgpgout 60281
# HELP node_vmstat_pswpin /proc/vmstat information field pswpin.
# TYPE node_vmstat_pswpin untyped
node_vmstat_pswpin 0
# HELP node_vmstat_pswpout /proc/vmstat information field pswpout.
# TYPE node_vmstat_pswpout untyped
node_vmstat_pswpout 0
# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE process_cpu_seconds_total counter
process_cpu_seconds_total 133.56
# HELP process_max_fds Maximum number of open file descriptors.
# TYPE process_max_fds gauge
process_max_fds 1024
# HELP process_open_fds Number of open file descriptors.
# TYPE process_open_fds gauge
process_open_fds 8
# HELP process_resident_memory_bytes Resident memory size in bytes.
# TYPE process_resident_memory_bytes gauge
process_resident_memory_bytes 1.5446016e+07
# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
# TYPE process_start_time_seconds gauge
process_start_time_seconds 1.57920080835e+09
# HELP process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE process_virtual_memory_bytes gauge
process_virtual_memory_bytes 8.24897536e+08
# HELP process_virtual_memory_max_bytes Maximum amount of virtual memory available in bytes.
# TYPE process_virtual_memory_max_bytes gauge
process_virtual_memory_max_bytes -1
# HELP promhttp_metric_handler_requests_in_flight Current number of scrapes being served.
# TYPE promhttp_metric_handler_requests_in_flight gauge
promhttp_metric_handler_requests_in_flight 1
# HELP promhttp_metric_handler_requests_total Total number of scrapes by HTTP status code.
# TYPE promhttp_metric_handler_requests_total counter
promhttp_metric_handler_requests_total{code="200"} 1278
promhttp_metric_handler_requests_total{code="500"} 0
promhttp_metric_handler_requests_total{code="503"} 0
# HELP rpi_frequency Clock frequencies of the components in hertz.
# TYPE rpi_frequency gauge
rpi_frequency{component="arm"} 6.00117184e+08
rpi_frequency{component="core"} 2.00008304e+08
rpi_frequency{component="emmc"} 1.9999512e+08
rpi_frequency{component="h264"} 0
rpi_frequency{component="hdmi"} 0
rpi_frequency{component="isp"} 0
rpi_frequency{component="pixel"} 2.99992672e+08
rpi_frequency{component="pwm"} 0
rpi_frequency{component="uart"} 4.8001464e+07
rpi_frequency{component="v3d"} 3.12583e+07
# HELP rpi_memory Memory split of CPU and GPU in bytes.
# TYPE rpi_memory gauge
rpi_memory{component="arm"} 9.94050048e+08
rpi_memory{component="gpu"} 7.9691776e+07
# HELP rpi_temperature Temperatures of the components in degree celsius.
# TYPE rpi_temperature gauge
rpi_temperature{sensor="thermal_zone0",type="cpu-thermal"} 52.582
# HELP rpi_voltage Voltages of the components in volts.
# TYPE rpi_voltage gauge
rpi_voltage{component="core"} 0.8595
rpi_voltage{component="sdram_c"} 1.1
rpi_voltage{component="sdram_i"} 1.1
rpi_voltage{component="sdram_p"} 1.1
`}
                        </code>
                    </pre>
                </p>
            </section>
            <section>
                <h1>Типы метрик</h1>
                <ol>
                    <li className='fragment'>
                            Counter<br/>
                        <code>requests_count</code>, <code>cpu_time</code>
                    </li>
                    <li className='fragment'>
                            Gauge<br/>
                        <code>mem_bytes_available</code>, <code>disk_space_available</code>
                    </li>
                    <li className='fragment'>
                            Histogram (buckets)<br/>
                        <code>{'requests_duration{le="5ms"}'}</code>, <code>{'requests_duration{le="10ms"}'}</code>
                    </li>
                    <li className='fragment'>
                            Histogram (quantiles)<br/>
                        <code>{'requests_duration{quantile="0.99"}'}</code>, <code>{'requests_duration{quantile="0.95"}'}</code>
                    </li>
                </ol>
            </section>
            <section>
                <h1>Перцентили</h1>
            </section>
            <section>
                <h1>Сбор метрик</h1>
                <p>
                        Две модели:
                    <ul>
                        <li>Push (заталкивание)</li>
                        <li>Pull (вытягивание)</li>
                    </ul>
                </p>
            </section>
            <section>
                <h1>Интервал сбора метрик</h1>
                <p>
                        Типичный интервал сбора метрик — ~1 раз в минуту
                </p>
            </section>
            <section>
                <h1>Работа с высокочастотными метриками</h1>
            </section>
            <section>
                <h1>Хранение метрик</h1>
                <ul>
                    <li>Prometheus</li>
                    <li>Victoria Metrics</li>
                    <li>InfluxDB</li>
                    <li>Graphite</li>
                    <li>Zabbix</li>
                    <li>Nagious</li>
                    <li>Datadog</li>
                </ul>
            </section>
            <section>
                <h1>Работа с метриками</h1>
                <ul>
                    <li>
                            Пример PromQL<br />
                        <code>{'rate(request_duration_sec{app="front_api"}[5m]) / rate(request_count{app="front_api"}[5m])'}</code>
                    </li>
                    <li>
                            Пример Graphite<br />
                        <code>{'aggregate(msk.hw2345.cpu-[0-7].cpu-{user,system}, "sum")'}</code>
                    </li>
                </ul>
            </section>
            <section>
                <h1>Пример дашборда на метриках</h1>
                <h2>Grafana</h2>
                <img className='w-9/12' src='imgs/Grafana.png' />
            </section>
            <section>
                <h1>Кардинальность метрик</h1>
                <p>Что если в метку метрики добавить идентификатор запроса?</p>
                <code>{'request_duration{request_id="58FA68D4-DBE1-4C3A-9C67-0441668A7AE6"}'}</code>
                <code>{'request_duration{request_id="424E6FEF-B945-4BF1-8DF5-7EDAB3B7B00E"}'}</code>
                <code>{'request_duration{request_id="2422B48D-436F-43CC-8809-215F21AC5BE0"}'}</code>
            </section>
        </section>
        <section>
            <section>
                <h1>Логи</h1>
            </section>
            <section>
                <h1>Информация о событии</h1>
                <p>
                        Метка времени + произвольная информация
                </p>
            </section>
            <section>
                <h1>Пример</h1>
                <pre>
                    <code>
                        {`
13.66.139.0 - - [19/Dec/2020:13:57:26 +0100] "GET /index.php?option=com_phocagallery&view=category&id=1:almhuette-raith&Itemid=53 HTTP/1.1" 200 32653 "-" "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)" "-"
157.48.153.185 - - [19/Dec/2020:14:08:06 +0100] "GET /apache-log/access.log HTTP/1.1" 200 233 "-" "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36" "-"
157.48.153.185 - - [19/Dec/2020:14:08:08 +0100] "GET /favicon.ico HTTP/1.1" 404 217 "http://www.almhuette-raith.at/apache-log/access.log" "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36" "-"
216.244.66.230 - - [19/Dec/2020:14:14:26 +0100] "GET /robots.txt HTTP/1.1" 200 304 "-" "Mozilla/5.0 (compatible; DotBot/1.1; http://www.opensiteexplorer.org/dotbot, help@moz.com)" "-"
54.36.148.92 - - [19/Dec/2020:14:16:44 +0100] "GET /index.php?option=com_phocagallery&view=category&id=2%3Awinterfotos&Itemid=53 HTTP/1.1" 200 30662 "-" "Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)" "-"
92.101.35.224 - - [19/Dec/2020:14:29:21 +0100] "GET /administrator/index.php HTTP/1.1" 200 4263 "" "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322)" "-"
73.166.162.225 - - [19/Dec/2020:14:58:59 +0100] "GET /apache-log/access.log HTTP/1.1" 200 1299 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36" "-"
73.166.162.225 - - [19/Dec/2020:14:58:59 +0100] "GET /favicon.ico HTTP/1.1" 404 217 "http://www.almhuette-raith.at/apache-log/access.log" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36" "-"
54.36.148.108 - - [19/Dec/2020:15:09:30 +0100] "GET /robots.txt HTTP/1.1" 200 304 "-" "Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)" "-"
54.36.148.1 - - [19/Dec/2020:15:09:31 +0100] "GET /index.php?option=com_phocagallery&view=category&id=2%3Awinterfotos&Itemid=53 HTTP/1.1" 200 30618 "-" "Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)" "-"
162.158.203.24 - - [19/Dec/2020:15:16:50 +0100] "GET /apache-log/access.log HTTP/1.1" 200 2164 "-" "-" "-"
35.237.4.214 - - [19/Dec/2020:15:22:40 +0100] "GET /administrator/%22 HTTP/1.1" 404 226 "-" "Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)" "-"
42.236.10.125 - - [19/Dec/2020:15:23:10 +0100] "GET / HTTP/1.1" 200 10479 "http://baidu.com/" "Mozilla/5.0 (Linux; U; Android 8.1.0; zh-CN; EML-AL00 Build/HUAWEIEML-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 baidu.sogo.uc.UCBrowser/11.9.4.974 UWS/2.13.1.48 Mobile Safari/537.36 AliApp(DingTalk/4.5.11) com.alibaba.android.rimet/10487439 Channel/227200 language/zh-CN" "-"
42.236.10.125 - - [19/Dec/2020:15:23:11 +0100] "GET /modules/mod_bowslideshow/tmpl/css/bowslideshow.css HTTP/1.1" 200 1725 "http://www.almhuette-raith.at/" "Mozilla/5.0 (Linux; U; Android 8.1.0; zh-CN; EML-AL00 Build/HUAWEIEML-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 baidu.sogo.uc.UCBrowser/11.9.4.974 UWS/2.13.1.48 Mobile Safari/537.36 AliApp(DingTalk/4.5.11) com.alibaba.android.rimet/10487439 Channel/227200 language/zh-CN" "-"
42.236.10.125 - - [19/Dec/2020:15:23:11 +0100] "GET /templates/_system/css/general.css HTTP/1.1" 404 239 "http://www.almhuette-raith.at/" "Mozilla/5.0 (Linux; U; Android 8.1.0; zh-CN; EML-AL00 Build/HUAWEIEML-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 baidu.sogo.uc.UCBrowser/11.9.4.974 UWS/2.13.1.48 Mobile Safari/537.36 AliApp(DingTalk/4.5.11) com.alibaba.android.rimet/10487439 Channel/227200 language/zh-CN" "-"
42.236.10.125 - - [19/Dec/2020:15:23:11 +0100] "GET /templates/jp_hotel/css/template.css HTTP/1.1" 200 10004 "http://www.almhuette-raith.at/" "Mozilla/5.0 (Linux; U; Android 8.1.0; zh-CN; EML-AL00 Build/HUAWEIEML-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 baidu.sogo.uc.UCBrowser/11.9.4.974 UWS/2.13.1.48 Mobile Safari/537.36 AliApp(DingTalk/4.5.11) com.alibaba.android.rimet/10487439 Channel/227200 language/zh-CN" "-"
`}
                    </code>
                </pre>
            </section>
            <section>
                <h1>Структурированные логи</h1>
                <p>
                        Логи можно писать в структурированных форматах: JSON, TSV, protobuf и т.д.
                </p>
            </section>
            <section>
                <h1>Логи, как API</h1>
                <p>На логах часто строят дополнительную логику и изменение формата логов может ее поломать</p>
            </section>
            <section>
                <h1>Хранение логов</h1>
                <ul>
                    <li>В файлах на сервере</li>
                    <li>Systemd Journal</li>
                    <li>Централизованные агрегаторы</li>
                    <ul>
                        <li>ElasticSearch</li>
                        <li>Grafana Loki</li>
                        <li>Splunk</li>
                    </ul>
                </ul>
            </section>
            <section>
                <h1>ElasticSearch Kibana</h1>
                <img src='imgs/Kibana 6.0 Screenshot.png' />
            </section>
            <section>
                <h1>Сбор логов</h1>
                <ul>
                    <li>Писать напрямую в агрегатор</li>
                    <li>Писать на диск, а потом в агрегатор</li>
                    <ul>
                        <li>«Обогащение» логов</li>
                    </ul>
                </ul>
            </section>
            <section>
                <h1>Логи и потребление ресурсов</h1>
                <p>Процессинг логов может потреблять больше ресурсов, чем сама работа</p>
                <ol>
                    <li>Сериализация и запись на диск</li>
                    <li>Чтение с диска и десериализация для обогащения</li>
                    <li>Сериализация для отправки по сети</li>
                    <li>Получение по сети и десериализация для индексации</li>
                    <li>Анализ и разбиение на термы для индексации</li>
                    <li>Построение индекса</li>
                </ol>
            </section>
            <section>
                <h1>Логи во время сбоев</h1>
                <p>
                        Во время сбоев приложения имеют тенденцию писать в несколько раз больше логов (по числу записей
                        и по размеру записи), чем в обычное время
                </p>
            </section>
            <section>
                <h1>Семплирование логов</h1>
            </section>
        </section>
        <section>
            <section>
                <h1>Трассировка запросов</h1>
            </section>
            <section>
                <h1>Сквозные идентификаторы запросов</h1>
                <p>
                        Если мы назначим идентификатор запросу и будем его прокидывать через все системы (например,
                        через HTTP заголовки), участвующие в его обработке, то мы сможем получать полную информацию о
                        обработке запроса
                </p>
            </section>
            <section>
                <h1>Два проекта API</h1>
                <ol>
                    <li>OpenTracing</li>
                    <li>OpenTelemetry</li>
                </ol>
            </section>
            <section>
                <h1>Реализации бекендов</h1>
                <ol>
                    <li>Jaeger</li>
                    <li>Zipkin</li>
                    <li>ElasticSearch</li>
                </ol>
            </section>
            <section>
                <h1>Jaeger</h1>
                <img src='imgs/jaeger_screen_1.png' />
            </section>
            <section>
                <h1>Jaeger</h1>
                <img src='imgs/jaeger_screen_2.png' />
            </section>
            <section>
                <h1>Jaeger</h1>
                <img src='imgs/jaeger_screen_3.png' />
            </section>
            <section>
                <h1>Zipkin</h1>
                <img src='imgs/zipkin_screen_1.png' />
            </section>
            <section>
                <h1>Zipkin</h1>
                <img src='imgs/zipkin_screen_2.png' />
            </section>
            <section>
                <h1>Kibana (ElasticSearch)</h1>
                <img src='imgs/kibana_dt_screen_1.png' />
            </section>
        </section>
        <section>
            <h1>Спасибо!</h1>
            <p>
                    Вопросы?
            </p>
        </section>
    </RevealSlides>
}
