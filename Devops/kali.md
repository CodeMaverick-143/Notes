# Networking and Wireless Penetration Testing Commands Cheat Sheet

---

## `ifconfig` Commands:
- **Purpose:** Used to configure or display network interfaces on Unix/Linux systems.

1. **Display all network interfaces:**
   ```bash
   ifconfig
   ```

2. **Bring down the interface `wlan0`:**
   ```bash
   ifconfig wlan0 down
   ```
   - **Effect:** Disables the `wlan0` interface.

3. **Change MAC address of `wlan0` to `00:11:22:33:44:55`:**
   ```bash
   ifconfig wlan0 hw ether 00:11:22:33:44:55
   ```
   - **Effect:** Spoofs the MAC address of the interface.

4. **Bring up the interface `wlan0`:**
   ```bash
   ifconfig wlan0 up
   ```
   - **Effect:** Enables the `wlan0` interface.

---

## `iwconfig` Commands:
- **Purpose:** Displays or configures wireless network interfaces.

1. **Check the current wireless interface status:**
   ```bash
   iwconfig
   ```
   - **Effect:** Shows details such as ESSID, frequency, signal strength, and mode of the wireless interface.

---

## `airmon-ng` Commands:
- **Purpose:** Part of the Aircrack-ng suite; used to manage and enable monitor mode on wireless interfaces.

1. **Kill interfering processes:**
   ```bash
   airmon-ng check kill
   ```
   - **Effect:** Terminates processes that might interfere with wireless monitoring.

2. **Set `wlan0` to monitor mode:**
   ```bash
   ifconfig wlan0 down
   ifconfig wlan0 mode monitor
   ifconfig wlan0 up
   ```
   - **Effect:** Configures `wlan0` to monitor mode, allowing it to capture packets.

---

## `airodump-ng` Commands:
- **Purpose:** Captures wireless packets for analysis.

1. **Basic packet capture on `wlan0`:**
   ```bash
   airodump-ng wlan0
   ```

2. **Capture packets on the `a` band:**
   ```bash
   airodump-ng --band a wlan0
   ```

3. **Capture packets on all bands (`a`, `b`, `g`):**
   ```bash
   airodump-ng --band abg wlan0
   ```

4. **Target specific BSSID and channel; save output to a file:**
   ```bash
   airodump-ng --bssid 4A:AA:8B:9A:58:DD --channel 1 --write test wlan0
   ```

5. **Another example of targeted capture:**
   ```bash
   airodump-ng --bssid 9E:2B:A6:8E:00:F6 --channel 11 --write test1 wlan0
   ```

6. **Additional capture targeting a different BSSID:**
   ```bash
   airodump-ng --bssid 30:4F:75:F6:36:10 --channel 1 --write test2 wlan0
   ```

---

## `aireplay-ng` Commands:
- **Purpose:** Part of Aircrack-ng suite; used to inject packets into a network.

1. **Deauthentication attack:**
   ```bash
   aireplay-ng --deauth 100000000000000 -a 9C:2B:A6:BE:D6:A6 -c 22:F3:12:80:0E:B9 wlan0
   ```
   - **Effect:** Sends deauthentication packets to the targeted AP (`-a`) and client (`-c`).
   - **Use Case:** Disconnects a client from a network.

---

## `wireshark`:
- **Purpose:** Graphical network protocol analyzer; captures and analyzes packets.

1. **Open Wireshark:**
   - Run Wireshark from the terminal or GUI.

2. **Capture packets:**
   - Select the appropriate interface (e.g., `wlan0`) to monitor live traffic.

3. **Analyze packets:**
   - Use filters to examine specific protocols, BSSIDs, or other network details.

---

## Notes:
- **Root Privileges:** Many commands require root privileges. Use `sudo` if necessary.
- **Ethical Usage:** Ensure all actions are legal and comply with local laws and ethical guidelines.
- **Dependencies:** Install tools like Aircrack-ng and Wireshark if not already available on the system:
  ```bash
  sudo apt install aircrack-ng wireshark
  ```

---



